import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || `Server responded with ${response.status}`);
      }

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      if (error.message.includes("Failed to fetch")) {
        setStatus("Cannot connect to server. Make sure backend is running.");
      } else {
        setStatus(error.message || "Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] inline-block bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] mx-auto rounded-full mb-6"></div>
          <p className="text-white/70 max-w-xl mx-auto">
            Have a project in mind or want to work together? Feel free to reach out using the form below or connect with me through social media.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Contact Info */}
            <div className="md:w-2/5 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6C63FF]/20 to-[#9B5DE5]/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">email</span>
                </div>
                <div>
                  <h3 className="text-lg text-blue-600 font-medium mb-1">Email</h3>
                  <p className="text-white/70">mkshriwas2782003@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6C63FF]/20 to-[#9B5DE5]/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="text-lg text-blue-600 font-medium mb-1">Location</h3>
                  <p className="text-white/70">Bilaspur, Chhattisgarh(IN)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6C63FF]/20 to-[#9B5DE5]/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">smartphone</span>
                </div>
                <div>
                  <h3 className="text-lg text-blue-600 font-medium mb-1">Phone</h3>
                  <p className="text-white/70">+91 8210022187</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:w-3/5">
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 text-white focus:border-[#9B5DE5] py-3 focus:outline-none transition-all peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-1 text-white/70 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-[#9B5DE5]"
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 text-white focus:border-[#9B5DE5] py-3 focus:outline-none transition-all peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-1 text-white/70 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-[#9B5DE5]"
                    >
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="mb-6 relative">
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 text-white focus:border-[#9B5DE5] py-3 focus:outline-none transition-all peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-0 -top-1 text-white/70 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-[#9B5DE5]"
                  >
                    Subject
                  </label>
                </div>

                <div className="mb-8 relative">
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 text-white focus:border-[#9B5DE5] py-3 focus:outline-none transition-all peer"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-1 text-white/70 text-white text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm peer-focus:text-[#9B5DE5]"
                  >
                    Your Message
                  </label>
                </div>

                {status && <p className="mb-4 text-center text-white">{status}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] rounded-full transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6C63FF]/20 transition-all duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
