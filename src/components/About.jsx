import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Floating gradient blobs */}
      <div className="absolute w-64 h-64 bg-[#6C63FF]/20 rounded-full blur-3xl -top-32 -left-32 animate-blob"></div>
      <div className="absolute w-64 h-64 bg-[#9B5DE5]/20 rounded-full blur-3xl -bottom-32 -right-32 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold font-['Poppins'] inline-block 
                       bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] bg-clip-text text-transparent 
                       mb-4 animate-slide-down"
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] mx-auto rounded-full animate-line"></div>
        </div>

        {/* Image + Text */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-5/12 relative animate-slide-left">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#6C63FF]/20 to-[#9B5DE5]/20 blur-lg rounded-lg transition-all duration-700"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="developer coding"
              className="w-full h-auto rounded-lg relative z-10 hover:shadow-lg hover:shadow-[#6C63FF]/30 transform hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Text */}
          <div className="md:w-7/12 animate-slide-right space-y-4">
            <h3 className="text-2xl font-['Poppins'] text-blue-600 font-semibold mb-4 animate-fade-up">
              Passionate Web Developer
            </h3>
            <p
              className="text-white/70 mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              I'm a frontend developer with expertise in creating responsive and dynamic web
              applications. With a strong foundation in the MERN stack, I combine technical skills
              with creative problem-solving to build intuitive user experiences.
            </p>
            <p
              className="text-white/70 mb-8 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              My journey in web development started 5 years ago, and I've been passionate about
              creating clean, efficient code ever since. I believe in continuous learning and
              staying updated with the latest technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "5+", label: "Projects Completed" },
                { number: "2", label: "Upcoming Projects" },
                ,
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/5 rounded-lg hover:bg-gradient-to-b hover:from-[#6C63FF]/20 hover:to-transparent transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div
                    className="text-3xl font-bold font-['Poppins'] bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] bg-clip-text text-transparent mb-2 animate-count"
                  >
                    {item.number}
                  </div>
                  <div className="text-sm text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-left { animation: slide-left 1s ease-out forwards; }
        .animate-slide-right { animation: slide-right 1s ease-out forwards; }
        .animate-slide-down { animation: slide-down 1s ease-out forwards; }

        @keyframes fade-up {
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { opacity: 0; animation: fade-up 0.6s ease forwards; }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        .animate-blob { animation: blob 7s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }

        @keyframes count-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-count { animation: count-up 1s ease forwards; }
      `}</style>
    </section>
  );
};

export default About;
