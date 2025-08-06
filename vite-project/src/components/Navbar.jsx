import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import logoWhite from '/assets/img/logoteal2.png';
import logoBlack from '/assets/img/logoblack.png';

import {
  auth,
  provider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "../firebase";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About us" },
    { path: "/blogs", label: "Blogs" },
    { path: "/chat-assist", label: "Chat " },
    { path: "/contact", label: "Contact" }
  ];

  const companyDropdown = [
    { path: "/services", label: "Services" },
    { path: "/facilities", label: "Facilities" },
    { path: "/our-processes", label: "Our processes" },
    { path: "/compliance", label: "Compliance" }
  ];

  const workDropdown = [
    { path: "/our-works", label: "Our works" },
    { path: "/partners", label: "Partners" },
    { path: "/founders", label: "Founders" }
  ];

  const DropdownIcon = () => (
    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const NavLink = ({ to, children, className = "", disableClose = false }) => (
    <Link
      to={to}
      className={`px-3 py-2 rounded-lg transition-colors ${className}`}
      onClick={() => {
        if (!disableClose) closeDropdowns();
      }}
    >
      {children}
    </Link>
  );

  const DropdownMenu = ({ items, isOpen, bgClass, hoverClass }) =>
    isOpen && (
      <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50 border ${bgClass}`}>
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={`block px-4 py-2 hover:opacity-90 ${hoverClass}`}
            disableClose
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    );

  const MobileDropdown = ({ items, name, hoverClass }) => (
    <div>
      <button
        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${hoverClass} ${
          openDropdown === `${name}-mobile` ? (darkMode ? "bg-teal-800" : "bg-teal-100") : ""
        }`}
        onClick={() => toggleDropdown(`${name}-mobile`)}
      >
        <span>{name}</span>
        <DropdownIcon />
      </button>
      {openDropdown === `${name}-mobile` && (
        <div className="ml-4 mt-1 space-y-1">
          {items.map((item) => (
            <NavLink key={item.path} to={item.path} className={`block ${hoverClass}`}>
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );

  const styles = darkMode
    ? {
        nav: "bg-gray-900 text-white",
        hover: "hover:bg-teal-800",
        dropdownBg: "bg-gray-800 border-gray-700",
        dropdownHover: "hover:bg-teal-900",
        mobileHover: "hover:bg-teal-800",
        themeIcon: "☀️",
        themeText: "Switch to light mode"
      }
    : {
        nav: "bg-white text-black",
        hover: "hover:bg-teal-100",
        dropdownBg: "bg-white border-gray-200",
        dropdownHover: "hover:bg-teal-50",
        mobileHover: "hover:bg-teal-100",
        themeIcon: "🌙",
        themeText: "Switch to dark mode"
      };

  return (
    <nav className={`${styles.nav} shadow-lg sticky top-0 z-40`}>
      <div className="w-full flex items-center justify-between py-1">
        <div className="pl-[8px]">
          <Link to="/" className="flex items-center">
            <img
              src={darkMode ? logoWhite : logoBlack}
              alt="Swasth truelife healthcare services"
              className="h-10 w-12 rounded-3xl"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-2 pr-[8px]">
          <div className="hidden md:flex items-center space-x-2">
            {navItems.slice(0, 2).map((item) => (
              <NavLink key={item.path} to={item.path} className={styles.hover}>
                {item.label}
              </NavLink>
            ))}

            <div className="relative">
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${styles.hover} ${
                  openDropdown === "company" ? (darkMode ? "bg-teal-800" : "bg-teal-100") : ""
                }`}
                onClick={() => toggleDropdown("company")}
              >
                Company <DropdownIcon />
              </button>
              <DropdownMenu
                items={companyDropdown}
                isOpen={openDropdown === "company"}
                bgClass={styles.dropdownBg}
                hoverClass={styles.dropdownHover}
              />
            </div>

            <div className="relative">
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${styles.hover} ${
                  openDropdown === "work" ? (darkMode ? "bg-teal-800" : "bg-teal-100") : ""
                }`}
                onClick={() => toggleDropdown("work")}
              >
                Our works <DropdownIcon />
              </button>
              <DropdownMenu
                items={workDropdown}
                isOpen={openDropdown === "work"}
                bgClass={styles.dropdownBg}
                hoverClass={styles.dropdownHover}
              />
            </div>

            {navItems.slice(2).map((item) => (
              <NavLink key={item.path} to={item.path} className={styles.hover}>
                {item.label}
              </NavLink>
            ))}

            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 font-medium text-white rounded-full"
              >
                Hi {user.displayName.split(" ")[0]}
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 font-medium text-white rounded-full"
              >
                Login
              </button>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className={`hidden md:block p-2 rounded-full transition-colors ${styles.hover}`}
            aria-label="Toggle theme"
          >
            {styles.themeIcon}
          </button>

          <div className="md:hidden flex items-center gap-[1.5px]">
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setOpenDropdown(null);
              }}
              className={`p-2 rounded-md focus:outline-none ${styles.mobileHover}`}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden pb-4 px-2">
          <div className="flex flex-col space-y-2">
            {navItems.slice(0, 2).map((item) => (
              <NavLink key={item.path} to={item.path} className={styles.mobileHover}>
                {item.label}
              </NavLink>
            ))}

            <MobileDropdown items={companyDropdown} name="Company" hoverClass={styles.mobileHover} />
            <MobileDropdown items={workDropdown} name="Our works" hoverClass={styles.mobileHover} />

            {navItems.slice(2).map((item) => (
              <NavLink key={item.path} to={item.path} className={styles.mobileHover}>
                {item.label}
              </NavLink>
            ))}

            {user ? (
              <button
                onClick={handleLogout}
                className="px-3 py-2 bg-teal-600 hover:bg-teal-700 font-medium text-white text-center"
              >
                Hi {user.displayName.split(" ")[0]}
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="px-3 py-2 bg-teal-600 hover:bg-teal-700 font-medium text-white text-center"
              >
                Login
              </button>
            )}

            <button
              onClick={toggleTheme}
              className={`px-3 py-2 rounded-lg transition-colors text-left ${styles.mobileHover}`}
            >
              {styles.themeText}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
