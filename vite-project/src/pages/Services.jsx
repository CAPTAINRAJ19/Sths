import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";
import { 
  Building, 
  Zap, 
  Activity, 
  Wind, 
  Shield, 
  Droplets, 
  Wifi, 
  Cpu,
  ArrowUp,
  ArrowRight
} from 'lucide-react';

function Services() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const serviceDetails = {
    "Civil": "Our civil services ensure durable, regulation-compliant construction tailored to healthcare needs, including layout design, foundation, structure, and finishes—all executed with precision and quality craftsmanship.",
    "Electrical": "We provide complete electrical installations designed for hospitals and clinics, with a focus on safety, energy efficiency, and seamless integration of power systems across all departments.",
    "Medical Gas Piping": "Our medical gas piping services deliver reliable, leak-proof systems for essential gases like oxygen and nitrous oxide, crucial for surgeries, ICUs, and patient care rooms.",
    "HVAC": "Our HVAC systems offer efficient heating, ventilation, and air conditioning with specialized filtration and airflow control to maintain sterility and patient comfort in medical settings.",
    "Fire Fighting": "Our advanced fire safety systems include sprinklers, alarms, and extinguishers designed specifically for healthcare environments, ensuring compliance and rapid emergency response.",
    "Plumbing": "We install sterile-grade plumbing systems for potable and non-potable water in healthcare facilities, incorporating backflow prevention and sanitation protocols.",
    "Networking": "We build robust IT infrastructure that supports digital records, diagnostics, and monitoring systems, ensuring seamless communication across healthcare departments.",
    "Connectivity": "Our integrated building management systems unify HVAC, lighting, access control, and safety into a single interface to enhance operational efficiency in hospitals."
  };

  const services = [
    { icon: Building, name: "Civil", description: "Complete civil construction for healthcare facilities" },
    { icon: Zap, name: "Electrical", description: "Comprehensive electrical infrastructure solutions" },
    { icon: Activity, name: "Medical Gas Piping", description: "Specialized medical gas distribution systems" },
    { icon: Wind, name: "HVAC", description: "Advanced climate control for patient comfort" },
    { icon: Shield, name: "Fire Fighting", description: "State-of-the-art fire safety systems" },
    { icon: Droplets, name: "Plumbing", description: "Healthcare-grade plumbing infrastructure" },
    { icon: Wifi, name: "Networking", description: "Reliable network connectivity solutions" },
    { icon: Cpu, name: "Connectivity", description: "Integrated building management systems" }
  ];

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

  const cardHover = {
    scale: 1.05,
    y: -8,
    boxShadow: "0 15px 35px rgba(20, 184, 166, 0.2)",
    transition: { type: "spring", stiffness: 400 }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} py-12 px-4 sm:px-6 lg:px-8`}>
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Services</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Comprehensive healthcare infrastructure solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHover}
              className={`p-6 rounded-xl shadow-lg cursor-pointer ${
                index % 2 === 0 
                  ? darkMode 
                    ? 'bg-gray-800' 
                    : 'bg-gray-50'
                  : darkMode 
                    ? 'bg-teal-900/30' 
                    : 'bg-teal-50'
              }`}
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className={`p-3 rounded-full mr-4 ${
                    index % 2 === 0 
                      ? darkMode 
                        ? 'bg-teal-400/20 text-teal-400' 
                        : 'bg-teal-100 text-teal-600'
                      : darkMode 
                        ? 'bg-gray-700 text-teal-400' 
                        : 'bg-white text-teal-600'
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="h-6 w-6" />
                </motion.div>
                <h2 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
                  {service.name}
                </h2>
              </div>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {service.description}
              </p>
              <button 
                onClick={() => {
                  setSelectedService(service.name);
                  setShowModal(true);
                }}
                className={`mt-4 inline-block text-sm font-medium underline ${
                  darkMode ? "text-teal-400 hover:text-teal-300" : "text-teal-600 hover:text-teal-500"
                }`}
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={`mt-16 p-8 rounded-xl ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}
          variants={itemVariants}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              We deliver comprehensive healthcare infrastructure solutions with precision and excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Team",
                description: "Certified professionals with extensive healthcare construction experience",
                icon: Shield
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and compliance with healthcare industry standards",
                icon: Activity
              },
              {
                title: "Turnkey Solutions",
                description: "End-to-end project management from design to commissioning",
                icon: Building
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`text-center p-6 rounded-lg ${darkMode ? "bg-gray-700" : "bg-white"}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: darkMode 
                    ? "0 10px 30px rgba(20, 184, 166, 0.2)" 
                    : "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
              >
                <motion.div
                  className={`inline-flex p-3 rounded-full mb-4 ${darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.button
            onClick={handleContactClick}
            className={`px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center mx-auto ${
              darkMode 
                ? "bg-teal-400 text-gray-900 hover:bg-teal-300" 
                : "bg-teal-600 text-white hover:bg-teal-700"
            }`}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us for Services
            <motion.div
              className="ml-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.button
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 ${
          darkMode 
            ? "bg-teal-400 text-gray-900 hover:bg-teal-300" 
            : "bg-white text-teal-600 hover:bg-gray-50"
        } transition-all duration-300 border-2 ${
          darkMode ? "border-teal-300" : "border-teal-600"
        }`}
        onClick={scrollToTop}
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

      {/* Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className={`max-w-lg w-full mx-4 p-6 rounded-lg shadow-lg relative ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}>
            <h2 className="text-2xl font-bold mb-4">{selectedService} Service</h2>
            <p className="text-sm mb-6">
              {serviceDetails[selectedService]}
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className={`absolute top-2 right-2 p-2 rounded-full ${
                darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
