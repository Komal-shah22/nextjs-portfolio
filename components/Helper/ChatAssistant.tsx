// // 'use client';

// // import React, { useState, useEffect, useRef, useCallback, FormEvent } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { FaPaperPlane, FaRobot, FaTimes, FaCommentDots, FaRegLightbulb, FaSpinner } from 'react-icons/fa';

// // interface Message {
// //   role: 'user' | 'model';
// //   content: string;
// // }

// // const predefinedSuggestions = [
// //   "What are Komal's key skills?",
// //   "Tell me about Komal's Agentic AI certificate.",
// //   "Can you list Komal's top projects?",
// //   "How can I contact Komal Shah?",
// //   "What is Komal's roll number and batch at PIAIC?",
// // ];

// // export default function ChatAssistant() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [messages, setMessages] = useState<Message[]>([]);
// //   const [input, setInput] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [showSuggestions, setShowSuggestions] = useState(true);
// //   const messagesEndRef = useRef<HTMLDivElement>(null);

// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   useEffect(scrollToBottom, [messages]);

// //   const sendMessage = useCallback(async (text: string) => {
// //     if (!text.trim()) return;

// //     const newMessage: Message = { role: 'user', content: text };
// //     setMessages((prevMessages) => [...prevMessages, newMessage]);
// //     setInput('');
// //     setIsLoading(true);
// //     setShowSuggestions(false); // Hide suggestions after user sends a message

// //     try {
// //       const response = await fetch('/api/chat', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ messages: [...messages, newMessage] }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         setMessages((prevMessages) => [
// //           ...prevMessages,
// //           { role: 'model', content: data.content },
// //         ]);
// //       } else {
// //         console.error('API Error:', data.error);
// //         setMessages((prevMessages) => [
// //           ...prevMessages,
// //           { role: 'model', content: data.error || 'An error occurred.' },
// //         ]);
// //       }
// //     } catch (error) {
// //       console.error('Failed to fetch from API:', error);
// //       setMessages((prevMessages) => [
// //         ...prevMessages,
// //         { role: 'model', content: 'Failed to connect to the AI assistant. Please try again later.' },
// //       ]);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   }, [messages]);

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setInput(e.target.value);
// //   };

// //   const handleSubmit = (e: FormEvent) => {
// //     e.preventDefault();
// //     sendMessage(input);
// //   };

// //   const handleSuggestionClick = (suggestion: string) => {
// //     sendMessage(suggestion);
// //   };

// //   const toggleChat = () => {
// //     setIsOpen(!isOpen);
// //     if (!isOpen) { // If opening, show suggestions
// //       setShowSuggestions(true);
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Chat Toggle Button */}
// //       <motion.button
// //         className="fixed bottom-6 right-6 z-[9999] bg-[#58b9e6] text-white p-4 rounded-full shadow-lg hover:bg-[#39a2f8] transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#58b9e6]/50"
// //         onClick={toggleChat}
// //         initial={{ scale: 0 }}
// //         animate={{ scale: 1 }}
// //         transition={{ type: "spring", stiffness: 260, damping: 20 }}
// //         aria-label={isOpen ? "Close chat" : "Open AI Assistant chat"}
// //       >
// //         {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
// //       </motion.button>

// //       {/* Chat Widget */}
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             className="fixed bottom-24 right-6 w-full max-w-sm h-[80vh] max-h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-xl flex flex-col z-[9998] border border-[#58b9e6]/50 backdrop-blur-lg bg-opacity-80"
// //             initial={{ opacity: 0, y: 50, scale: 0.8 }}
// //             animate={{ opacity: 1, y: 0, scale: 1 }}
// //             exit={{ opacity: 0, y: 50, scale: 0.8 }}
// //             transition={{ type: "spring", stiffness: 100, damping: 15 }}
// //           >
// //             {/* Header */}
// //             <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800/50 rounded-t-2xl">
// //               <div className="flex items-center">
// //                 <FaRobot size={20} className="text-[#58b9e6] mr-2" />
// //                 <h3 className="text-lg font-bold text-white">Komal's AI Assistant</h3>
// //               </div>
// //               <button
// //                 onClick={toggleChat}
// //                 className="text-gray-400 hover:text-white transition-colors"
// //                 aria-label="Close chat"
// //               >
// //                 <FaTimes size={20} />
// //               </button>
// //             </div>

