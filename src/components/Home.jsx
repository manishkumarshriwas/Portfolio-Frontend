import React, { useEffect } from "react";
import profileImage from '../images/ManishPhoto.jpg'; 


const Home = () => {
  useEffect(() => {
    // Gradient cursor
    const cursor = document.createElement("div");
    cursor.classList.add("gradient-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  const socialLinks = {
    facebook: "https://www.facebook.com/yourprofile",
    twitter: "https://twitter.com/yourprofile",
    linkedin: "https://linkedin.com/in/manish-kumar-shriwas",
    github: "https://github.com/manishkumarshriwas",
  };

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-['Inter'] overflow-x-hidden relative">
      {/* Particle Background */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-gradient-to-r from-[#6C63FF]/30 to-[#9B5DE5]/30 blur-sm animate-float"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Revolving Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="orbit-item absolute rounded-full opacity-30"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              top: "50%",
              left: "50%",
              transformOrigin: `${50 + Math.random() * 50}px ${50 + Math.random() * 50}px`,
              animationDuration: `${10 + Math.random() * 10}s`,
              background: `linear-gradient(45deg, #6C63FF, #9B5DE5)`,
            }}
          ></div>
        ))}
      </div>

      <section id="home" className="pt-28 md:pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">

          {/* Profile Image */}
          <div className="md:w-5/12 relative mb-12 md:mb-0 animate-slide-left">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] blur-lg opacity-70 animate-pulse transition-colors duration-2000 group-hover:from-[#FF6C6C] group-hover:to-[#FFD56C]"></div>
              <div className="w-full h-full rounded-full overflow-hidden relative z-10 border-4 border-[#6C63FF]/30 animate-profile-pulse transition-colors duration-2000 group-hover:border-[#FF6C6C]/50">
                <img
                 src={profileImage}
                  alt="profile"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-7/12 md:pl-12 animate-slide-right">
            <h2 className="text-xl mb-3 opacity-90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] mb-4 
             bg-gradient-to-r from-[#6C63FF] via-[#9B5DE5] to-[#FF6C6C] 
             bg-clip-text text-transparent 
             animate-fade-up transition-colors duration-1000">
              Manish Kumar Shriwas
            </h1>
            <div className="h-12 mb-6 overflow-hidden">
              <p className="text-xl md:text-2xl font-medium opacity-90 animate-typewriter">
                <span className="transition-colors duration-1000 hover:text-[#FF6C6C]">Frontend Developer</span>{" "}
                | <span className="transition-colors  duration-1000 hover:text-[#FFD56C]">MERN Stack</span>{" "}
                | Problem Solver
              </p>
            </div>
            <p className="text-white/70 mb-6 animate-fade-up" style={{ animationDelay: "0.8s" }}>
              Passionate about creating beautiful, responsive, and user-friendly web applications with modern technologies and best practices.
            </p>

            {/* Download Resume & Social Links */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
            <a
  href="https://drive.google.com/uc?export=download&id=1qgUrI-YT8ai1LeC5w4wabzl4DXQEmcBS"
  download
>
  <button className="px-6 py-3 bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] rounded-full flex items-center gap-2 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(108,99,255,0.5)] transition-all duration-300">
    <span className="material-symbols-outlined">download</span>
    Download Resume
  </button>
</a>

              <div className="flex gap-4 items-center">
                {Object.entries(socialLinks).map(([social, link]) => (
                  <a
                    href={link}
                    key={social}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transform hover:scale-110 hover:bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] transition-all duration-300"
                  >
                    <i className={`fa-brands fa-${social} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        @keyframes float {0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes animate-profile-pulse {0%{box-shadow:0 0 0 0 rgba(108,99,255,0.7)}70%{box-shadow:0 0 0 10px rgba(108,99,255,0)}100%{box-shadow:0 0 0 0 rgba(108,99,255,0)}}
        @keyframes typewriter {from{width:0}to{width:100%}}
        @keyframes blinkTextCursor {0%{border-right-color:#9b5de5}100%{border-right-color:transparent}}
        @keyframes fade-up {to{opacity:1;transform:translateY(0)}}
        @keyframes slide-left {from{opacity:0;transform:translateX(-100px)}to{opacity:1;transform:translateX(0)}}
        @keyframes slide-right {from{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}

        .animate-slide-left {animation: slide-left 1s ease-out forwards;}
        .animate-slide-right {animation: slide-right 1s ease-out forwards;}
        .animate-fade-up {opacity:0;animation: fade-up 0.5s ease forwards;}

        .particle {animation: float 6s ease-in-out infinite;}
        .animate-profile-pulse {animation: animate-profile-pulse 2s infinite;}

        /* Orbit Animation */
        .orbit-item {animation-name: orbit; animation-timing-function: linear; animation-iteration-count: infinite; animation-fill-mode: forwards;}
        @keyframes orbit {0%{transform:rotate(0deg) translateX(150px) rotate(0deg)}100%{transform:rotate(360deg) translateX(150px) rotate(-360deg)}}

        /* Gradient cursor */
        .gradient-cursor {
          position: fixed;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          background: linear-gradient(45deg, #6C63FF, #9B5DE5, #FF6C6C);
          background-size: 400% 400%;
          animation: cursorGradient 3s linear infinite;
          transform: translate(-50%, -50%);
        }
        @keyframes cursorGradient {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
      `}</style>

    </div>
  );
};

export default Home;
