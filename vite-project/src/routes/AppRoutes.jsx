// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Facilities from "../pages/Facilities";
import OurProcesses from "../pages/OurProcesses";
import OurWorks from "../pages/OurWorks";
import Compliance from "../pages/Compliance";
import Partners from "../pages/Partners";
import Founders from "../pages/Founders";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import ChatAssist from "../pages/ChatAssist";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/our-processes" element={<OurProcesses />} />
      <Route path="/our-works" element={<OurWorks />} />
      <Route path="/compliance" element={<Compliance />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/founders" element={<Founders />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/chat-assist" element={<ChatAssist />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