// //             {/* Messages Area */}
// //             <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
// //               {messages.length === 0 && showSuggestions && (
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.2 }}
// //                   className="text-center text-gray-400 mb-4"
// //                 >
// //                   <FaRegLightbulb className="mx-auto mb-2 text-yellow-400" size={24} />
// //                   <p className="mb-3">How can I help you learn about Komal today?</p>
// //                   <div className="flex flex-wrap justify-center gap-2">
// //                     {predefinedSuggestions.map((suggestion, index) => (
// //                       <motion.button
// //                         key={index}
// //                         className="bg-gray-700/50 text-gray-200 text-sm px-3 py-1.5 rounded-full hover:bg-gray-600/70 transition-colors border border-gray-600"
// //                         onClick={() => handleSuggestionClick(suggestion)}
// //                         whileHover={{ scale: 1.05 }}
// //                         whileTap={{ scale: 0.95 }}
// //                       >
// //                         {suggestion}
// //                       </motion.button>
// //                     ))}
// //                   </div>
// //                 </motion.div>
// //               )}

// //               {messages.map((msg, index) => (
// //                 <motion.div
// //                   key={index}
// //                   className={`mb-3 p-3 rounded-lg max-w-[85%] ${
// //                     msg.role === 'user'
// //                       ? 'bg-[#58b9e6]/20 text-white ml-auto rounded-br-none border border-[#58b9e6]'
// //                       : 'bg-gray-700/40 text-gray-200 rounded-bl-none border border-gray-600'
// //                   }`}
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.3 }}
// //                 >
// //                   <p className="text-sm leading-relaxed">{msg.content}</p>
// //                 </motion.div>
// //               ))}
// //               {isLoading && (
// //                 <div className="flex items-center mb-3 p-3 rounded-lg bg-gray-700/40 text-gray-200 max-w-[85%] border border-gray-600">
// //                   <FaSpinner className="animate-spin mr-2 text-[#58b9e6]" size={16} />
// //                   <span className="text-sm">Typing...</span>
// //                 </div>
// //               )}
// //               <div ref={messagesEndRef} />
// //             </div>

// //             {/* Input Area */}
// //             <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800/50 rounded-b-2xl">
// //               <div className="flex items-center bg-gray-700 rounded-full pr-2">
// //                 <input
// //                   type="text"
// //                   value={input}
// //                   onChange={handleInputChange}
// //                   placeholder="Ask Komal's AI Assistant..."
// //                   className="flex-1 p-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
// //                   disabled={isLoading}
// //                 />
// //                 <motion.button
// //                   type="submit"
// //                   className="bg-[#58b9e6] text-white p-3 rounded-full hover:bg-[#39a2f8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
// //                   disabled={isLoading || !input.trim()}
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   aria-label="Send message"
// //                 >
// //                   <FaPaperPlane size={18} />
// //                 </motion.button>
// //               </div>
// //             </form>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // }



// import React, { useState, useEffect, useRef, useCallback, FormEvent } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaPaperPlane, FaRobot, FaTimes, FaCommentDots, FaRegLightbulb, FaSpinner } from 'react-icons/fa';

// interface Message {
//   role: 'user' | 'model';
//   content: string;
// }

// const predefinedSuggestions = [
//   "What are Komal's key skills?",
//   "Tell me about Komal's Agentic AI certificate.",
//   "Can you list Komal's top projects?",
//   "How can I contact Komal Shah?",
//   "What is Komal's roll number and batch at PIAIC?",
// ];

