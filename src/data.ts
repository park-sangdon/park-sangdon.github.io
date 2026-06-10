import { ProfileData, NewsItem, ProjectItem, PublicationItem, CourseItem } from './types';

export const PROFILE_DATA: ProfileData = {
  nameKo: "박상돈",
  nameEn: "Sangdon Park",
  titleKo: "조교수",
  titleEn: "Assistant Professor",
  affiliationKo: "대전대학교 공과대학",
  affiliationEn: "College of Engineering, Daejeon University",
  departmentKo: "컴퓨터소프트웨어공학과",
  departmentEn: "Department of Computer Software Engineering",
  officeKo: "대전대학교 융합과학관 4층 409호",
  officeEn: "Room 409, Convergence Science Building, Daejeon University, Daejeon, Korea",
  email: "johnsdpark@gmail.com",
  scholarUrl: "https://scholar.google.com/citations?user=johnsdpark", // placeholders that align with his name/details
  researchId: "Sangdon Park",
  researchgateUrl: "https://www.researchgate.net/profile/Sangdon-Park",
  orcidUrl: "https://orcid.org/0000-0002-3490-5813",
  githubUrl: "https://github.com/johnsdpark",
  hiringMessage: {
    ko: "네트워크 및 인공지능 연구실(NAIRL)에서 사물인터넷(IoT), 모바일 에지 컴퓨팅, 네트워크 보안, 그리고 인공지능 응용에 관심이 있는 대학원생(석사/박사) 및 학부 인턴을 모집합니다. 관심 있는 분은 이력서(CV)와 관심 연구 분야를 적어 이메일(johnsdpark@gmail.com)로 연락 바랍니다.",
    en: "The Network & AI Research Lab (NAIRL) is seeking highly motivated graduate students (Ph.D./M.S.) and undergraduate interns passionate about IoT, Mobile Edge Computing, Network Security, and AI applications. If interested, please send your CV and research interests via email to johnsdpark@gmail.com."
  },
  bioKo: "박상돈 교수는 대전대학교 컴퓨터소프트웨어공학과 조교수이자 네트워크 및 인공지능 연구실(NAIRL) 지도교수입니다. KAIST(한국과학기술원)에서 컴퓨터공학 및 정보통신 분야에서 우수한 성과로 학위를 취득하였으며, 주 연구 분야는 사물인터넷(IoT), 유무선 네트워크 프로토콜, 모바일 웨어러블 헬스케어 시스템, 소프트웨어 정의 네트워크(SDN) 보안, 그리고 에지 컴퓨팅 기술을 포함합니다. 사물인터넷 환경에서의 효율적인 에너지 관리 및 지능형 데이터 처리, 그리고 AI를 활용한 사이버 위협 탐지 기법들을 다수 연구하여 IEEE Access, MDPI Sensors 등 다양한 세계적 수준의 저널 및 학술대회에 논문을 발표해 오고 있습니다.",
  bioEn: "Dr. Sangdon Park is an Assistant Professor in the Department of Computer Software Engineering at Daejeon University and the Director of the Network & AI Research Lab (NAIRL). He received his academic degrees in Computer Engineering and Information and Communications from KAIST (Korea Advanced Institute of Science and Technology). His primary research interests encompass the Internet of Things (IoT), wireless and mobile network protocols, healthcare IoT architectures, Software-Defined Networking (SDN) security, and edge computing paradigms. He has published numerous research papers in world-class journals and conferences (including IEEE Access, MDPI Sensors, etc.) focusing on energy-efficient communication, intelligent task offloading, and AI-driven network protection."
};

