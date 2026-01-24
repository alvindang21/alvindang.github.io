export interface Experience {
  company: string;
  role: string;
  years: string;
  description: string;
  url: string;
  logo: "relay" | "homebase" | "wealthsimple" | "shopify" | "blackberry";
}

export const experience: Experience[] = [
  {
    company: "Relay",
    role: "Director, Lifecycle Marketing",
    years: "2024–Present",
    description: "Building growth systems for SMB fintech. Leading lifecycle strategy across onboarding, activation, and retention.",
    url: "https://relayfi.com",
    logo: "relay",
  },
  {
    company: "Homebase",
    role: "Director, Lifecycle Marketing",
    years: "2022–2024",
    description: "Built Lifecycle and Top-of-Funnel functions from scratch. Helped secure $60M Series D through growth initiatives.",
    url: "https://joinhomebase.com",
    logo: "homebase",
  },
  {
    company: "Wealthsimple",
    role: "Head of Lifecycle → Growth PM",
    years: "2018–2022",
    description: "Scaled team from 1 to 15. Built TLDR newsletter, grew to 2B messages/year. Drove growth from $350M to $5B AUM.",
    url: "https://wealthsimple.com",
    logo: "wealthsimple",
  },
  {
    company: "Shopify",
    role: "Marketing Automation Specialist",
    years: "2016–2018",
    description: "Global lifecycle programs for Shopify Core, Capital, and Shipping. Post-IPO growth phase.",
    url: "https://shopify.com",
    logo: "shopify",
  },
  {
    company: "BlackBerry",
    role: "Marketing Specialist, CRM",
    years: "2013–2014",
    description: "BB10 Global Welcome program. Early career foundation in CRM and lifecycle marketing.",
    url: "https://blackberry.com",
    logo: "blackberry",
  },
];

