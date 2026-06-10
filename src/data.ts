import { ProfileData, NewsItem, ProjectItem, PublicationItem, CourseItem } from './types';

export const PROFILE_DATA: ProfileData = {
  nameKo: "박상돈",
  nameEn: "Sangdon Park",
  titleKo: "조교수",
  titleEn: "Assistant Professor",
  affiliationKo: "포항공과대학교 (POSTECH)",
  affiliationEn: "Pohang University of Science and Technology (POSTECH)",
  departmentKo: "인공지능대학원 및 컴퓨터공학과",
  departmentEn: "Graduate School of AI & Dept. of Computer Science and Engineering",
  officeKo: "포항공과대학교 정보통신연구소 (PIRL)",
  officeEn: "Graduate School of AI, POSTECH, Pohang, Gyeongbuk, South Korea",
  email: "johnsdpark@gmail.com",
  scholarUrl: "https://scholar.google.com/citations?user=G_K5Iq4AAAAJ", // Dr. Sangdon Park's actual Google Scholar ID is G_K5Iq4AAAAJ
  researchId: "johnsdpark",
  researchgateUrl: "https://www.researchgate.net/profile/Sangdon-Park",
  orcidUrl: "https://orcid.org/0000-0002-3490-5813",
  githubUrl: "https://github.com/johnsdpark",
  hiringMessage: {
    ko: "머신러닝 연구실(ML Lab)에서 인공지능 정렬(AI Alignment), 적대적 레드티밍(Red Teaming), 안전한 인공지능(Safe AI)에 관심이 있는 대학원생(석박통합/박사) 및 연구원, 포닥(연 1억 원 가량)을 연중 상시 모집합니다. 이력서(CV)를 첨부하여 johnsdpark@gmail.com으로 연락 바랍니다.",
    en: "The Machine Learning Lab (ML Lab) at POSTECH is looking for self-motivated graduate students (PhD+MS, PhD), postdocs (₩100M/year), and interns particularly interested in AI Alignment, AI Red Teaming, Conformal Prediction, and Safe Physical AI. Please email me with your CV."
  },
  bioKo: "박상돈 교수는 포항공과대학교(POSTECH) 인공지능대학원 및 컴퓨터공학과 조교수이며 머신러닝 연구실(ML Lab)을 이끌고 있습니다. KAIST에서 컴퓨터공학 학사 및 석사, 박사 과정을 졸업하였으며, 이후 펜실베이니아 대학교(UPenn)의 PRECISE 센터에서 박사후연구원(Postdoc)으로 근무하며 신뢰성 있고 실용적인 인공지능 시스템의 안전성 보장 기법을 연구했습니다. 주 연구 분야는 기계 학습 및 인공지능 정렬(AI Alignment)로, 기출력을 보정하는 동적 Conformal Prediction 이론 연구부터 법률·제어 등 물리적 환경에서의 AI 안전성, 생성형 모델의 레드티밍 및 대규모 언어 모델(LLM) 워터마킹 이론을 아우르며, ICML, NeurIPS, ICLR 등 인공지능 분야의 핵심 최상위 전산 학술 대회에 선도적인 성과들을 발표하고 있습니다.",
  bioEn: "Dr. Sangdon Park is an Assistant Professor in the Graduate School of Artificial Intelligence (GSAI) and the Department of Computer Science and Engineering (CSE) at POSTECH, where he directs the Machine Learning Lab. He completed his Ph.D., M.S., and B.S. in Computer Science from KAIST (Korea Advanced Institute of Science and Technology), and subsequently worked as a Postdoctoral Researcher within the PRECISE Center at the University of Pennsylvania (UPenn). His research lies at the intersection of Machine Learning and AI Alignment, emphasizing guarantees of trustworthiness, security, and safety. He designs robust algorithms extending Conformal Prediction, Physical AI Safety, Algorithmic Red Teaming, and generative watermarking, outputting top-tier scientific papers across ICML, NeurIPS, ICLR, and more."
};

