import { Brain, Code, Cog, Database, LineChart, Sparkles } from "lucide-react";

const skills = [
  {
    name: "Artificial Intelligence",
    icon: Brain,
    level: 85,
    description: "Neural networks, computer vision, NLP",
    color: "from-primary to-cyan-400",
  },
  {
    name: "Machine Learning",
    icon: Sparkles,
    level: 80,
    description: "Supervised, unsupervised, deep learning",
    color: "from-accent to-purple-400",
  },
  {
    name: "Python",
    icon: Code,
    level: 90,
    description: "TensorFlow, PyTorch, scikit-learn",
    color: "from-secondary to-blue-400",
  },
  {
    name: "Data Analysis",
    icon: LineChart,
    level: 75,
    description: "Pandas, NumPy, data visualization",
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Automation",
    icon: Cog,
    level: 70,
    description: "Process automation, industrial systems",
    color: "from-orange-500 to-amber-400",
  },
  {
    name: "Databases",
    icon: Database,
    level: 65,
    description: "SQL, MongoDB, data management",
    color: "from-rose-500 to-pink-400",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container relative">
      {/* Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Technical Skills
          </span>
          <h2 className="section-title gradient-text mt-2">
            My Expertise
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and solving complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-6 rounded-xl animated-border group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-0.5`}>
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <skill.icon className="w-7 h-7 text-foreground" />
                  </div>
                </div>
                <span className="text-2xl font-bold font-syne text-foreground">
                  {skill.level}%
                </span>
              </div>
              
              <h3 className="font-syne font-semibold text-lg text-foreground mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {skill.description}
              </p>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
