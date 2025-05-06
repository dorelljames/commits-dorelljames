import { Terminal, TerminalWindow } from '@/components/ui/terminal'

import { CodeLayout } from '@/components/CodeLayout'
import { CodeSnippet } from '@/components/ui/code-editor'
import React from 'react'

const skillsCode = `
// Technical Skills
const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "CSS/SASS",
    "JavaScript",
  ],
  backend: [
    "Node.js",
    "Express",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "Sanity CMS",
  ],
  tools: [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Vercel",
    "Netlify",
  ],
};
`.trim()

const experienceCode = `
// Professional Experience
const experience = [
  {
    role: "Full Stack Developer",
    company: "Company XYZ",
    period: "2020 - Present",
    achievements: [
      "Led the development of multiple web applications",
      "Implemented CI/CD pipelines",
      "Mentored junior developers",
      "Contributed to open source projects",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Company ABC",
    period: "2017 - 2020",
    achievements: [
      "Developed responsive user interfaces",
      "Migrated legacy code to modern frameworks",
      "Reduced load times by 40%",
      "Implemented analytics tracking",
    ],
  },
];
`.trim()

export default function AboutPage() {
  return (
    <CodeLayout>
      <div className="space-y-12">
        {/* Bio section */}
        <section className="space-y-4">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-green-400">&gt;</span> About Me
          </h1>

          <TerminalWindow title="~/dorelljames/about">
            <Terminal prompt="$">cat bio.txt</Terminal>
            <Terminal output>
              <div className="space-y-4">
                <p>
                  Hi there! I&apos;m Dorell James, a full-stack developer based
                  in Cebu, Philippines with a passion for building web
                  applications and contributing to open source software.
                </p>

                <p>
                  I enjoy working with modern JavaScript frameworks and have
                  experience in developing complex applications from concept to
                  deployment. When I&apos;m not coding, I&apos;m either
                  exploring new technologies, contributing to tech communities,
                  or documenting my experiences here.
                </p>

                <p>
                  In my journey as a developer, I&apos;ve created several
                  projects like <span className="text-green-400">Cebby</span>{' '}
                  and <span className="text-green-400">12in12.pro</span> that
                  aim to solve specific problems and provide value to users. I
                  believe in continuous learning and strive to improve my skills
                  every day.
                </p>
              </div>
            </Terminal>
          </TerminalWindow>
        </section>

        {/* Skills section */}
        <section className="space-y-4">
          <h2 className="flex items-center text-xl font-semibold text-white">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></span>
            <span>Technical Skills</span>
          </h2>

          <CodeSnippet
            code={skillsCode}
            language="javascript"
            showHeader={true}
            filename="skills.js"
          />
        </section>

        {/* Experience section */}
        <section className="space-y-4">
          <h2 className="flex items-center text-xl font-semibold text-white">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></span>
            <span>Professional Experience</span>
          </h2>

          <CodeSnippet
            code={experienceCode}
            language="javascript"
            showHeader={true}
            filename="experience.js"
          />
        </section>

        {/* Community and Open Source */}
        <section className="space-y-4">
          <h2 className="flex items-center text-xl font-semibold text-white">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></span>
            <span>Community Involvement</span>
          </h2>

          <TerminalWindow title="~/dorelljames/community">
            <Terminal prompt="$">ls -l</Terminal>
            <Terminal output>
              <div className="grid gap-1.5">
                <div className="grid grid-cols-[1fr,auto] gap-4">
                  <span>JavaScript Cebu</span>
                  <span className="text-blue-400">Community Organizer</span>
                </div>
                <div className="grid grid-cols-[1fr,auto] gap-4">
                  <span>Hacktoberfest Cebu</span>
                  <span className="text-blue-400">Contributor & Organizer</span>
                </div>
                <div className="grid grid-cols-[1fr,auto] gap-4">
                  <span>Open Source Projects</span>
                  <span className="text-blue-400">Contributor</span>
                </div>
              </div>
            </Terminal>

            <Terminal prompt="$">cat mission.txt</Terminal>
            <Terminal output>
              <p>
                I believe in the power of community and collaborative learning.
                Through organizing events, workshops, and contributing to open
                source, I aim to help foster a vibrant tech ecosystem in Cebu
                and beyond.
              </p>
            </Terminal>
          </TerminalWindow>
        </section>
      </div>
    </CodeLayout>
  )
}
