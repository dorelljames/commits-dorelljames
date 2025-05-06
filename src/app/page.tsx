import { Terminal, TerminalWindow } from '@/components/ui/terminal'

import { CodeEditor } from '@/components/ui/code-editor'
import { CodeLayout } from '@/components/CodeLayout'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectsGrid } from '@/components/ProjectSnippet'
import React from 'react'

// Pre-defined highlighted terminal commands to avoid client-side function calls
const highlightedCdCommand =
  '<span style="color: #63b3ed;">cd</span><span style="color: #68d391;"> latest-updates</span>'
const highlightedLsCommand =
  '<span style="color: #63b3ed;">ls</span><span style="color: #f687b3;"> -la</span>'
const highlightedCatCommand =
  '<span style="color: #63b3ed;">cat</span><span style="color: #b794f4;"> 2025-03-27.md</span>'

// Example projects data
const featuredProjects = [
  {
    id: 'cebby',
    title: 'Cebby',
    description: 'A platform for tech events in Cebu',
    image: '/images/cebby-pwa.png',
    url: 'https://getcebby.com',
    repo: 'https://github.com/dorelljames/getcebby',
    techStack: ['Next.js', 'React', 'Supabase', 'TailwindCSS'],
  },
  {
    id: '12in12',
    title: '12in12.pro',
    description: 'A platform to track your 12 projects in 12 months',
    image: '/images/the-beginning.png',
    url: 'https://12in12.pro',
    repo: 'https://github.com/dorelljames/12in12',
    techStack: ['Next.js', 'React', 'TailwindCSS', 'Sanity CMS'],
  },
]

// Bio code snippet
const bioCodeSnippet = `const dorellJames = {
  title: "Full Stack Developer",
  location: "Cebu, Philippines",
  skills: [
    "JavaScript", "TypeScript", "React", 
    "Next.js", "Node.js", "Supabase",
    "TailwindCSS", "Sanity CMS"
  ],
  currentFocus: [
    "Cebby", 
    "12in12.pro",
    "OneCebby"
  ],
  contact: {
    email: "contact@dorelljames.dev",
    twitter: "@dorelljames",
    github: "dorelljames"
  }
};

// You can learn more about me and my projects below.`

// Pre-formatted code with syntax highlighting applied directly
const highlightedBioCode = `<span style="color: #63b3ed;">const</span> dorellJames = {
  <span style="color: #63b3ed;">title</span>: <span style="color: #68d391;">"Full Stack Developer"</span>,
  <span style="color: #63b3ed;">location</span>: <span style="color: #68d391;">"Cebu, Philippines"</span>,
  <span style="color: #63b3ed;">skills</span>: [
    <span style="color: #68d391;">"JavaScript"</span>, <span style="color: #68d391;">"TypeScript"</span>, <span style="color: #68d391;">"React"</span>, 
    <span style="color: #68d391;">"Next.js"</span>, <span style="color: #68d391;">"Node.js"</span>, <span style="color: #68d391;">"Supabase"</span>,
    <span style="color: #68d391;">"TailwindCSS"</span>, <span style="color: #68d391;">"Sanity CMS"</span>
  ],
  <span style="color: #63b3ed;">currentFocus</span>: [
    <span style="color: #68d391;">"Cebby"</span>, 
    <span style="color: #68d391;">"12in12.pro"</span>,
    <span style="color: #68d391;">"OneCebby"</span>
  ],
  <span style="color: #63b3ed;">contact</span>: {
    <span style="color: #63b3ed;">email</span>: <span style="color: #68d391;">"contact@dorelljames.dev"</span>,
    <span style="color: #63b3ed;">twitter</span>: <span style="color: #68d391;">"@dorelljames"</span>,
    <span style="color: #63b3ed;">github</span>: <span style="color: #68d391;">"dorelljames"</span>
  }
};

<span style="color: #718096;">// You can learn more about me and my projects below.</span>`

