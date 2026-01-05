import { Brain, Cpu, Lightbulb, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const highlights = [
  {
    icon: Brain,
    title: "AI & ML Focus",
    description: "Specializing in deep learning and intelligent systems",
  },
  {
    icon: Cpu,
    title: "Engineering Foundation",
    description: "Strong mechanical engineering background",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Driven by challenging technical problems",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Passionate about cutting-edge technologies",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
            <h2 className="section-title gradient-text mt-2">
              Bridging Engineering & Intelligence
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left" delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Krutarth Gosavi</span>, an 
                aspiring AI & Machine Learning engineer based in <span className="text-primary">Mumbai, India</span>. 
                Currently pursuing my BE in Artificial Intelligence & Machine Learning at 
                MGM College of Engineering, I combine a strong foundation in mechanical 
                engineering with cutting-edge AI expertise.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey from mechanical systems to intelligent algorithms has given me 
                a unique perspective on solving complex problems. I'm passionate about 
                developing AI solutions that make a real-world impact, from computer vision 
                applications to deep learning systems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in Python, machine learning frameworks, and 
                industrial automation, I'm ready to contribute to innovative AI projects 
                that push the boundaries of what's possible.
              </p>

              <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                  {["Mumbai, India", "AIML Student", "Problem Solver"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 glass-card rounded-full text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <ScrollReveal key={item.title} direction="right" delay={150 + index * 100}>
                <div className="glass-card p-6 rounded-xl animated-border group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-syne font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