// export default function ChatAssistant() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [showSuggestions, setShowSuggestions] = useState(true);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const sendMessage = useCallback(async (text: string) => {
//     if (!text.trim()) return;

//     const newMessage: Message = { role: 'user', content: text };
//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//     setInput('');
//     setIsLoading(true);
//     setShowSuggestions(false);

//     try {
//       const response = await fetch('/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ messages: [...messages, newMessage] }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { role: 'model', content: data.content },
//         ]);
//       } else {
//         console.error('API Error:', data.error);
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { role: 'model', content: data.error || 'An error occurred.' },
//         ]);
//       }
//     } catch (error) {
//       console.error('Failed to fetch from API:', error);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { role: 'model', content: 'Failed to connect to the AI assistant. Please try again later.' },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [messages]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     sendMessage(input);
//   };

//   const handleSuggestionClick = (suggestion: string) => {
//     sendMessage(suggestion);
//   };

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//     if (!isOpen) {
//       setShowSuggestions(true);
//     }
//   };

//   return (
//     <>
//       {/* Chat Toggle Button */}
//       <motion.button
//         className="fixed bottom-6 right-6 z-[9999] bg-[#58b9e6] text-white p-4 rounded-full shadow-lg hover:bg-[#39a2f8] transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#58b9e6]/50"
//         onClick={toggleChat}
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ type: "spring", stiffness: 260, damping: 20 }}
//         aria-label={isOpen ? "Close chat" : "Open AI Assistant chat"}
//       >
//         {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
//       </motion.button>

//       {/* Chat Widget */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="fixed bottom-24 right-6 w-full max-w-sm h-[80vh] max-h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-xl flex flex-col z-[9998] border border-[#58b9e6]/50 backdrop-blur-lg bg-opacity-80"
//             initial={{ opacity: 0, y: 50, scale: 0.8 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 50, scale: 0.8 }}
//             transition={{ type: "spring", stiffness: 100, damping: 15 }}
//           >
//             {/* Header */}
//             <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800/50 rounded-t-2xl">
//               <div className="flex items-center">
//                 <FaRobot size={20} className="text-[#58b9e6] mr-2" />
//                 <h3 className="text-lg font-bold text-white">Komal&apos;s AI Assistant</h3>
//               </div>
//               <button
//                 onClick={toggleChat}
//                 className="text-gray-400 hover:text-white transition-colors"
//                 aria-label="Close chat"
//               >
//                 <FaTimes size={20} />
//               </button>
//             </div>

//             {/* Messages Area */}
//             <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
//               {messages.length === 0 && showSuggestions && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-center text-gray-400 mb-4"
//                 >
//                   <FaRegLightbulb className="mx-auto mb-2 text-yellow-400" size={24} />
//                   <p className="mb-3">How can I help you learn about Komal today?</p>
//                   <div className="flex flex-wrap justify-center gap-2">
//                     {predefinedSuggestions.map((suggestion, index) => (
//                       <motion.button
//                         key={index}
//                         className="bg-gray-700/50 text-gray-200 text-sm px-3 py-1.5 rounded-full hover:bg-gray-600/70 transition-colors border border-gray-600"
//                         onClick={() => handleSuggestionClick(suggestion)}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         {suggestion}
//                       </motion.button>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}

//               {messages.map((msg, index) => (
//                 <motion.div
//                   key={index}
//                   className={`mb-3 p-3 rounded-lg max-w-[85%] ${
//                     msg.role === 'user'
//                       ? 'bg-[#58b9e6]/20 text-white ml-auto rounded-br-none border border-[#58b9e6]'
//                       : 'bg-gray-700/40 text-gray-200 rounded-bl-none border border-gray-600'
//                   }`}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <p className="text-sm leading-relaxed">{msg.content}</p>
//                 </motion.div>
//               ))}

