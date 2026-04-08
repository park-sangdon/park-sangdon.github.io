import { LabInfo } from "./types";

export const LAB_INFO: LabInfo = {
  name: "SBCML",
  fullName: "Smart Bio-Computing & Machine Learning Lab",
  professor: "Sun-Young Ihm",
  university: "Hanyang University",
  department: "Department of Computer Science and Engineering",
  location: "Hanyang University, 222 Wangsimni-ro, Seongdong-gu, Seoul, South Korea",
  email: "syihm@hanyang.ac.kr",
  phone: "+82-2-2220-XXXX",
  researchAreas: [
    {
      title: "Bio-Computing",
      description: "Developing computational methods to analyze biological data, including genomics, proteomics, and metabolomics.",
      icon: "Dna"
    },
    {
      title: "Machine Learning",
      description: "Advancing deep learning and statistical models for complex data analysis and pattern recognition.",
      icon: "Brain"
    },
    {
      title: "Health Informatics",
      description: "Applying AI to electronic health records and medical imaging for improved diagnosis and treatment planning.",
      icon: "Activity"
    },
    {
      title: "Data Mining",
      description: "Extracting meaningful patterns and knowledge from large-scale heterogeneous datasets.",
      icon: "Database"
    }
  ],
  publications: [
    {
      title: "Deep Learning for Genomic Sequence Analysis",
      authors: "S.Y. Ihm, et al.",
      venue: "Bioinformatics",
      year: 2024,
      type: "Journal"
    },
    {
      title: "Multi-modal Fusion for Medical Image Classification",
      authors: "S.Y. Ihm, et al.",
      venue: "IEEE Access",
      year: 2023,
      type: "Journal"
    },
    {
      title: "Graph Neural Networks in Protein-Protein Interaction",
      authors: "S.Y. Ihm, et al.",
      venue: "KDD",
      year: 2023,
      type: "Conference"
    }
  ],
  members: [
    {
      name: "Sun-Young Ihm",
      role: "Principal Investigator / Professor",
      description: "Leading research in Bio-Computing and Machine Learning.",
      email: "syihm@hanyang.ac.kr"
    },
    {
      name: "John Doe",
      role: "Ph.D. Candidate",
      description: "Researching Graph Neural Networks for Bioinformatics."
    },
    {
      name: "Jane Smith",
      role: "Master's Student",
      description: "Focusing on Medical Image Analysis."
    }
  ]
};
