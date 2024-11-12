/* eslint-disable react/no-unescaped-entities */
import { StarField } from '@/components/StarField'
import { Card, CardContent } from '@/components/ui/card'
import {
  Monitor,
  Keyboard,
  Mouse,
  Terminal,
  Zap,
  Calendar,
  Focus,
  Video,
  FigmaIcon,
} from 'lucide-react'

export default function UsesPage() {
  return (
    <div className="relative isolate flex flex-auto flex-col items-center justify-center overflow-hidden dark:bg-gray-950">
      <svg
        aria-hidden="true"
        className="absolute left-1/2 top-[-10vh] -z-10 h-[120vh] w-[120vw] min-w-[60rem] -translate-x-1/2"
      >
        <defs>
          <radialGradient id="gradient" cy="0%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#gradient)" />
      </svg>
      <StarField className="sm:-mt-16" />

      <Uses />
    </div>
  )
}

function Uses() {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold">
            Software I use, gadgets I love,
          </h1>
          <h1 className="mb-6 text-4xl font-bold">
            and other things I recommend.
          </h1>

          <p className="mb-12 text-muted-foreground">
            I get asked a lot about the things I use to build software, stay
            productive, or buy to fool myself into thinking I'm being productive
            when I'm really just procrastinating. Here's a big list of all of my
            favorite stuff.
          </p>

          <p className="mb-12 text-sm text-muted-foreground">
            Last updated on October 31, 2024
          </p>

          <div className="space-y-12">
            {/* Workstation Section */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">Workstation</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Monitor className="h-12 w-12 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">
                        13&quot; MacBook Air, M1 (2020)
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        I was using an Intel MacBook Pro prior to this and the
                        difference is night and day. Can&apos;t complain about
                        how light it is to carry around and I don&apos;t need to
                        find an outlet to charge because this can last for 6
                        hours at minimum.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Keyboard className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">Nuphy Air 75</h3>
                        <p className="mt-1 text-muted-foreground">
                          Haven't gone back to traditional keyboards after
                          owning this low profile mechanical keyboard.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Mouse className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">Logitech GX 502</h3>
                        <p className="mt-1 text-muted-foreground">
                          It's light compared to other mouse I've owned and it's
                          perfect especially when I want to game on the sides.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Development Tools Section */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">Development Tools</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Terminal className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">VS Code</h3>
                        <p className="mt-1 text-muted-foreground">
                          I&apos;m a long time user of Sublime Text and
                          I&apos;ve been using VS Code for a while now and
                          it&apos;s been a great replacement.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Terminal className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">Warp</h3>
                        <p className="mt-1 text-muted-foreground">
                          I&apos;ve been using Warp for a while now and
                          it&apos;s been a great replacement for the default
                          macOS Terminal and iTerm2.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Productivity Section */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">Productivity</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Zap className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">Raycast</h3>
                        <p className="mt-1 text-muted-foreground">
                          This is my favorite application launcher. It's fast,
                          has a minimalistic design, and has a lot of plugins to
                          extend its functionality. Everything I need is just a
                          few keystrokes away.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Calendar className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">Cal.com</h3>
                        <p className="mt-1 text-muted-foreground">
                          Great tool for scheduling meetings while protecting my
                          calendar and making sure I still have lots of time for
                          deep work during the week.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Focus className="h-6 w-6 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">
                          Be Focused - Pomodoro Timer
                        </h3>
                        <p className="mt-1 text-muted-foreground">
                          When I really want to be really productive, I do quick
                          sprints with this app.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Design and Video Section */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">Design and Video</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <FigmaIcon className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">Figma</h3>
                        <p className="mt-1 text-muted-foreground">
                          I used Photoshop for a long time but Figma has become
                          my go-to design tool for UI/UX design. I particularly
                          use it for designing event banners for say Facebook
                          events.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Video className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">
                          <a
                            href="https://screenstudio.lemonsqueezy.com?aff=le2oR"
                            target="_blank"
                          >
                            Screen Studio
                          </a>
                        </h3>
                        <p className="mb-2 mt-1 text-muted-foreground">
                          Creating a smooth video for my content is a breeze
                          with Screen Studio.
                        </p>
                        <a
                          className="mt-4"
                          target="_blank"
                          href="https://screenstudio.lemonsqueezy.com?aff=le2oR"
                        >
                          Grab yours here!
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
