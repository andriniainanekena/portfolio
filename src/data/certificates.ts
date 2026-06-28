import type { Certificate } from "../types/certificate";

export const certificates: Certificate[] = [
  {
    name: "Java Programming II",
    organization: "University of Helsinki",
    year: "2026",
    image: "https://certificates.mooc.fi/validate/7wcv0uw7urv",
    description:
      "Advanced Java covering streams, generics, interfaces, file handling, algorithms and larger object-oriented applications.(In progress)",
    topics: ["HashMap", "Streams", "Generics", "Lambdas"],
    url: "https://certificates.mooc.fi/validate/8evb1ie8itb",
  },
  {
    name: "JavaScript CodinGame",
    organization: "CodinGame",
    year: "2026",
    image: `${import.meta.env.BASE_URL}certificates/javascript.png`,
    description:
      "JavaScript certification from CodinGame, validating problem-solving skills through algorithmic challenges.",
    topics: ["Algorithms", "Array methods"],
    url: "https://www.codingame.com/certification/xkmNpShx8HmIAmJWDCBm8w",
  },
  {
    name: "Java Programming I",
    organization: "University of Helsinki",
    year: "2025",
    image: "https://certificates.mooc.fi/validate/7wcv0uw7urv",
    description:
      "Introduction to Java programming, object-oriented programming, methods, collections and exception handling.",
    topics: ["OOP", "Algorithms", "Data Structures", "File I/O"],
    url: "https://certificates.mooc.fi/validate/7wcv0uw7urv",
  },
];
