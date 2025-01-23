import {
    logo,
    impetus,
    concepts,
    pradnya,
    techfiesta,
    img1,
    csi, intangles, sarvatra, veritas, eq, imocha, imperial, pasc, pisb, cloudhedge,
    ayaan,
  } from "../assets";

  const notifications = ["🚀 Don’t just watch innovation—be part of it! Register today! 🚀", "⚡ Code, create, and conquer—your journey begins here. ⚡"]
  
  const navLinks = [
    {
      id: "about",
      isHome: true,
      title: "About",
    },
    {
      id: "events",
      isHome: true,
      title: "Events",
    },
    {
      id: "committee/core",
      isHome: false,
      title: "Committee",
    },
    {
      id: "register",
      isHome: false,
      title: "Register",
    },
  ];

  const about_text = "Impetus and Concepts (InC) is a flagship technical event of SCTR's Pune Institute of Computer Technology (PICT), Pune , which will be held during the 1st week of April 2024. InC is an intercollegiate international level competition that has been catching the attention of corporate giants for the quality of projects and an opportunity to recruit/mentor young talented budding entrepreneurs. Every year InC sets a new benchmark and provides an opportunity for students to realize their ideas into effective products. Over the years, it has become the most popular and awaited event with continuous improvement in footfall, the number and quality of projects/papers, etc. This event also sets a platform for students to design, exhibit, and watch their ideas come true. This technical fest has inventive events namely - Impetus, Concepts, Pradnya.Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains ; Concepts is a Project Competition for Final Year Students, all engineering branches confined to specific domains ; and Pradnya - An International Coding Competition. Students are invited with projects addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education, etc. and the best project judged by the juries will be awarded with a cash prize of ₹ 1 Lakh Cash Prize from PICT."
  
  const sponsors = {
    title: [
      {src: eq,
      name: 'eq',},
      {src: sarvatra,
      name: 'sarvatra',},
    ],
    co: [
      {src: imocha,
      name: 'imocha',},

      {src: ayaan,
      name: 'aayan',},
  
      {src: intangles,
      name: 'intangles',},
    ],
    pradnya: [
      {src: veritas,
      name: 'veritas',},
    ],
    other: [
      {src: imperial,
      name: 'imperial',},

      {src: cloudhedge,
      name: 'cloudhedge',},

    ],
    association: [
      {src: pasc,
        name: 'pasc',},
      
      {src: pisb,
      name: 'pisb',},

      {src: csi,
      name: 'csi',},
    ],  
  }

  
  const events = [
    { id: 1, _id: 'impetus', title: "Impetus", description: "International Level Project Exhibition and Competition.", logo: impetus, color:"bg-slate-700", team_size: '2-5 members', type: 'Project Expo', date: "March 21, 2025" },
    { id: 2, _id: 'pradnya', title: "Pradnya", description: "Compete with the best minds in the National Level Coding Contest.", logo:pradnya, color:"bg-slate-700", team_size: '1-2 members', type: 'Coding Competition', date: "March 21, 2025" },
    { id: 3, _id: 'concepts', title: "Concepts", description: "The most grand project exhibition event Concepts for final year student.", logo: concepts, color:"bg-slate-700", team_size: '2-5 members', type: 'Project Expo', date: "March 21, 2025" },
    { id: 4, _id: 'techfiesta', title: "TechFiesta", description: "International Hackathon", logo: techfiesta, color:"bg-slate-700", team_size: '4-5 members', type: 'Hackathon', date: "Registration Closed" },
    { id: 5, _id: 'impetus', title: "Special Event", description: "An exciting surprise awaits! Stay tuned for something unforgettable.", logo: logo, color:"bg-slate-700", team_size: '1-5 members', type: 'Unveiling Soon', date: "To Be Announced" },
  ];

  const eventsData = {
    impetus: {
      id: 'impetus',
      logo: impetus,
      criteria:
        "First, Second and Third Year Engineering Students.",
      name: "Impetus",

      short_desc: "International Level Project Exhibition and Competition.",

      description: ["Impetus is an intercollegiate international level competition and has been attracting corporate giants for not only sponsorship but also in terms of time and guidance to the participants. Industries such as eQ Technologic, Microsoft, Mobiliya, Deutsche Bank Group, Avaya, Siemens, Sagitech, Apporbit, e-Zest, HP, Indian Oil, 3 Ogeestudio, Tata, Mojo Networks, Ryussi, Tibco, Calsoft, Persistent, Pubmatic, IBM, Airtight, AthenaHealth, IEEE, ACM, CSI, were closely associated with this event. During the 3 day event, first year, second year and third year students from various colleges across India and abroad showcase their projects in domains like", `Application Development `, `Communication, Networking, Security `, `git Learning, Pattern Recognition, Artificial Intelligence`, `Embedded systems, VLSI, IoT, Remote Sensing`, `Blockchain, Cloud Computing`, `Others`],
      
      domains: [`Application Development `, `Communication Networking`, `Security`, `Pattern Recognition, Artificial Intelligence`, `Digital / Image / Speech / Video Processing`, `Others`],

      // domains: [
      //   {
      //     domain: "APPLICATION DEVELOPMENT",
      //     sub_domains:
      //       "Mobile Applications-Android, Web Applications, Database applications, others),(Big Earth Data Analytics, Geo Informatics, Data Mining on Big Data, Digital marketing optimization, Data exploration and discovery, Fraud detection and prevention, Social network and relationship analysis, Machine generated data analytics, Data retention, Others)",
      //   },
      //   {
      //     domain: "COMMUNICATION NETWORKS & SECURITY SYSTEMS",
      //     sub_domains:
      //       "(Computer networks, Internet of Things, Software Defined Network, Vehicular Networks, Wireless and Mobile Networks, Information and Network Security, GPS | GSM Projects, Wireless Communication, Antenna & RF Communication, Optical Communication & Network, Others), (Blockchain applications: cryptocurrency systems, healthcare system, advertising processes, insurance processes, copyright protection system, energy system, tracking system, monitoring system, Security system, societal applications, others), (Virtualization and Autonomic Computing, High Speed Network, Security in Cloud, Cloud Computing, Data center Management, Handling Big Data on Cloud, Mobile Cloud, Cloud Forensics, Fog Computing, Others)",
      //   },
      //   {
      //     domain: "DIGITAL / IMAGE/ SPEECH / VIDEO PROCESSING",
      //     sub_domains:
      //       "(Digital Signal processing, Image processing, Speech recognition, Video processing, Speech to text / Text to speech, Others)",
      //   },
      //   {
      //     domain: "EMBEDDED/VLSI SYSTEMS",
      //     sub_domains:
      //       "(Image Processing & Remote Sensing, Machine Learning for Embedded Systems, Embedded Vision, Internet of Things, others), (Analog & Mixed Signal VLSI Design, Testing & Verification of VLSI Design, others)",
      //   },
      // ],

      registrations: {
        fees: {
          national: `&#8377;100/-`,
          international: `Free`,
        },
        min_team_size: 2,
        max_team_size: 5,
      },
      prize: `Total Cash prizes worth &#8377;7 Lakh.`,
      rules: [
        `Judge's decision will be final.`,
        `Project status must be in "Ready to Demonstrate".`,
      ],
      note: `Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded &#8377;1 Lakh Cash Prize from PICT.`,

      // contact: ['Apoorvaraj 8530191073 ', 'Mrugank 7083823772', 'Vrushali 9766176681', 'Aarti 9405119460'],
      button_link: "https://pictinc.org/register/events/impetus",
      schedule: "March 21, 2025",
    }, 
    concepts: {
      id: 'concepts',
      logo: concepts,
      criteria: "Final year students enrolled in BE / BTech degree.",
      schedule: "March 21, 2025",
      name: "Concepts",
      notices: [
        "1. The Participants should be present on campus and the labs during the time period allocated.",
        "2. At least 2 judges will be judging each project. However there will be judges from other organizations who will be evaluating projects for probable hiring or for special prizes etc. Hence none of the groups should leave the campus unless informed officially by the judging team.",
        "3. The judging criteria includes the following points :- , <p>i. Innovative Ideas Involved.</p>, <p>ii. Approach to Exploit Ideas.</p>, <p> iii. Approach towards Implementing the system and Future Applications.</p>, <p> iv. Implementation of engineering Principles. </p>, <p>v. Presentation and Q & A</p>",
        "4. We request all the group members to visit the stalls put up in the campus.",
        "5. For any judging related queries contact the lab coordinator associated with the respective lab only. Their contact details are written on each lab white board.",
      ],

      short_desc:
        "The Premier Project Exhibition showcasing Innovation and Achievement",

      description: ["Concepts is an inter-collegiate international-level competition and has been attracting corporate giants for not only sponsorship but also  for guiding and mentoring the participants for their Quality products/projects and providing on spot job offers & internships. It offers Patent registration fees for Innovative and Patentable projects. During the 3 day event, Final Year students from various colleges across India and abroad showcase their projects.",],

      domains: [`Application Development `, `Communication Networking`, `Security`, `Pattern Recognition, Artificial Intelligence`, `Digital / Image / Speech / Video Processing`, `Others`],

      // domains: [
      //   {
      //     domain: "APPLICATION DEVELOPMENT",
      //     sub_domains:
      //       "Mobile Applications-Android, Web Applications, Database applications, others),(Big Earth Data Analytics, Geo Informatics, Data Mining on Big Data, Digital marketing optimization, Data exploration and discovery, Fraud detection and prevention, Social network and relationship analysis, Machine generated data analytics, Data retention, Others)",
      //   },
      //   {
      //     domain: "COMMUNICATION NETWORKS & SECURITY SYSTEMS",
      //     sub_domains:
      //       "(Computer networks, Internet of Things, Software Defined Network, Vehicular Networks, Wireless and Mobile Networks, Information and Network Security, GPS | GSM Projects, Wireless Communication, Antenna & RF Communication, Optical Communication & Network, Others), (Blockchain applications: cryptocurrency systems, healthcare system, advertising processes, insurance processes, copyright protection system, energy system, tracking system, monitoring system, Security system, societal applications, others), (Virtualization and Autonomic Computing, High Speed Network, Security in Cloud, Cloud Computing, Data center Management, Handling Big Data on Cloud, Mobile Cloud, Cloud Forensics, Fog Computing, Others)",
      //   },
      //   {
      //     domain: "DIGITAL / IMAGE / SPEECH / VIDEO PROCESSING",
      //     sub_domains:
      //       "(Digital Signal processing, Image processing, Speech recognition, Video processing, Speech to text / Text to speech, Others)",
      //   },
      //   {
      //     domain: "EMBEDDED/VLSI SYSTEMS",
      //     sub_domains:
      //       "(Image Processing & Remote Sensing, Machine Learning for Embedded Systems, Embedded Vision, Internet of Things, others), (Analog & Mixed Signal VLSI Design, Testing & Verification of VLSI Design, others)",
      //   },
      // ],

      registrations: {
        fees: {
          national: `&#8377;300/-`,
          international: `Free`,
        },
        min_team_size: 2,
        max_team_size: 5,
      },

      prize: "Total Cash prizes worth &#8377;7 Lakh.",
      note: ` Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded &#8377;1 Lakh Cash Prize from PICT.`,

      rules: [
        'Judges decision will be final.',
        'Project status must be in "Ready to Demonstrate".',
      ],
      button_link: "https://pictinc.org/register/events/concepts",
    },
    pradnya: {
      // contact: [
      //   "Pratik 9145439727",
      //   "Neha 9579678142"
      // ],
      id: 'pradnya',
      prize: "Total Cash prizes worth &#8377;7 Lakh",
      note1: `🔹Judge's decision will be final.`,
      note3: `🔹Already registered candidatess need not register again.`,
      schedule: "March 21, 2025",
      criteria: `Junior Level - First or Second year students of any undergraduate degree/course.#$Senior Level - Third and Final year students of any undergraduate degree/course.`,
      logo: pradnya,
      name: "Pradnya",
      short_desc: "Competitive Programming",

      description: ["PRADNYA is a one of a kind programming event meticulously forged by our finest, catering to rookies and veterans alike, from all over the world. This Contest puts the programmer's logical thinking and Problem solving skills to the test using programming languages, which guarantees to appraise their skills as a programmer.",],

      eligibility: [
        { tag: "Number of members in team", details: "maximum 2 members" },
        {
          tag: "Junior Level",
          details:
            "First year engineering, Second year engineering, other background students such as BCS etc.",
        },
        {
          tag: "Senior Level",
          details:
            "Third year engineering, final year engineering, and PG students.",
        },
      ],
      
      rounds: [
        {
          name: "Wild Card Round",
          details:
            "The wildcard round is open to both junior and senior teams, and the top 5 teams from each category will enter directly into the programming round (Round 2). This round will be conducted online on the coding platform. The wildcard round will include programming questions where the participants can code using any programming language they prefer.",
        },
        {
          name: "Round 1 : MCQ Round [Day 1] ",
          details:
            "In this event the participants are given multiple-choice and short-answer questions. This round is conducted for both levels using a web platform specially designed by the PICT Pradnya team. The team will communicate information regarding scheduled slots for this round to the participants one day before the event.",
        },
        {
          name: "Round 2: Programming Round [Day 2]",
          details:
            "Winners in the MCQ-based round and wild card winners are eligible for the programming contest. Five problem statements are allotted to each level, i.e., the junior and senior levels.  This round is held on an online programming platform. The team will communicate information regarding scheduled slots for this round to the participants one day before the event.",
        },
        {
          name: "Round 3: Judges Round  [Day 2]",
          details:
            "In the final round, the top 5 teams qualified for round 2 will enter the judging round. Esteemed industry professionals are invited to serve as judges for this competition stage. During the judging round, the judges will evaluate the five teams based on their solutions from round 2. The judges will then select the top three winning teams.",
        },
      ],
      registrations: {
        fees: {
          national: `&#8377;100/-`,
          international: `Free`,
        },
        min_team_size: 1,
        max_team_size: 2,
      },
      rules: [
        "All students whose colleges are located within the Pune district are required to attend this round in person at the PICT Campus.", "For students residing outside of the Pune district, there is an option to take the round in hybrid mode.",
      ],
      button_link: "https://pictinc.org/register/events/pradnya",
      rule_book: ""
    },
    /*
    nova: {
      id: 'nova',
      logo: nova,
      criteria:
        "First to Fourth Year Students.",
      name: "Nova",

      short_desc: "International-level Game Development and 3D Design Project Exhibition and Competition.",

      description: [`Nova is one of the very few platforms in India dedicated to game developers and designers to showcase their talent.Whether you're passionate about crafting compelling games or creating stunning 3D visuals, Nova offers the perfect stage to let your imagination take center stage. Gain recognition, connect with like-minded creators, and be part of a growing community, redefining the future of game development and design.`,],
      
      domains: [`Arena`, `Mindspark`, `Creative 3D models`, `Animations`, `Assets for games or standalone projects`, `Others`],

      // domains: [
      //   {
      //     domain: "APPLICATION DEVELOPMENT",
      //     sub_domains:
      //       "Mobile Applications-Android, Web Applications, Database applications, others),(Big Earth Data Analytics, Geo Informatics, Data Mining on Big Data, Digital marketing optimization, Data exploration and discovery, Fraud detection and prevention, Social network and relationship analysis, Machine generated data analytics, Data retention, Others)",
      //   },
      //   {
      //     domain: "COMMUNICATION NETWORKS & SECURITY SYSTEMS",
      //     sub_domains:
      //       "(Computer networks, Internet of Things, Software Defined Network, Vehicular Networks, Wireless and Mobile Networks, Information and Network Security, GPS | GSM Projects, Wireless Communication, Antenna & RF Communication, Optical Communication & Network, Others), (Blockchain applications: cryptocurrency systems, healthcare system, advertising processes, insurance processes, copyright protection system, energy system, tracking system, monitoring system, Security system, societal applications, others), (Virtualization and Autonomic Computing, High Speed Network, Security in Cloud, Cloud Computing, Data center Management, Handling Big Data on Cloud, Mobile Cloud, Cloud Forensics, Fog Computing, Others)",
      //   },
      //   {
      //     domain: "DIGITAL / IMAGE/ SPEECH / VIDEO PROCESSING",
      //     sub_domains:
      //       "(Digital Signal processing, Image processing, Speech recognition, Video processing, Speech to text / Text to speech, Others)",
      //   },
      //   {
      //     domain: "EMBEDDED/VLSI SYSTEMS",
      //     sub_domains:
      //       "(Image Processing & Remote Sensing, Machine Learning for Embedded Systems, Embedded Vision, Internet of Things, others), (Analog & Mixed Signal VLSI Design, Testing & Verification of VLSI Design, others)",
      //   },
      // ],

      registrations: {
        fees: {
          national: `&#8377;300/-`,
          international: `Free`,
        },
        min_team_size: 1,
        max_team_size: 5,
      },
      prize: `Total Cash prizes worth &#8377;7 Lakh.`,
      rules: [
        `Judge's decision will be final.`,
        `Project status must be in "Ready to Demonstrate".`,
      ],
      additional: [
        {
          domain: "Game Development",
          details:
            ["Arena: Action, platformers, survival, shooters (FPS/TPS), roguelikes, open-world adventures, racing, rhythm games, stealth, sports, arcade games, fighting games, modded action games." , "Mindscape: Strategy (RTS, turn-based, tower defense), puzzles, simulation (life, business, and physics), tycoon games, card games, board game adaptations, resource management, educational games, gamification projects, games for real-world training, AI-controlled games, and games that involve system optimization or automation.", "2-5 members per team."],
        },
        {
          domain: "Design",
          details:
            ["Creative 3D models, animations, and assets for games or standalone projects.", "1-3 members per team."],
        },
      ],
      note: `Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded &#8377;1 Lakh Cash Prize from PICT.`,

      // contact: ['Apoorvaraj 8530191073 ', 'Mrugank 7083823772', 'Vrushali 9766176681', 'Aarti 9405119460'],
      button_link: "https://pictinc.org/register/events/impetus",
      schedule: "March 21, 2025",
    }, 
    */
  };


  const faculty = [
    { value: "Advisory Committee", names: [{ value: "1. Director: Dr. P. T. Kulkarni" }, { value: "2. Principal: Dr. S. T. Gandhe" }, { value: "3. Convenor: Dr. G. P. Potdar" }, { value: "4. HOCD:  Dr. G. V. Kale" }, { value: "5. HOED:  Dr. M. V. Munot" }, { value: "6. HOID:  Dr. A. S. Ghotkar" }, { value: "7. HOFD: Prof. E. M. Reddy" }] },
    { value: "Coordination Team", names: [{ value: "1. Prof. M. R. Khodaskar (IT)" }, { value: "2. Prof. H.B. Mali (E&TC)" }, { value: "3. Dr. S. V. Mundhe (FE)" }] },
    { value: "Marketing", names: [{ value: "1. Dr. S. S. Narkhede (E&TC)" }, { value: "2. Dr. A. M. Bagade (IT)" }, { value: "3. Dr. S. S. Sonawane (COMP)" }, { value: "4. Dr. G. S Mundada (E&TC)" }] },
    { value: "Guest Invitation & hospitality", names: [{ value: "1. Dr. G. V. Kale (COMP)" }, { value: "2. Prof. M. R. Kale (E&TC)" }, { value: "3. Prof. A. N. Sayyad (FE)" }] },
    { value: "International Project Entries / Publicity (All Zones)", names: [{ value: "1. Dr. M. P. Turuk (E&TC)" }] },
    { value: "National / State Level / Publicity (All Zones)", names: [{ value: "1. Dr. Emmanuel M." }] },
    { value: "Local Publicity", names: [{ value: "1. Prof. R.B. Murumkar & Prof. H. S. Thakar" }, { value: "2. Prof. S.S. Pande (IT)" }, { value: "3. Prof. M. N. Kakade (E&TC)" },{ value: "4. Prof. Y. A. Handge (COMP)" }, { value: "5. Dr. P. A. Khadkikar (COMP)" }, { value: "6. Prof. M. V. Mane (COMP)" }] },
    // { value: "Exclusive Publicity at Professional Bodies & Chapters: IEEE, ACM, CSI, IET ", names: [{ value: "1. Dr. G. V. Kale & Dr. K. V. Sultanpure" }, { value: "2. Prof. M. J. Sagade (E&TC)" }] },
    { value: "Publicity through social media and Campus Ambassador Coordination", names: [{ value: "1. Dr. J. B. Jagdale (IT)" }, { value: "2. Prof. P. S. Shahane (COMP)" }] },
    { value: "InC Synopsis book, Certificates Design Team", names: [{ value: "1. Prof. B. P. Masram &  Prof. A. G. Dhamankar" }, { value: "2. Mr. D. M. Mankar (E&TC)" }] },
    { value: "Certificate Preparation & Distribution Committee ", names: [{ value: "1. Prof. V. B. Patole (FE)" }, { value: "2. Mr. V. A. Manmode (FE)" }, { value: "3. Mr. B. S. Jadhav (IT)" }] },
    { value: "Website Management, Payment Gateways, Domain Registration, SSL Certificate ", names: [{ value: "1. Prof. P. J. Jambhulkar (COMP)" }, { value: "2. Mr. S. R. Shelar (IT)" }] },
    { value: "Program Committee in consultation with Concerned committees", names: [{ value: "1. Dr. K.C. Waghmar (COMP)" },{ value: "2. Prof. S. D. Hade (FE)" }, { value: "3. Dr. U. R. Polina (FE)" }] },
    // { value: "Inauguration of InC in Labs (All arrangements)", names: [{ value: "1. Dr. K.C. Waghmare (COMP)" }, { value: "2. Prof. A. S. Kadam (IT)" }, { value: "3. Prof. A. A. Gawari (E&TC)" }] },
    { value: "Memento Distribution to Judges/Guests", names: [{ value: "1. Prof. S. S. Khot (E&TC)" }, { value: "2. Prof. S.V. Shinkar (E&TC)" }] },
    { value: "Judging Committee for Concepts Event", names: [{ value: "1. Dr. S. B. Deshmukh & Prof. M.S. Chavan" }, { value: "2. Prof. T.A. Rane (IT)" }, { value: "3. Prof. A. A. Chandorkar (COMP)" }, { value: "4. Prof. M. A. Chimanna (E&TC)" }, { value: "5. Prof. D. D. Kadam (COMP)" }, { value: "6. Prof. V. Tribhuvan (IT)" }, { value: "7. Prof. G. S. Pise (IT)" }] },
    { value: "Impetus", names: [{ value: "1. Prof. M. S. Wakode & Prof. V. V. Bagade" }, { value: "2. Dr. S. K Moon (E&TC)" }] },
    { value: "Pradnya", names: [{ value: "1. Prof. S. A. Jakhete (IT)" }, { value: "2. Prof. S. P. Shintre (COMP)" }, { value: "3. Prof. S. L. Rane (IT))" }, { value: "4. Ms. B. M. Katewal (IT)" }] },
    { value: "InC 2023 Theme Projects Identification", names: [{ value: "1. Prof. A. A. Jewalikar (COMP)" }, { value: "2. Prof. P. P. Joshi (COMP)" }, { value: "3. Dr. S. S. Wasekar (E&TC)" }] },
    { value: "Identification of Patentable projects with External IPR Expert.", names: [{ value: "1. Dr. A. M. Deshmukh (FE)" }] },
    { value: "Attendance & Feedback Committee for InC 2024", names: [{ value: "1. Prof. V.B Vaijapurkar (E&TC)" }, { value: "2. Prof. K. M. Masal (E&TC)" }, { value: "3. Prof. A. A. Deshpande (COMP)" }, { value: "4. Prof. A. S. Bodhe (FE)" }] },
    { value: "Finance and Budget Committee", names: [{ value: "1. Prof. A. M. Kulkarni (FE)" }, { value: "2. Dr. A.R. Deshpande (COMP)" }, { value: "3. Mrs. V. V. Karmarkar (ACCOUNTS)" }] },
    { value: "Student Volunteer Committee", names: [{ value: "1. Prof. E. M. Reddy (FE)" }, { value: "2. Prof. A. A. Chavan (FE)" }] },
    { value: "Purchase", names: [{ value: "1. Director: Dr. P. T. Kulkarni" }, { value: "2. Principal: Dr. S. T. Gandhe" }, { value: "3. Dr. G. P. Potdar (COMP)" }, { value: "4. Mr. A. V. Sapkal (PO/EM)" }] },
    { value: "Preparation of all relevant Documents/ ISO Files ", names: [{ value: "1. Prof. N. G. Nirmal (E&TC)" }, { value: "2. Prof. D. M. Shinde (E&TC)" },{ value: "3. Mr. S. Renuse (COMP)" }, { value: "4. Mr. A. V. Torne (FE)" }] },
    // { value: "Assistance for InC Coordination Team", names: [{ value: "1. Mr. A. S. Sutar (E&TC)" }, { value: "2. Mr. K. S.  Ugale (E&TC)" }, { value: "3. Mr. S. H. Karsulkar (COMP)" }] },
    { value: "Network Administration and BW management during Event", names: [ { value: "1. Mr. S. S. Metkari (COMP)" }, { value: "2. Mr. P. P. Parkhi (COMP)" }] },
    { value: "VNL", names: [{ value: "1. Prof. R. S. Paswan (COMP)" }, { value: "2. Prof. S. D. Shelke (IT)" }, { value: "3. Prof. A. K. Patel (E&TC)" }, { value: "4. Mr. S. N. Deokate (FE)" }, { value: "5. Mr. N. S. Mirajkar (FE)" }] },
    { value: "Stage Setup", names: [ { value: "1. Prof. P. S. Joshi (COMP)" }, { value: "2. Prof. S. M. Hosamani (E&TC)" }, { value: "3. Prof. U. S. Pawar (COMP)" }, { value: "4. Prof. A. C. Karve (IT)" },{ value: "5. Prof. R. J. Sutar (E&TC)" }, { value: "6. Prof. V. A. Patil (E&TC)" }, { value: "7. Ms. A. M. Kulkarni (IT)" }] },
    { value: "Inauguration and Closing ceremony Tasks.", names: [{ value: "1. Dr. A. R. Deshpande & Dr. A.G. Phakatkar" }] },
    { value: "T-Shirts", names: [{ value: "1. Prof. V. S. Gaikwad (COMP)" }] },
    { value: "Hardware", names: [{ value: "1. Prof. V. R. Jaiswal & Prof. N. V. Buradkar (IT)" }, { value: "2. Prof. D. M. Shinde (E&TC)" }, { value: "3. Prof. S. R. Warhade (IT)" }, { value: "4. Mr. K. B. Kadambande (COMP)" }, { value: "5. Mr. B. S. Jadhav (IT)" }, { value: "6. Mr. D. P. Dabir (E&TC)" }, { value: "7. Mr. A. V. Torne (FE)" }] },
    { value: "Canteen Arrangement", names: [{ value: "1. Prof. H. D. Hake (E&TC)" }, { value: "2. Prof. R. R. Jadhav (COMP)" }, { value: "3. Prof. V. R. Kandekar (COMP)" }, { value: "4. Prof. D.P. Salapurkar (IT)" }, { value: "5. Mr. K.S. Bhosale (OFFICE)" }] },
    { value: "P A System/ Telephone/ Network/ Electrical facilities", names: [{ value: "1. Prof. L.P. Patil (Overall Incharge)" }, { value: "2. Mr. K.S.  Ugale (PA System)" }, { value: "3. Mr. S. M. Pawar (Electrical Maintenance)" }, { value: "4. Mr. S. S. Metkari (Network Admin)" }, { value: "5. Mr. S. M. Shinde (Telephone)" }, { value: "6. Mr. A M Chavan (Electrical Maintenance)" }] },
    { value: "Transport Management", names: [{ value: "1. Prof. P. D Jadhav & Mr. A. V. Sapkal" }, { value: "2. Prof. H. S. Khatri (FE)" }, { value: "3. Prof. V. R. Bhoi (FE)" }, { value: "4. Prof. A.S. Ramteke (E&TC)" }, { value: "5. Mr. R. V. Badekar (COMP)" }, { value: "6. Mr. A. B. Wagh (Purchase)" }] },
    { value: "Parking & Police Arrangement", names: [{ value: "1. Mr. A.V Sapkal (PO/EM)" }, { value: "2. Mr. K. Kadambande (COMP)" }, { value: "3. Mr. A. B. Wagh (Purchase)" }] },
    { value: "Trophies + Memento + Photos", names: [{ value: "1. Prof. K. R. Jadhav (Trophies) (FE)" }, { value: "2. Prof. R.R. Vardhaman (FE)" }, { value: "3. Prof. R. A. Karnavat (Chhajed) (Memento) (IT)" }, { value: "4. Prof. A.A. Bidkar (E&TC)" }, { value: "5. Prof. S. M. Hosamani  (Souvenir) (E&TC)" }, { value: "6. Mr. S. V.  Kasar (COMP)" }] },
    { value: "TechFiesta- Event Execution", names: [{ value: "1. Prof. S. N Upasani & Prof. M.R Jansari" }, { value: "2. Prof. P. B. Tathe (E&TC)" }, { value: "3. Prof. A. C. Karve (IT)" }, { value: "4. Mr. H V Kasar (COMP)" }, { value: "5. Mr. M. K. Shegokar (IT)" }, { value: "6. Mr. L. M.  Pawal (E&TC)" }] },
];

