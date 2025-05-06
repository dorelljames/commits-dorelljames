'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CodeEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeEditor({
  code,
  language = 'jsx',
  filename = 'example.jsx',
  showLineNumbers = true,
  className,
  ...props
}: CodeEditorProps) {
  const lines = code.trim().split('\n')

  // Detect if this is a JS/TS object literal for special highlighting
  const isObjectLiteral =
    (language === 'js' ||
      language === 'javascript' ||
      language === 'ts' ||
      language === 'typescript' ||
      language === 'jsx' ||
      language === 'tsx') &&
    code.trim().startsWith('const') &&
    code.includes('{') &&
    code.includes('}')

  // Apply syntax highlighting for object literal
  const highlightedCode = isObjectLiteral ? highlightObjectLiteral(code) : code

  return (
    <div
      className={cn(
        'overflow-hidden rounded-md border border-gray-800 bg-gray-950',
        className,
      )}
      {...props}
    >
      {/* Editor header with filename */}
      <div className="flex items-center border-b border-gray-800 bg-gray-900 px-4 py-2">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-xs text-gray-400">{filename}</div>
        <div className="ml-auto rounded bg-gray-800 px-2 py-1 text-xs text-gray-400">
          {language}
        </div>
      </div>

      {/* Code content */}
      <div className="overflow-auto p-4 font-mono text-sm">
        <pre className="flex">
          {showLineNumbers && (
            <div className="select-none pr-4 text-right text-gray-500">
              {lines.map((_, i) => (
                <div key={i} className="leading-6">
                  {i + 1}
                </div>
              ))}
            </div>
          )}

          {isObjectLiteral ? (
            <code
              className={`language-${language} leading-6 text-gray-300`}
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          ) : (
            <code className={`language-${language} leading-6 text-gray-300`}>
              {lines.map((line, i) => (
                <div key={i}>{line || ' '}</div>
              ))}
            </code>
          )}
        </pre>
      </div>
    </div>
  )
}

// Function to highlight object literal syntax
function highlightObjectLiteral(code: string): string {
  // Split code into lines for easier processing
  const lines = code.split('\n')
  const highlightedLines = lines.map((line) => {
    // Process each line
    return (
      line
        // Highlight property keys (before colons)
        .replace(
          /([A-Za-z0-9_$]+)(\s*:)/g,
          '<span style="color: #63b3ed;">$1</span>$2',
        )
        // Highlight string values
        .replace(/"([^"]*)"/g, '<span style="color: #68d391;">"$1"</span>')
        // Highlight numeric values
        .replace(/:\s*(\d+)/g, ': <span style="color: #f687b3;">$1</span>')
        // Highlight boolean values
        .replace(
          /:\s*(true|false)/g,
          ': <span style="color: #b794f4;">$1</span>',
        )
        // Highlight null and undefined
        .replace(
          /:\s*(null|undefined)/g,
          ': <span style="color: #fc8181;">$1</span>',
        )
        // Highlight comments
        .replace(/\/\/(.*$)/g, '<span style="color: #718096;">//$1</span>')
    )
  })

  return highlightedLines.join('\n')
}

export function CodeSnippet({
  code,
  language = 'jsx',
  className,
  showHeader = false,
  filename,
  ...props
}: {
  code: string
  language?: string
  className?: string
  showHeader?: boolean
  filename?: string
}) {
  // Detect if this is a JS/TS object literal for special highlighting
  const isObjectLiteral =
    (language === 'js' ||
      language === 'javascript' ||
      language === 'ts' ||
      language === 'typescript' ||
      language === 'jsx' ||
      language === 'tsx') &&
    code.trim().startsWith('const') &&
    code.includes('{') &&
    code.includes('}')

  // Apply syntax highlighting for object literal
  const highlightedCode = isObjectLiteral ? highlightObjectLiteral(code) : code

  return (
    <div
      className={cn(
        'overflow-hidden rounded-md bg-gray-900 shadow-lg',
        className,
      )}
      {...props}
    >
      {showHeader && (
        <div className="border-b border-gray-700 bg-gray-800 px-4 py-1 text-xs text-gray-400">
          {filename || `code.${language}`}
        </div>
      )}
      <div className="overflow-auto p-4 font-mono text-sm text-gray-300">
        <pre>
          {isObjectLiteral ? (
            <code
              className={`language-${language}`}
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          ) : (
            <code className={`language-${language}`}>{code}</code>
          )}
        </pre>
      </div>
    </div>
  )
}
