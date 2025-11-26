import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              Implement<span className="text-primary">Co</span>.AI
            </span>
          </div>
          <Button asChild>
            <a href="mailto:contact@implementco.ai">Contact Us</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Bumpcall × Foxbith Collaboration
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Implement.{" "}
            <span className="text-primary underline decoration-4 underline-offset-8">
              Co
            </span>
            -create.
            <br />
            Transform.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            AI transformation isn&apos;t about replacing people.
            <br />
            It&apos;s about <strong>transforming together</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="mailto:contact@implementco.ai">Start Your Transformation</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#our-story">Learn Our Story</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              The Research Is Clear
            </h2>
            <p className="text-muted-foreground">
              Data from McKinsey, HBR, and leading research institutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">88%</div>
                <p className="text-sm text-muted-foreground">
                  of organizations use AI, but only <strong>6%</strong> achieve significant impact
                </p>
                <a
                  href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-xs text-muted-foreground mt-2 hover:underline block"
                >
                  McKinsey, 2025
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">87%</div>
                <p className="text-sm text-muted-foreground">
                  of organizations face skill gaps or expect them within 5 years
                </p>
                <a
                  href="https://www.mckinsey.com/mgi/our-research/a-new-future-of-work-the-race-to-deploy-ai-and-raise-skills-in-europe-and-beyond"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-xs text-muted-foreground mt-2 hover:underline block"
                >
                  McKinsey Research
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2.3×</div>
                <p className="text-sm text-muted-foreground">
                  higher success when leaders invest in workforce capabilities
                </p>
                <a
                  href="https://www.mckinsey.com/mgi/our-research/a-new-future-of-work-the-race-to-deploy-ai-and-raise-skills-in-europe-and-beyond"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-xs text-muted-foreground mt-2 hover:underline block"
                >
                  McKinsey Research
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">55%</div>
                <p className="text-sm text-muted-foreground">
                  of high performers redesign workflows with AI vs only 20% of others
                </p>
                <a
                  href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-xs text-muted-foreground mt-2 hover:underline block"
                >
                  McKinsey, 2025
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-background rounded-lg border">
            <blockquote className="text-center">
              <p className="text-lg italic text-muted-foreground">
                &quot;75% of employees need reskilling, but only 35% receive adequate training.
                Organizations invest less than 2% of payroll in development while expecting
                fundamental capability shifts.&quot;
              </p>
              <footer className="mt-3 text-sm font-medium">
                —{" "}
                <a
                  href="https://www.mckinsey.com/mgi/our-research/a-new-future-of-work-the-race-to-deploy-ai-and-raise-skills-in-europe-and-beyond"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="hover:underline"
                >
                  McKinsey Global Institute
                </a>
              </footer>
            </blockquote>
            <p className="text-sm text-muted-foreground text-center mt-4">
              This creates a vicious cycle: unprepared workforces resist changes they cannot
              understand or execute. By 2030, up to 30% of current hours worked could be
              automated—yet most organizations are leaving their people behind instead of
              bringing them along for the transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Problem with AI Transformation
            </h2>
            <p className="text-lg text-muted-foreground">
              Most organizations get it wrong.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-destructive/50 bg-destructive/5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-destructive">
                  What They Think
                </h3>
                <p className="text-muted-foreground">
                  &quot;Transformation = Add AI tools + Replace people with automation&quot;
                </p>
                <p className="mt-4 text-sm">
                  Result: Failed projects, wasted budgets, demoralized teams.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/50 bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  What We Know
                </h3>
                <p className="text-muted-foreground">
                  &quot;Transformation = Empower people + AI as a co-pilot&quot;
                </p>
                <p className="mt-4 text-sm">
                  Result: Sustainable growth, engaged teams, real ROI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The "Co" Story */}
      <section id="our-story" className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why &quot;<span className="text-primary">Co</span>&quot;?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our name tells our story.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Co</div>
                <div className="text-lg font-semibold mb-2">Corporate</div>
                <p className="text-sm text-muted-foreground">
                  Enterprise-ready solutions for real business challenges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Co</div>
                <div className="text-lg font-semibold mb-2">Collaborate</div>
                <p className="text-sm text-muted-foreground">
                  Human + AI working together, not against each other.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Co</div>
                <div className="text-lg font-semibold mb-2">Co-create</div>
                <p className="text-sm text-muted-foreground">
                  Building the future with your teams, not for them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Partnership Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Two Experts. One Mission.
            </h2>
            <p className="text-lg text-muted-foreground">
              The perfect blend of people and technology expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Badge className="mb-4">Bumpcall</Badge>
                <a
                  href="https://www.bumpcall.app/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block mb-4"
                >
                  <Image
                    src="/bumpcall.png"
                    alt="Bumpcall Logo"
                    width={160}
                    height={40}
                    className="h-10 w-auto"
                  />
                </a>
                <p className="text-muted-foreground mb-4">
                  People Tech Company
                </p>
                <p className="text-sm">
                  Specialists in human potential, organizational change, and
                  workforce transformation. We know how people adapt, grow, and
                  thrive.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Badge className="mb-4">Foxbith</Badge>
                <a
                  href="http://www.foxbith.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block mb-4"
                >
                  <Image
                    src="/foxbith.png"
                    alt="Foxbith Logo"
                    width={160}
                    height={40}
                    className="h-10 w-auto"
                  />
                </a>
                <p className="text-muted-foreground mb-4">
                  Tech Implementation Expert
                </p>
                <p className="text-sm">
                  Deep expertise in AI systems, automation, and digital
                  infrastructure. We know what technology can do—and what it
                  shouldn&apos;t.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-medium">
              Together = <span className="text-primary font-bold">ImplementCo.AI</span>
            </p>
            <p className="text-muted-foreground mt-2">
              Where humanity meets technology.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground">
              Transform both people and systems.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Assess</h3>
                <p className="text-muted-foreground mb-3">
                  Understand your organization—the people AND the tech stack.
                  Find opportunities where AI amplifies human potential.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Evaluate current workforce skills and identify transformation readiness</li>
                  <li>Map existing processes to find high-impact AI opportunities</li>
                  <li>Understand organizational culture and change capacity</li>
                  <li>Identify quick wins and long-term transformation goals</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Implement</h3>
                <p className="text-muted-foreground mb-3">
                  Deploy AI solutions while simultaneously upskilling your team.
                  Technology and training go hand-in-hand.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Roll out AI tools with hands-on training programs</li>
                  <li>Redesign workflows to maximize human-AI collaboration</li>
                  <li>Build internal champions who lead adoption from within</li>
                  <li>Measure both technical performance and team engagement</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scale</h3>
                <p className="text-muted-foreground mb-3">
                  Grow sustainably. Your transformed teams lead the expansion,
                  creating a culture of continuous innovation.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Expand successful pilots across departments and teams</li>
                  <li>Develop internal expertise to reduce external dependency</li>
                  <li>Create feedback loops for continuous improvement</li>
                  <li>Build a self-sustaining culture of AI-human collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s build a future where your people AND your company thrive.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <a href="mailto:contact@implementco.ai">Start the Conversation</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 ImplementCo.AI — A Bumpcall × Foxbith Collaboration
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:contact@implementco.ai"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
