import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";
import { 
  ClipboardList, 
  BarChart3, 
  Layout, 
  Settings, 
  Package, 
  CheckCircle,
  ArrowUp,
  ArrowRight,
  ChevronRight,
  Target,
  Users,
  Calendar,
  FileText,
  Cog,
  Truck,
  PlayCircle,
  Award,
  Shield,
  Clock,
  Lightbulb
} from 'lucide-react';

function OurProcesses() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      icon: ClipboardList,
      title: "Project Management",
      subtitle: "Initial Planning",
      description: "Comprehensive project assessment, requirement analysis, and strategic planning phase",
      details: [
        "Stakeholder consultation",
        "Requirements gathering",
        "Timeline development",
        "Resource allocation"
      ],
      duration: "1-2 weeks"
    },
    {
      id: 2,
      icon: BarChart3,
      title: "Planning and Workflow Analysis",
      subtitle: "Strategic Design",
      description: "Detailed workflow analysis and optimization for maximum efficiency and patient care",
      details: [
        "Workflow mapping",
        "Process optimization",
        "Efficiency analysis",
        "Best practices integration"
      ],
      duration: "2-3 weeks"
    },
    {
      id: 3,
      icon: Layout,
      title: "Room Design and Equipment",
      subtitle: "Space Planning",
      description: "Architectural design and equipment specification tailored to healthcare requirements",
      details: [
        "Architectural planning",
        "Equipment selection",
        "Space optimization",
        "3D visualization"
      ],
      duration: "3-4 weeks"
    },
    {
      id: 4,
      icon: Settings,
      title: "Technical Engineering",
      subtitle: "System Design",
      description: "Advanced engineering solutions for medical gas, electrical, and HVAC systems",
      details: [
        "Medical gas design",
        "Electrical planning",
        "HVAC engineering",
        "Safety systems"
      ],
      duration: "4-5 weeks"
    },
    {
      id: 5,
      icon: Package,
      title: "Production and Commissioning",
      subtitle: "Manufacturing",
      description: "Quality manufacturing and pre-installation testing of all system components",
      details: [
        "Component manufacturing",
        "Quality testing",
        "Pre-commissioning",
        "Documentation"
      ],
      duration: "6-8 weeks"
    },
    {
      id: 6,
      icon: CheckCircle,
      title: "Installation and Implementation",
      subtitle: "Final Delivery",
      description: "Professional installation, testing, and commissioning of complete healthcare systems",
      details: [
        "On-site installation",
        "System integration",
        "Performance testing",
        "Staff training"
      ],
      duration: "2-4 weeks"
    }
  ];

  const methodologyFeatures = [
    {
      icon: Target,
      title: "Goal-Oriented Approach",
      description: "Every project phase is aligned with specific healthcare outcomes and patient safety goals"
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description: "Close collaboration with healthcare professionals, architects, and facility managers"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage with compliance to healthcare standards"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Structured timeline management ensuring projects are completed on schedule"
    }
  ];

  const qualityStandards = [
    { standard: "ISO 13485", description: "Medical devices quality management" },
    { standard: "NABH Guidelines", description: "National Accreditation Board for Hospitals" },
    { standard: "NFPA 99", description: "Health Care Facilities Code" },
    { standard: "HTM Standards", description: "Health Technical Memorandum compliance" }
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

  // Auto-rotate active step
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [processSteps.length]);

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
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Lightbulb className={`h-12 w-12 mr-4 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
            <h1 className="text-4xl lg:text-5xl font-bold">
              Our <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Processes</span>
            </h1>
          </motion.div>
          <motion.p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Comprehensive solution methodology from initial planning to final implementation
          </motion.p>
        </div>
      </section>

      {/* Process Flow Diagram */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our 6-Step Process Flow</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Systematic approach to healthcare infrastructure development
            </p>
          </motion.div>

          {/* Desktop Process Flow */}
          <div className="hidden lg:block">
            <motion.div 
              className={`relative p-8 rounded-2xl ${darkMode ? "bg-gray-800" : "bg-gray-50"} overflow-hidden`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Orange progress bar */}
              <div className="absolute top-4 left-8 right-8 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
              
              <div className="flex items-center justify-between relative">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="flex flex-col items-center max-w-xs"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveStep(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Step Icon */}
                    <motion.div
                      className={`relative z-10 p-4 rounded-full mb-4 transition-all duration-300 ${
                        activeStep === index
                          ? darkMode 
                            ? "bg-teal-400 text-gray-900" 
                            : "bg-teal-600 text-white"
                          : darkMode 
                            ? "bg-gray-700 text-teal-400" 
                            : "bg-white text-teal-600 border-2 border-teal-600"
                      }`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="h-8 w-8" />
                    </motion.div>
                    
                    {/* Step Content */}
                    <h3 className="text-sm font-bold text-center mb-2">{step.title}</h3>
                    <p className={`text-xs text-center ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {step.subtitle}
                    </p>
                    
                    {/* Arrow (except for last item) */}
                    {index < processSteps.length - 1 && (
                      <ChevronRight className={`absolute -right-6 top-8 h-6 w-6 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Process Flow */}
          <div className="lg:hidden">
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      className={`p-3 rounded-full mr-4 ${darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{step.subtitle}</p>
                    </div>
                  </div>
                  <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Process Information */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Active Step Details */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Process Details</h3>
              <motion.div 
                className={`p-6 rounded-xl ${darkMode ? "bg-gray-700" : "bg-white"}`}
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className={`p-3 rounded-full mr-4 ${darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {React.createElement(processSteps[activeStep].icon, { className: "h-6 w-6" })}
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold">{processSteps[activeStep].title}</h4>
                    <p className={`text-sm ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                      Duration: {processSteps[activeStep].duration}
                    </p>
                  </div>
                </div>
                
                <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {processSteps[activeStep].description}
                </p>
                
                <div className="space-y-2">
                  <h5 className="font-medium mb-2">Key Activities:</h5>
                  {processSteps[activeStep].details.map((detail, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className={`h-4 w-4 mr-2 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                      <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Process Steps Navigation */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">All Process Steps</h3>
              <div className="space-y-3">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeStep === index
                        ? darkMode 
                          ? "bg-teal-400/20 border-l-4 border-teal-400" 
                          : "bg-teal-100 border-l-4 border-teal-600"
                        : darkMode 
                          ? "bg-gray-700 hover:bg-gray-600" 
                          : "bg-white hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center">
                      <span className={`text-lg font-bold mr-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                        {step.id}
                      </span>
                      <div>
                        <h4 className="font-medium">{step.title}</h4>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Methodology</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Proven approach ensuring successful healthcare infrastructure projects
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {methodologyFeatures.map((feature, index) => (
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
                  <feature.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <Award className={`h-8 w-8 mr-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
              <h2 className="text-3xl font-bold">Quality Standards & Compliance</h2>
            </div>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Adhering to international healthcare infrastructure standards
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {qualityStandards.map((standard, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-xl text-center ${darkMode ? "bg-gray-700" : "bg-white"}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-2xl font-bold mb-2 ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                  {standard.standard}
                </div>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {standard.description}
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
            Ready to Start Your Healthcare Project?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's discuss how our proven process can bring your healthcare facility vision to life.
          </motion.p>
          <motion.button 
            className={`px-8 py-4 rounded-lg font-semibold ${darkMode ? "bg-white text-teal-900 hover:bg-gray-100" : "bg-teal-800 hover:bg-teal-700"} transition-all duration-300 flex items-center mx-auto`}
            onClick={handleContactClick}
            variants={fadeInUp}
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
            Start Your Project
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

export default OurProcesses;