import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Front-End Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      location: "Remote",
      description: [
        "Built and designed responsive websites for personal brands and small businesses using React and Tailwind",
        "Collaborated with clients to transform ideas into polished, user-friendly interfaces",
        "Implemented modern UI/UX patterns and optimized performance across devices"
      ]
    },
    {
      title: "Student Researcher",
      company: "Al-Azhar University",
      period: "2021 - 2023",
      location: "Cairo, Egypt",
      description: [
        "Worked on projects combining chemistry and data analysis",
        "Explored AI-assisted diagnostics using machine learning approaches",
        "Presented research findings at university symposiums"
      ]
    },
    {
      title: "Web Projects Contributor",
      company: "Open Source Community",
      period: "2022 - Present",
      location: "Remote",
      description: [
        "Contributed to front-end improvements and bug fixes in community-driven projects",
        "Collaborated with developers worldwide on GitHub repositories",
        "Focused on UI optimization and accessibility enhancements"
      ]
    }
  ];

  return (
    <section id="experience" className="section-spacing">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Experience</h2>
          <p className="text-muted-foreground text-lg">Where I've worked and learned</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 card-glow hover:scale-[1.02] transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end gap-2 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 ml-5">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
