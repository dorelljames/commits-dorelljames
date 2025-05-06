'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Project {
  id: string
  title: string
  description: string
  image?: string
  url?: string
  repo?: string
  techStack: string[]
}

interface ProjectSnippetProps {
  project: Project
  className?: string
}

export function ProjectSnippet({ project, className }: ProjectSnippetProps) {
  const [expanded, setExpanded] = useState(false)

  // Create project code with plain text
  const projectCode = `
const ${project.id.replace(/-/g, '_')} = {
  title: "${project.title}",
  description: "${project.description}",
  techStack: [${project.techStack.map((tech) => `"${tech}"`).join(', ')}],
  ${project.url ? `url: "${project.url}",` : ''}
  ${project.repo ? `repo: "${project.repo}"` : ''}
};

// Learn more by expanding this snippet
${
  expanded
    ? `
/* 
 * ${project.title}
 * ${project.description}
 * 
 * Technology stack:
 * ${project.techStack.join(', ')}
 */
`
    : ''
}
  `.trim()

  // Create syntax highlighted version of the code
  const highlightedCode = `
<span style="color: #63b3ed;">const</span> ${project.id.replace(/-/g, '_')} = {
  <span style="color: #63b3ed;">title</span>: <span style="color: #68d391;">"${project.title}"</span>,
  <span style="color: #63b3ed;">description</span>: <span style="color: #68d391;">"${project.description}"</span>,
  <span style="color: #63b3ed;">techStack</span>: [${project.techStack.map((tech) => `<span style="color: #68d391;">"${tech}"</span>`).join(', ')}],
  ${project.url ? `<span style="color: #63b3ed;">url</span>: <span style="color: #68d391;">"${project.url}"</span>,` : ''}
  ${project.repo ? `<span style="color: #63b3ed;">repo</span>: <span style="color: #68d391;">"${project.repo}"</span>` : ''}
};

<span style="color: #718096;">// Learn more by expanding this snippet</span>
${
  expanded
    ? `
<span style="color: #718096;">/* 
 * ${project.title}
 * ${project.description}
 * 
 * Technology stack:
 * ${project.techStack.join(', ')}
 */</span>
`
    : ''
}
  `.trim()

  return (
    <div
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
          <span className="ml-2 text-xs text-gray-400">{project.id}.js</span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-gray-400 hover:text-gray-300"
        >
          {expanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      <div className="overflow-x-auto p-4 font-mono text-sm">
        <pre className="whitespace-pre-wrap text-gray-300">
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
        </pre>
      </div>

      {expanded && project.image && (
        <div className="px-4 pb-4">
          <div className="overflow-hidden rounded border border-gray-800">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="h-auto w-full"
            />
          </div>
        </div>
      )}

      {expanded && (
        <div className="flex items-center justify-between border-t border-gray-800 bg-gray-900 px-4 py-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-green-800 px-3 py-1 text-xs font-medium text-green-100 hover:bg-green-700"
            >
              Visit Project
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700"
            >
              <svg
                className="mr-1 h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.006C9.52 20.768 9.512 20.058 9.508 19.189C6.726 19.862 6.139 17.777 6.139 17.777C5.685 16.55 5.026 16.241 5.026 16.241C4.132 15.602 5.096 15.615 5.096 15.615C6.084 15.68 6.612 16.657 6.612 16.657C7.5 18.229 8.97 17.825 9.54 17.565C9.629 16.892 9.885 16.44 10.164 16.177C7.954 15.914 5.62 15.052 5.62 11.232C5.62 10.12 6.01 9.216 6.636 8.504C6.539 8.253 6.195 7.211 6.746 5.916C6.746 5.916 7.565 5.646 9.495 6.862C10.295 6.638 11.15 6.526 12 6.521C12.85 6.525 13.705 6.638 14.505 6.862C16.435 5.646 17.254 5.916 17.254 5.916C17.805 7.211 17.461 8.253 17.364 8.504C17.991 9.216 18.379 10.12 18.379 11.232C18.379 15.062 16.042 15.911 13.827 16.17C14.171 16.494 14.486 17.135 14.486 18.13C14.486 19.565 14.473 20.676 14.473 21.006C14.473 21.275 14.65 21.586 15.161 21.487C19.135 20.161 22 16.414 22 12C22 6.477 17.523 2 12 2Z" />
              </svg>
              View Code
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectSnippet key={project.id} project={project} />
      ))}
    </div>
  )
}
