'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  prompt?: string
  output?: boolean
  className?: string
  children: React.ReactNode
  highlightedCommand?: string
}

// Helper function for syntax highlighting in terminal commands
export function highlightCommand(command: string): string {
  // Highlight ls commands and options
  if (command.startsWith('ls')) {
    return command
      .replace(/^(ls)/, '<span style="color: #63b3ed;">$1</span>')
      .replace(/(-[a-zA-Z]+)/g, '<span style="color: #f687b3;">$1</span>')
  }

  // Highlight cd commands and paths
  else if (command.startsWith('cd')) {
    return command
      .replace(/^(cd)/, '<span style="color: #63b3ed;">$1</span>')
      .replace(/(\s+\S+)/g, '<span style="color: #68d391;">$1</span>')
  }

  // Highlight cat commands and filenames
  else if (command.startsWith('cat')) {
    return command
      .replace(/^(cat)/, '<span style="color: #63b3ed;">$1</span>')
      .replace(/(\s+\S+\.[\w]+)/g, '<span style="color: #b794f4;">$1</span>')
  }

  // Highlight echo commands
  else if (command.startsWith('echo')) {
    return command
      .replace(/^(echo)/, '<span style="color: #63b3ed;">$1</span>')
      .replace(/("[^"]*")/g, '<span style="color: #68d391;">$1</span>')
  }

  // Default highlighting for other commands
  return '<span style="color: #63b3ed;">' + command + '</span>'
}

export function Terminal({
  prompt = '$',
  output = false,
  className,
  children,
  highlightedCommand,
  ...props
}: TerminalProps) {
  return (
    <div
      className={cn(
        'overflow-auto rounded-md bg-black p-4 font-mono text-sm text-green-400 shadow-md',
        className,
      )}
      {...props}
    >
      {!output && (
        <div className="flex items-start">
          <span className="mr-2 text-green-500">{prompt}</span>
          {highlightedCommand ? (
            <div
              className="flex-1"
              dangerouslySetInnerHTML={{ __html: highlightedCommand }}
            />
          ) : (
            <div className="flex-1 text-green-400">{children}</div>
          )}
        </div>
      )}
      {output && <div className="ml-5">{children}</div>}
    </div>
  )
}

export function TerminalWindow({
  title = 'terminal',
  className,
  children,
  ...props
}: {
  title?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-md border border-gray-800 bg-gray-950 shadow-xl',
        className,
      )}
      {...props}
    >
      <div className="flex items-center bg-gray-900 px-4 py-2">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-xs text-gray-400">{title}</div>
      </div>
      <div className="max-h-[500px] overflow-auto p-4">{children}</div>
    </div>
  )
}
