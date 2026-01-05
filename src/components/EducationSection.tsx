import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Artificial Intelligence & Machine Learning",
    institution: "MGM College of Engineering",
    location: "Navi Mumbai",
    period: "2023 - Present",
    status: "Pursuing",
    highlights: ["Deep Learning", "Computer Vision", "NLP", "Data Science"],
  },
  {
    degree: "Diploma",
    field: "Mechanical Engineering",
    institution: "K.J. Somaiya Polytechnic",
    location: "Mumbai",
    period: "2019 - 2022",
    status: "Completed",
    highlights: ["Industrial Automation", "CAD/CAM", "Manufacturing Processes"],
  },
  {
    degree: "SSC",
    field: "Secondary Education",
    institution: "I.E.S Ganesh Nagar Vidyalaya",
    location: "Mumbai",
    period: "2019",
    status: "Completed",
    highlights: ["Science", "Mathematics"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-container relative">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Academic Background
          </span>
          <h2 className="section-title gradient-text mt-2">
            Education
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.degree + edu.institution}
              className="glass-card p-6 md:p-8 rounded-xl animated-border hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent p-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === "Pursuing"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {edu.status}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>

                  <h3 className="font-syne text-xl md:text-2xl font-bold text-foreground mb-1">
                    {edu.degree} in {edu.field}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-primary font-medium">
                      {edu.institution}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full glass-card text-sm text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
