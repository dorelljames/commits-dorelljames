'use client'

import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const commands = [
  { cmd: 'home', path: '/', description: 'Return to home page' },
  { cmd: 'projects', path: '/projects', description: 'View my projects' },
  { cmd: 'blog', path: '/blog', description: 'Read my blog posts' },
  { cmd: 'about', path: '/about', description: 'Learn more about me' },
  { cmd: 'contact', path: '/contact', description: 'Get in touch' },
]

export function CommandNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }

      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase()

    // Add to history
    if (cleanCmd) {
      setHistory((prev) => [cleanCmd, ...prev.slice(0, 9)])
      setHistoryIndex(-1)
    }

    // Special commands
    if (cleanCmd === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    if (cleanCmd === 'help') {
      setInput('')
      return
    }

    // Navigation commands
    const command = commands.find((c) => c.cmd === cleanCmd)
    if (command) {
      router.push(command.path)
      setIsOpen(false)
      setInput('')
      return
    }

    // Unknown command
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input)
    }

    // Command history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 flex items-center gap-1 rounded-full bg-black px-3 py-2 text-sm text-gray-300 shadow-lg ring-1 ring-gray-700 hover:ring-gray-500"
      >
        <kbd className="rounded bg-gray-800 px-2 py-0.5 text-xs">⌘</kbd>
        <kbd className="rounded bg-gray-800 px-2 py-0.5 text-xs">/</kbd>
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full max-w-lg rounded-lg border border-gray-700 bg-gray-950 shadow-2xl">
        <div className="flex items-center border-b border-gray-700 px-3 py-2">
          <span className="mr-2 text-green-500">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or 'help'..."
            className="flex-1 bg-transparent py-1 text-gray-200 placeholder-gray-500 outline-none"
          />
        </div>

        <div className="max-h-[300px] overflow-y-auto p-4">
          {input === 'help' && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">
                Available commands:
              </h3>
              <div className="grid gap-2">
                {commands.map((cmd) => (
                  <div key={cmd.cmd} className="flex items-start">
                    <code className="mr-2 rounded bg-gray-800 px-1 text-xs text-green-400">
                      {cmd.cmd}
                    </code>
                    <span className="text-xs text-gray-400">
                      {cmd.description}
                    </span>
                  </div>
                ))}
                <div className="flex items-start">
                  <code className="mr-2 rounded bg-gray-800 px-1 text-xs text-green-400">
                    clear
                  </code>
                  <span className="text-xs text-gray-400">
                    Clear command history
                  </span>
                </div>
                <div className="flex items-start">
                  <code className="mr-2 rounded bg-gray-800 px-1 text-xs text-green-400">
                    help
                  </code>
                  <span className="text-xs text-gray-400">
                    Show this help menu
                  </span>
                </div>
              </div>
            </div>
          )}

          {history.length > 0 && input !== 'help' && (
            <div className="space-y-2">
              <h3 className="text-xs font-medium text-gray-400">
                Recent commands:
              </h3>
              <div className="space-y-1">
                {history.map((cmd, i) => (
                  <div key={i} className="flex text-xs">
                    <span className="mr-2 text-green-500">$</span>
                    <span className="text-gray-400">{cmd}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {input && input !== 'help' && (
            <div className="mt-2 space-y-1">
              {commands
                .filter((c) => c.cmd.includes(input.toLowerCase()))
                .map((cmd) => (
                  <Link
                    key={cmd.cmd}
                    href={cmd.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-800"
                  >
                    <code className="text-green-400">{cmd.cmd}</code>
                    <span className="text-xs text-gray-400">
                      {cmd.description}
                    </span>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
