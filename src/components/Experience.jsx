import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const TimelineItem = ({ experience, index }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start(index % 2 === 0 ? "hiddenLeft" : "hiddenRight");
    }
  }, [inView, controls, index]);

  const variants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", stiffness: 80 } },
  };

  return (
    <motion.div
      ref={ref}
      initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
      animate={controls}
      variants={variants}
      className={`relative mb-12 ${
        index % 2 === 0
          ? "md:ml-auto md:pl-16 md:pr-0 md:text-left"
          : "md:mr-auto md:pr-16 md:pl-0 md:text-right"
      } md:w-1/2 pl-12`}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 w-6 h-6 rounded-full border-4 border-[#0D0D0D] bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] z-10"></div>
      <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#9B5DE5]/30 transform hover:-translate-y-1 transition-all duration-300">
        <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#6C63FF]/20 to-[#9B5DE5]/20 text-white/90 text-sm mb-3">
          {experience.year}
        </span>
        <h3 className="text-xl font-['Poppins'] font-semibold mb-1">{experience.role}</h3>
        <h4 className="text-[#9B5DE5] mb-3">{experience.company}</h4>
        <p className="text-white/70">{experience.description}</p>

        {experience.link && (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 mr-2 px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-[#6C63FF]/30 to-[#9B5DE5]/30 text-[#9B5DE5] hover:scale-105 transition-transform duration-200"
          >
            View Certificate
          </a>
        )}
        {experience.appreciation && (
          <a
            href={experience.appreciation}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-[#6C63FF]/30 to-[#9B5DE5]/30 text-[#9B5DE5] hover:scale-105 transition-transform duration-200"
          >
            Recommendation Letter
          </a>
        )}

        <span className="inline-block mt-2 text-sm px-2 py-1 rounded-full bg-gradient-to-r from-[#6C63FF]/20 to-[#9B5DE5]/20 text-[#9B5DE5]">
          {experience.type}
        </span>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      year: "2021 – 2025",
      role: "Bachelor of Technology in Computer Science",
      company: "Shri Shankaracharya Technical Campus",
      description:
        "Studied core computer science subjects, completed multiple projects in web development and AI, and participated in college technical events.",
      type: "College",
    },
    {
      year: "2022",
      role: "Technical Team",
      company: "Acetrix College Club / Samvid",
      description:
        "Provided technical insights and supported interactive event experiences, assisting in managing event technology.",
      type: "Work",
    },
    {
      year: "2018 – 2021",
      role: "Higher Secondary Education",
      company: "Kendriya Vidyalaya Sangathan",
      description:
        "Completed Higher Secondary Certificate with specialization in Computer Science (PCM) and actively participated in school events and competitions.",
      type: "School",
    },
    {
      year: "2023",
      role: "Virtual Internship & Training",
      company: "Remark Skill Education",
      description:
        "Completed 3 months virtual internship, gained hands-on experience in web development, project management, and software practices.",
      type: "Certificate",
      link: "https://drive.google.com/file/d/1dBHC-1u4pBrDl6oYgiunyimqXFAR67nm/view?usp=drivesdk",
      appreciation:
        "https://drive.google.com/file/d/1d2feTeM0aaoWVFOMp7d5l0Y6_HU_vuoV/view?usp=drivesdk",
    },
    {
      year: "2023",
      role: "Google Virtual Developer Android Certification",
      company: "Google",
      description:
        "Completed Google Android Developer Virtual Training, learned app development using Android Studio, Kotlin, and Firebase.",
      type: "Certificate",
      link: "https://drive.google.com/file/d/1ZP6v9wt72ff_VK_bJ40Naayce9bVpjqM/view?usp=drivesdk",
    },
  ];

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-['Inter'] overflow-x-hidden relative">
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] inline-block bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] bg-clip-text text-transparent mb-4">
              My Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#6C63FF] to-[#9B5DE5] rounded-full"></div>

            {experiences.map((exp, idx) => (
              <TimelineItem key={idx} experience={exp} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