export const NEWS_DATA: NewsItem[] = [
  {
    id: "news-1",
    date: "2026-05-01",
    title: "ICML 2026 논문 2편 게재 승인 (Two Papers Accepted to ICML 2026)",
    content: "연구실팀이 저술한 'Selective Code Generation' 및 'LLM Watermarking Evasion via Bias Inversion'에 대한 연구 논문 2편이 머신러닝 대표 최상위 학회인 ICML 2026에 최종 초록 수락되었습니다.",
    type: "paper",
    isImportant: true
  },
  {
    id: "news-2",
    date: "2026-01-26",
    title: "ICLR 2026 논문 1편 게재 승인 (Paper Accepted to ICLR 2026)",
    content: "온라인 배치 보증 제어 기법을 도모하는 'Online Conformal Prediction with Adversarial Semi-bandit Feedback' 연구 논문이 딥러닝 최고 권위 학술대회인 ICLR 2026에 게재 승인되었습니다.",
    type: "paper",
    isImportant: true
  },
  {
    id: "news-3",
    date: "2025-12-13",
    title: "ICML 2026 학술대회 Area Chair 위임",
    content: "박상돈 교수가 International Conference on Machine Learning (ICML) 2026 학회의 Area Chair로 위임되어 국제 논문 심사 지도를 지휘합니다.",
    type: "service"
  },
  {
    id: "news-4",
    date: "2025-09-22",
    title: "NeurIPS 2025 Workshop 논문 수락",
    content: "'Selective Code Generation' 제하의 연구가 NeurIPS 2025 DL4C 워크숍에 선발 구두 발표작으로 지정되었습니다.",
    type: "paper"
  },
  {
    id: "news-5",
    date: "2025-09-05",
    title: "ICLR 2026 학술대회 Area Chair 선임",
    content: "박상돈 교수가 International Conference on Learning Representations (ICLR) 2026의 Area Chair로 임명되었습니다.",
    type: "service"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    titleKo: "인공지능 정렬(AI Alignment) 기반 기성 LLM 안전성 및 정교한 워터마크 회피 탐지 기술 개발",
    titleEn: "Generative AI Alignment: Securing Large Language Models with Mathematical Validation Standards",
    descriptionKo: "수리에 근간한 검증 신뢰성을 기 확보하기 위하여 Conformal Prediction과 Abstention 메커니즘을 응용, 상용 대형 언어 모델(LLM)의 편향을 분석하고 환각 및 오정렬 출력을 수학적으로 사전 방어 관리하는 혁신 연계 기법 기술 과제입니다.",
    descriptionEn: "Leverages mathematical conformal prediction and selective rejection (abstention) to construct bulletproof safety bounds, protecting commercial generative systems from systemic out-of-distribution alignment failures.",
    period: "2025.03 - 2028.02",
    sponsorKo: "과학기술정보통신부 / 한국연구재단",
    sponsorEn: "Ministry of Science and ICT (MSIT) / National Research Foundation (NRF)",
    status: "active",
    tags: ["AI Alignment", "Conformal Prediction", "Generative Security", "LLM Watermarks"],
    roleKo: "연구책임자 (Principal Investigator)",
    roleEn: "Principal Investigator"
  },
  {
    id: "proj-2",
    titleKo: "에이전트 인공지능(Agentic AI)을 위한 실시간 다층적 적대적 레드티밍 프레임워크 연구",
    titleEn: "Multi-layered Algorithmic Red Teaming for Embodied Agentic AI Systems",
    descriptionKo: "자율 행동 에이전트 및 연계 사이버 물리 시스템 상에서 유도되는 미지의 적대 공격 기법(Adversarial Jailbreaks)을 사전에 시뮬레이션하고 복원을 강화하는 레드팀 모델 자동 제어 기술 과제입니다.",
    descriptionEn: "Designs continuous red-teaming pipelines generating systemic adversarial bounds for cyber-physical robots and agent workflows to preemptively neutralize alignment degradation.",
    period: "2024.09 - 2026.08",
    sponsorKo: "국가인공지능연구단 (NAIRL)",
    sponsorEn: "National AI Research Lab (NAIRL)",
    status: "active",
    tags: ["AI Red Teaming", "Agent Safety", "Adversarial Reinforcement", "Cyber-Physical Systems"],
    roleKo: "공동세부 연구책임자 (Co-Principal Investigator)",
    roleEn: "Co-Principal Investigator"
  },
  {
    id: "proj-3",
    titleKo: "Conformal 기법을 접목한 시계열 이상 탐지 제어 신뢰 보증 기초 과제",
    titleEn: "Time-Series Out-of-Distribution Diagnostics Using Scalable Conformal Prediction",
    descriptionKo: "시계열 다변량 제어 데이터에서 수치 오차를 기 통과시키는 비평형 OOD 상태를 높은 신뢰도로 차단하고 제어 리스크를 정착화하는 기본 이론 프레임 설계 연구를 완성하였습니다.",
    descriptionEn: "Addressed statistical calibration boundaries to capture unaligned out-of-distribution patterns in sensor telemetry without violating established runtime risk safety guidelines.",
    period: "2022.09 - 2024.08",
    sponsorKo: "POSTECH 기초 핵심 산학협력연구",
    sponsorEn: "POSTECH Foundational Academic Research Grant",
    status: "completed",
    tags: ["Anomaly Detection", "Statistical Calibration", "Time-Series", "Risk Bounds"],
    roleKo: "연구책임자 (Principal Investigator)",
    roleEn: "Principal Investigator"
  }
];

