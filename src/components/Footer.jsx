import React from "react";

function Footer() {
  const socialLinks = {
    facebook: "https://www.facebook.com/yourprofile",
    twitter: "https://twitter.com/yourprofile",
    linkedin: "https://linkedin.com/in/manish-kumar-shriwas",
    github: "https://github.com/manishkumarshriwas",
  };

  return (
    <footer className="py-10 bg-[#0D0D0D] border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-['Poppins'] font-bold">
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] bg-clip-text text-transparent">
                Manish Kumar Shriwas
              </span>
              <span className="ml-2 text-white/70 text-base">/ Developer</span>
            </div>
            <p className="text-white/50 mt-2">Creating elegant solutions for complex problems</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              {Object.entries(socialLinks).map(([social, link]) => (
                <a
                  key={social}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#9B5DE5] transition-all duration-300"
                >
                  <i className={`fa-brands fa-${social} text-lg`}></i>
                </a>
              ))}
            </div>
            <p className="text-white/50 text-sm">© 2023 Manish Kumar Shriwas. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
