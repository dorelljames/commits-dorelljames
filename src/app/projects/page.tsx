import { Terminal, TerminalWindow } from '@/components/ui/terminal'

import { CodeLayout } from '@/components/CodeLayout'
import { ProjectsGrid } from '@/components/ProjectSnippet'
import React from 'react'

// Projects data
const projects = [
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
  {
    id: 'onecebby',
    title: 'OneCebby',
    description: 'Simple auth service - an IDP and SSO provider',
    image: '/images/the-beginning.png',
    url: 'https://sso.gocebby.com/demo-app',
    techStack: ['Next.js', 'React', 'NextAuth.js', 'Prisma', 'PostgreSQL'],
  },
  {
    id: 'events-aggregator',
    title: 'Tech Events Aggregator',
    description: 'Aggregation service for tech events',
    image: '/images/events-card.png',
    url: 'https://events.dorelljames.dev',
    repo: 'https://github.com/dorelljames/event-ni',
    techStack: ['Next.js', 'React', 'Supabase', 'TailwindCSS', 'Facebook API'],
  },
  {
    id: 'hacktoberfest',
    title: 'Hacktoberfest JS Cebu',
    description: 'Hacktoberfest website for the JavaScript Cebu community',
    url: 'https://hacktoberfest.jscebu.org',
    repo: 'https://github.com/javascriptcebu/hacktoberfest.jscebu.org',
    techStack: ['Next.js', 'React', 'TailwindCSS'],
  },
  {
    id: 'ai-workshop',
    title: 'AI For Devs Workshop',
    description: 'Workshop materials for AI development',
    url: 'https://ai.jscebu.org',
    techStack: ['Next.js', 'React', 'TailwindCSS', 'OpenAI'],
  },
]

export default function ProjectsPage() {
  return (
    <CodeLayout>
      <div className="space-y-12">
        {/* Header section */}
        <section className="space-y-4">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-green-400">&gt;</span> Projects
          </h1>

          <TerminalWindow title="~/dorelljames/projects">
            <Terminal prompt="$">
              echo &ldquo;My Personal and Open Source Projects&rdquo;
            </Terminal>
            <Terminal output>
              <p>
                Here are some of the projects I&apos;ve built or contributed to.
                Each one represents a solution to a problem I&apos;ve
                encountered or an idea I wanted to bring to life. Feel free to
                explore the code or visit the live sites.
              </p>
            </Terminal>

            <Terminal prompt="$">
              find . -type f -name &ldquo;*.project&rdquo; | wc -l
            </Terminal>
            <Terminal output>{projects.length}</Terminal>
          </TerminalWindow>
        </section>

        {/* Projects Grid */}
        <section className="space-y-6">
          <h2 className="flex items-center text-xl font-semibold text-white">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></span>
            <span>All Projects</span>
          </h2>

          <ProjectsGrid projects={projects} />
        </section>

        {/* Future Projects */}
        <section className="space-y-4">
          <h2 className="flex items-center text-xl font-semibold text-white">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-yellow-500"></span>
            <span>Future Projects</span>
          </h2>

          <TerminalWindow title="~/dorelljames/future-projects">
            <Terminal prompt="$">cat TODO.md</Terminal>
            <Terminal output>
              <div className="space-y-2">
                <p className="font-medium text-yellow-400">
                  Future Project Ideas:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Developer productivity toolkit with AI integration</li>
                  <li>Community mentorship platform for tech professionals</li>
                  <li>Improved version of Cebby with more features</li>
                  <li>Open source contributions to popular frameworks</li>
                </ul>
              </div>
            </Terminal>

            <Terminal prompt="$">
              echo &ldquo;Want to collaborate?&rdquo;
            </Terminal>
            <Terminal output>
              <p>
                If you&apos;re interested in collaborating on any of these
                projects or have ideas of your own, feel free to reach out to me
                via{' '}
                <a
                  href="mailto:contact@dorelljames.dev"
                  className="text-blue-400 hover:underline"
                >
                  email
                </a>{' '}
                or{' '}
                <a
                  href="https://twitter.com/dorelljames"
                  className="text-blue-400 hover:underline"
                >
                  Twitter
                </a>
                .
              </p>
            </Terminal>
          </TerminalWindow>
        </section>
      </div>
    </CodeLayout>
  )
}