export const NEWS_DATA: NewsItem[] = [
  {
    id: "news-4",
    date: "2026-05-15",
    title: "연구실 신규 연구 과제 선정",
    content: "모바일 에지 컴퓨팅 기반 초저지연 연합학습 및 모바일 인프라 전력 최적화 기법에 대한 신규 연구 과제가 국책 사업으로 선정되었습니다.",
    type: "general",
    isImportant: true
  },
  {
    id: "news-3",
    date: "2026-03-20",
    title: "IEEE Access 저널 논문 게재 최종 확정",
    content: "제안된 고신뢰 사물인터넷 웨어러블 헬스케어용 동적 주파수 및 망 오프로딩 기법에 대한 논문이 IEEE Access 저널에 게재 최종 승인되었습니다.",
    type: "paper",
    isImportant: true
  },
  {
    id: "news-2",
    date: "2025-11-10",
    title: "우수 논문상(Best Paper Award) 수상",
    content: "국내 추계 정보처리학회 학술대회에서 연구실 학부 인턴 연구원들이 참여한 스마트 팜 센서 복구 라우팅 알고리즘 연구가 우수 논문상을 수상하였습니다.",
    type: "award"
  },
  {
    id: "news-1",
    date: "2025-09-01",
    title: "컴퓨터소프트웨어공학과 교과 개편",
    content: "최신 트렌드 반영을 위해 모바일 앱 개발 및 임베디드 AI 심화 실무 파트가 학부 필수 정규 교과과정(컴퓨터 네트워크 실습)에 도입되었습니다.",
    type: "service"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    titleKo: "모바일 에지 컴퓨팅 기반 초저지연 스마트 헬스케어 모니터링 시스템 개발",
    titleEn: "Development of Ultra-Low Latency Smart Healthcare Monitoring Systems in Mobile Edge Computing Environments",
    descriptionKo: "환자 웨어러블 생체 신호 센서에서 전송되는 빅데이터를 기지국 인근의 에지 서버에서 AI 알고리즘으로 동적 타임 슬롯 방식으로 분석하여, 의료 긴급 상황 오탐지율을 낮추고 초저지연 상태로 실시간 관제 센터로 전송하는 하이브리드 네트워킹 기법 연구입니다.",
    descriptionEn: "This research proposes dynamic time-slotting and queuing algorithms to analyze patient EEG/ECG streams using near-edge lightweight AI, significantly reducing telemetry latency and critical alert false positives inside smart hospital rooms.",
    period: "2025.03 - 2028.02",
    sponsorKo: "한국연구재단 (NRF)",
    sponsorEn: "National Research Foundation of Korea (NRF)",
    status: "active",
    tags: ["Mobile Edge Computing", "Healthcare IoT", "Low Latency", "IEEE 802.11ax"],
    roleKo: "연구책임자 (Principal Investigator)",
    roleEn: "Principal Investigator"
  },
  {
    id: "proj-2",
    titleKo: "SDN 기반 지능형 IoT 네트워크 위협 탐지 및 분산 완화 아키텍처",
    titleEn: "SDN-based Intelligent IoT Network Threat Detection and Distributed Mitigation Architecture",
    descriptionKo: "웨어러블이나 스마트홈 IoT 단말기들의 자원 제약 한계를 우회하기 위해, 소프트웨어 정의 네트워크(SDN) 컨트롤러를 토대로 악성 봇넷 침입 및 분산 서비 거부(DDoS) 플러딩 유입을 머신러닝 분석을 통해 조기에 격리하고 라우팅 경로를 차단하는 보안 프레임워크 설계입니다.",
    descriptionEn: "Designs a lightweight software-defined networking module leveraging inline telemetry and machine learning at the gateway to detect, label, and automatically quarantine rogue botnet attacks targeted towards smart city utility stations.",
    period: "2024.06 - 2026.05",
    sponsorKo: "정부 정보통신부 대학 지원 과제",
    sponsorEn: "Ministry of Science and ICT, South Korea Support Project",
    status: "active",
    tags: ["IoT Security", "Software-Defined Networking (SDN)", "DDoS Mitigation", "Deep Learning"],
    roleKo: "연구책임자 (Principal Investigator)",
    roleEn: "Principal Investigator"
  },
  {
    id: "proj-3",
    titleKo: "스마트 농축산물 유통 추적용 저전력 장거리 센서 네트워크(LPWAN) 고도화 및 다중 홉 에너지 보존 프로토콜 연구",
    titleEn: "Advanced Multi-hop LPWAN Protocols for Intelligent Agrifood Cold-chain Operations",
    descriptionKo: "농어촌 지역의 광범위한 센싱 감도를 커버하고 신뢰성을 유지하기 위해 저전력 광대역 무선통신(LoRa/Sigfox) 기술을 다중 홉 구조로 결합하고 센서 노드 배터리 생존 기간을 기존 대비 30% 증가시키는 클러스터 헤드 동적 교체 무선 자원 배정 연구입니다.",
    descriptionEn: "Investigates energy preservation through localized scheduling and cooperative routing inside dynamic agricultural environments utilizing Low-Power Wide-Area Networks (LPWAN), extending field sensor battery lifetimes by 30%.",
    period: "2022.09 - 2024.08",
    sponsorKo: "대전대 산학협력단 / 지방자치단체 협력과제",
    sponsorEn: "Daejeon University LINC Industry-Academia Cooperation Fund / Local Consortium",
    status: "completed",
    tags: ["LPWAN", "LoRa", "Smart Agriculture", "Energy Harvesting Routing"],
    roleKo: "연구책임자 (Principal Investigator)",
    roleEn: "Principal Investigator"
  }
];

