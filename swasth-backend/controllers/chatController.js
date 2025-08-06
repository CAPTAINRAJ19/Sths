import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// SWASTH TRUE LIFE Company Info – This is injected into Gemini as memory
const companyContext = `
SWASTH TRUE LIFE HEALTHCARE SERVICES PRIVATE LIMITED, incorporated on 26th February 2024, is a leading provider of turnkey healthcare infrastructure solutions in India. The company specializes in delivering comprehensive, end-to-end projects for hospitals and healthcare facilities, managing every phase from initial concept and feasibility analysis to detailed 3D design, construction, and final commissioning. SWASTH TRUE LIFE addresses the complete spectrum of modern healthcare infrastructure requirements—civil works, electrical systems, medical gas piping, HVAC, fire fighting, plumbing, networking, and integrated connectivity—ensuring that facilities are state-of-the-art, compliant, and optimized for both safety and efficiency.

The company was founded by Rakesh Bahadur Singh and Ratnesh Kumar Tiwari, both serving as key directors and strategic decision-makers. Registered at RoC-Bangalore and holding Corporate Identification Number (CIN) U21001KA2024PTC185387, the company operates with an authorized share capital of ₹10,00,000 and a paid-up capital of ₹2,00,000. SWASTH TRUE LIFE is categorized as a privately held, non-government company, and serves healthcare organizations and providers across India.

Central to the company’s offerings is an advanced consultative approach. This begins with in-depth project analysis—covering client requirements, landscape, regulatory constraints, and operational needs—followed by comprehensive design and planning services. Leveraging advanced 3D visualization and hospital-specific workflow optimization, SWASTH TRUE LIFE develops tailored solutions that enhance both patient care and facility operations. The team ensures all projects strictly adhere to relevant codes, regulatory standards, and best practices, prioritizing both safety and innovation.

Execution of each project includes complete civil and technical construction with integration of all building utilities, installation of advanced medical and technical systems, and meticulous commissioning processes. Through collaborations with leading global medical technology providers such as Philips, Siemens, GE Healthcare, and Roche, SWASTH TRUE LIFE guarantees access to the newest med-tech solutions for every facility it develops.

The company’s process is defined by systematic project management, transparency at each phase, and a strong focus on operational excellence. This involves continuous client engagement, clear milestone tracking, and robust oversight—ensuring on-time and on-budget delivery. Consultancy services extend into operational optimization, offering strategies to improve efficiency, regulatory compliance, and the quality of patient care environments.

A commitment to quality, trust, and long-term partnerships drives SWASTH TRUE LIFE’s business philosophy. The growing portfolio includes projects with virtual tours and walkthrough videos, demonstrating effective delivery and transformative impact across diverse healthcare settings in India.

SWASTH TRUE LIFE HEALTHCARE SERVICES PRIVATE LIMITED is positioned as a benchmark for quality in healthcare infrastructure, offering a blend of technical expertise, regulatory adherence, and a vision for sustainable, advanced healthcare environments.
`;

export const handleChat = async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Invalid message format' });
    }

    if (messages[0].role !== 'user') {
      return res.status(400).json({ error: 'First message must be from user' });
    }

    // Add custom context and message history
    const contents = [
      {
        role: 'user',
        parts: [{
          text: `
From now on, you are a helpful virtual assistant for **SWASTH TRUE LIFE HEALTHCARE SERVICES PRIVATE LIMITED**.
You are not Gemini — you work for this company and will answer questions as its official representative.
Do not say you can't find information about the company. Use the following description to answer all questions:

${companyContext}
`
        }]
      },
      ...messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      }))
    ];

    // Make request to Gemini 2.0 Flash
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents }),
      }
    );

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error('❌ Gemini API Error:', errorDetails);
      return res.status(500).json({ error: 'Gemini API Error', details: errorDetails });
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, no response generated.';

    res.json({ reply });
  } catch (error) {
    console.error('❌ Server Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
