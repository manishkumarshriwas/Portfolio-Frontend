import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "REST API"],
    },
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "PHP"],
    },
    {
      title: "Database Management",
      skills: ["MySQL", "MongoDB", "Firebase"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vercel"],
    },
  ];

  const targetPercentages = skillCategories.map(category =>
    category.skills.map((_, idx) => 80 - idx * 5)
  );

  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      // Animate bars when section is visible
      controls.start(i => ({
        width: `${targetPercentages[i.categoryIndex][i.skillIndex]}%`,
        transition: { duration: 1.2, ease: "easeOut" },
      }));
    } else {
      // Reset bars when section is not visible
      controls.start({ width: 0 });
    }
  }, [inView, controls]);

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-['Inter'] overflow-x-hidden relative">
      <section id="skills" className="py-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl top-1/4 -left-48 animate-pulse-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] inline-block bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] bg-clip-text text-transparent mb-4 animate-title">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] mx-auto rounded-full animate-line"></div>
          </div>

          {/* About Text */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-white/80 leading-relaxed">
              I am a Computer Science and Engineering student passionate about building
              innovative, scalable, and user-friendly applications. With expertise in full-stack
              development, database management, and cloud deployment, I enjoy solving complex
              problems and learning new technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIdx) => (
              <div
                key={catIdx}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-[#9B5DE5]/30 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6C63FF]/10 transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${0.1 * catIdx}s` }}
              >
                <div className="flex items-center mb-6">
                  <span className="material-symbols-outlined text-3xl mr-3 text-[#9B5DE5] group-hover:animate-bounce transition-all">
                    code
                  </span>
                  <h3 className="text-xl font-['Poppins'] font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-white/80">{skill}</span>
                        <span className="text-[#9B5DE5]">{targetPercentages[catIdx][skillIdx]}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          custom={{ categoryIndex: catIdx, skillIndex: skillIdx }}
                          className="h-full bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] rounded-full"
                          initial={{ width: 0 }}
                          animate={controls}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
