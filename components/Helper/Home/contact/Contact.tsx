import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className="min-h-screen bg-black flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div className="flex flex-col items-center lg:items-start">
          <h2 className=" contact-bg text-5xl font-bold text-[#28cdeb] mb-6 text-center">Let's Connect</h2>

          <div className="flex space-x-4 mb-6">
            <a href="https://github.com/Komal-shah22" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition duration-300">
              <img src="/images/github.png" alt="GitHub" className="w-16 h-18" />
            </a>
            <a href="https://www.linkedin.com/in/komal-shah-0b162a296/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition duration-300">
              <img src="/images/linkedien.png" alt="LinkedIn" className="w-14 h-14" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition duration-300">
              <img src="/images/twitter.png" alt="Twitter" className="w-14 h-14" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100091058255071" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition duration-300">
              <img src="/images/facebook.png" alt="Facebook" className="w-20 h-14" />
            </a>
          </div>
          <p className="text-lg text-white text-center lg:text-left">

          Feel free to reach out to me at <br /> [komalfareed93@gmail.com].
          </p>
        </div>
        <div className="bg-black p-4 shadow-lg rounded-lg border-[2px] max-w-md w-full"> 
          <h2 className="text-2xl font-semibold text-[#15aaf0] mb-4">Contact Me</h2>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#17c6fc]">Your Name</label>
              <input
                type="text" 
                name="name"
                id="name"
                className="mt-1 block w-full px-3 py-1.5 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#17c6fc]">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#17c6fc]">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3} 
                className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md font-bold shadow-sm text-sm text-white bg-[#40c9f3] hover:bg-[#26c6f7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

