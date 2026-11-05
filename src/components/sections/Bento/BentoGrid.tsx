import { motion } from "framer-motion";
import {
  Check,
  Code2,
  Copy,
  Cpu,
  ExternalLink,
  Gamepad2,
  Lightbulb,
  MessageSquare,
  Package,
} from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
}

const INSTALL_COMMAND = "npx -y @pthieenlong/second-brain-mcp";

const INTRO_TAGS = ["React", "Next.js", "NestJS", "Product thinking"];

const PRODUCT_QUESTIONS = ["Who uses it?", "Where's the data?", "What breaks?"];

const FOCUS_AREAS = [
  { name: "Frontend", detail: "React, Next.js (App Router), TailwindCSS, Zustand" },
  { name: "Backend", detail: "NestJS, Prisma, PostgreSQL, Redis" },
  { name: "Tooling", detail: "Docker, GitHub Actions, Vite, MCP" },
  { name: "Learning now", detail: "Odoo (Python), SQL indexing, product thinking" },
];

function BentoCard({ className, children }: BentoCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn("bento-card rounded-2xl glass p-6", className)}
      whileHover={{ y: -4 }}
    >
      {children}
    </motion.div>
  );
}

function InstallSnippet() {
  const { copied, failed, copy } = useCopyToClipboard();

  return (
    <div className="mt-4 flex items-center gap-2 rounded-xl bg-muted px-3 py-2 font-mono text-xs">
      <span className="text-primary select-none" aria-hidden="true">$</span>
      <code className="flex-1 truncate">{INSTALL_COMMAND}</code>
      <button
        type="button"
        onClick={() => copy(INSTALL_COMMAND)}
        className="shrink-0 p-1.5 rounded-md hover:bg-glass-hover transition-colors"
        aria-label={copied ? "Copied" : "Copy install command"}
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-primary" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : failed ? "Copy failed, select the text manually" : ""}
      </span>
    </div>
  );
}

export function BentoGrid() {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A frontend developer with a soft spot for product and business
              problems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Intro */}
            <BentoCard className="md:col-span-2 lg:row-span-2 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Nice to meet you!</h3>
              <p className="text-muted-foreground leading-relaxed">
                I’m Long, a Frontend Developer in Ho Chi Minh City and an FPT
                Polytechnic IT graduate. I started out making games on my own in
                2019, then moved to the web: admin CMSs, a multi-tenant SaaS
                dashboard, and side projects I ship for fun.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                I care about understanding the business problem first, then
                writing code that handles the null, error and edge cases.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-auto pt-6">
                {INTRO_TAGS.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full glass">
                    {tag}
                  </span>
                ))}
              </div>
            </BentoCard>

            {/* Defensive code */}
            <BentoCard className="flex flex-col">
              <Code2 className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold mb-1">Defensive Code</h4>
              <p className="text-sm text-muted-foreground flex-1">
                Typed end-to-end, with null, error and edge cases handled up
                front
              </p>
              <code className="mt-4 font-mono text-xs text-muted-foreground">
                <span className="text-accent">if</span> (!data){" "}
                <span className="text-accent">return</span> fallback;
              </code>
            </BentoCard>

            {/* Product mindset */}
            <BentoCard className="flex flex-col">
              <Lightbulb className="w-8 h-8 text-accent mb-3" />
              <h4 className="font-semibold mb-1">Product Mindset</h4>
              <p className="text-sm text-muted-foreground flex-1">
                The questions I ask before writing code
              </p>
              <ul className="flex flex-wrap gap-1.5 mt-4">
                {PRODUCT_QUESTIONS.map((q) => (
                  <li
                    key={q}
                    className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </BentoCard>

            {/* What I work with */}
            <BentoCard className="md:col-span-2">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                What I Work With
              </h4>
              <dl className="space-y-3">
                {FOCUS_AREAS.map((area) => (
                  <div
                    key={area.name}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3"
                  >
                    <dt className="text-sm font-medium sm:w-28 shrink-0">
                      {area.name}
                    </dt>
                    <dd className="text-sm text-muted-foreground">{area.detail}</dd>
                  </div>
                ))}
              </dl>
            </BentoCard>

            {/* Open source: real package, real command */}
            <BentoCard className="md:col-span-2 flex flex-col">
              <h4 className="font-semibold mb-1 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Open Source on npm
              </h4>
              <p className="text-sm text-muted-foreground">
                <a
                  href="https://github.com/pthieenlong/second-brain-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  second-brain-mcp
                </a>{" "}
                lets AI assistants save and search your notes as Markdown files.
                One line to run it:
              </p>
              <InstallSnippet />
            </BentoCard>

            {/* Side quest: the game */}
            <BentoCard className="md:col-span-2 flex flex-col">
              <h4 className="font-semibold mb-1 flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-accent" />
                Side Quest
              </h4>
              <p className="text-sm text-muted-foreground flex-1">
                Still making games for fun: a village grocery store game in the
                Mekong Delta, written in React with a unit-tested engine.
              </p>
              <a
                href="https://grandma-store-ashy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary hover:underline"
              >
                Play it in your phone browser
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </BentoCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BentoGrid;
