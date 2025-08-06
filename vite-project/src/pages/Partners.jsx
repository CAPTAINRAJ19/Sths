import React, { useState, useEffect } from 'react';
import { useTheme } from "../context/ThemeContext";
import { 
  ArrowUp,
  ArrowRight,
  Building2,
  Globe,
  Award,
  Users,
  CheckCircle,
  Star,
  Handshake,
  Target,
  TrendingUp,
  Shield,
  Heart,
  Stethoscope,
  Activity,
  Zap
} from 'lucide-react';

function Partners() {
  const { darkMode } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const partners = [
    {
      id: 1,
      name: "Getinge",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Getinge_logo.svg",
      category: "Medical Technology & Life Science",
      description: "Global provider of innovative solutions for operating rooms, intensive care units, sterilization departments and life science companies.",
      specializations: [
        "Surgical Workflows",
        "Acute Care Therapies",
        "Life Science",
        "Infection Control",
        "Cardiovascular Solutions"
      ],
      partnership: "Advanced surgical and critical care equipment integration for comprehensive patient care",
      established: "Equipment Alliance",
      color: "gray",
      stats: { experience: "110+ Years", countries: "40+", employees: "10,000+" }
    },
    {
      id: 2,
      name: "A.R. Agencies",
      logo: "https://via.placeholder.com/150x60/007acc/ffffff?text=AR+AGENCIES",
      category: "Specialized Medical Equipment",
      description: "Specialized in monitoring, respiratory & surgical care equipment, providing comprehensive medical solutions for healthcare facilities.",
      specializations: [
        "Patient Monitoring",
        "Respiratory Care",
        "Surgical Equipment",
        "Critical Care Solutions",
        "Medical Accessories"
      ],
      partnership: "Specialized monitoring and respiratory care equipment for comprehensive patient support systems",
      established: "Regional Partnership",
      color: "teal",
      stats: { experience: "15+ Years", specialization: "ICU Solutions", coverage: "Pan-India" }
    },
    {
      id: 3,
      name: "HapSun Medical",
      logo: "https://via.placeholder.com/150x60/ff6600/ffffff?text=HAPSUN",
      category: "Medical Solutions & Equipment",
      description: "Medical solutions provider offering innovative healthcare equipment and services for modern medical facilities.",
      specializations: [
        "Medical Equipment",
        "Healthcare Solutions",
        "Installation Services",
        "Maintenance Support",
        "Training Programs"
      ],
      partnership: "Comprehensive medical equipment solutions and ongoing support services for healthcare facilities",
      established: "Service Partnership",
      color: "orange",
      stats: { services: "Full-Service", support: "24/7", training: "Comprehensive" }
    },
    {
      id: 4,
      name: "Roche Diagnostics",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Hoffmann-La_Roche_logo.svg",
      category: "In-vitro Diagnostics & Laboratory Solutions",
      description: "Global pioneer in pharmaceuticals and diagnostics, advancing science to improve people's lives through innovative medicines and diagnostic solutions.",
      specializations: [
        "Clinical Chemistry",
        "Immunoassays",
        "Molecular Diagnostics",
        "Point-of-Care Testing",
        "Digital Pathology"
      ],
      partnership: "Laboratory automation and diagnostic solutions for accurate patient testing and results",
      established: "Diagnostic Partnership",
      color: "blue",
      stats: { experience: "125+ Years", tests: "19B+ Annually", innovation: "€13.2B R&D" }
    },
    {
      id: 5,
      name: "Siemens",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg",
      category: "Medical Technology & Digitalization",
      description: "Pioneer in medical technology offering comprehensive portfolio from prevention and early detection to diagnosis, treatment and aftercare.",
      specializations: [
        "Medical Imaging",
        "Laboratory Diagnostics",
        "Point-of-Care Testing",
        "Digital Health Solutions",
        "Therapy Systems"
      ],
      partnership: "Comprehensive medical equipment integration and digital health solutions for modern healthcare facilities",
      established: "Technology Alliance",
      color: "teal",
      stats: { experience: "170+ Years", employees: "300,000+", revenue: "€72B+" }
    },
    {
      id: 6,
      name: "GE HealthCare",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/GE_Healthcare_logo.svg",
      category: "Medical Imaging & Healthcare Technology",
      description: "Leading global medical technology company dedicated to transforming healthcare with intelligent devices, data analytics, applications and services.",
      specializations: [
        "Medical Imaging",
        "Ultrasound",
        "Patient Care Solutions",
        "Digital Solutions",
        "Life Sciences"
      ],
      partnership: "Advanced imaging systems and intelligent healthcare technology integration",
      established: "Strategic Alliance",
      color: "purple",
      stats: { experience: "125+ Years", installations: "4M+", countries: "160+" }
    },
    {
      id: 7,
      name: "Nihon Kohden",
      logo: "https://www.nihonkohden.com/sites/nkw/files/2021-06/NK_logo_bl_500_1.png",
      category: "Medical Electronic Equipment",
      description: "Japanese medical technology company specializing in physiological measuring equipment, patient monitors, and healthcare IT solutions.",
      specializations: [
        "Patient Monitoring",
        "Electroencephalography",
        "Defibrillators",
        "Healthcare IT",
        "Neurology Solutions"
      ],
      partnership: "Advanced patient monitoring and neurological diagnostic equipment for critical care environments",
      established: "Technology Partnership",
      color: "blue",
      stats: { experience: "70+ Years", countries: "120+", monitors: "Leading in Asia" }
    },
    {
      id: 8,
      name: "Phillips",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Philips-Logo.png",
      category: "Medical Technology & Healthcare Solutions",
      description: "Global leader in health technology, focused on improving people's health and enabling better outcomes across the health continuum.",
      specializations: [
        "Diagnostic Imaging",
        "Image-Guided Therapy",
        "Patient Monitoring",
        "Health Informatics",
        "Personal Health"
      ],
      partnership: "Strategic technology integration for advanced medical imaging and patient monitoring systems",
      established: "Global Partnership",
      color: "blue",
      stats: { experience: "130+ Years", countries: "100+", patents: "60,000+" }
    }
  ];

  const partnershipBenefits = [
    {
      icon: Award,
      title: "Global Excellence",
      description: "Access to world-class medical technology from industry leaders"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Proven reliability and compliance with international healthcare standards"
    },
    {
      icon: Zap,
      title: "Innovation Access",
      description: "Latest technological advances and cutting-edge medical solutions"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Comprehensive training, installation, and ongoing technical support"
    }
  ];

  const stats = [
    { number: "8+", label: "Global Partners", desc: "Industry-leading companies" },
    { number: "100+", label: "Countries Covered", desc: "Worldwide presence" },
    { number: "500+", label: "Years Combined", desc: "Collective experience" },
    { number: "24/7", label: "Support Available", desc: "Round-the-clock assistance" }
  ];

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
    alert('Contact functionality would redirect to contact page');
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: darkMode ? "text-blue-400 border-blue-400/30 bg-blue-400/10" : "text-blue-600 border-blue-200 bg-blue-50",
      teal: darkMode ? "text-teal-400 border-teal-400/30 bg-teal-400/10" : "text-teal-600 border-teal-200 bg-teal-50",
      purple: darkMode ? "text-purple-400 border-purple-400/30 bg-purple-400/10" : "text-purple-600 border-purple-200 bg-purple-50",
      gray: darkMode ? "text-gray-400 border-gray-400/30 bg-gray-400/10" : "text-gray-600 border-gray-200 bg-gray-50",
      orange: darkMode ? "text-orange-400 border-orange-400/30 bg-orange-400/10" : "text-orange-600 border-orange-200 bg-orange-50"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transform transition-all duration-700 hover:scale-105">
            Our Strategic <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Partners</span>
          </h1>
          <p className={`text-xl max-w-4xl mx-auto mb-8 transition-all duration-500 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Collaborating with global leaders in medical technology to deliver world-class healthcare infrastructure solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["Global Leaders", "Medical Technology", "Innovation Partners", "Quality Assurance"].map((tag, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? "bg-teal-400/20 text-teal-400 border border-teal-400/30" 
                    : "bg-teal-100 text-teal-700 border border-teal-200"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Partnership Overview */}
        <div 
          className={`mb-16 p-8 rounded-2xl transition-all duration-500 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 transition-colors duration-300 hover:text-teal-500">Strategic Associations</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Our partnerships with industry leaders ensure access to cutting-edge medical technology and comprehensive support
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <div 
                  className={`inline-flex p-4 rounded-full mb-4 transition-all duration-300 hover:rotate-12 ${
                    darkMode 
                      ? 'bg-teal-400/20 text-teal-400' 
                      : 'bg-teal-100 text-teal-600'
                  }`}
                >
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                darkMode ? "bg-gray-800 hover:shadow-teal-400/20" : "bg-white hover:shadow-gray-500/20"
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'slideInUp 0.8s ease-out forwards'
              }}
              onMouseEnter={() => setHoveredPartner(partner.id)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              {/* Logo Section */}
              <div className={`p-6 text-center border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                <div className={`h-16 flex items-center justify-center mb-3 ${getColorClasses(partner.color)} rounded-lg border-2 overflow-hidden`}>
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-lg font-bold hidden">
                    {partner.name}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{partner.name}</h3>
                <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {partner.category}
                </p>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {partner.description}
                </p>

                {/* Specializations */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold mb-2 uppercase tracking-wide">Specializations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {partner.specializations.slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 rounded text-xs ${getColorClasses(partner.color)}`}
                      >
                        {spec}
                      </span>
                    ))}
                    {partner.specializations.length > 3 && (
                      <span className={`px-2 py-1 rounded text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        +{partner.specializations.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-1 text-xs">
                  {Object.entries(partner.stats).map(([key, value], idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partnership Info */}
              {hoveredPartner === partner.id && (
                <div className={`absolute inset-0 p-4 flex flex-col justify-center transition-all duration-300 ${
                  darkMode ? "bg-gray-900/95" : "bg-white/95"
                } backdrop-blur-sm`}>
                  <div className="text-center">
                    <Handshake className={`h-8 w-8 mx-auto mb-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                    <h4 className="font-semibold mb-2">{partner.established}</h4>
                    <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {partner.partnership}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          className={`mb-16 p-8 rounded-2xl transition-all duration-500 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Partnership Impact</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Combined strength of our strategic associations
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <h3 className={`text-3xl font-bold mb-2 ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                  {stat.number}
                </h3>
                <p className="font-semibold mb-1">{stat.label}</p>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work Together</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Our collaborative approach ensures seamless integration of partner technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Needs Assessment",
                description: "We analyze your healthcare facility requirements and identify the optimal technology solutions from our partner network.",
                icon: Target
              },
              {
                step: "02",
                title: "Solution Design",
                description: "Our team works with partners to design integrated systems that meet your specific operational and clinical needs.",
                icon: Building2
              },
              {
                step: "03",
                title: "Implementation & Support",
                description: "Complete installation, training, and ongoing support ensure optimal performance of all integrated systems.",
                icon: CheckCircle
              }
            ].map((process, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <div 
                  className={`inline-flex p-4 rounded-full mb-4 ${
                    darkMode 
                      ? 'bg-teal-400/20 text-teal-400' 
                      : 'bg-teal-100 text-teal-600'
                  }`}
                >
                  <process.icon className="h-8 w-8" />
                </div>
                <div className={`text-3xl font-bold mb-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Leverage Our Partnership Network?</h3>
          <p className={`text-lg mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Connect with us to explore how our strategic partnerships can benefit your healthcare project
          </p>
          <button
            onClick={handleContactClick}
            className={`px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center mx-auto hover:scale-105 hover:shadow-xl group ${
              darkMode 
                ? "bg-teal-400 text-gray-900 hover:bg-teal-300" 
                : "bg-teal-600 text-white hover:bg-teal-700"
            }`}
          >
            Explore Partnerships
            <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 transition-all duration-300 border-2 hover:scale-110 ${
          darkMode 
            ? "bg-teal-400 text-gray-900 hover:bg-teal-300 border-teal-300" 
            : "bg-white text-teal-600 hover:bg-gray-50 border-teal-600"
        } ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-6 w-6 transition-transform duration-300 hover:-translate-y-1" />
      </button>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Partners;