export default function HomePage() {
  return (
    <CodeLayout>
      <div className="space-y-12">
        {/* Hero section with terminal window */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-green-400">
              <span className="text-white">Hello, I&apos;m </span>
              Dorell James
            </h1>

            <div className="font-mono leading-relaxed text-gray-300">
              <p>
                Welcome to my digital workspace. I&apos;m a full-stack developer
                based in Cebu, Philippines.
              </p>
              <p className="mt-4">
                This is where I document my experiences with all the stuff
                I&apos;m working on.
              </p>
            </div>

            <div className="flex space-x-4">
              <Link
                href="/projects"
                className="rounded bg-green-700 px-4 py-2 text-sm font-medium text-green-100 hover:bg-green-600"
              >
                View Projects
              </Link>
              <Link
                href="/blog"
                className="rounded bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
              >
                Read Blog
              </Link>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-md border border-gray-800 bg-gray-950">
              {/* Editor header with filename */}
              <div className="flex items-center border-b border-gray-800 bg-gray-900 px-4 py-2">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">dorelljames.ts</div>
                <div className="ml-auto rounded bg-gray-800 px-2 py-1 text-xs text-gray-400">
                  typescript
                </div>
              </div>

              {/* Code content */}
              <div className="overflow-auto p-4 font-mono text-sm">
                <pre className="flex">
                  <div className="select-none pr-4 text-right text-gray-500">
                    {Array.from({
                      length: highlightedBioCode.split('\n').length,
                    }).map((_, i) => (
                      <div key={i} className="leading-6">
                        {i + 1}
                      </div>
                    ))}
                  </div>

                  <code
                    className="language-typescript leading-6 text-gray-300"
                    dangerouslySetInnerHTML={{ __html: highlightedBioCode }}
                  />
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal section */}
        <section className="space-y-4">
          <h2 className="flex items-center text-xl font-semibold text-white">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></span>
            <span>Latest Updates</span>
          </h2>

          <TerminalWindow title="~/dorelljames/updates">
            <Terminal prompt="$" highlightedCommand={highlightedCdCommand}>
              cd latest-updates
            </Terminal>
            <Terminal output>Navigating to latest updates...</Terminal>

            <Terminal
              prompt="~/dorelljames/updates $"
              highlightedCommand={highlightedLsCommand}
            >
              ls -la
            </Terminal>
            <Terminal output>
              <div className="grid gap-1.5">
                <div className="grid grid-cols-[auto,1fr] gap-4">
                  <span className="text-blue-400">2025-03-27</span>
                  <span>First Quarter of 2025</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-4">
                  <span className="text-blue-400">2025-02-18</span>
                  <span>A huge backlog</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-4">
                  <span className="text-blue-400">2024-11-06</span>
                  <span>Progressive Web App for getcebby.com</span>
                </div>
              </div>
            </Terminal>

            <Terminal
              prompt="~/dorelljames/updates $"
              highlightedCommand={highlightedCatCommand}
            >
              cat 2025-03-27.md
            </Terminal>
            <Terminal output>
              <div className="space-y-2">
                <h3 className="font-medium text-yellow-400">
                  First Quarter of 2025
                </h3>
                <p>
                  The first quarter of 2025 is almost over. I&apos;ve been busy
                  with work and other personal projects. I&apos;ve also been
                  thinking about what to do next and one thing I realized is
                  that I need to focus on a few things and stop spreading myself
                  too thin.
                </p>

                <div className="pt-2">
                  <p className="font-medium text-yellow-400">
                    What&apos;s next?
                  </p>
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>
                      I&apos;ll be speaking this coming April 19 in preparation
                      for launching AI For Devs Workshop.
                    </li>
                    <li>
                      I&apos;ll be working on Cebby more and hopefully launch it
                      in the coming months.
                    </li>
                    <li>
                      I&apos;ll be integrating OneCebby to Cebby and other
                      projects that I&apos;m working on.
                    </li>
                    <li>
                      I&apos;ll be doing a little bit of maintenance and
                      improvement in 12in12.pro
                    </li>
                  </ol>
                </div>
              </div>
            </Terminal>
          </TerminalWindow>
        </section>

        {/* Featured Projects section */}
        <section className="space-y-4">
          <h2 className="flex items-center text-xl font-semibold text-white">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></span>
            <span>Featured Projects</span>
          </h2>

          <ProjectsGrid projects={featuredProjects} />

          <div className="pt-4 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm text-gray-400 hover:text-gray-300"
            >
              <span>View all projects</span>
              <svg
                className="ml-1 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* Tech stack section */}
        <section className="space-y-4">
          <h2 className="flex items-center text-xl font-semibold text-white">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></span>
            <span>Tech Stack</span>
          </h2>

          <div className="rounded-md border border-gray-800 bg-gray-900 p-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                {
                  name: 'JavaScript',
                  color: '#f7df1e',
                  textColor: 'text-gray-900',
                },
                {
                  name: 'TypeScript',
                  color: '#3178c6',
                  textColor: 'text-white',
                },
                { name: 'React', color: '#61dafb', textColor: 'text-gray-900' },
                { name: 'Next.js', color: '#000000', textColor: 'text-white' },
                { name: 'Node.js', color: '#339933', textColor: 'text-white' },
                {
                  name: 'Supabase',
                  color: '#3fcf8e',
                  textColor: 'text-gray-900',
                },
                {
                  name: 'TailwindCSS',
                  color: '#38bdf8',
                  textColor: 'text-white',
                },
                {
                  name: 'Sanity CMS',
                  color: '#f03e2f',
                  textColor: 'text-white',
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-center rounded border border-gray-800 p-4 transition-colors hover:border-gray-700"
                  style={{ backgroundColor: tech.color }}
                >
                  <span className={`font-mono font-semibold ${tech.textColor}`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </CodeLayout>
  )
}
