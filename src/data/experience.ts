export interface Experience {
  year: number;
  role: string;
  company: string;
  url: string;
  tagline: string;
}

export const experience: Experience[] = [
  {
    year: 2025,
    role: "Director of Lifecycle Marketing",
    company: "Relay",
    url: "https://relayfi.com",
    tagline: "a financial platform built for small-business owners.",
  },
  {
    year: 2022,
    role: "Director of Lifecycle Marketing",
    company: "Homebase",
    url: "https://joinhomebase.com",
    tagline: "a workforce platform for hourly teams.",
  },
  {
    year: 2018,
    role: "Head of Lifecycle Marketing",
    company: "Wealthsimple",
    url: "https://wealthsimple.com",
    tagline:
      "where I built the function from scratch and launched TLDR, a financial newsletter that became one of Canada's most-read.",
  },
  {
    year: 2016,
    role: "Marketing Automation",
    company: "Shopify",
    url: "https://shopify.com",
    tagline:
      "part of the original growth team scaling the platform through its post-IPO era.",
  },
  {
    year: 2013,
    role: "Marketing Specialist",
    company: "BlackBerry",
    url: "https://blackberry.com",
    tagline: "when the smartphone they made was still the one everyone wanted.",
  },
];
