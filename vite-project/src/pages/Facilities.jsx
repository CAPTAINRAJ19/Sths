import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";
import { 
  Building2, 
  Heart, 
  Stethoscope, 
  Users, 
  Bed, 
  Monitor, 
  Microscope, 
  Pill,
  ArrowUp,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Clock,
  Shield,
  Zap,
  Award,
  Activity
} from 'lucide-react';

function Facilities() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const facilities = [
    { 
      icon: Heart, 
      name: "Cardiac Care Unit", 
      description: "Advanced cardiac monitoring and treatment facilities with state-of-the-art equipment",
      capacity: "24 beds",
      features: ["24/7 Monitoring", "Emergency Care", "Specialized Staff"]
    },
    { 
      icon: Stethoscope, 
      name: "General Medicine", 
      description: "Comprehensive medical care with experienced physicians and modern diagnostic tools",
      capacity: "40 beds",
      features: ["Consultation", "Diagnostics", "Treatment"]
    },
    { 
      icon: Users, 
      name: "Emergency Department", 
      description: "Round-the-clock emergency services with rapid response capabilities",
      capacity: "15 beds",
      features: ["24/7 Service", "Trauma Care", "Ambulance"]
    },
    { 
      icon: Bed, 
      name: "Intensive Care Unit", 
      description: "Critical care facility with advanced life support systems and specialized nursing",
      capacity: "20 beds",
      features: ["Life Support", "Critical Care", "Monitoring"]
    },
    { 
      icon: Monitor, 
      name: "Radiology & Imaging", 
      description: "Complete imaging services including CT, MRI, X-Ray, and ultrasound facilities",
      capacity: "6 units",
      features: ["CT Scan", "MRI", "Digital X-Ray"]
    },
    { 
      icon: Microscope, 
      name: "Laboratory Services", 
      description: "Comprehensive pathology and clinical laboratory with automated testing systems",
      capacity: "Full service",
      features: ["Blood Tests", "Pathology", "Microbiology"]
    },
    { 
      icon: Pill, 
      name: "Pharmacy", 
      description: "24-hour pharmacy services with comprehensive medication management",
      capacity: "24/7 Service",
      features: ["Prescription", "OTC Medicines", "Consultation"]
    },
    { 
      icon: Building2, 
      name: "Operation Theaters", 
      description: "Modern surgical facilities with advanced equipment and sterile environments",
      capacity: "8 theaters",
      features: ["Sterile Environment", "Advanced Equipment", "Recovery"]
    }
  ];

  const stats = [
    { icon: Bed, number: "250+", label: "Total Beds" },
    { icon: Users, number: "50+", label: "Specialist Doctors" },
    { icon: Activity, number: "24/7", label: "Emergency Service" },
    { icon: Award, number: "15+", label: "Years Experience" }
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive safety protocols and infection control measures"
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Rapid emergency response with dedicated trauma team"
    },
    {
      icon: Star,
      title: "Quality Care",
      description: "Accredited facilities with international quality standards"
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Round-the-clock medical services and emergency care"
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Scroll to top functionality
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
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Hero Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="flex items-center justify-center mb-6"
            variants={scaleUp}
            initial="hidden"
            animate="visible"
          >
            <Building2 className={`h-12 w-12 mr-4 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
            <h1 className="text-4xl lg:text-5xl font-bold">
              Our <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Facilities</span>
            </h1>
          </motion.div>
          <motion.p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            State-of-the-art healthcare facilities designed for comprehensive patient care and medical excellence
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className={`text-center p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
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
                  <stat.icon className="h-8 w-8" />
                </motion.div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Comprehensive Healthcare Facilities</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Advanced medical facilities equipped with cutting-edge technology
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {facilities.map((facility, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-xl ${darkMode ? "bg-gray-700" : "bg-white"} shadow-lg`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  boxShadow: darkMode 
                    ? "0 15px 35px rgba(20, 184, 166, 0.2)" 
                    : "0 15px 35px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`inline-flex p-3 rounded-full mb-4 ${darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <facility.icon className="h-6 w-6" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3">{facility.name}</h3>
                <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {facility.description}
                </p>
                
                <div className={`flex items-center mb-3 text-sm ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{facility.capacity}</span>
                </div>
                
                <div className="space-y-2">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className={`h-4 w-4 mr-2 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                      <span className={darkMode ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Facilities?</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Excellence in healthcare infrastructure and patient-centered care
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                className={`text-center p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: darkMode 
                    ? "0 10px 30px rgba(20, 184, 166, 0.2)" 
                    : "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
              >
                <motion.div
                  className={`inline-flex p-4 rounded-full mb-4 ${darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <highlight.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-teal-900" : "bg-teal-600"} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Experience World-Class Healthcare Facilities
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Schedule a visit to tour our state-of-the-art medical facilities and meet our expert team.
          </motion.p>
          <motion.button 
            className={`px-8 py-4 rounded-lg font-semibold ${darkMode ? "bg-white text-teal-900 hover:bg-gray-100" : "bg-teal-800 hover:bg-teal-700"} transition-all duration-300 flex items-center mx-auto`}
            onClick={handleContactClick}
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Visit
            <motion.div
              className="ml-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </div>
      </section>

      {/* Floating Scroll to Top Button */}
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
    </div>
  );
}

export default Facilities;