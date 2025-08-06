import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";
import { 
  Shield, 
  Award, 
  CheckCircle, 
  FileText, 
  Scale, 
  Lock,
  ArrowUp,
  ArrowRight,
  AlertTriangle,
  Building,
  Users,
  Heart,
  Zap,
  Wind,
  Droplets,
  Activity,
  Eye,
  Settings,
  Globe,
  Calendar,
  Star,
  Target,
  BookOpen,
  ClipboardCheck
} from 'lucide-react';

function Compliance() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCompliance, setActiveCompliance] = useState(0);

  const complianceStandards = [
    {
      id: 1,
      icon: Heart,
      title: "NABH Accreditation",
      category: "Healthcare Quality",
      description: "National Accreditation Board for Hospitals and Healthcare Providers compliance for quality healthcare delivery",
      requirements: [
        "Patient safety protocols",
        "Infection control measures",
        "Quality management system",
        "Continuous improvement processes"
      ],
      scope: "Hospital Operations",
      validity: "3 years",
      status: "Certified"
    },
    {
      id: 2,
      icon: Settings,
      title: "ISO 13485",
      category: "Medical Devices",
      description: "Medical devices quality management systems ensuring design, development, and manufacturing compliance",
      requirements: [
        "Design controls",
        "Risk management",
        "Corrective and preventive actions",
        "Post-market surveillance"
      ],
      scope: "Medical Equipment",
      validity: "3 years",
      status: "Certified"
    },
    {
      id: 3,
      icon: Shield,
      title: "NFPA 99",
      category: "Safety Standards",
      description: "Health Care Facilities Code for life safety and equipment performance in healthcare environments",
      requirements: [
        "Medical gas systems",
        "Electrical safety",
        "Fire protection systems",
        "Emergency procedures"
      ],
      scope: "Facility Safety",
      validity: "Annual review",
      status: "Compliant"
    },
    {
      id: 4,
      icon: Building,
      title: "HTM Guidelines",
      category: "Technical Standards",
      description: "Health Technical Memorandum compliance for healthcare facility design and engineering",
      requirements: [
        "Ventilation systems",
        "Water systems",
        "Medical gas installations",
        "Electrical installations"
      ],
      scope: "Infrastructure",
      validity: "Ongoing",
      status: "Compliant"
    },
    {
      id: 5,
      icon: Eye,
      title: "HIPAA Compliance",
      category: "Data Protection",
      description: "Health Insurance Portability and Accountability Act requirements for patient data protection",
      requirements: [
        "Administrative safeguards",
        "Physical safeguards",
        "Technical safeguards",
        "Breach notification"
      ],
      scope: "Data Security",
      validity: "Ongoing",
      status: "Compliant"
    },
    {
      id: 6,
      icon: Globe,
      title: "WHO Standards",
      category: "Global Health",
      description: "World Health Organization guidelines for healthcare facility design and infection prevention",
      requirements: [
        "Infection prevention",
        "Patient safety",
        "Environmental health",
        "Quality improvement"
      ],
      scope: "Global Standards",
      validity: "Continuous",
      status: "Aligned"
    }
  ];

  const certificationBodies = [
    {
      name: "Bureau Veritas",
      type: "ISO Certification",
      logo: "BV",
      services: ["Quality Management", "Environmental Standards", "Safety Compliance"]
    },
    {
      name: "NABH",
      type: "Healthcare Accreditation",
      logo: "NABH",
      services: ["Hospital Accreditation", "Quality Assessment", "Patient Safety"]
    },
    {
      name: "Joint Commission",
      type: "International Standards",
      logo: "JCI",
      services: ["Hospital Accreditation", "Patient Safety", "Quality Improvement"]
    },
    {
      name: "DNV GL",
      type: "Risk Management",
      logo: "DNV",
      services: ["Healthcare Certification", "Risk Assessment", "Quality Systems"]
    }
  ];

  const complianceAreas = [
    {
      icon: Heart,
      title: "Patient Safety",
      description: "Comprehensive safety protocols ensuring patient wellbeing",
      standards: ["NABH", "WHO", "JCI"]
    },
    {
      icon: Shield,
      title: "Infrastructure Safety",
      description: "Building and system safety compliance for healthcare facilities",
      standards: ["NFPA 99", "HTM", "Local Fire Codes"]
    },
    {
      icon: Settings,
      title: "Medical Equipment",
      description: "Medical device compliance and quality management systems",
      standards: ["ISO 13485", "FDA", "CE Marking"]
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Patient data protection and privacy compliance",
      standards: ["HIPAA", "GDPR", "Local Privacy Laws"]
    },
    {
      icon: Wind,
      title: "Environmental Control",
      description: "HVAC, air quality, and environmental safety standards",
      standards: ["ASHRAE", "HTM", "WHO Guidelines"]
    },
    {
      icon: Zap,
      title: "Electrical Safety",
      description: "Electrical system safety and medical equipment power standards",
      standards: ["IEC 60364", "NFPA 70", "Local Electrical Codes"]
    }
  ];

  const auditProcess = [
    {
      step: 1,
      title: "Pre-Assessment",
      description: "Initial compliance gap analysis and documentation review",
      duration: "1-2 weeks"
    },
    {
      step: 2,
      title: "Documentation Audit",
      description: "Comprehensive review of policies, procedures, and records",
      duration: "2-3 weeks"
    },
    {
      step: 3,
      title: "On-Site Assessment",
      description: "Physical inspection and staff interviews for compliance verification",
      duration: "3-5 days"
    },
    {
      step: 4,
      title: "Corrective Actions",
      description: "Implementation of necessary improvements and system updates",
      duration: "2-4 weeks"
    },
    {
      step: 5,
      title: "Certification",
      description: "Final assessment and issuance of compliance certificates",
      duration: "1-2 weeks"
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

  // Auto-rotate active compliance
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCompliance((prev) => (prev + 1) % complianceStandards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [complianceStandards.length]);

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Certified':
      case 'Compliant':
        return darkMode ? "text-green-400" : "text-green-600";
      case 'Aligned':
        return darkMode ? "text-blue-400" : "text-blue-600";
      default:
        return darkMode ? "text-yellow-400" : "text-yellow-600";
    }
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
            <Scale className={`h-12 w-12 mr-4 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Compliance</span> & Standards
            </h1>
          </motion.div>
          <motion.p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Comprehensive compliance management ensuring adherence to healthcare regulations and international standards
          </motion.p>
        </div>
      </section>

      {/* Compliance Overview Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { icon: Award, number: "15+", label: "Certifications" },
              { icon: FileText, number: "50+", label: "Standards Covered" },
              { icon: CheckCircle, number: "100%", label: "Compliance Rate" },
              { icon: Users, number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
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

      {/* Compliance Standards */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Compliance Standards & Certifications</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Comprehensive adherence to healthcare industry regulations and international standards
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Standards List */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Current Certifications</h3>
              <div className="space-y-3">
                {complianceStandards.map((standard, index) => (
                  <motion.div
                    key={standard.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeCompliance === index
                        ? darkMode 
                          ? "bg-teal-400/20 border-l-4 border-teal-400" 
                          : "bg-teal-100 border-l-4 border-teal-600"
                        : darkMode 
                          ? "bg-gray-700 hover:bg-gray-600" 
                          : "bg-white hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveCompliance(index)}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <motion.div
                          className={`p-2 rounded-full mr-3 ${darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <standard.icon className="h-5 w-5" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold">{standard.title}</h4>
                          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            {standard.category}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${getStatusColor(standard.status)}`}>
                          {standard.status}
                        </div>
                        <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          {standard.validity}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Active Standard Details */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Standard Details</h3>
              <motion.div 
                className={`p-6 rounded-xl ${darkMode ? "bg-gray-700" : "bg-white"}`}
                key={activeCompliance}
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
                    {React.createElement(complianceStandards[activeCompliance].icon, { className: "h-6 w-6" })}
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold">{complianceStandards[activeCompliance].title}</h4>
                    <p className={`text-sm ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                      {complianceStandards[activeCompliance].category}
                    </p>
                  </div>
                </div>
                
                <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {complianceStandards[activeCompliance].description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-medium mb-2">Scope:</h5>
                    <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {complianceStandards[activeCompliance].scope}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Status:</h5>
                    <p className={`text-sm font-medium ${getStatusColor(complianceStandards[activeCompliance].status)}`}>
                      {complianceStandards[activeCompliance].status}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Key Requirements:</h5>
                  <div className="space-y-2">
                    {complianceStandards[activeCompliance].requirements.map((requirement, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className={`h-4 w-4 mr-2 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                        <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Compliance Coverage Areas</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Comprehensive compliance management across all healthcare facility aspects
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {complianceAreas.map((area, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  boxShadow: darkMode 
                    ? "0 15px 35px rgba(20, 184, 166, 0.2)" 
                    : "0 15px 35px rgba(0, 0, 0, 0.1)"
                }}
              >
                <motion.div
                  className={`inline-flex p-3 rounded-full mb-4 ${darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <area.icon className="h-6 w-6" />
                </motion.div>
                
                <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {area.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Applicable Standards:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.standards.map((standard, idx) => (
                      <span 
                        key={idx}
                        className={`px-2 py-1 text-xs rounded-full ${darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
                      >
                        {standard}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Audit Process */}
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
              <ClipboardCheck className={`h-8 w-8 mr-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
              <h2 className="text-3xl font-bold">Compliance Audit Process</h2>
            </div>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Systematic approach to ensuring and maintaining compliance standards
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {auditProcess.map((process, index) => (
              <motion.div 
                key={index}
                className={`text-center p-6 rounded-xl ${darkMode ? "bg-gray-700" : "bg-white"}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-lg font-bold ${darkMode ? "bg-teal-400 text-gray-900" : "bg-teal-600 text-white"}`}>
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className={`text-sm mb-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {process.description}
                </p>
                <div className={`text-xs font-medium ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                  {process.duration}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certification Bodies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Accredited Certification Partners</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Working with internationally recognized certification and accreditation bodies
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certificationBodies.map((body, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-xl text-center ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: darkMode 
                    ? "0 10px 30px rgba(20, 184, 166, 0.2)" 
                    : "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-xl font-bold ${darkMode ? "bg-teal-400/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}>
                  {body.logo}
                </div>
                <h3 className="text-lg font-semibold mb-2">{body.name}</h3>
                <p className={`text-sm mb-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                  {body.type}
                </p>
                <div className="space-y-1">
                  {body.services.map((service, idx) => (
                    <div key={idx} className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {service}
                    </div>
                  ))}
                </div>
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
            Ensure Your Facility's Compliance
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get expert guidance on healthcare compliance requirements and certification processes.
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
            Get Compliance Consultation
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

export default Compliance;