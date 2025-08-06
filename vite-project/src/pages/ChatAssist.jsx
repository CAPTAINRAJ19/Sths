import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Building, 
  Phone, 
  Mail, 
  MapPin,
  ArrowUp,
  Sparkles,
  Moon,
  Sun
} from "lucide-react";
import axios from "axios";

const ChatAssist = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Predefined chat options
  const quickOptions = [
    {
      icon: Building,
      text: "Tell me about SWASTH TRUE LIFE's healthcare infrastructure services",
      category: "Services"
    },
    {
      icon: Sparkles,
      text: "What makes your turnkey healthcare solutions unique?",
      category: "About"
    },
    {
      icon: Phone,
      text: "How can I get a quote for my healthcare facility project?",
      category: "Contact"
    },
    {
      icon: MapPin,
      text: "Which locations do you serve across India?",
      category: "Coverage"
    }
  ];

  // Static system message for company identity
  const systemMessage = {
    role: "user",
    text: `
You are a professional virtual assistant for SWASTH TRUE LIFE HEALTHCARE SERVICES PRIVATE LIMITED.

Speak ONLY on behalf of the company. Do NOT say you are Gemini or refer to outside data or search results.

Here is all the information you should use to answer questions:

SWASTH TRUE LIFE HEALTHCARE SERVICES PRIVATE LIMITED, incorporated on 26th February 2024, is a leading provider of turnkey healthcare infrastructure solutions in India. The company specializes in delivering comprehensive, end-to-end projects for hospitals and healthcare facilities, managing every phase from initial concept and feasibility analysis to detailed 3D design, construction, and final commissioning. SWASTH TRUE LIFE addresses the complete spectrum of modern healthcare infrastructure requirements—civil works, electrical systems, medical gas piping, HVAC, fire fighting, plumbing, networking, and integrated connectivity—ensuring that facilities are state-of-the-art, compliant, and optimized for both safety and efficiency.

The company was founded by Rakesh Bahadur Singh and Ratnesh Kumar Tiwari, both serving as key directors and strategic decision-makers. Registered at RoC-Bangalore and holding Corporate Identification Number (CIN) U21001KA2024PTC185387, the company operates with an authorized share capital of ₹10,00,000 and a paid-up capital of ₹2,00,000. SWASTH TRUE LIFE is categorized as a privately held, non-government company, and serves healthcare organizations and providers across India.

Central to the company's offerings is an advanced consultative approach. This begins with in-depth project analysis—covering client requirements, landscape, regulatory constraints, and operational needs—followed by comprehensive design and planning services. Leveraging advanced 3D visualization and hospital-specific workflow optimization, SWASTH TRUE LIFE develops tailored solutions that enhance both patient care and facility operations. The team ensures all projects strictly adhere to relevant codes, regulatory standards, and best practices, prioritizing both safety and innovation.

Execution of each project includes complete civil and technical construction with integration of all building utilities, installation of advanced medical and technical systems, and meticulous commissioning processes. Through collaborations with leading global medical technology providers such as Philips, Siemens, GE Healthcare, and Roche, SWASTH TRUE LIFE guarantees access to the newest med-tech solutions for every facility it develops.

The company's process is defined by systematic project management, transparency at each phase, and a strong focus on operational excellence. This involves continuous client engagement, clear milestone tracking, and robust oversight—ensuring on-time and on-budget delivery. Consultancy services extend into operational optimization, offering strategies to improve efficiency, regulatory compliance, and the quality of patient care environments.

A commitment to quality, trust, and long-term partnerships drives SWASTH TRUE LIFE's business philosophy. The growing portfolio includes projects with virtual tours and walkthrough videos, demonstrating effective delivery and transformative impact across diverse healthcare settings in India.

You are NOT a general-purpose chatbot or Gemini. You only serve as a knowledgeable representative of this company.
`
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    y: -4,
    boxShadow: "0 10px 25px rgba(20, 184, 166, 0.15)",
    transition: { type: "spring", stiffness: 400 }
  };

  useEffect(() => {
    const handleScroll = () => {
      const chatContainer = document.getElementById('chat-messages');
      if (chatContainer) {
        setShowScrollTop(chatContainer.scrollTop > 200);
      }
    };

    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.addEventListener('scroll', handleScroll);
      return () => chatContainer.removeEventListener('scroll', handleScroll);
    }
  }, [messages]);

  const scrollToBottom = () => {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim()) return;

    const newMessages = [...messages, { role: "user", text: messageText }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Scroll to bottom after adding user message
    setTimeout(scrollToBottom, 100);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        messages: [systemMessage, ...newMessages]
      });

      const replyText = response.data.reply;
      setMessages([...newMessages, { role: "assistant", text: replyText }]);
      setIsTyping(false);
      
      // Scroll to bottom after adding assistant message
      setTimeout(scrollToBottom, 100);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages([
        ...newMessages,
        { role: "assistant", text: "Sorry, something went wrong. Please try again." }
      ]);
      setIsTyping(false);
      setTimeout(scrollToBottom, 100);
    }
  };

  const handleQuickOption = (optionText) => {
    sendMessage(optionText);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} py-8 px-4 sm:px-6 lg:px-8`}>
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="flex items-center justify-center mb-4 relative">
            <motion.div 
              className={`p-4 rounded-full mr-4 ${darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <MessageCircle className="h-8 w-8" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold">
              SWASTH TRUE LIFE <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Chat Assistant</span>
            </h1>
            
            {/* Theme Toggle Button */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`absolute right-0 p-3 rounded-full transition-all duration-300 ${
                darkMode 
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              whileHover={{ 
                scale: 1.1,
                rotate: 180,
                boxShadow: darkMode 
                  ? "0 5px 15px rgba(251, 191, 36, 0.3)"
                  : "0 5px 15px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? 'sun' : 'moon'}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Get instant answers about our healthcare infrastructure solutions and services
          </p>
        </motion.div>

        {/* Quick Options */}
        {messages.length === 0 && (
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <h2 className={`text-xl font-semibold mb-4 text-center ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              Quick Questions to Get Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickOptions.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleQuickOption(option.text)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 ${
                    darkMode 
                      ? "bg-gray-800 hover:bg-gray-700 border border-gray-700" 
                      : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                  }`}
                  variants={itemVariants}
                  whileHover={cardHover}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start">
                    <motion.div 
                      className={`p-2 rounded-lg mr-3 ${
                        darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <option.icon className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        darkMode ? "bg-teal-400/10 text-teal-400" : "bg-teal-100 text-teal-700"
                      }`}>
                        {option.category}
                      </span>
                      <p className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {option.text}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Chat Container */}
        <motion.div 
          className={`rounded-xl shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} overflow-hidden`}
          variants={itemVariants}
        >
          {/* Messages */}
          <div 
            id="chat-messages"
            className="h-96 overflow-y-auto p-6 space-y-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className={`flex items-start space-x-3 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <motion.div 
                      className={`p-2 rounded-full ${darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Bot className="h-5 w-5" />
                    </motion.div>
                  )}
                  
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    msg.role === "user"
                      ? darkMode 
                        ? "bg-teal-400 text-gray-900" 
                        : "bg-teal-600 text-white"
                      : darkMode 
                        ? "bg-gray-700 text-gray-200" 
                        : "bg-gray-100 text-gray-800"
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>

                  {msg.role === "user" && (
                    <motion.div 
                      className={`p-2 rounded-full ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <User className="h-5 w-5" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="flex items-start space-x-3"
                >
                  <motion.div 
                    className={`p-2 rounded-full ${darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Bot className="h-5 w-5" />
                  </motion.div>
                  <div className={`px-4 py-3 rounded-2xl ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className={`w-2 h-2 rounded-full ${darkMode ? "bg-gray-400" : "bg-gray-500"}`}
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <motion.div 
            className={`p-4 border-t ${darkMode ? "border-gray-700 bg-gray-900/50" : "border-gray-200 bg-gray-50"}`}
            variants={itemVariants}
          >
            <div className="flex space-x-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about SWASTH TRUE LIFE..."
                className={`flex-1 p-3 rounded-lg border resize-none ${
                  darkMode 
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400" 
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-teal-500"
                } focus:outline-none focus:ring-2 ${
                  darkMode ? "focus:ring-teal-400/20" : "focus:ring-teal-500/20"
                }`}
                rows="1"
                disabled={isTyping}
              />
              <motion.button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isTyping}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  !input.trim() || isTyping
                    ? darkMode 
                      ? "bg-gray-700 text-gray-500 cursor-not-allowed" 
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : darkMode 
                      ? "bg-teal-400 text-gray-900 hover:bg-teal-300" 
                      : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
                whileHover={!input.trim() || isTyping ? {} : { 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(20, 184, 166, 0.3)"
                }}
                whileTap={!input.trim() || isTyping ? {} : { scale: 0.98 }}
              >
                <Send className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll to Bottom Button */}
        <motion.button
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 ${
            darkMode 
              ? "bg-teal-400 text-gray-900 hover:bg-teal-300" 
              : "bg-white text-teal-600 hover:bg-gray-50"
          } transition-all duration-300 border-2 ${
            darkMode ? "border-teal-300" : "border-teal-600"
          }`}
          onClick={scrollToBottom}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ 
            opacity: showScrollTop ? 1 : 0,
            scale: showScrollTop ? 1 : 0,
            y: showScrollTop ? 0 : 20
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: darkMode 
              ? "0 8px 25px rgba(20, 184, 166, 0.4)"
              : "0 8px 25px rgba(0, 0, 0, 0.15)"
          }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            pointerEvents: showScrollTop ? 'auto' : 'none'
          }}
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowUp className="h-6 w-6" />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ChatAssist;