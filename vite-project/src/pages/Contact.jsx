import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from "../context/ThemeContext";
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// WhatsApp Logo Component
const WhatsAppIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
);

function Contact() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    title: '', // Maps to {{title}} in template
    name: '',  // Maps to {{name}}
    email: '', // Maps to {{email}} (Reply-To)
    message: '' // Maps to {{message}}
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // WhatsApp configuration - REPLACE WITH YOUR PHONE NUMBER
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappMessage = 'Hello! I have a question about your services.'; // Default message
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Animation variants
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

  const inputHover = {
    boxShadow: "0 5px 15px rgba(20, 184, 166, 0.2)",
    transition: { type: "spring", stiffness: 400 }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual EmailJS credentials
      const serviceID = 'service_tariey8';
      const templateID = 'template_9s5nb9l';
      const publicKey = 'KPGCrSM9_lLB3t1bd';  

      const payload = {
        ...formData,
        time: new Date().toLocaleString() // Auto-populates {{time}}
      };

      await emailjs.send(serviceID, templateID, payload, publicKey);
      setSubmitStatus('success');
      setFormData({ title: '', name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} py-12 px-4 sm:px-6 lg:px-8`}>
      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className={`p-4 rounded-full shadow-lg ${darkMode ? "bg-green-600 hover:bg-green-700" : "bg-green-500 hover:bg-green-600"} text-white`}>
          <WhatsAppIcon className="h-8 w-8" />
        </div>
      </motion.a>

      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Us</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Get in touch with our team for inquiries or support
          </p>
        </motion.div>

        <motion.div 
          className={`p-8 rounded-xl ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}
          variants={itemVariants}
        >
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 mb-6 rounded-lg ${darkMode ? "bg-teal-900/30 border border-teal-400" : "bg-teal-100 border border-teal-200"}`}
            >
              <p className="text-center">Thank you! Your message has been sent successfully.</p>
            </motion.div>
          )}
          
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 mb-6 rounded-lg ${darkMode ? "bg-red-900/30 border border-red-400" : "bg-red-100 border border-red-200"}`}
            >
              <p className="text-center">Something went wrong. Please try again later.</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Title/Subject Field */}
              <motion.div whileHover={inputHover}>
                <label htmlFor="title" className="block mb-2 font-medium">Subject*</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? "bg-gray-700 border-gray-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-400" 
                      : "bg-white border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  }`}
                  placeholder="What's this about?"
                />
              </motion.div>

              {/* Name Field */}
              <motion.div whileHover={inputHover}>
                <label htmlFor="name" className="block mb-2 font-medium">Full Name*</label>
                <div className="relative">
                  <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    <User className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      darkMode 
                        ? "bg-gray-700 border-gray-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-400" 
                        : "bg-white border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    }`}
                    placeholder="Your name"
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div whileHover={inputHover}>
                <label htmlFor="email" className="block mb-2 font-medium">Email*</label>
                <div className="relative">
                  <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      darkMode 
                        ? "bg-gray-700 border-gray-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-400" 
                        : "bg-white border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div whileHover={inputHover}>
                <label htmlFor="message" className="block mb-2 font-medium">Message*</label>
                <div className="relative">
                  <div className={`absolute top-3 left-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      darkMode 
                        ? "bg-gray-700 border-gray-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-400" 
                        : "bg-white border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    }`}
                    placeholder="Your message here..."
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-6 px-6 py-4 rounded-lg font-semibold flex items-center justify-center ${
                  darkMode 
                    ? "bg-teal-400 text-gray-900 hover:bg-teal-300" 
                    : "bg-teal-600 text-white hover:bg-teal-700"
                } transition-all duration-300 shadow-lg`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5 ml-2" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;