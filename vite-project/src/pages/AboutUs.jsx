import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Building2, Users, Award, MapPin, ClipboardCheck, Layers, HeartPulse, Wifi, Shield, Settings, ArrowRight, CheckCircle, Target, Lightbulb, Zap, ArrowUp } from "lucide-react";
import logoTeal from '../assets/img/logoteal.png';

const AboutUs = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const companyDetails = [
    { icon: ClipboardCheck, label: "Incorporated", value: "26th February 2024" },
    { icon: Layers, label: "Authorized Capital", value: "₹10,00,000" },
    { icon: Building2, label: "Company Type", value: "Private Limited" },
    { icon: MapPin, label: "Registration", value: "RoC-Bangalore" },
    { icon: Award, label: "CIN", value: "U21001KA2024PTC185387" }
  ];

  const services = [
    { icon: Building2, title: "Turnkey hospital construction", description: "Complete facility development from concept to commissioning" },
    { icon: Settings, title: "Medical gas systems", description: "Specialized piping for oxygen, vacuum, and medical air" },
    { icon: Wifi, title: "Network infrastructure", description: "Integrated connectivity for medical devices and IT systems" },
    { icon: Shield, title: "Fire safety systems", description: "Compliant fire protection and suppression solutions" },
    { icon: HeartPulse, title: "Workflow optimization", description: "Patient flow analysis and operational efficiency planning" }
  ];

  const partners = ["Philips", "Siemens", "GE Healthcare", "Roche","Getinge","A.R. Agencies","HapSun"];

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

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
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

  const handleContactClick = () => {
    navigate('/contact');
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

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Hero Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img 
              src={logoTeal} 
              alt="Swasth Truelife Healthcare Services" 
              className="h-24 w-auto rounded-4xl" 
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            About <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Swasth Truelife Healthcare Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Redefining healthcare infrastructure through comprehensive turnkey solutions across India
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <Target className={`h-8 w-8 mr-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                <h2 className="text-3xl font-bold">Company profile</h2>
              </div>
              <p className="text-lg mb-6">
                Swasth Truelife Healthcare Services Private Limited is a leading provider of end-to-end healthcare infrastructure solutions, specializing in turnkey hospital projects from conceptualization to commissioning.
              </p>
              <p className="text-lg mb-6">
                Incorporated on 26th February 2024 and registered with RoC-Bangalore, we bring together technical excellence and operational expertise to deliver state-of-the-art medical facilities across India.
              </p>
              <motion.div 
                className={`grid grid-cols-2 gap-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {companyDetails.slice(0, 3).map((detail, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <detail.icon className={`h-5 w-5 mt-1 mr-2 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                    <div>
                      <div className="text-sm font-medium">{detail.label}</div>
                      <div className="text-sm">{detail.value}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.img 
                src={logoTeal} 
                alt="Swasth Truelife Healthcare Services" 
                className="h-64 w-auto rounded-4xl shadow-xl"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 1,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center justify-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Users className={`h-8 w-8 mr-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
            <h2 className="text-3xl font-bold text-center">Our leadership</h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                name: "Rakesh Bahadur Singh",
                role: "Director & Co-Founder",
                description: "With extensive experience in healthcare infrastructure development, Rakesh leads our strategic vision and project execution."
              },
              {
                name: "Ratnesh Kumar Tiwari",
                role: "Director & Co-Founder", 
                description: "Ratnesh oversees technical operations and ensures all projects meet the highest standards of quality and compliance."
              }
            ].map((founder, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-xl ${darkMode ? "bg-gray-700" : "bg-white"}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: darkMode 
                    ? "0 10px 30px rgba(20, 184, 166, 0.2)" 
                    : "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className={`h-5 w-5 mr-2 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                  <h3 className="text-xl font-semibold">{founder.name}</h3>
                </div>
                <p className="mb-4 font-medium text-teal-600">{founder.role}</p>
                <p>{founder.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center justify-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Zap className={`h-8 w-8 mr-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
            <h2 className="text-3xl font-bold text-center">Our comprehensive services</h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: darkMode 
                    ? "0 15px 35px rgba(20, 184, 166, 0.2)" 
                    : "0 15px 35px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className={`h-8 w-8 mb-4 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                </motion.div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center justify-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Award className={`h-8 w-8 mr-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
            <h2 className="text-3xl font-bold text-center">Our Associate partners</h2>
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                className={`px-6 py-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-white"}`}
                variants={scaleUp}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: darkMode 
                    ? "0 8px 25px rgba(20, 184, 166, 0.3)" 
                    : "0 8px 25px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="font-medium">{partner}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center justify-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Lightbulb className={`h-8 w-8 mr-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
            <h2 className="text-3xl font-bold text-center">Our project methodology</h2>
          </motion.div>
          <motion.div 
            className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="grid md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: "1. Analysis", content: "Feasibility studies & requirements mapping" },
                { title: "2. Design", content: "3D visualization & workflow planning" },
                { title: "3. Execution", content: "Construction & systems integration" },
                { title: "4. Commissioning", content: "Testing & operational handover" }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-teal-400" : "text-teal-600"}`}>{step.title}</h3>
                  <p>{step.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-teal-900" : "bg-teal-600"} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="flex justify-center mb-6"
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.img 
              src={logoTeal} 
              alt="Swasth Truelife Healthcare Services" 
              className="h-16 w-auto rounded-3xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Partner with healthcare infrastructure experts
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's discuss your hospital or healthcare facility project requirements.
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
            Contact our team
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
};

export default AboutUs;