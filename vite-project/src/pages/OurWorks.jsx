import React, { useState, useEffect } from 'react';
import { useTheme } from "../context/ThemeContext";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  ArrowUp,
  ArrowRight,
  Building2,
  Heart,
  Stethoscope,
  Activity,
  Shield
} from 'lucide-react';

function OurWorks() {
  const { darkMode } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState({});
  const [isMuted, setIsMuted] = useState({});

  const projects = [
    {
      id: 1,
      title: "Tata Memorial Hospital, ACTREC",
      subtitle: "16 Beds Cubicle Modular ICU & 24 Beds Recovery",
      videoSrc: "https://drive.google.com/file/d/13dUaEs4d8QDyw6rDH6h1XWvxc9mRnlq9/preview",
      description: "Advanced modular ICU and recovery facility at ACTREC, Kharghar - India's premier cancer research and treatment center.",
      details: [
        "16-bed modular cubicle ICU with advanced life support systems",
        "24-bed recovery ward with integrated monitoring",
        "State-of-the-art medical gas distribution systems",
        "Specialized HVAC for infection control and patient comfort",
        "Part of the 900-bed expansion project at ACTREC"
      ],
      category: "Critical Care Infrastructure",
      location: "Kharghar, Navi Mumbai",
      icon: Activity
    },
    {
      id: 2,
      title: "SSMH - Sivasagar, Assam",
      subtitle: "BAVP Modular OR Complex with Equipment",
      videoSrc: "https://drive.google.com/file/d/1aQRitylKE_FpDyyR5yOnTHK1M4OdtLsV/preview",
      description: "Complete modular operating room complex under the BAVP (Building as Viable Product) initiative in Assam.",
      details: [
        "Fully equipped modular operation theaters",
        "Advanced surgical equipment integration",
        "Laminar air flow systems for sterile environment",
        "Integrated building management systems",
        "BAVP compliant construction standards"
      ],
      category: "Surgical Infrastructure",
      location: "Sivasagar, Assam",
      icon: Stethoscope
    },
    {
      id: 3,
      title: "Head & Neck Cancer Institute of India",
      subtitle: "Modular OR Complex with Equipment and CSSD Department",
      videoSrc: "https://drive.google.com/file/d/1FQMVsOQAJE785QTcWw1HAEKON70CLEFB/preview",
      description: "Specialized cancer treatment facility with advanced OR complex and Central Sterile Supply Department.",
      details: [
        "Specialized operating theaters for head & neck surgeries",
        "Complete CSSD (Central Sterile Supply Department)",
        "Advanced sterilization and instrument processing",
        "Contamination control systems",
        "Integrated medical equipment and monitoring systems"
      ],
      category: "Specialized Cancer Care",
      location: "India",
      icon: Shield
    },
    {
      id: 4,
      title: "KIMS KARAD",
      subtitle: "Hybrid OR with Sliding CT & Equipment",
      videoSrc: "https://drive.google.com/file/d/1OSN1S9y9_E_jSiQ8ft_iCHjCBzEZgsf3/preview",
      description: "Revolutionary hybrid operating room with integrated sliding CT scanner for real-time imaging during procedures.",
      details: [
        "Hybrid OR with sliding CT scanner integration",
        "Real-time imaging capabilities during surgery",
        "Advanced radiation shielding systems",
        "Precision equipment positioning systems",
        "Multi-disciplinary surgical capabilities"
      ],
      category: "Hybrid Surgical Technology",
      location: "Karad, Maharashtra",
      icon: Building2
    },
    {
      id: 5,
      title: "CMC Vellore",
      subtitle: "Hybrid Vascular Cathlab",
      videoSrc: "https://drive.google.com/file/d/1gFcxEbOUWxE_RsJ1EwUbrwplaTy2KH5v/preview",
      description: "State-of-the-art hybrid vascular catheterization laboratory at India's premier medical institution.",
      details: [
        "Advanced hybrid vascular cathlab facility",
        "Integrated imaging and surgical capabilities",
        "Specialized cardiovascular equipment",
        "Advanced life support systems",
        "Part of CMC's pioneering cardiology department since 1951"
      ],
      category: "Cardiovascular Infrastructure",
      location: "Vellore, Tamil Nadu",
      icon: Heart
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

  const handleVideoPlay = (id) => {
    setIsPlaying(prev => ({ ...prev, [id]: true }));
  };

  const handleVideoPause = (id) => {
    setIsPlaying(prev => ({ ...prev, [id]: false }));
  };

  const toggleMute = (id) => {
    setIsMuted(prev => ({ ...prev, [id]: !prev[id] }));
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
            Our <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Works</span>
          </h1>
          <p className={`text-xl max-w-4xl mx-auto mb-8 transition-all duration-500 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Showcasing our expertise in healthcare infrastructure construction across India's premier medical institutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["Critical Care", "Surgical Suites", "Hybrid Technology", "Modular Construction"].map((tag, index) => (
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

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl ${
                darkMode ? "bg-gray-800 hover:shadow-teal-400/20" : "bg-white hover:shadow-gray-500/20"
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: 'slideInUp 0.8s ease-out forwards'
              }}
            >
              <div className={`lg:flex ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Video Section */}
                <div className="lg:w-1/2 relative">
                  <div className="aspect-video bg-gray-900 relative overflow-hidden rounded-lg">
                    <iframe
                      className="w-full h-full transition-transform duration-300 hover:scale-105"
                      src={project.videoSrc}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 'none' }}
                    ></iframe>
                    
                    {/* Video Overlay */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        darkMode 
                          ? "bg-teal-400/90 text-gray-900" 
                          : "bg-teal-600/90 text-white"
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div 
                      className={`p-3 rounded-full mr-4 transition-all duration-300 hover:rotate-180 ${
                        darkMode 
                          ? 'bg-teal-400/20 text-teal-400' 
                          : 'bg-teal-100 text-teal-600'
                      }`}
                    >
                      <project.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-1 transition-colors duration-300 hover:text-teal-500">{project.title}</h2>
                      <p className={`text-sm transition-colors duration-300 ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                        📍 {project.location}
                      </p>
                    </div>
                  </div>

                  <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {project.subtitle}
                  </h3>

                  <p className={`mb-6 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.details.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className={`text-sm flex items-start transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300 ${darkMode ? "bg-teal-400" : "bg-teal-600"}`}></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setCurrentVideo(project)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? "bg-teal-400/20 text-teal-400 hover:bg-teal-400/30 border border-teal-400/30" 
                        : "bg-teal-50 text-teal-600 hover:bg-teal-100 border border-teal-200"
                    }`}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    View Project Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          className={`mt-20 p-8 rounded-2xl transition-all duration-500 ${darkMode ? "bg-gray-800" : "bg-teal-50"}`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 transition-colors duration-300 hover:text-teal-500">Project Impact</h2>
            <p className={`text-lg transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Our healthcare construction projects serve millions of patients across India
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "5+", label: "Major Projects", desc: "Completed successfully" },
              { number: "1000+", label: "Hospital Beds", desc: "Constructed & equipped" },
              { number: "50+", label: "Operating Rooms", desc: "Advanced surgical suites" },
              { number: "100%", label: "Client Satisfaction", desc: "Quality assurance" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  darkMode 
                    ? "bg-gray-700 hover:shadow-teal-400/20" 
                    : "bg-white hover:shadow-gray-500/20"
                } hover:shadow-xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                  {stat.number}
                </h3>
                <p className="font-semibold mb-1 transition-colors duration-300">{stat.label}</p>
                <p className={`text-sm transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-teal-500">Ready to Start Your Healthcare Project?</h3>
          <p className={`text-lg mb-8 transition-colors duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Let's discuss how we can bring your healthcare infrastructure vision to life
          </p>
          <button
            onClick={handleContactClick}
            className={`px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center mx-auto hover:scale-105 hover:shadow-xl group ${
              darkMode 
                ? "bg-teal-400 text-gray-900 hover:bg-teal-300" 
                : "bg-teal-600 text-white hover:bg-teal-700"
            }`}
          >
            Start Your Project
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

      {/* Project Details Modal */}
      {currentVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 animate-fade-in">
          <div 
            className={`max-w-4xl w-full rounded-lg shadow-2xl relative overflow-hidden transition-all duration-300 ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
            style={{ animation: 'modalSlideIn 0.3s ease-out' }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{currentVideo.title}</h2>
                <button 
                  onClick={() => setCurrentVideo(null)}
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  ✕
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">{currentVideo.subtitle}</h3>
                  <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {currentVideo.description}
                  </p>
                  <p className={`text-sm mb-4 ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                    📍 {currentVideo.location}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Complete Project Features:</h4>
                  <ul className="space-y-2">
                    {currentVideo.details.map((detail, idx) => (
                      <li key={idx} className={`text-sm flex items-start ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${darkMode ? "bg-teal-400" : "bg-teal-600"}`}></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
        
        @keyframes modalSlideIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default OurWorks;