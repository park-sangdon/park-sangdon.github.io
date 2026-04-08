import { LabInfo } from "./types";

export const LAB_INFO: LabInfo = {
  name: "Sangdon Park",
  fullName: "Sangdon Park's Personal Site",
  professor: "Sangdon Park",
  university: "KAIST",
  department: "Information & Electronics Research Institute",
  location: "KAIST, E3-2, Room 3206, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, Republic of Korea",
  email: "sangdon.park@kaist.ac.kr",
  phone: "+82-10-2523-3824",
  researchAreas: [
    {
      title: "AI-Driven Interactive Systems",
      description:
        "Building AI-driven interactive systems for gaming applications, with an emphasis on deployable product behavior rather than lab-only demos.",
      icon: "Brain",
    },
    {
      title: "Computational Dialogue Frameworks",
      description:
        "Designing natural-language dialogue frameworks, modular dialogue systems, and dynamic memory systems for character interaction.",
      icon: "Database",
    },
    {
      title: "Immersive Character Intelligence",
      description:
        "Exploring emotional intelligence frameworks, procedural narrative, and world-building systems for immersive character behavior.",
      icon: "Activity",
    },
    {
      title: "Optimization, Edge, and IoT Systems",
      description:
        "Prior research spans edge computing, dynamic pricing, smart-grid energy trading, IoT data markets, and optimization-driven system design.",
      icon: "Dna",
    },
  ],
  publications: [
    {
      title: "Differential Pricing-based Task Offloading for Delay-Sensitive IoT Applications in Mobile Edge Computing System",
      authors: "Hyeonseok Seo, Hyeontaek Oh, Jun Kyun Choi, Sangdon Park*",
      venue: "IEEE Internet of Things Journal",
      year: 2022,
      type: "Journal",
    },
    {
      title: "Energy scheduling scheme for a charging facility considering the satisfaction of electric vehicle users",
      authors: "Jangkyum Kim, Joohyung Lee*, Sangdon Park, Jun Kyun Choi",
      venue: "IEEE Access",
      year: 2021,
      type: "Journal",
    },
    {
      title: "Competitive Data Trading Model with Privacy Valuation for Multiple Stakeholders in IoT Data Markets",
      authors: "Hyeontaek Oh, Sangdon Park*, Gyu Myoung Lee, Jun Kyun Choi, Sungkee Noh",
      venue: "IEEE Internet of Things Journal",
      year: 2020,
      type: "Journal",
    },
  ],
  members: [
    {
      name: "Sangdon Park",
      role: "Researcher / Site Owner",
      description:
        "Researching AI-driven interactive systems, dialogue architectures, immersive character intelligence, and optimization-based systems.",
      email: "sangdon.park@kaist.ac.kr",
      links: {
        googleScholar: "https://scholar.google.com/citations?hl=en&user=JZFDtsgAAAAJ",
      },
    },
    {
      name: "Sayberry Games",
      role: "Industry Collaboration",
      description:
        "Current collaboration partner for building AI-powered interactive systems for gaming applications.",
    },
  ],
};
