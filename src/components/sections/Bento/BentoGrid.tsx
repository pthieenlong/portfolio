import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Cpu,
  MessageSquare,
  Zap,
  Globe,
  Github,
  Coffee,
} from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

function BentoCard({ className, children, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        'bento-card rounded-2xl glass p-6 transition-all duration-300',
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

const skills = [
  { name: 'TypeScript', level: 95 },
  { name: 'React', level: 92 },
  { name: 'Node.js', level: 88 },
  { name: 'Python', level: 90 },
];

const stats = [
  { label: 'Years Experience', value: '7+', icon: Coffee },
  { label: 'Projects Completed', value: '150+', icon: Code2 },
  { label: 'Happy Clients', value: '50+', icon: MessageSquare },
  { label: 'Lines of Code', value: '1M+', icon: Zap },
];

export function BentoGrid() {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A passionate developer and designer who loves creating digital experiences
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            {/* Main intro card - spans 2 cols */}
            <BentoCard className="md:col-span-2 lg:row-span-2">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Hello, World!</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm Claude, an AI assistant created by Anthropic. I specialize in
                    helping developers write clean, efficient code and design beautiful
                    user interfaces. With expertise in full-stack development, I can
                    assist with everything from system architecture to pixel-perfect UI
                    implementation.
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <span className="px-3 py-1 text-xs rounded-full glass">
                    Full-Stack
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full glass">
                    UI/UX
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full glass">
                    AI/ML
                  </span>
                </div>
              </div>
            </BentoCard>

            {/* Code card */}
            <BentoCard>
              <div className="h-full flex flex-col">
                <Code2 className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold mb-1">Clean Code</h4>
                <p className="text-sm text-muted-foreground flex-1">
                  Writing maintainable, scalable, and well-documented code
                </p>
                <div className="mt-4 font-mono text-xs text-muted-foreground">
                  <span className="text-primary">const</span> quality ={' '}
                  <span className="text-accent">'100%'</span>
                </div>
              </div>
            </BentoCard>

            {/* Design card */}
            <BentoCard>
              <div className="h-full flex flex-col">
                <Palette className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-semibold mb-1">UI Design</h4>
                <p className="text-sm text-muted-foreground flex-1">
                  Creating beautiful interfaces with attention to detail
                </p>
                <div className="flex gap-2 mt-4">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div className="w-4 h-4 rounded-full bg-accent" />
                  <div className="w-4 h-4 rounded-full bg-muted" />
                </div>
              </div>
            </BentoCard>

            {/* Skills progress card - spans 2 cols */}
            <BentoCard className="md:col-span-2">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                Tech Stack
              </h4>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* GitHub activity card */}
            <BentoCard>
              <div className="h-full flex flex-col">
                <Github className="w-8 h-8 mb-3" />
                <h4 className="font-semibold mb-1">Open Source</h4>
                <p className="text-sm text-muted-foreground flex-1">
                  Contributing to the community
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        'w-3 h-3 rounded-sm',
                        i % 3 === 0
                          ? 'bg-primary'
                          : i % 2 === 0
                            ? 'bg-primary/50'
                            : 'bg-muted'
                      )}
                    />
                  ))}
                </div>
              </div>
            </BentoCard>

            {/* Globe card */}
            <BentoCard>
              <div className="h-full flex flex-col items-center justify-center text-center">
                <Globe className="w-12 h-12 text-primary mb-3 animate-spin-slow" />
                <h4 className="font-semibold">Worldwide</h4>
                <p className="text-sm text-muted-foreground">
                  Available remotely
                </p>
              </div>
            </BentoCard>

            {/* Stats card - spans full width on mobile, 2 cols on larger */}
            <BentoCard className="md:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-full">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center justify-center text-center p-2"
                    >
                      <Icon className="w-5 h-5 text-primary mb-2" />
                      <span className="text-2xl font-bold gradient-text">
                        {stat.value}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </BentoCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BentoGrid;
