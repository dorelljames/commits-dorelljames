import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string) {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getExcerpt(content: string, maxLength = 150) {
  if (content.length <= maxLength) return content
  return content.slice(0, maxLength) + '...'
}

// Function to convert normal text into a terminal-style typing animation text
export function typeText(text: string, delay = 50): Promise<void> {
  return new Promise((resolve) => {
    let i = 0
    const element = document.getElementById('typing-output')
    if (!element) {
      resolve()
      return
    }

    element.textContent = ''

    const typeChar = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
        setTimeout(typeChar, delay)
      } else {
        resolve()
      }
    }

    typeChar()
  })
}
