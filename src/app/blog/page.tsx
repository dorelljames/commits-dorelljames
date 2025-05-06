import { Terminal, TerminalWindow } from '@/components/ui/terminal'

import { BlogPostGrid } from '@/components/BlogPost'
import { CodeLayout } from '@/components/CodeLayout'
import React from 'react'

// Example blog posts data
const blogPosts = [
  {
    id: 'first-quarter-2025',
    title: 'First Quarter of 2025',
    date: '2025-03-27T07:07:52.377Z',
    excerpt:
      "The first quarter of 2025 is almost over. I've been busy with work and other personal projects.",
    content: null,
  },
  {
    id: 'huge-backlog',
    title: 'A huge backlog',
    date: '2025-02-18T08:11:59.297Z',
    excerpt:
      'Apparently, I have a lot of things to go back to in order to catch up with everything here.',
    content: null,
  },
  {
    id: 'cebby-pwa',
    title: 'Progressive Web App for getcebby.com',
    date: '2024-11-06T01:59:23.069Z',
    excerpt: 'Exploring PWAs for a Better User Experience with Cebby!',
    content: null,
  },
  {
    id: 'calendar-updates',
    title: 'Subscribe To Calendar Updates',
    date: '2024-10-30T22:46:35.894Z',
    excerpt:
      'Added capability to subscribe to calendar updates so that you can get notified when there are new events.',
    content: null,
  },
  {
    id: 'hacktoberfest-jscebu',
    title: 'Quicky spin up hacktoberfest.jscebu.org!',
    date: '2024-10-24T02:49:20.670Z',
    excerpt:
      "Yesterday, I just couldn't help myself but to spin up a Hacktoberfest website for the JavaScript Cebu community.",
    content: null,
  },
  {
    id: 'meta-business-verification',
    title: 'Meta Business Verification',
    date: '2024-10-22T11:31:12.626Z',
    excerpt:
      'Asked a few friends in the community to help test the app. I already had a hint that the FB App might need to be verified.',
    content: null,
  },
]

export default function BlogPage() {
  return (
    <CodeLayout>
      <div className="space-y-12">
        {/* Header section */}
        <section className="space-y-4">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-green-400">&gt;</span> Blog
          </h1>

          <TerminalWindow title="~/dorelljames/blog">
            <Terminal prompt="$">echo &ldquo;My Digital Garden&rdquo;</Terminal>
            <Terminal output>
              <p>
                Welcome to my digital garden. Here I share my thoughts,
                experiences, and learnings about development, projects I&apos;m
                working on, and other tech-related topics.
              </p>
            </Terminal>

            <Terminal prompt="$">
              find . -type f -name &ldquo;*.md&rdquo; | wc -l
            </Terminal>
            <Terminal output>{blogPosts.length}</Terminal>
          </TerminalWindow>
        </section>

        {/* Blog Posts Grid */}
        <section className="space-y-6">
          <h2 className="flex items-center text-xl font-semibold text-white">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></span>
            <span>Recent Posts</span>
          </h2>

          <BlogPostGrid posts={blogPosts} />
        </section>

        {/* Subscribe section */}
        <section className="space-y-4">
          <h2 className="flex items-center text-xl font-semibold text-white">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
            <span>Stay Updated</span>
          </h2>

          <div className="rounded-md border border-gray-800 bg-gray-900 p-6">
            <div className="mx-auto max-w-md">
              <h3 className="mb-4 text-lg font-medium text-white">
                Subscribe to get notified about new posts
              </h3>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-400"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-green-700 px-4 py-2 font-medium text-white transition-colors hover:bg-green-600"
                >
                  Subscribe
                </button>

                <p className="text-xs text-gray-500">
                  I respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </CodeLayout>
  )
}