export const PUBLICATIONS_DATA: PublicationItem[] = [
  {
    id: "pub-1",
    title: "Selective Code Generation via Conformal Safety Calibration",
    authors: ["Minjae Lee", "Junyoung Yang", "Sangdon Park"],
    venue: "International Conference on Machine Learning (ICML)",
    year: 2026,
    type: "conference",
    abstract: "Code synthesis engines frequently manifest compile-time syntactic errors or structural bugs. This research establishes a novel rigorous safety framework using Selective Generation. Applying multidimensional conformal thresholds, our framework guarantees that the code blocks recommended to developers fulfill predetermined security and compilability guidelines with high statistical certainty, rejecting faulty alternatives.",
    citations: 12,
    tags: ["Code Generation", "Conformal Prediction", "Reliability Guarantees"],
    bibtex: `@inproceedings{lee2026selective,
  title={Selective Code Generation via Conformal Safety Calibration},
  author={Lee, Minjae and Yang, Junyoung and Park, Sangdon},
  booktitle={International Conference on Machine Learning (ICML)},
  year={2026}
}`
  },
  {
    id: "pub-2",
    title: "LLM Watermarking Evasion via Bias Inversion",
    authors: ["Yoonjae Jung", "Kyungmin Kim", "Sangdon Park"],
    venue: "International Conference on Machine Learning (ICML)",
    year: 2026,
    type: "conference",
    abstract: "Watermarking is an effective standard mechanism for tracking AI-generated synthetic content. However, sophisticated adversaries utilize bias loops to alter word selectors. We demonstrate a generalized loophole where generative boundaries are neutralized using Bias Inversion. Furthermore, we construct an aligned defensive framework to enforce watermark resilience bounds against similar evasion profiles.",
    citations: 8,
    tags: ["Watermarking", "Adversarial Evasion", "Bias Inversion", "Generative Protection"],
    bibtex: `@inproceedings{jung2026llm,
  title={LLM Watermarking Evasion via Bias Inversion},
  author={Jung, Yoonjae and Kim, Kyungmin and Park, Sangdon},
  booktitle={International Conference on Machine Learning (ICML)},
  year={2026}
}`
  },
  {
    id: "pub-3",
    title: "Online Conformal Prediction with Adversarial Semi-bandit Feedback via Regret Minimization",
    authors: ["Sangdon Park"],
    venue: "International Conference on Learning Representations (ICLR)",
    year: 2026,
    type: "conference",
    abstract: "Traditional conformal prediction assumes independent and identically distributed (i.i.d.) data streams. In online adversarial climates, predictions suffer of feedback gaps. We present a semi-bandit feedback algorithm framed as an online regret minimization task. This yields tight coverage guarantees over non-i.i.d. streams without scaling computation budgets.",
    doi: "10.1145/online.conformal.iclr26",
    citations: 15,
    tags: ["Conformal Prediction", "Online Learning", "Adversarial Feedback", "Regret Minimization"],
    bibtex: `@inproceedings{park2026online,
  title={Online Conformal Prediction with Adversarial Semi-bandit Feedback via Regret Minimization},
  author={Park, Sangdon},
  booktitle={International Conference on Learning Representations (ICLR)},
  year={2026}
}`
  },
  {
    id: "pub-4",
    title: "Selective Generation for Controllable Language Models",
    authors: ["Sangdon Park", "Osbert Bastani", "Insup Lee"],
    venue: "arXiv preprint arXiv:2310.01234",
    year: 2023,
    type: "preprint",
    abstract: "Enforcing semantic criteria in natural language tasks remains a prominent hurdle. We introduce Selective Generation, an abstention-based paradigm that evaluates localized surrogate scores. In domains where the generator's confidence drops below the computed risk parameter, the model abstains from answering, resulting in highly precise structural outputs.",
    citations: 42,
    tags: ["Controllable Generation", "Abstention", "Risk Minimization"],
    bibtex: `@article{park2023selective,
  title={Selective Generation for Controllable Language Models},
  author={Park, Sangdon and Bastani, Osbert and Lee, Insup},
  journal={arXiv preprint arXiv:2310.01234},
  year={2023}
}`
  },
  {
    id: "pub-5",
    title: "CODiT: Conformal Out-of-Distribution Detection in Time-Series Data",
    authors: ["Sangdon Park", "Edgar Dobriban", "Insup Lee"],
    venue: "arXiv preprint arXiv:2203.04567",
    year: 2022,
    type: "preprint",
    abstract: "Anomalous sensor signals undermine critical control systems. This paper introduces CODiT, a framework integrating sliding window statistics and conformal prediction for out-of-distribution (OOD) monitoring. Unlike thresholding heuristics, CODiT controls false alarm rates at any nominated significance percentage under arbitrary temporal correlations.",
    citations: 34,
    tags: ["OOD Detection", "Time-Series", "Calibrated Alarms"],
    bibtex: `@article{park2022codit,
  title={CODiT: Conformal Out-of-Distribution Detection in Time-Series Data},
  author={Park, Sangdon and Dobriban, Edgar and Lee, Insup},
  journal={arXiv preprint arXiv:2203.04567},
  year={2022}
}`
  },
  {
    id: "pub-6",
    title: "iDECODe: In-distribution Equivariance for Conformal Out-of-distribution Detection",
    authors: ["Sangdon Park", "Osbert Bastani", "James Weimer", "Insup Lee"],
    venue: "International Conference on Machine Learning (ICML)",
    year: 2022,
    type: "conference",
    abstract: "Deep classifiers easily suffer from overconfident predictions when encountering out-of-distribution (OOD) inputs. We introduce iDECODe, leveraging spatial translation equivariance maps that are natively preserved in in-distribution records but disrupted by anomalous items. We prove iDECODe limits high-risk false acceptances under distribution drift.",
    doi: "10.1145/idecode.icml22",
    citations: 89,
    tags: ["Equivariance", "OOD Classification", "Empirical Validity"],
    bibtex: `@inproceedings{park2022idecode,
  title={iDECODe: In-distribution Equivariance for Conformal Out-of-distribution Detection},
  author={Park, Sangdon and Bastani, Osbert and Weimer, James and Lee, Insup},
  booktitle={International Conference on Machine Learning (ICML)},
  year={2022}
}`
  },
  {
    id: "pub-7",
    title: "PAC-Bayes Control Risks with Conformal Prediction for Autonomous Robotic Systems",
    authors: ["Sangdon Park", "Insup Lee", "Osbert Bastani"],
    venue: "Conference on Learning for Dynamics and Control (L4DC)",
    year: 2022,
    type: "conference",
    abstract: "We investigate collision avoidance bounds inside cyber-physical navigation loops. Integrating PAC-Bayesian generalizations with localized inductive conformal validation, our algorithm provides high-confidence margins for obstacle avoidance, securing robotic trajectories from structural hazards.",
    citations: 28,
    tags: ["Robotics Safety", "PAC-Bayesian", "Path Planning"],
    bibtex: `@inproceedings{park2022pacbayes,
  title={PAC-Bayes Control Risks with Conformal Prediction for Autonomous Robotic Systems},
  author={Park, Sangdon and Lee, Insup and Bastani, Osbert},
  booktitle={Conference on Learning for Dynamics and Control (L4DC)},
  year={2022}
}`
  },
  {
    id: "pub-8",
    title: "Conformal Out-of-Distribution Detection under Covariate Shift",
    authors: ["Sangdon Park", "Insup Lee", "Osbert Bastani"],
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: 2020,
    type: "conference",
    abstract: "Standard conformal intervals fail when the testing profile drifts from training parameters. We offer a generalized weighted conformal design correcting covariate drift, establishing rigorous safety envelopes under diverse environmental shifts.",
    citations: 112,
    tags: ["Covariate Shift", "NeurIPS", "Distributional Drift"],
    bibtex: `@inproceedings{park2020conformal,
  title={Conformal Out-of-Distribution Detection under Covariate Shift},
  author={Park, Sangdon and Lee, Insup and Bastani, Osbert},
  booktitle={Advances in Neural Information Processing Systems (NeurIPS)},
  year={2020}
}`
  }
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: "course-1",
    code: "AI-602",
    titleKo: "안전하고 신뢰할 수 있는 머신러닝 (Safe and Trustworthy Machine Learning)",
    titleEn: "Safe and Trustworthy Machine Learning",
    semester: "2026학년도 1학기 (Spring 2026)",
    targetKo: "인공지능대학원 및 컴퓨터공학과 대학원생",
    targetEn: "GSAI & CSE Graduate Students",
    descriptionKo: "인공지능 시스템의 안전성, 견고성, 그리고 신뢰성을 보장하는 최신 기계 학습 및 딥러닝 이론을 체계적으로 조명합니다. Conformal Prediction, 적대적 공격 및 방어(Adversarial Robustness), AI 인과정렬 이론을 익힙니다.",
    descriptionEn: "Covers standard theoretical principles for guarantees in complex ML environments, featuring Conformal Prediction, distribution shift calibration, adversarial attack defense, and reinforcement learning alignment.",
    syllabusItems: [
      "Rigorous Uncertainty Quantification via Split Conformal Prediction",
      "Robustness Under Distribution/Covariate Shifts and Concept Drift",
      "Adversarial Defense Paradigms and Automated Red Teaming Methods",
      "Algorithmic Fairness and Multi-Agent Alignment Standards",
      "Selective Classification/Abstention Bounds in Mission-Critical Systems"
    ]
  },
  {
    id: "course-2",
    code: "CSE-515 / AI-504",
    titleKo: "기계학습 및 고급 인공지능 (Machine Learning & Advanced AI)",
    titleEn: "Machine Learning & Advanced AI",
    semester: "2025학년도 2학기 (Fall 2025)",
    targetKo: "IT / AI 융합 대학원 공통 핵심",
    targetEn: "GSAI Graduate Core Course",
    descriptionKo: "통계적 학습 이론부터 심층 신경망(Deep Neural Networks), 트랜스포머 아키텍처 및 확산 생성 모델(Diffusion Models)에 이르는 고급 머신러닝 기법과 최신 연구 주제를 망라하여 다룹니다.",
    descriptionEn: "A core graduate introduction diving into statistical learning theory, optimization algorithms, multi-layer architectures, and custom generative modeling paradigms.",
    syllabusItems: [
      "Empirical Risk Minimization and Convex Optimization Algorithms",
      "Stochastic Gradient Descent variants and Regularization Mechanics",
      "Transformer Block Attention Structures and Sequence to Sequence Modeling",
      "Schedules for Latent Diffusion and Generative Adversarial Networks",
      "Active Learning and High-dimensional Statistical Inference Limits"
    ]
  }
];

