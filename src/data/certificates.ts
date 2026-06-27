import type { Certificate } from "../types/certificate";

export const certificates: Certificate[] = [
  {
    name: "Java Programming I",
    organization: "University of Helsinki",
    year: "2025",
    image: "https://certificates.mooc.fi/validate/7wcv0uw7urv",
    description:
      "Introduction to Java programming, object-oriented programming, methods, collections, exception handling and software development fundamentals.",
    topics: ["OOP", "Algorithms", "Data Structures", "File I/O"],
    url: "https://certificates.mooc.fi/validate/7wcv0uw7urv",
  },
  {
    name: "Java Programming II",
    organization: "University of Helsinki",
    year: "2026",
    image: "https://certificates.mooc.fi/validate/7wcv0uw7urv",
    description:
      "Advanced Java covering streams, generics, interfaces, file handling, algorithms and larger object-oriented applications.",
    topics: ["HashMap", "Streams", "Generics", "Lambdas"],
    url: "https://certificates.mooc.fi/validate/8evb1ie8itb",
  },
  {
    name: "Future Certification",
    organization: "Coming Soon",
    year: "-",
    image: "https://certificates.mooc.fi/validate/7wcv0uw7urv",
    description:
      "A new certification is on its way. Stay tuned for the next milestone in this ongoing learning journey.",
    topics: [],
    comingSoon: true,
  },
];
