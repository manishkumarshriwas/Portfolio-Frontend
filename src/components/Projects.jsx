import React, { useState } from "react";
import { motion } from "framer-motion";

import FarmEasyJpg from "../images/farmeasy.jpg";
import UniversityWebsiteImg from "../images/university-website.png";
import ExpenseTrackerImg from "../images/expense-tracker.png";
import AIMeetingImg from "../images/ai-meeting.png";
import EventManagingImg from "../images/event-managing.png";
import NewsWebsiteImg from "../images/news-website.png";
import StudentPortalImg from "../images/studentportal.png";


function Projects() {
  const categories = ["All", "Full Stack", "Frontend", "AI/ML", "Backend"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    { title: "FarmEasy", category: "AI/ML", image: FarmEasyJpg, techs: ["Python", "Flask", "TensorFlow"], liveLink: "https://farmeasy-demo.com", codeLink: "https://github.com/manishkumarshriwas/farmeasy", color: "yellow" },
    { title: "University Website", category: "Frontend", image: UniversityWebsiteImg, techs: ["HTML", "CSS", "PHP", "MySQL"], liveLink: "https://manishkumarshriwas.github.io/University-Website/", codeLink: "https://github.com/manishkumarshriwas/University-Website", color: "blue" },
    { title: "AI Meeting Summarizer", category: "Full Stack", image: AIMeetingImg, techs: ["ReactJs","TailwindCSS","Node.js", "Express"], liveLink: "https://ai-meeting-summarizer-frontend-d3ibj807b.vercel.app", codeLink: "https://github.com/manishkumarshriwas/AI-Meeting-Summarizer-Frontend", color: "blue" },
    { title: "Expense Tracker", category: "Full Stack", image: ExpenseTrackerImg, techs: ["ReactJS", "Node.js", "MongoDB"], liveLink: "https://expense-tracker-demo.com", codeLink: "https://github.com/username/expense-tracker", color: "green" },
    { title: "News Website", category: "Full Stack", image: NewsWebsiteImg, techs: ["WordPress"], liveLink: "https://pinkvilleblog.wordpress.com/", color: "green" },
    { title: "Event Managing", category: "Frontend", image: EventManagingImg, techs: ["HTML","CSS","Reactjs","Javascript"], liveLink: "https://event-managing-psi.vercel.app/", codeLink: "https://github.com/manishkumarshriwas/EventManaging", color: "white" },
    { title: "University Student Portal", category: "Backend", image : StudentPortalImg, techs: ["Node.js", "Express", "MongoDB"], liveLink: "https://studentportal-demo.com", codeLink: "https://github.com/username/student-portal", color: "blue" },
  ];

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] inline-block bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] bg-clip-text text-transparent mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] mx-auto rounded-full mb-8"></div>

          <div className="flex flex-wrap text-white justify-center gap-2 md:gap-4 mb-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9B5DE5]/50 ${
                  selectedCategory === category ? "bg-white/10 border-[#9B5DE5]" : "hover:border-[#9B5DE5] hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-[#9B5DE5]/50 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF]/80 to-[#9B5DE5]/80 opacity-0 group-hover:opacity-70 transition-all duration-300 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-300">
                  <span className={`text-xs inline-block px-3 py-1 rounded-full mb-3 font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5]`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-['Poppins'] font-semibold mb-3 bg-clip-text text-transparent" style={{ color: project.color }}>
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    {project.techs.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm" style={{ transitionDelay: `${i * 50}ms` }}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex gap-2">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                  </a>
                  {project.codeLink && (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <span className="material-symbols-outlined text-sm">code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