//               {isLoading && (
//                 <div className="flex items-center mb-3 p-3 rounded-lg bg-gray-700/40 text-gray-200 max-w-[85%] border border-gray-600">
//                   <FaSpinner className="animate-spin mr-2 text-[#58b9e6]" size={16} />
//                   <span className="text-sm">Typing...</span>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Input Area */}
//             <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800/50 rounded-b-2xl">
//               <div className="flex items-center bg-gray-700 rounded-full pr-2">
//                 <input
//                   type="text"
//                   value={input}
//                   onChange={handleInputChange}
//                   placeholder="Ask Komal's AI Assistant..."
//                   className="flex-1 p-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
//                   disabled={isLoading}
//                 />
//                 <motion.button
//                   type="submit"
//                   className="bg-[#58b9e6] text-white p-3 rounded-full hover:bg-[#39a2f8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                   disabled={isLoading || !input.trim()}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   aria-label="Send message"
//                 >
//                   <FaPaperPlane size={18} />
//                 </motion.button>
//               </div>
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }




'use client';

import React, { useState, useEffect, useRef, useCallback, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaRobot, FaTimes, FaCommentDots, FaRegLightbulb, FaSpinner } from 'react-icons/fa';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const predefinedSuggestions = [
  "What are Komal's key skills?",
  "Tell me about Komal's Agentic AI certificate.",
  "Can you list Komal's top projects?",
  "How can I contact Komal Shah?",
  "What is Komal's roll number and batch at PIAIC?",
];

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = { role: 'user', content: text };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, newMessage] }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'model', content: data.content },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'model', content: data.error || 'An error occurred.' },
        ]);
      }
    } catch (error) {
      console.error('Failed to fetch from API:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'model', content: 'Failed to connect to the AI assistant. Please try again later.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowSuggestions(true);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-[9999] bg-[#58b9e6] text-white p-4 rounded-full shadow-lg hover:bg-[#39a2f8] transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#58b9e6]/50"
        onClick={toggleChat}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        aria-label={isOpen ? "Close chat" : "Open AI Assistant chat"}
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-full max-w-sm h-[80vh] max-h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-xl flex flex-col z-[9998] border border-[#58b9e6]/50 backdrop-blur-lg bg-opacity-80"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800/50 rounded-t-2xl">
              <div className="flex items-center">
                <FaRobot size={20} className="text-[#58b9e6] mr-2" />
                <h3 className="text-lg font-bold text-white">Komal&apos;s AI Assistant</h3>
              </div>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
              {messages.length === 0 && showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center text-gray-400 mb-4"
                >
                  <FaRegLightbulb className="mx-auto mb-2 text-yellow-400" size={24} />
                  <p className="mb-3">How can I help you learn about Komal today?</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {predefinedSuggestions.map((suggestion, index) => (
                      <motion.button
                        key={index}
                        className="bg-gray-700/50 text-gray-200 text-sm px-3 py-1.5 rounded-full hover:bg-gray-600/70 transition-colors border border-gray-600"
                        onClick={() => handleSuggestionClick(suggestion)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`mb-3 p-3 rounded-lg max-w-[85%] ${
                    msg.role === 'user'
                      ? 'bg-[#58b9e6]/20 text-white ml-auto rounded-br-none border border-[#58b9e6]'
                      : 'bg-gray-700/40 text-gray-200 rounded-bl-none border border-gray-600'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex items-center mb-3 p-3 rounded-lg bg-gray-700/40 text-gray-200 max-w-[85%] border border-gray-600">
                  <FaSpinner className="animate-spin mr-2 text-[#58b9e6]" size={16} />
                  <span className="text-sm">Typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800/50 rounded-b-2xl">
              <div className="flex items-center bg-gray-700 rounded-full pr-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask Komal's AI Assistant..."
                  className="flex-1 p-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  className="bg-[#58b9e6] text-white p-3 rounded-full hover:bg-[#39a2f8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading || !input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Send message"
                >
                  <FaPaperPlane size={18} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}