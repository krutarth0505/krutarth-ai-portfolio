import { Briefcase, Calendar, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const experiences = [
  {
    title: "Virtual Internship",
    company: "Infosys Springboard",
    location: "Remote",
    period: "2024",
    type: "Internship",
    description: [
      "Developed an AI-based facial skin aging detection system using deep learning techniques",
      "Implemented computer vision algorithms for image analysis and feature extraction",
      "Applied machine learning models for accurate age prediction from facial images",
      "Gained hands-on experience with Python, TensorFlow, and image processing libraries",
    ],
  },
  {
    title: "Junior Engineer",
    company: "Kiran Motors (Maruti Suzuki)",
    location: "Mumbai, India",
    period: "2022 - 2023",
    type: "Full-time",
    description: [
      "Performed automobile maintenance and diagnostic procedures",
      "Executed assembly operations ensuring quality standards",
      "Conducted quality inspection and control processes",
      "Collaborated with senior engineers on complex repair tasks",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container relative">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />
      
      <div className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Career Journey
            </span>
            <h2 className="section-title gradient-text mt-2">
              Professional Experience
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <ScrollReveal 
              key={exp.title + exp.company} 
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 150}
            >
              <div
                className={`relative pl-12 md:pl-0 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot" />

                <div className="glass-card p-6 rounded-xl animated-border hover:scale-[1.02] transition-transform duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <h3 className="font-syne text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