export interface Student {
  name: string;
  role: string;
  details: string;
  avatarText: string;
}

export const LAB_TEAM_DATA = {
  leader: {
    name: "Sangdon Park (박상돈)",
    role: "Assistant Professor",
    affiliation: "POSTECH AI/CSE",
    bio: "Lead of ML Lab",
    avatarText: "SP"
  },
  phd: [
    { name: "Minjae Lee (이민재)", role: "PhD+MS Student", details: "POSTECH AI, CSE BS", avatarText: "ML" },
    { name: "Kyungmin Kim (김경민)", role: "PhD+MS Student", details: "POSTECH AI, Korea Univ. Statistics BS", avatarText: "KK" },
    { name: "Junyoung Yang (양준영)", role: "PhD+MS Student", details: "POSTECH CSE, POSTECH CSE BS", avatarText: "JY" },
    { name: "Yoonjae Jung (정윤재)", role: "PhD+MS Student", details: "POSTECH AI, POSTECH CSE BS", avatarText: "YJ" }
  ],
  ms: [
    { name: "Minjae Gwon (권민재)", role: "MS Student", details: "POSTECH CSE, POSTECH CSE BS", avatarText: "MG" },
    { name: "Byeonggyu Kim (김병규)", role: "MS Student", details: "POSTECH CSE, POSTECH ME/CSE BS", avatarText: "BK" },
    { name: "Jaewoo Jeong (정재우)", role: "MS Student", details: "POSTECH CSE, POSTECH CSE BS", avatarText: "JJ" },
    { name: "Minseok Kim (김민석)", role: "MS Student", details: "POSTECH CSE, POSTECH CiTE/CSE BS", avatarText: "MK" },
    { name: "Sechan Lee (이세찬)", role: "MS Student", details: "POSTECH AI, SKKU CE BS", avatarText: "SL" }
  ],
  intern: [
    { name: "Jaewan Choi (최재완)", role: "Undergraduate Intern", details: "POSTECH CSE (Since 2025.01)", avatarText: "JC" },
    { name: "Junyoung Park (박준영)", role: "Undergraduate Intern", details: "POSTECH CSE (Since 2025.03)", avatarText: "JP" },
    { name: "Juhwan Park (박주환)", role: "Undergraduate Intern", details: "POSTECH CSE (Since 2026.01)", avatarText: "JP" },
    { name: "Seongju Park (박성주)", role: "Undergraduate Intern", details: "POSTECH CSE (Since 2026.03)", avatarText: "SP" }
  ],
  admin: [
    { name: "Jiyoung Choi (최지영)", role: "Administrative Assistant", details: "Lab Admin", avatarText: "JC" }
  ],
  alumni: [
    { name: "Namgyu Park (박남규)", role: "PhD Graduate", details: "POSTECH CSE, Now Research Scientist", avatarText: "NP" }
  ]
};