export const companyLogos: Record<Experience["logo"], string> = {
  relay: `<svg viewBox="0 0 121 62" fill="currentColor"><path d="M14.7 36.8c5.3 4.6 20.8 12.3 21 12.4 2-1 1.1 3.8-.5 5.8-2.8 0-19.5-10-25.1-15.1.4 3.8.3 7.6.4 11.4 0 1.2-2 1.3-4 1.4-1.9.1-3.3 0-3.4-1-.6-19.5 7.7-38.9 19.1-48.2 7.1-5.7 19.2-4.9 17.4 6.1-1.5 9-10.2 21.5-21.8 27.3zM9.3 32.6c12.7-4.2 24.2-22.8 20.5-26-3.7-3.2-16 8.1-20.5 26zm109.2-11.3c-1.6-.6-3.7-.6-4 .7-1.9 8.7-5.2 18.2-9.1 17-.2-.5-1.3-2.3 2.3-13.5.4-1.3-.5-1.9-2-2.4-1.4-.5-3-.3-3.3.6-3.9 9.6-7 15.1-9.8 14.5-3.2-.6 1.5-10.6 2.2-12 .7-1.4-1.1-2.2-2-2.6-1-.4-2.4-1-2.9 0-.2.3-.7 1.2-.9 1.8.2-4-.4-6.1-4.5-4.3-7.4 3.2-11.4 11.4-11.9 16.2-.3 2.8.4 6 3.2 7.4 5.3 2.5 11.1-3.8 12.7-7.1-.2 4 2.4 6.4 5.7 6.3 4.4-.2 7.6-4.5 8.5-6.4-.7 6.6 5.5 9.1 10 5.9-2.7 5.2-6.1 10-10 14.3-1.1 1.3.5 2.8 1 3.4 1 1 2.4 1.7 3.2 1.1 2.4-1.7 7.2-7 12.5-17.5 2.9-6.3 5-12.9 6.3-19.7.3-1.7-.2-2.5-2.3-3.3zm-43.5 17c-1.4-1-1.4-5.1.2-7.6 2.2-3.6 5.6-6.3 7-5.1 2.2 1.7-.9 6.1-2.5 8.7-1.6 2.6-4.3 5.3-6.1 4zm-18.2-4.2c-5.1 8.5-11.7 11.2-16.3 11.3-1.4.1-2.7-.1-4-.6s-2.4-1.3-3.4-2.3c-.9-1-1.6-2.2-2.1-3.4-.4-1.3-.6-2.7-.5-4 .2-3 1.3-5.9 3-8.5 1.8-2.5 4.2-4.4 7-5.6 5.6-2.1 10.7 2 9.6 6.7-.3 1.4-.8 2.7-1.6 3.9-.8 1.2-1.8 2.2-3 3-.6.4-1.3.8-2 1-1.4.3-2.8.2-4.2-.1.3 3.4 3.9 5.2 8.9 2.6 3.4-1.7 7.1-5 10.6-13.5 2.6-6.4 6.3-19.5 8-22.4.5-.8 2.2-.6 3.7.1 1.5.7 3 1.8 2.5 3.1-3 7.7-5.4 15.7-7 23.9-1.3 6.6-1.1 13.5.5 19.1.4 1.4-1.4 2.3-2.5 2.5-.6.2-1.3.2-2-.1-.6-.2-1.2-.6-1.5-1.2-2.8-5-2.5-11.2-1.8-17zm-19.4-1.9c5.2 1.7 9.7-4 8.1-6.3-1.6-2.3-7.4.3-8.1 6.3z"/></svg>`,
  homebase: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L4 9v12h5v-7h6v7h5V9l-8-6zm0 2.5l6 4.5v9h-2v-7H8v7H6v-9l6-4.5z"/></svg>`,
  wealthsimple: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 7h3.5l2.5 8.5L11 7h2l3 8.5L18.5 7H22l-5 14h-3l-3-8.5L8 21H5L2 7z"/></svg>`,
  shopify: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.34 24l7.22-1.56s-2.6-17.61-2.63-17.73c-.02-.12-.11-.19-.21-.19s-1.93-.14-1.93-.14-1.28-1.27-1.44-1.41a.182.182 0 00-.12-.07l-.91 21.1zm-3.63-12.69s-.81-.42-1.77-.42c-1.45 0-1.5.91-1.5 1.14 0 1.23 3.24 1.71 3.24 4.63 0 2.3-1.44 3.76-3.41 3.76-2.35 0-3.54-1.47-3.54-1.47l.65-2.09s1.24 1.07 2.28 1.07c.67 0 .97-.54.97-.93 0-1.62-2.65-1.69-2.65-4.36-.03-2.24 1.57-4.42 4.83-4.42 1.26 0 1.87.36 1.87.36l-.95 2.72-.02.01zM11.17.83c.14 0 .27.04.41.14-.98.46-2.06 1.64-2.51 3.99l-1.89.58C7.7 3.75 8.95.84 11.17.84v-.01zm1.24 2.95v.14c-.75.23-1.58.48-2.39.73.46-1.78 1.33-2.64 2.08-2.97.19.5.31 1.18.31 2.1zm.54-2.23c.7.07 1.14.87 1.43 1.76l-1.16.37v-.25c0-.75-.1-1.37-.27-1.87v-.01zm2.99 1.29c-.02 0-.06.02-.08.02s-.29.08-.71.21c-.42-1.23-1.18-2.37-2.51-2.37h-.12C12.14.21 11.67 0 11.27 0 8.16 0 6.68 3.88 6.21 5.85c-1.19.36-2.06.64-2.16.67-.67.21-.69.23-.77.87-.08.46-1.83 14.06-1.83 14.06L15.01 24l.93-21.17z"/></svg>`,
  blackberry: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.05 3.54L1.17 7.7H4.45C6.97 7.7 7.73 6.47 7.73 5.36 7.73 4.54 7.26 3.54 5.21 3.54H2.05M10.54 3.54L9.66 7.7H12.94C15.5 7.7 16.22 6.47 16.22 5.36 16.22 4.54 15.75 3.54 13.7 3.54H10.54M18.32 7.23L17.39 11.39H20.67C23.24 11.39 24 10.22 24 9.05 24 8.23 23.53 7.23 21.5 7.23H18.32M.88 9.8L0 13.96H3.28C5.85 13.96 6.56 12.73 6.56 11.62 6.56 10.8 6.09 9.8 4.04 9.8H.88M9.43 9.8L8.5 13.96H11.77C14.34 13.96 15.11 12.73 15.11 11.62 15.11 10.8 14.64 9.8 12.59 9.8H9.42M17.09 13.73L16.22 17.88H19.5C22 17.88 22.77 16.71 22.77 15.54 22.77 14.72 22.3 13.73 20.26 13.73H17.09M8.2 16.3L7.32 20.46H10.6C13.11 20.46 13.87 19.23 13.87 18.12 13.87 17.3 13.41 16.3 11.36 16.3H8.2Z"/></svg>`,
};
