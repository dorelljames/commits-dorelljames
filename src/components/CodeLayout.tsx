'use client'

import { CommandNav } from './CommandNav'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { usePathname } from 'next/navigation'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export function CodeLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-gray-100">
      {/* Top navbar with code editor style */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Terminal-style logo */}
          <Link href="/" className="font-mono text-lg text-green-400">
            <span className="text-green-500">{'>'}</span>{' '}
            <span className="text-green-400">dorelljames</span>
            <span className="text-gray-500">.dev</span>
          </Link>

          {/* Tabs like code editor */}
          <nav className="hidden items-center space-x-1 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-t-md px-3 py-2 ${
                  pathname === link.href
                    ? 'border-l border-r border-t border-gray-700 bg-gray-950 text-green-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {link.href === '/'
                  ? 'index.js'
                  : `${link.label.toLowerCase()}.js`}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://github.com/dorelljames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.006C9.52 20.768 9.512 20.058 9.508 19.189C6.726 19.862 6.139 17.777 6.139 17.777C5.685 16.55 5.026 16.241 5.026 16.241C4.132 15.602 5.096 15.615 5.096 15.615C6.084 15.68 6.612 16.657 6.612 16.657C7.5 18.229 8.97 17.825 9.54 17.565C9.629 16.892 9.885 16.44 10.164 16.177C7.954 15.914 5.62 15.052 5.62 11.232C5.62 10.12 6.01 9.216 6.636 8.504C6.539 8.253 6.195 7.211 6.746 5.916C6.746 5.916 7.565 5.646 9.495 6.862C10.295 6.638 11.15 6.526 12 6.521C12.85 6.525 13.705 6.638 14.505 6.862C16.435 5.646 17.254 5.916 17.254 5.916C17.805 7.211 17.461 8.253 17.364 8.504C17.991 9.216 18.379 10.12 18.379 11.232C18.379 15.062 16.042 15.911 13.827 16.17C14.171 16.494 14.486 17.135 14.486 18.13C14.486 19.565 14.473 20.676 14.473 21.006C14.473 21.275 14.65 21.586 15.161 21.487C19.135 20.161 22 16.414 22 12C22 6.477 17.523 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/dorelljames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.05 4.126H5.098L17.083 19.77Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="overflow-hidden rounded-md border border-gray-800 bg-gray-900 shadow-lg">
          {/* Editor file info */}
          <div className="flex items-center border-b border-gray-700 bg-gray-800 px-4 py-2 text-xs text-gray-400">
            <div className="mr-4 flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            {pathname === '/' ? 'index.js' : `${pathname.slice(1)}.js`}
          </div>

          {/* Content area */}
          <div className="p-6">{children}</div>
        </div>
      </main>

      {/* Command nav */}
      <CommandNav />

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-4 text-xs text-gray-500">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
          <div className="mb-2 md:mb-0">
            <span className="text-green-500">{'>'}</span>
            <span className="font-mono">
              echo &ldquo;Built with Next.js, React, and TailwindCSS&rdquo;
            </span>
          </div>
          <div className="font-mono">
            © {new Date().getFullYear()} Dorell James
          </div>
        </div>
      </footer>
    </div>
  )
}