const web = [
  {
    team: 'Support & Guide', members: [
      { name: 'Abhishek Jadhav', post: 'Support & Guide', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://www.linkedin.com/in/AbhishekJadhav2002/', github: 'https://github.com/AbhishekJadhav2002', 
      photo: img1,
      },
      { name: 'Manas Kshatriya', post: 'Support & Guide', email: 'manaskshatriya01@gmail.com', linkedin: 'https://www.linkedin.com/in/manas-kshatriya/', github: 'https://github.com/manaskshatriya', 
      photo: img1,
      }
    ],
  },
  {
    team: 'Web Head', members: [
      { name: 'Viraj Sonawane', post: 'Web Head', email: 'virajssonawane324@gmail.com', linkedin: 'https://www.linkedin.com/in/viraj-sonawane-5518851a7/', github: 'https://github.com/Viraj324/', 
      photo: img1,
      },
      { name: 'Om Panchwate', post: 'Web Head', email: 'ompanchwate2003@gmail.com', linkedin: 'https://linkedin.com/in/om-panchwate-a80a88233/', github: 'https://github.com/ompanchwate', 
      photo: img1,
      },

    ]
  },
  {
    team: 'Web Team', members: [
      { name: 'Parth Sali', post: 'Web Team', email: 'parthsali04@gmail.com', linkedin: 'https://www.linkedin.com/in/parthsali/', github: ' https://github.com/parthsali', 
      photo: img1,
      },
      { name: 'Sairaj Mane', post: 'Web Team', email: 'sairajmane.pict@gmail.com', linkedin: 'https://www.linkedin.com/in/sairaj-mane-263490188/', github: 'https://github.com/SairajMane', 
      photo: img1,
      },
      { name: 'Manasi Lavekar', post: 'Web Team', email: 'manasilavekar1@gmail.com', linkedin: 'https://www.linkedin.com/in/manasi-lavekar-b3213922b/', github: 'https://github.com/Manasi-Lavekar', 
      photo: img1,
      },
      { name: 'Siddhi Ove', post: 'Web Team', email: 'siddhiove0407@gmail.com', linkedin: 'https://www.linkedin.com/in/siddhi-ove-304596250/', github: 'https://github.com/sid040703', 
      photo: img1,
      },
      { name: 'Sarthak Chaudhari', post: 'Web Team', email: 'Sarthakchaudhari401@gmail.com', linkedin: 'https://www.linkedin.com/in/sarthak-chaudhari-0b920722a/', github: 'https://github.com/JusticeChaudhari', 
      photo: img1,
      }
    ]
  }

]