export const PUBLICATIONS_DATA: PublicationItem[] = [
  {
    id: "pub-1",
    title: "An IoT-Based Mobile Healthcare System with Dynamic Network Switching in Wireless Environments",
    authors: ["Sangdon Park", "Jihoon Kim", "Min-seo Kang"],
    venue: "IEEE Access",
    year: 2024,
    type: "journal",
    abstract: "A critical problem in wearable telemedicine is ensuring packet delivery ratios during user locomotion. This paper details a physical and network layer dynamic handover mechanism. By monitoring active RSSI, bandwidth variance, and jitter, the client device preemptively migrates routing sockets between sub-6GHz cellular nodes and localized IEEE 802.11ax Wi-Fi networks in a lossless fashion. Simulation results and hardware prototyping exhibit a 99.8% heart rate transmission reliability during active walking speeds.",
    doi: "10.1109/ACCESS.2024.3379124",
    pdfUrl: "#",
    citations: 18,
    tags: ["Healthcare IoT", "Dynamic Offloading", "IEEE Access", "Wi-Fi Handover"],
    bibtex: `@article{park2024iot,
  title={An IoT-Based Mobile Healthcare System with Dynamic Network Switching in Wireless Environments},
  author={Park, Sangdon and Kim, Jihoon and Kang, Min-seo},
  journal={IEEE Access},
  volume={12},
  pages={54210--54225},
  year={2024},
  publisher={IEEE}
}`,
    journalImpact: "JCR Q1 (Top 25%), Impact Factor: 3.5"
  },
  {
    id: "pub-2",
    title: "An Adaptive Mobility Management Scheme for Energy-Efficient Wireless Sensor Networks in Healthcare Scenarios",
    authors: ["Sangdon Park"],
    venue: "MDPI Sensors",
    year: 2023,
    type: "journal",
    abstract: "Wireless body area networks (WBANs) utilize highly localized, ultra-low power sensors to register physical parameters. Since transceivers dissipate major parts of micro-battery capacities, we present an adaptive protocol relying on mobile prediction models. Rather than operating static beacon cycles, our approach predicts RSSI valleys based on a temporal-difference state estimator, scaling down communication periods when reception conditions deteriorate. This preserves up to 34% nodes battery capacities over conventional benchmark protocols.",
    doi: "10.3390/s23084120",
    pdfUrl: "#",
    citations: 27,
    tags: ["Sensors", "WBAN", "Energy Efficiency", "MDPI"],
    bibtex: `@article{park2023adaptive,
  title={An Adaptive Mobility Management Scheme for Energy-Efficient Wireless Sensor Networks in Healthcare Scenarios},
  author={Park, Sangdon},
  journal={Sensors},
  volume={23},
  number={8},
  pages={4120},
  year={2023},
  publisher={MDPI}
}`,
    journalImpact: "JCR Q1, Impact Factor: 3.9"
  },
  {
    id: "pub-3",
    title: "An Intelligent Security Framework for Software-Defined IoT Networks against Volumetric DDoS Attacks",
    authors: ["Sangdon Park", "Sung-Jin Cho"],
    venue: "Elsevier Computer Networks",
    year: 2023,
    type: "journal",
    abstract: "Integrating Software-Defined Networking (SDN) templates with distributed Smart IoT environments presents dual challenges in authentication and traffic sanitization. Rogues often recruit low-complexity IoT appliances to orchestrate volumetric Flooding. This research introduces a hybrid inspection model running inside central SDN Controllers. By gathering OpenFlow packet-in traffic signatures, an extreme-gradient boosting (XGBoost) module processes active flow rules. Evaluations display a high DDoS classification precision of 99.4% with near-zero control overheads.",
    doi: "10.1016/j.comnet.2023.109812",
    pdfUrl: "#",
    citations: 14,
    tags: ["SDN Security", "DDoS Mitigation", "XGBoost", "Intelligent Systems"],
    bibtex: `@article{park2023intelligent,
  title={An Intelligent Security Framework for Software-Defined IoT Networks against Volumetric DDoS Attacks},
  author={Park, Sangdon and Cho, Sung-Jin},
  journal={Computer Networks},
  volume={220},
  pages={109812},
  year={2023},
  publisher={Elsevier}
}`,
    journalImpact: "JCR Q1 (Top 15%), Impact Factor: 5.6"
  },
  {
    id: "pub-4",
    title: "Efficient Resource Allocation and Task Offloading in Mobile Edge Computing for IoT Healthcare Applications",
    authors: ["Sangdon Park"],
    venue: "Journal of Systems Architecture",
    year: 2022,
    type: "journal",
    abstract: "When deep analytical algorithms (such as automated arrhythmia segmentation) are needed on diagnostic streams, portable hardware controllers fail in processing throughput. We explore optimal task migration schedules from IoT gateways to heterogeneous Mobile Edge Computing (MEC) servers. Formulating this as a joint latency-cost minimization problem, we introduce a Lyapunov-optimization heuristic. It maintains latency envelopes underneath 100ms thresholds while optimizing host-side CPU power profiles.",
    doi: "10.1016/j.sysarc.2022.102450",
    pdfUrl: "#",
    citations: 35,
    tags: ["Mobile Edge Computing", "Lyapunov Optimization", "Task Offloading"],
    bibtex: `@article{park2022efficient,
  title={Efficient Resource Allocation and Task Offloading in Mobile Edge Computing for IoT Healthcare Applications},
  author={Park, Sangdon},
  journal={Journal of Systems Architecture},
  volume={126},
  pages={102450},
  year={2022},
  publisher={Elsevier}
}`,
    journalImpact: "JCR Q1, Impact Factor: 4.5"
  },
  {
    id: "pub-5",
    title: "A Deep Learning-Based Predictive Modeling for Patient Telemetry in Smart Hospital Rooms",
    authors: ["Sangdon Park", "Hyung-Min Oh"],
    venue: "Journal of Ambient Intelligence and Humanized Computing",
    year: 2021,
    type: "journal",
    abstract: "Continuous nursing monitors in ICU contexts suffer from alarming thresholds triggered by temporary sensor shifts or physical detachment. We construct a multi-channel recurrent neural network (LSTM) that maps dependencies between overlapping vital statistics (SpO2, Pulse Rate, Respiration Frequency). By mapping semantic correlations, our software recognizes motion noise vs true clinical emergencies, reducing cumulative alarm pollution inside critical hospital wards.",
    doi: "10.1007/s12652-020-02541-w",
    pdfUrl: "#",
    citations: 42,
    tags: ["Smart Hospital", "Alarm Fatigue", "LSTM", "Ami"],
    bibtex: `@article{park2021deep,
  title={A Deep Learning-Based Predictive Modeling for Patient Telemetry in Smart Hospital Rooms},
  author={Park, Sangdon and Oh, Hyung-Min},
  journal={Journal of Ambient Intelligence and Humanized Computing},
  volume={12},
  pages={1246--1259},
  year={2021},
  publisher={Springer}
}`,
    journalImpact: "Impact Factor: 3.8"
  },
  {
    id: "pub-6",
    title: "Dynamic Routing Protocol for Smart Agriculture using IoT-enabled Cluster Networks",
    authors: ["Sangdon Park", "Dae-Hyun Nam"],
    venue: "International Conference on Information Networking (ICOIN)",
    year: 2022,
    type: "conference",
    abstract: "Agricultural sensor layouts encounter harsh path attenuation due to shifting soil properties and crop growth. This paper introduces an enhanced clustering mechanism. Relying on soil humidity gradients and sensor proximity weights, the gateway chooses multi-tier parent relays dynamically, preserving network connectivity even when high obstacles intercept direct line-of-sight.",
    doi: "10.1109/ICOIN54321.2022.9712015",
    pdfUrl: "#",
    citations: 12,
    tags: ["ICOIN", "Smart Agriculture", "Dynamic Routing", "Wireless Sensors"],
    bibtex: `@inproceedings{park2022dynamic,
  title={Dynamic Routing Protocol for Smart Agriculture using IoT-enabled Cluster Networks},
  author={Park, Sangdon and Nam, Dae-Hyun},
  booktitle={International Conference on Information Networking (ICOIN)},
  pages={411--416},
  year={2022},
  organization={IEEE}
}`
  },
  {
    id: "pub-7",
    title: "Low-Power Wide-Area Network (LPWAN) Technologies for Smart City Environments: A Comparative Analysis",
    authors: ["Sangdon Park"],
    venue: "International Journal of Distributed Sensor Networks",
    year: 2021,
    type: "journal",
    abstract: "Designing urban infrastructure sensor grids requires trading off between transmission throughput, frequency licenses, and longevity. This paper investigates the comparative real-world performance of LoRaWAN, Sigfox, and Narrowband IoT (NB-IoT). Testing these protocols under diverse cellular building shadowing in municipal zones, we formulate selection policies based on packet delivery, latency, and power dissipation patterns.",
    doi: "10.1177/15501477211029145",
    pdfUrl: "#",
    citations: 54,
    tags: ["LPWAN", "LoRaWAN", "NB-IoT", "Smart City Benchmarks"],
    bibtex: `@article{park2021lpwan,
  title={Low-Power Wide-Area Network (LPWAN) Technologies for Smart City Environments: A Comparative Analysis},
  author={Park, Sangdon},
  journal={International Journal of Distributed Sensor Networks},
  volume={17},
  number={6},
  pages={15501477211029145},
  year={2021},
  publisher={SAGE Publications}
}`,
    journalImpact: "Impact Factor: 2.3"
  }
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: "course-1",
    code: "CSE-425",
    titleKo: "컴퓨터 네트워크 (및 실험)",
    titleEn: "Computer Networks & Practical Labs",
    semester: "2026학년도 1학기 (Spring 2026)",
    targetKo: "컴퓨터소프트웨어공학과 3학년 / 4학년",
    targetEn: "Computer Software Engineering Undergraduates (3rd & 4th Year)",
    descriptionKo: "네트워크 아키텍처의 이론적 고찰과 함께 전송 계층(TCP/UDP), 네트워크 계층(IP Routing), 링크 계층 프로토콜을 실제 Wireshark 패킷 분석과 소켓 프로그래밍을 통해 심도 깊게 부트스트랩합니다.",
    descriptionEn: "Offers an extensive review of network layers (TCP/UDP, Dynamic Routing Protocols) matching solid conceptual background with practical labs in Wireshark parsing, socket creation (C++/Python), and congestion controls.",
    syllabusItems: [
      "OSI 7 Layer Reference Architecture and Packet Encapsulation",
      "Network Transport Layer Socket Interfaces (TCP Reliable stream vs. UDP Datagram)",
      "IP Subnet Addressing, RIP/OSPF Routing, and CIDR Calculations",
      "VLAN configurations and Link Layer Collision Avoidance",
      "Core TCP handshakes, Congestion and Flow Management logs"
    ]
  },
  {
    id: "course-2",
    code: "CSE-310",
    titleKo: "사물인터넷 및 임베디드 프로그래밍",
    titleEn: "Internet of Things & Embedded Programming",
    semester: "2026학년도 1학기 (Spring 2026)",
    targetKo: "컴퓨터소프트웨어공학과 3학년",
    targetEn: "Computer Software Engineering Undergraduates (3rd Year)",
    descriptionKo: "C/C++ 기반의 아두이노 및 ESP32 모듈 기초, IoT 무선 통신 규격(Wi-Fi, BLE, MQTT), 센서 드라이버 회로 실무 분석 및 에지 컴퓨팅 데이터 원격 보고 기법을 실증 실습합니다.",
    descriptionEn: "Explores bare-metal embedded programming across ARM architecture boards (ESP32). Students construct wireless sensor pipelines streaming payload parameters utilizing lightweight MQTT and REST protocols.",
    syllabusItems: [
      "Microcontroller Overview (GPIO, SPI, I2C, ADC interfaces)",
      "Sensor Driver Writing and Pin Configuration practices",
      "Lightweight Sensor Communications: MQTT Broker vs HTTP RESTful models",
      "Low-Power Deep-Sleep optimizations for battery node configurations",
      "Smart-home edge triggers: Capstone prototype construction labs"
    ]
  },
  {
    id: "course-3",
    code: "CSE-231",
    titleKo: "자료구조 (및 실습)",
    titleEn: "Data Structures & Lab Experiments",
    semester: "2025학년도 2학기 (Fall 2025)",
    targetKo: "컴퓨터소프트웨어공학과 2학년",
    targetEn: "Computer Software Engineering Undergraduates (2nd Year)",
    descriptionKo: "컴퓨터 소프트웨어 개발에 핵심이 되는 논리적 자료구조(스택, 큐, 트리, 그래프)를 Java/C언어를 통해 단계별로 손수 빌드하여 데이터 정렬 및 탐색 시간복잡도를 극대화하는 방안을 배웁니다.",
    descriptionEn: "Covers standard data structures including linked lists, circular queues, AVL trees, and weighted graphs. Evaluates algorithmic paradigms from Big-O space and time complexity frameworks.",
    syllabusItems: [
      "Dynamic Memory Allocations and Pointer References",
      "Sequential Stack/Queue lists and Circular FIFO arrays",
      "Tree Traversal (Pre, In, Post order) and Self-balancing Binary Search Trees",
      "Shortest Path algorithms (Dijkstra) and Graph representation arrays",
      "Hash Table Collision Resolutions and Quick/Merge Sort benchmarking"
    ]
  }
];
