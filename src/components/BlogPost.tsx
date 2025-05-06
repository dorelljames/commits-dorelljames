'use client'

import { FormattedDate } from './FormattedDate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

interface BlogPostProps {
  post: {
    id: string
    title: string
    date: string | Date
    excerpt?: string
    content: React.ReactNode
  }
  isExpanded?: boolean
  className?: string
}

export function BlogPostCard({
  post,
  className,
}: Omit<BlogPostProps, 'isExpanded'>) {
  return (
    <Link href={`/posts/${post.id}`} className="group block">
      <div
        className={cn(
          'overflow-hidden rounded-md border border-gray-800 bg-gray-950 transition-colors group-hover:border-gray-700',
          className,
        )}
      >
        <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-gray-400">{post.id}.md</span>
          </div>
          <span className="text-xs text-gray-400">
            <FormattedDate date={post.date} />
          </span>
        </div>

        <div className="p-4">
          <h3 className="mb-2 text-lg font-medium text-green-400">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-sm text-gray-300">{post.excerpt}</p>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-gray-800 bg-gray-900 px-4 py-2">
          <div className="flex items-center text-xs text-gray-400">
            <svg
              className="mr-1 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4857 20H19.4857C20.5903 20 21.4857 19.1046 21.4857 18V6C21.4857 4.89543 20.5903 4 19.4857 4H15.4857V6H19.4857V18H15.4857V20Z"
                fill="currentColor"
              />
              <path
                d="M10.1582 17.385L8.73801 15.9768L12.6572 12.0242L3.51428 12.0242C2.96199 12.0242 2.51428 11.5765 2.51428 11.0242C2.51429 10.4719 2.962 10.0242 3.51429 10.0242L12.6765 10.0242L8.73801 6.0774L10.1582 4.6655L16.4931 11.0182L10.1582 17.385Z"
                fill="currentColor"
              />
            </svg>
            Read post
          </div>
        </div>
      </div>
    </Link>
  )
}

export function BlogPost({
  post,
  isExpanded = true,
  className,
}: BlogPostProps) {
  if (!isExpanded) {
    return <BlogPostCard post={post} className={className} />
  }

  return (
    <article
      className={cn(
        'overflow-hidden rounded-md border border-gray-800 bg-gray-950',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-xs text-gray-400">{post.id}.md</span>
        </div>
        <span className="text-xs text-gray-400">
          <FormattedDate date={post.date} />
        </span>
      </div>

      <div className="p-6">
        <h1 className="mb-6 text-2xl font-medium text-green-400">
          {post.title}
        </h1>
        <div className="prose prose-invert prose-code:bg-gray-800 prose-code:text-green-400 max-w-none">
          {post.content}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-800 bg-gray-900 px-4 py-2">
        <Link
          href="/"
          className="flex items-center text-xs text-gray-400 hover:text-gray-300"
        >
          <svg
            className="mr-1 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z"
              fill="currentColor"
            />
            <path
              d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3235 10.0242L15.262 6.0774L13.8418 4.6655L7.5069 11.0182L13.8418 17.385Z"
              fill="currentColor"
            />
          </svg>
          Back to Home
        </Link>

        <div className="flex space-x-3">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://dorelljames.dev/posts/${post.id}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.05 4.126H5.098L17.083 19.77Z" />
            </svg>
          </a>

          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://dorelljames.dev/posts/${post.id}`)}&title=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

export function BlogPostGrid({ posts }: { posts: BlogPostProps['post'][] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