const core = [
  {
    team: "Overall Co-ordinators",
    members: [
      {
        name: "Vineet Kothari",
        post: "Overall Co-ordinator",
        email: "vskothari11@gmail.com",
        linkedin: "https://www.linkedin.com/in/vineet-kothari13/",
        photo: img1,
      },
      {
        name: "Gaurang Mote ",
        post: "Overall Co-ordinator",
        email: "gaurang.mote8@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/gaurang-mote-349905230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        photo: img1,
      },
      {
        name: "Vedant Badade ",
        post: "Overall Co-ordinator",
        email: "vedantbadade397@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/vedant-badade-b83707234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        photo: img1,
      },
    ],
  },
  {
    team: "Operations Heads",
    members: [
      {
        name: "Adnan Patel",
        post: "Operations Head",
        email: "adnanrpatel03@gmail.com",
        linkedin: "https://www.linkedin.com/in/adnanrouf",
        photo: img1,
      },
      {
        name: "Rohan Kashikar",
        post: "Operations Head",
        email: "rohankashikar777@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/rohan-kashikar-19b74819b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        photo: img1,
      },
    ],
  },
  {
    team: "Concepts Heads",
    members: [
      {
        name: "Shreyash Sawarkar",
        post: "Concepts Head",
        email: "sawarkar.shreyash111@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/shreyash-sawarkar-618745272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        photo:img1,
      },
      {
        name: "Srushti Kulkarni",
        post: "Concepts Head",
        email: "kulkarnisrushti100@gmail.com",
        linkedin: "https://www.linkedin.com/in/srushti-kulkarni-36060b249",
        photo:img1,
      },
      {
        name: "Pranjal Bhokare",
        post: "Concepts Head",
        email: "pranjalbhokare27@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/pranjal-bhokare-3a6594201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        photo:img1,
      },
      {
        name: "Mitra Barve",
        post: "Concepts Head",
        email: "barve.mitra@gmail.com",
        linkedin: "https://www.linkedin.com/in/mitra-barve-894827228/",
        photo:img1,
      },
    ],
  },
  {
    team: "Impetus Heads",
    members: [
      {
        name: "Naman Labhsetwar",
        post: "Impetus Head",
        email: "labhsetwarnaman@gmail.com",
        linkedin: "https://www.linkedin.com/in/naman-labhsetwar-01638022a",
        photo:img1,
      },
      {
        name: "Aayush Mohod",
        post: "Impetus Head",
        email: "aayushmohod4@gmail.com",
        linkedin: "https://www.linkedin.com/in/aayush-mohod-05868022a/",
        photo:img1,
      },
      {
        name: "Vaishnavi Mahale",
        post: "Impetus Head",
        email: "vaimahale74@gmail.com",
        linkedin: "https://linkedin.com/in/vaishnavimahale",
        photo:img1,
      },
      {
        name: "Advait Kulkarni",
        post: "Impetus Head",
        email: "advaitkulkarni0102@gmail.com",
        linkedin: "https://www.linkedin.com/in/advait-kulkarni-ak12",
        photo:img1,
      },
    ],
  },
  {
    team: "Pradnya Heads",
    members: [
      {
        name: "Atharva Banasure",
        post: "Pradnya Head",
        email: "atharvabanasure@gmail.com",
        linkedin: "https://www.linkedin.com/in/banasureatharva/",
        photo:img1,
      },
      {
        name: "Manavi Khopade",
        post: "Pradnya Head",
        email: "manaviik.24@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/manavikhopade24?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        photo:img1,
      },
      {
        name: "Tushar Birajdar",
        post: "Pradnya Head",
        email: "tusharbirajdar2002@gmail.com",
        linkedin: "https://www.linkedin.com/in/tushar-birajdar-3a4754229/",
        photo:img1,
      },
    ],
  },
  {
    team: "Marketing Head",
    members: [
      {
        name: "Raj Magdum",
        post: "Marketing Head",
        email: "rajsmagdum@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/rajvardhan-magdum-a53451239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        photo: img1,
      },
    ],
  },
  {
    team: "Publicity Heads",
    members: [
      {
        name: "Prem Chikode",
        post: "Publicity Head",
        email: "chikodeprem3004@gmail.com",
        linkedin: "https://linkedin.com/in/prem-chikode",
        photo: img1,
      },
      {
        name: "Yojan Gandhi",
        post: "Publicity Head",
        email: "yojangandhi24@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/yojan-gandhi-406106188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        photo: img1,
      },
    ],
  },
  {
    team: "V&L Head",
    members: [
      {
        name: "Ojas Deshpande",
        post: "V&L Head",
        email: "ojasanni09@gmail.com",
        linkedin: "https://www.linkedin.com/in/ojas-deshpande-467963226",
        photo: img1,
      },
    ],
  },
  {
    team: "Design Team",
    members: [
      {
        name: "Sahil Todsam",
        post: "Design Head",
        email: "todsamsahil@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/sahil-todsam-5a8157229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        photo: img1,
      },
      {
        name: "Shambhavi Lute",
        post: "Design Head",
        email: "shambhavilute49@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/shambhavi-lute-051987249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        photo: img1,
      },
      {
        name: "Shlok Belgamwar",
        post: "Design Coordinator",
        email: "shlokbelgamwar3@gmail.com",
        linkedin: "https://www.linkedin.com/in/shlok-belgamwar/",
        photo: img1,
      },
    ],
  },
  {
    team: "Social Media Heads",
    members: [
      {
        name: "Isha Verma",
        post: "Social Media Head",
        email: "20.ishaverma@gmail.com",
        linkedin: "https://linkedin.com/in/isha-verma-0b8362229",
        photo: img1,
      },
      {
        name: "Arohi Karhade",
        post: "Social Media Head",
        email: "arohikarhade@gmail.com",
        linkedin: "https://www.linkedin.com/in/arohi-karhade-220589272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        photo: img1,
      },
    ],
  },
];
  
  const timeline = [
    {
      title: "Impetus",
      company_name: "2-5 members",
      icon: logo,
      iconBg: "#383E56",
      date: "Jan 14 - Jan 15",
      points: [
        "Impetus and Concepts (InC) is a flagship technical event.",
        "InC is an intercollegiate international level competition that has been catching the attention of corporate giants.",
        "Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains.",
        ],
      contact: ["Naman: 9999999999", "Naman: 9999999999",],
      fees: "500",
    },
    {
      title: "Concepts",
      company_name: "2-5 members",
      icon: logo,
      iconBg: "#383E56",
      date: "Jan 14 - Jan 15",
      points: [
        "Impetus and Concepts (InC) is a flagship technical event.",
        "InC is an intercollegiate international level competition that has been catching the attention of corporate giants.",
        "Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains.",
        ],
      contact: ["Naman: 9999999999", "Naman: 9999999999",],
      fees: "500",
    },
    {
      title: "Pradnya",
      company_name: "2-5 members",
      icon: logo,
      iconBg: "#383E56",
      date: "Jan 14 - Jan 15",
      points: [
        "Impetus and Concepts (InC) is a flagship technical event.",
        "InC is an intercollegiate international level competition that has been catching the attention of corporate giants.",
        "Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains.",
        ],
      contact: ["Naman: 9999999999", "Naman: 9999999999",],
      fees: "500",
    },
    {
      title: "Techfiesta",
      company_name: "2-5 members",
      icon: logo,
      iconBg: "#383E56",
      date: "Jan 14 - Jan 15",
      points: [
        "Impetus and Concepts (InC) is a flagship technical event.",
        "InC is an intercollegiate international level competition that has been catching the attention of corporate giants.",
        "Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains.",
        ],
      contact: ["Naman: 9999999999", "Naman: 9999999999",],
      fees: "500",
    },
  ];
  
  
  export { about_text, events, timeline, navLinks, sponsors, notifications, eventsData, faculty, web, core };