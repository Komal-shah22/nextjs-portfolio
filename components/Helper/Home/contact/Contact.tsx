import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link"

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/xrbpblzk", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset(); // Form fields reset
    }
  };

  return (
    <div id='contact' className="min-h-screen bg-black flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side - Social Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="contact-bg text-5xl font-bold text-[#28cdeb] mb-6 text-center">Let's Connect</h2>

          <div className="flex space-x-4 mb-6">
            <Link href="https://github.com/Komal-shah22" target="_blank" rel="noopener noreferrer">
              <Image src="/images/github.png" alt="GitHub" width={64} height={72} />
            </Link>
            <Link href="https://www.linkedin.com/in/komal-shah-0b162a296/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedien.png" alt="LinkedIn" width={56} height={56} />
            </Link>
            <Link href="https://www.instagram.com/mirrordoll3?igsh=MWZ3bXB5NGpqOHRyeg==" target="_blank" rel="noopener noreferrer">
              <Image src="/images/instagram.png" alt="Instagram" width={56} height={56} />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100091058255071" target="_blank" rel="noopener noreferrer">
              <Image src="/images/facebook.png" alt="Facebook" width={80} height={56} />
            </Link>
          </div>
          <p className="text-lg text-white text-center lg:text-left">
            Feel free to reach out to me at <br /> [komalfareed93@gmail.com].
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-black p-4 shadow-lg rounded-lg border-[2px] max-w-md w-full">
          <h2 className="text-2xl font-semibold text-[#15aaf0] mb-4">Contact Me</h2>
          
          {submitted ? (
            <div className="bg-black p-4 rounded-lg shadow-lg text-center">
              <p className="text-white text-lg mb-4"> Your message has been sent successfully!</p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-[#17c6fc] text-white rounded-md hover:bg-cyan-400"
              >
                OK
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#17c6fc]">Your Name</label>
                <input type="text" name="name" id="name" required
                  className="mt-1 block w-full px-3 py-1.5 border border-gray-600 rounded-md placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#17c6fc]">Your Email</label>
                <input type="email" name="email" id="email" required
                  className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#17c6fc]">Your Message</label>
                <textarea id="message" name="message" rows={3} required
                  className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button type="submit"
                  className="w-full flex justify-center py-2 px-4 rounded-md font-bold text-white bg-[#40c9f3] hover:bg-[#26c6f7]">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;





