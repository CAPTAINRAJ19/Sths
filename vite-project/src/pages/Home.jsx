import React, { useState, useEffect } from 'react';
import { ChevronDown, Building2, Zap, Wind, Activity, Users, Award, ArrowRight, Phone, Mail, MapPin, Settings, Shield, Droplets, Wifi, ArrowUp, Twitter, Linkedin, Instagram } from 'lucide-react';import { useTheme } from "../context/ThemeContext";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Medical facility images from local assets
  const facilityImages = [
    "/src/assets/img/pics/p1.png",
    "/src/assets/img/pics/p2.png",
    "/src/assets/img/pics/p3.png",
    "/src/assets/img/pics/p4.png",
    "/src/assets/img/pics/p5.png",
    "/src/assets/img/pics/p6.png",
    "/src/assets/img/pics/p7.png",
    "/src/assets/img/pics/p8.png",
    "/src/assets/img/pics/p9.png",
    "/src/assets/img/pics/p10.png",
    "/src/assets/img/pics/p11.png",
    "/src/assets/img/pics/p12.png",
    "/src/assets/img/pics/p13.png",
    "/src/assets/img/pics/p14.png",
    "/src/assets/img/pics/P15.png",
    "/src/assets/img/pics/p17.png"
  ];

  // Company quotes that rotate
  const companyQuotes = [
    "Excellence in healthcare begins with exceptional infrastructure. We don't just build hospitals - we create healing environments that save lives.",
    "From vision to reality, we transform healthcare dreams into world-class facilities that serve communities for generations.",
    "Innovation, precision, and care - the three pillars that guide every project we undertake in building tomorrow's healthcare infrastructure."
  ];

  // Rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % facilityImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Rotate quotes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % companyQuotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Show scroll to top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
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

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text);
    alert(message);
  };

  const services = [
    {
      icon: Building2,
      title: "Turnkey Healthcare Infrastructure",
      description: "Complete hospital construction from ground up with cutting-edge design and planning"
    },
    {
      icon: Wind,
      title: "HVAC Systems",
      description: "Advanced climate control systems ensuring optimal patient comfort and safety"
    },
    {
      icon: Zap,
      title: "Electrical Solutions",
      description: "Comprehensive electrical infrastructure with backup power and safety systems"
    },
    {
      icon: Activity,
      title: "Medical Gas Piping",
      description: "Specialized medical gas distribution systems meeting international standards"
    },
    {
      icon: Settings,
      title: "Detailed Design & 3D Analysis",
      description: "Advanced 3D modeling and detailed engineering design for precise project execution"
    },
    {
      icon: Users,
      title: "Hospital Workflow Analysis",
      description: "Expert patient flow and operational workflow optimization for maximum efficiency"
    },
    {
      icon: Shield,
      title: "Fire Fighting Systems",
      description: "State-of-the-art fire safety and suppression systems for complete protection"
    },
    {
      icon: Droplets,
      title: "Plumbing Solutions",
      description: "Comprehensive plumbing infrastructure designed for healthcare facility requirements"
    },
    {
      icon: Wifi,
      title: "Networking & Connectivity",
      description: "Advanced low-voltage systems and building-equipment integration solutions"
    },
    {
      icon: Award,
      title: "Clinical Consultancy",
      description: "Expert operational and clinical consulting services for healthcare facilities"
    }
  ];

  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "10+", label: "Healthcare Partners" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  if (darkMode) {
    // 🌙 Dark Mode JSX
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white">
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeInUp {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .quote-animation {
              animation: fadeInUp 0.7s ease-out forwards;
            }
          `
        }} />

        {/* Company Name and Rotating Quotes */}
        <section className="pb-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center" data-animate id="company-header">
            <div className={`transform transition-all duration-1000 ${isVisible['company-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-3xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent tracking-wide">
                Swasth Truelife Healthcare Services
              </h1>
              <div className="relative h-24 flex items-center justify-center ">
                <p 
                  key={currentQuoteIndex}
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto italic absolute inset-0 flex items-center justify-center text-center px-4 quote-animation">
                  "{companyQuotes[currentQuoteIndex]}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8" data-animate id="hero-content">
                <div className={`transform transition-all duration-1000 ${isVisible['hero-content'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium mb-6">
                    Healthcare Infrastructure Excellence
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Building
                    <span className="block bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                      Healthier
                    </span>
                    Futures
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>Start Your Project</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => navigate('/our-works')}
                      className="px-8 py-4 border-2 border-teal-400 text-teal-400 rounded-lg font-semibold hover:bg-teal-400 hover:text-gray-900 transition-all duration-300">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="relative" data-animate id="hero-image">
                <div className={`transform transition-all duration-1000 delay-300 ${isVisible['hero-image'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <div className="relative h-96 mr-12 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={facilityImages[currentImageIndex]}
                      alt="Healthcare Facility"
                      className="w-full h-full object-cover transition-opacity duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm opacity-80">Modern Healthcare Facility</p>
                      <p className="font-semibold">Built with Excellence</p>
                    </div>
                  </div>
                  {/* Floating indicators */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {facilityImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-teal-400 scale-125' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-7xl mx-auto" data-animate id="stats">
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 ${isVisible['stats'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-animate id="services-header">
              <div className={`transform transition-all duration-1000 ${isVisible['services-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  From concept to completion, we provide comprehensive healthcare infrastructure solutions 
                  that meet the highest industry standards and exceed client expectations.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  data-animate
                  id={`service-${index}`}
                  className={`transform transition-all duration-1000 delay-${index * 100} ${
                    isVisible[`service-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 hover:transform hover:scale-105 border border-teal-500/20 h-full">
                    <service.icon className="h-8 w-8 text-teal-400 mb-4" />
                    <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center" data-animate id="cta">
            <div className={`transform transition-all duration-1000 ${isVisible['cta'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to Build Excellence?
              </h2>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                Partner with us to create world-class healthcare facilities that make a difference in people's lives.
              </p>
              <button className="px-10 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-teal-500/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Activity className="h-6 w-6 text-teal-400" />
                  <span className="text-lg font-bold text-white">Swasth Truelife Healthcare</span>
                </div>
                <p className="text-gray-400">
                  Building the future of healthcare infrastructure with innovation, precision, and care.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contact Info</h4>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 XXX XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>info@swasthtruelife.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Lucknow, India</span>
                  </div>
                </div>
              </div>
              <div>
  <h4 className="text-white font-semibold mb-4">Quick Links</h4>
  <div className="space-y-2 text-gray-400">
    <div className="hover:text-teal-400 cursor-pointer transition-colors" onClick={() => navigate('/about-us')}>About Us</div>
    <div className="hover:text-teal-400 cursor-pointer transition-colors" onClick={() => navigate('/services')}>Services</div>
    <div className="hover:text-teal-400 cursor-pointer transition-colors" onClick={() => navigate('/our-works')}>Portfolio</div>
    <div className="hover:text-teal-400 cursor-pointer transition-colors" onClick={() => navigate('/contact')}>Contact</div>
  </div>
</div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Swasth Truelife Healthcare Services Pvt. Ltd. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Social Media Floating Buttons */}
        <div className="fixed right-4 bottom-1/2 transform translate-y-1/2 flex flex-col space-y-3 z-50">
        <a 
    href="https://www.instagram.com/rakesh.singh123/" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
      darkMode ? 'bg-pink-500 hover:bg-pink-600 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white'
    }`}
    aria-label="Instagram"
  >
    <Instagram className="h-5 w-5" />
  </a>
          {/* Twitter Button */}
          <a 
            href="https://x.com/RakeshSVNS" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
              darkMode ? 'bg-blue-400 hover:bg-blue-500 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          
          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/in/rakesh-singh-51857b10b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'
            }`}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          
          {/* Email Button */}
          <button
            onClick={() => copyToClipboard('info@swasthtruelife.com', 'Email copied to clipboard!')}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
              darkMode ? 'bg-gray-600 hover:bg-gray-700 text-white' : 'bg-gray-700 hover:bg-gray-800 text-white'
            }`}
            aria-label="Copy Email"
          >
            <Mail className="h-5 w-5" />
          </button>
          
          {/* Phone Button */}
          <button
            onClick={() => copyToClipboard('+91 XXX XXX XXXX', 'Phone number copied to clipboard!')}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
              darkMode ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
            aria-label="Copy Phone Number"
          >
            <Phone className="h-5 w-5" />
          </button>
        </div>

        {/* Scroll to top button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 transition-all duration-300 ${
              darkMode ? 'bg-teal-500 hover:bg-teal-400 text-white' : 'bg-white hover:bg-gray-100 text-teal-600'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        )}
      </div>
    );
  }

  // ☀️ Light Mode JSX
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50 to-cyan-50 text-gray-900">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .quote-animation {
            animation: fadeInUp 0.7s ease-out forwards;
          }
        `
      }} />

      {/* Company Name and Rotating Quotes */}
      <section className="pb-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center" data-animate id="company-header-light">
          <div className={`transform transition-all duration-1000 ${isVisible['company-header-light'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-3xl lg:text-5xl font-bold  bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent tracking-wide">
                              Swasth Truelife Healthcare Services

            </h1>
            <div className="relative h-24 flex items-center justify-center ">
              <p 
                key={currentQuoteIndex}
                className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto italic absolute inset-0 flex items-center justify-center text-center px-4 quote-animation">
                "{companyQuotes[currentQuoteIndex]}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8" data-animate id="hero-content-light">
              <div className={`transform transition-all duration-1000 ${isVisible['hero-content-light'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
                  Healthcare Infrastructure Excellence
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                  Building
                  <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Healthier
                  </span>
                  Futures
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
                    <span>Start Your Project</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => navigate('/our-works')}
                    className="px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="relative" data-animate id="hero-image-light">
              <div className={`transform transition-all duration-1000 delay-300 ${isVisible['hero-image-light'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="relative h-96 mr-12 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={facilityImages[currentImageIndex]}
                    alt="Healthcare Facility"
                    className="w-full h-full object-cover transition-opacity duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm opacity-90">Modern Healthcare Facility</p>
                    <p className="font-semibold">Built with Excellence</p>
                  </div>
                </div>
                {/* Floating indicators */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {facilityImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-teal-600 scale-125' : 'bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/70">
        <div className="max-w-7xl mx-auto" data-animate id="stats-light">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 ${isVisible['stats-light'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate id="services-header-light">
            <div className={`transform transition-all duration-1000 ${isVisible['services-header-light'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Our <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From concept to completion, we provide comprehensive healthcare infrastructure solutions 
                that meet the highest industry standards and exceed client expectations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                data-animate
                id={`service-light-${index}`}
                className={`transform transition-all duration-1000 delay-${index * 100} ${
                  isVisible[`service-light-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-all duration-300 hover:transform hover:scale-105 border border-teal-200 shadow-lg hover:shadow-xl h-full">
                  <service.icon className="h-8 w-8 text-teal-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center" data-animate id="cta-light">
          <div className={`transform transition-all duration-1000 ${isVisible['cta-light'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Build Excellence?
            </h2>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Partner with us to create world-class healthcare facilities that make a difference in people's lives.
            </p>
            <button className="px-10 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-teal-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="h-6 w-6 text-teal-600" />
                <span className="text-lg font-bold text-gray-900">Swasth Truelife Healthcare</span>
              </div>
              <p className="text-gray-600">
                Building the future of healthcare infrastructure with innovation, precision, and care.
              </p>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@swasthtruelife.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Lucknow, India</span>
                </div>
              </div>
            </div>
            <div>
  <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
  <div className="space-y-2 text-gray-600">
    <div className="hover:text-teal-600 cursor-pointer transition-colors" onClick={() => navigate('/about-us')}>About Us</div>
    <div className="hover:text-teal-600 cursor-pointer transition-colors" onClick={() => navigate('/services')}>Services</div>
    <div className="hover:text-teal-600 cursor-pointer transition-colors" onClick={() => navigate('/our-works')}>Portfolio</div>
    <div className="hover:text-teal-600 cursor-pointer transition-colors" onClick={() => navigate('/contact')}>Contact</div>
  </div>
</div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 Swasth Truelife Healthcare Services Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Social Media Floating Buttons */}
      <div className="fixed right-4 bottom-1/2 transform translate-y-1/2 flex flex-col space-y-3 z-50">
      <a 
    href="https://instagram.com/yourcompany" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
      darkMode ? 'bg-pink-500 hover:bg-pink-600 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white'
    }`}
    aria-label="Instagram"
  >
    <Instagram className="h-5 w-5" />
  </a>
        {/* Twitter Button */}
        <a 
          href="https://twitter.com/yourcompany" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            darkMode ? 'bg-blue-400 hover:bg-blue-500 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
        
        {/* LinkedIn Button */}
        <a 
          href="https://linkedin.com/company/yourcompany" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'
          }`}
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        
        {/* Email Button */}
        <button
          onClick={() => copyToClipboard('info@swasthtruelife.com', 'Email copied to clipboard!')}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            darkMode ? 'bg-gray-600 hover:bg-gray-700 text-white' : 'bg-gray-700 hover:bg-gray-800 text-white'
          }`}
          aria-label="Copy Email"
        >
          <Mail className="h-5 w-5" />
        </button>
        
        {/* Phone Button */}
        <button
          onClick={() => copyToClipboard('+91 XXX XXX XXXX', 'Phone number copied to clipboard!')}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            darkMode ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
          aria-label="Copy Phone Number"
        >
          <Phone className="h-5 w-5" />
        </button>
      </div>

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 transition-all duration-300 ${
            darkMode ? 'bg-teal-500 hover:bg-teal-400 text-white' : 'bg-white hover:bg-gray-100 text-teal-600'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Home;