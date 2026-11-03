const DEFAULT_WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || "918593996533";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Aboobacker! I saw your portfolio and would love to discuss a project / role with you.";

export const profile = {
  name: "Aboobacker",
  brand: "Abu.",
  handle: "@abucodess",
  role: "Frontend Developer & React.js Creator",
  shortRole: "Frontend Developer | React.js Developer",
  company: "BetterInu",
  location: "Kerala, India",
  phoneDisplay: "+91 8593996533",
  whatsappNumber: DEFAULT_WHATSAPP_NUMBER,
  whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
  education: "BCA · JAIN (Deemed-to-be University)",
  educationPeriod: "2026 – 2029 (Online Program)",
  email: "abubackermax10@gmail.com",
  portfolioUrl: "https://aboobacker-portfolio.vercel.app",
  resumeUrl: "/resume.pdf",
  aboutImage: "/images/profile.jpg",
  heroPortraitWebp: "/images/aboobacker_hero_studio.webp",
  heroPortraitPng: "/images/aboobacker_hero_studio.png",
  socials: {
    github: "https://github.com/abucodess",
    linkedin: "https://www.linkedin.com/in/abubacker-ai",
    email: "mailto:abubackermax10@gmail.com",
  },
};

export function getWhatsAppUrl(customMessage = profile.whatsappMessage) {
  const digits = String(profile.whatsappNumber || "918593996533").replace(
    /\D/g,
    ""
  );
  const normalized = digits.length === 10 ? `91${digits}` : digits;
  const encoded = encodeURIComponent(customMessage);
  return `https://wa.me/${normalized}?text=${encoded}`;
}
