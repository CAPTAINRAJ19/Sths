import React, { useState, useEffect } from 'react';
import { useTheme } from "../context/ThemeContext";
import { 
  ArrowUp,
  ArrowRight,
  Building2,
  Heart,
  Users,
  Award,
  Target,
  Lightbulb,
  CheckCircle,
  Quote,
  Calendar,
  MapPin,
  TrendingUp,
  Shield
} from 'lucide-react';

function Founders() {
  const { darkMode } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const founders = [
    {
      name: "Rakesh Bahadur Singh",
      role: "Co-Founder & Director",
      image: "public/assets/img/rakesh.jpg",
      message: "At SWASTH TRUE LIFE, we believe that exceptional healthcare infrastructure is the foundation of saving lives. Our mission is to create state-of-the-art medical facilities that not only meet today's healthcare challenges but anticipate tomorrow's innovations. Every project we undertake is driven by our commitment to excellence, safety, and the wellbeing of patients across India.",
      expertise: ["Healthcare Infrastructure", "Project Management", "Strategic Planning", "Regulatory Compliance"],
      vision: "Transforming healthcare delivery through innovative infrastructure solutions"
    },
    {
      name: "Ratnesh Kumar Tiwari",
      role: "Co-Founder & Director",
      image: "public/assets/img/ratnesh.jpg",
      message: "Healthcare infrastructure is more than construction—it's about creating healing environments that enhance patient outcomes and support medical professionals in their vital work. Our comprehensive approach, from concept to commissioning, ensures that every facility we build becomes a beacon of hope and healing in the community it serves.",
      expertise: ["Technical Systems", "Medical Technology", "Quality Assurance", "Operational Excellence"],
      vision: "Building the future of healthcare, one facility at a time"
    }
  ];

  const companyStats = [
    { number: "2024", label: "Founded", desc: "Established February 26th" },
    { number: "₹10L", label: "Authorized Capital", desc: "Strong financial foundation" },
    { number: "8+", label: "Service Areas", desc: "Complete healthcare solutions" },
    { number: "100%", label: "Compliance", desc: "Regulatory adherence" }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Patient-Centric Design",
      description: "Every facility we build prioritizes patient comfort, safety, and healing outcomes"
    },
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "Uncompromising standards in construction, equipment, and operational systems"
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "Working closely with healthcare providers to deliver tailored solutions"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Integrating cutting-edge technology with proven healthcare infrastructure practices"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Company Incorporation",
      description: "SWASTH TRUE LIFE HEALTHCARE SERVICES founded with a vision to transform healthcare infrastructure in India"
    },
    {
      year: "2024",
      title: "Strategic Partnerships",
      description: "Established collaborations with global leaders: Philips, Siemens, GE Healthcare, and Roche"
    },
    {
      year: "2024",
      title: "First Major Projects",
      description: "Successfully delivered advanced healthcare facilities including hybrid ORs and modular ICUs"
    },
    {
      year: "Future",
      title: "Expansion Vision",
      description: "Scaling operations to become India's premier healthcare infrastructure provider"
    }
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

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transform transition-all duration-700 hover:scale-105">
            Meet Our <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Founders</span>
          </h1>
          <p className={`text-xl max-w-4xl mx-auto mb-8 transition-all duration-500 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Visionary leaders driving innovation in healthcare infrastructure across India
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["Healthcare Innovation", "Infrastructure Excellence", "Patient Care", "Technology Integration"].map((tag, index) => (
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

        {/* Company Overview */}
        <div 
          className={`mb-16 p-8 rounded-2xl transition-all duration-500 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 transition-colors duration-300 hover:text-teal-500">About SWASTH TRUE LIFE</h2>
            <div className="flex items-center justify-center mb-4">
              <Building2 className={`h-8 w-8 mr-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
              <span className={`text-lg font-medium ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                CIN: U21001KA2024PTC185387
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Incorporated on <strong>26th February 2024</strong>, SWASTH TRUE LIFE HEALTHCARE SERVICES PRIVATE LIMITED 
                is a leading provider of turnkey healthcare infrastructure solutions in India. We specialize in delivering 
                comprehensive, end-to-end projects for hospitals and healthcare facilities.
              </p>
              <div className="space-y-3">
                {[
                  "Complete project lifecycle management",
                  "3D design and visualization",
                  "Regulatory compliance assurance",
                  "Global technology partnerships"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className={`h-5 w-5 mr-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                    <span className={darkMode ? "text-gray-300" : "text-gray-700"}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Service Spectrum</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  "Civil Works", "Electrical Systems", "Medical Gas Piping", "HVAC Solutions",
                  "Fire Fighting", "Plumbing", "Networking", "Connectivity"
                ].map((service, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                      darkMode ? "bg-gray-700" : "bg-white"
                    }`}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
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

        {/* Founders Section */}
        <div className="space-y-12 mb-16">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl ${
                darkMode ? "bg-gray-800 hover:shadow-teal-400/20" : "bg-white hover:shadow-gray-500/20"
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: 'slideInUp 0.8s ease-out forwards'
              }}
            >
              <div className={`lg:flex ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image Section */}
                <div className="lg:w-2/5 relative">
                  <div className="aspect-[4/5] bg-gradient-to-br from-teal-400 to-teal-600 relative overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="400" height="500" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="500" fill="#14b8a6"/>
                            <circle cx="200" cy="180" r="60" fill="white" opacity="0.3"/>
                            <rect x="140" y="280" width="120" height="150" rx="60" fill="white" opacity="0.3"/>
                            <text x="200" y="420" text-anchor="middle" fill="white" font-size="20" font-family="Arial">
                              ${founder.name}
                            </text>
                          </svg>
                        `)}`
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="text-white font-semibold text-lg">{founder.name}</h3>
                        <p className="text-teal-200 text-sm">{founder.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex items-center mb-6">
                    <Quote className={`h-8 w-8 mr-3 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                    <h2 className="text-2xl font-bold">Message from {founder.name.split(' ')[0]}</h2>
                  </div>

                  <blockquote className={`text-lg italic leading-relaxed mb-6 pl-4 border-l-4 ${
                    darkMode 
                      ? "border-teal-400 text-gray-300" 
                      : "border-teal-600 text-gray-700"
                  }`}>
                    "{founder.message}"
                  </blockquote>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Target className={`h-5 w-5 mr-2 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                      Vision
                    </h4>
                    <p className={`text-sm italic ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {founder.vision}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Award className={`h-5 w-5 mr-2 ${darkMode ? "text-teal-400" : "text-teal-600"}`} />
                      Expertise Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                            darkMode 
                              ? "bg-teal-400/20 text-teal-400 border border-teal-400/30" 
                              : "bg-teal-100 text-teal-700 border border-teal-200"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div 
          className={`mb-16 p-8 rounded-2xl transition-all duration-500 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              The principles that guide every project we undertake
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
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
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Key milestones in building India's healthcare infrastructure future
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-1/2 transform -translate-x-px h-full w-0.5 ${
              darkMode ? "bg-teal-400" : "bg-teal-600"
            }`}></div>

            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-center mb-8">
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className={`${index % 2 === 1 ? 'hidden lg:block' : ''}`}>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                  darkMode 
                    ? "bg-teal-400 border-gray-900" 
                    : "bg-teal-600 border-white"
                } z-10`}></div>

                {/* Year badge */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-8 px-3 py-1 rounded-full text-sm font-bold ${
                  darkMode 
                    ? "bg-teal-400 text-gray-900" 
                    : "bg-teal-600 text-white"
                }`}>
                  {milestone.year}
                </div>

                <div className={`flex-1 ${index % 2 === 1 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className={`${index % 2 === 0 ? 'hidden lg:block' : ''}`}>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Mobile content */}
                <div className="lg:hidden w-full mt-12">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Healthcare Infrastructure?</h3>
          <p className={`text-lg mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Connect with our founders to discuss your healthcare facility project
          </p>
          <button
            onClick={handleContactClick}
            className={`px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center mx-auto hover:scale-105 hover:shadow-xl group ${
              darkMode 
                ? "bg-teal-400 text-gray-900 hover:bg-teal-300" 
                : "bg-teal-600 text-white hover:bg-teal-700"
            }`}
          >
            Get In Touch
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

export default Founders;