import { mdxAnnotations } from 'mdx-annotations'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { remarkRehypeWrap } from 'remark-rehype-wrap'
import shiki from 'shiki'
import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'

let highlighter

function rehypeShiki() {
  return async (tree) => {
    highlighter =
      highlighter ??
      (await shiki.getHighlighter({
        theme: 'css-variables',
        langs: [
          'json',
          'javascript',
          'typescript',
          'jsx',
          'tsx',
          'html',
          'css',
          'bash',
          'markdown',
          'yaml',
          'php',
          'python',
          'ruby',
          'go',
          'rust',
          'java',
          'c',
          'cpp',
          'csharp',
        ],
      }))

    visit(tree, 'element', (node, _nodeIndex, parentNode) => {
      if (node.tagName === 'code' && parentNode.tagName === 'pre') {
        let language = node.properties.className?.[0]?.replace(/^language-/, '')

        if (!language) {
          return
        }

        // Apply special handling for JSON and JS/TS object literals
        let options = {}
        if (
          language === 'json' ||
          language === 'javascript' ||
          language === 'typescript' ||
          language === 'js' ||
          language === 'ts' ||
          language === 'jsx' ||
          language === 'tsx'
        ) {
          // Customize the rendering for JSON and object literal syntax
          options = {
            elements: {
              pre: ({ children }) => children,
              code: ({ children }) => children,
              line: ({ children }) => `<span>${children}</span>`,
              token: ({ children, token }) => {
                let types = []

                // Handle property names (object keys)
                if (
                  token.type.includes('property') ||
                  token.type.includes('propertyName') ||
                  token.type.includes('property.declaration') ||
                  token.type.includes('member')
                ) {
                  types.push('property')
                }

                // Handle values by type
                if (token.type.includes('number')) {
                  types.push('number')
                } else if (
                  token.type.includes('string') ||
                  token.type.includes('quoted')
                ) {
                  types.push('string')
                } else if (token.type.includes('boolean')) {
                  types.push('boolean')
                } else if (
                  token.type.includes('null') ||
                  token.type.includes('undefined')
                ) {
                  types.push('null')
                }

                if (types.length > 0) {
                  return `<span class="${types.join(' ')}">${children}</span>`
                }

                return children
              },
            },
          }
        } else {
          // Default rendering for other languages
          options = {
            elements: {
              pre: ({ children }) => children,
              code: ({ children }) => children,
              line: ({ children }) => `<span>${children}</span>`,
            },
          }
        }

        let tokens = highlighter.codeToThemedTokens(
          node.children[0].value,
          language,
        )

        node.children = []
        node.properties.highlightedCode = shiki.renderToHtml(tokens, options)
      }
    })
  }
}

export const rehypePlugins = [
  mdxAnnotations.rehype,
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: 'wrap', test: ['h2'] }],
  rehypeShiki,
  [
    remarkRehypeWrap,
    {
      node: { type: 'element', tagName: 'article' },
      start: 'element[tagName=hr]',
      transform: (article) => {
        article.children.splice(0, 1)
        let heading = article.children.find((n) => n.tagName === 'h2')
        article.properties = { ...heading.properties, title: toString(heading) }
        heading.properties = {}
        return article
      },
    },
  ],
]
