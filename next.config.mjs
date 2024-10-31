import nextMDX from '@next/mdx'

import { recmaPlugins } from './mdx/recma.mjs'
import { rehypePlugins } from './mdx/rehype.mjs'
import { remarkPlugins } from './mdx/remark.mjs'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  redirects: async () => {
    return [
      {
        source: '/resume',
        destination:
          'https://dorelljames.notion.site/Dorell-James-Resume-ed14bff98f164a4d8627a703902b7d8f',
        permanent: true,
      },
    ]
  },
}

export default withMDX(nextConfig)
