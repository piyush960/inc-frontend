import {
    meta,
    starbucks,
    tesla,
    shopify,
    eq,
    imocha,
    logo,
    impetus,
    concepts,
    pradnya,
    techfiesta,
  } from "../assets";

  const notifications = ["🎉 New Update Available! Check out the latest features. 🎉", "🚀 Special Offer: 50% off all plans. Don't miss out! 🚀", "⚡ Maintenance scheduled for tonight at 10 PM. ⚡"]
  
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
      id: "committee",
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
  
  const sponsors = [
    {
      name: 'eq',
      src: eq,
    },
    {
      name: 'imocha',
      src: imocha,
    },
    {
      name: 'tesla',
      src: tesla,
    },
    {
      name: 'starbucks',
      src: starbucks,
    },
    {
      name: 'shopify',
      src: shopify,
    },
    {
      name: 'meta',
      src: meta,
    },
  ]

  const events = [
    { id: 1, _id: 'impetus', title: "Impetus", description: "Participate in the National Level Competitive Programming Contest.", logo: impetus, color:"bg-slate-700", team_size: '4-5 members', type: 'Idea Competition', date: '14-01-2025' },
    { id: 2, _id: 'pradnya', title: "Pradnya", description: "Compete with the best minds in the National Level Coding Contest.", logo:pradnya, color:"bg-orange-900", team_size: '4-5 members', type: 'Coding Competition', date: '14-01-2025' },
    { id: 3, _id: 'concepts', title: "Concepts", description: "Join us for an exciting coding competition at the national level.", logo: concepts, color:"bg-slate-700", team_size: '4-5 members', type: 'Idea Competition', date: '14-01-2025' },
    { id: 4, _id: 'techfiesta', title: "TechFiesta", description: "International Hackathon", logo: techfiesta, color:"bg-orange-900", team_size: '4-5 members', type: 'Hackathon', date: '14-01-2025' },
    { id: 5, _id: 'game', title: "Game Dev", description: "Compete with the best minds in the Game Development Contest", logo: logo, color:"bg-orange-900", team_size: '4-5 members', type: 'Gaming', date: '14-01-2025' },
  ];

  const eventsData = {
    impetus: {
      id: 'impetus',
      logo: impetus,
      criteria:
        "First, Second and Third Year Students enrolled in any BE/BTech, BSc, BCA, Diploma Degree.",
      name: "Impetus",

      short_desc: "International Level Project Exhibition and Competition ",

      description: ["Impetus is an intercollegiate international level competition and has been attracting corporate giants for not only sponsorship but also in terms of time and guidance to the participants. Industries such as eQ Technologic, Microsoft, Mobiliya, Deutsche Bank Group, Avaya, Siemens, Sagitech, Apporbit, e-Zest, HP, Indian Oil, 3 Ogeestudio, Tata, Mojo Networks, Ryussi, Tibco, Calsoft, Persistent, Pubmatic, IBM, Airtight, AthenaHealth, IEEE, ACM, CSI, were closely associated with this event. During the 3 day event, first year, second year and third year students from various colleges across India and abroad showcase their projects in domains like", `Application Development `, `Communication, Networking, Security `, `git Learning, Pattern Recognition, Artificial Intelligence`, `Embedded systems, VLSI, IoT, Remote Sensing`, `Blockchain, Cloud Computing`, `Others`],
      
      domains: [`Application Development `, `Communication, Networking, Security `, `Git Learning, Pattern Recognition, Artificial Intelligence`, `IoT, Remote Sensing`, `Blockchain`, `Cloud Computing`, `Others`],

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
          national: `₹100 /-`,
          international: `Free`,
        },
        max_team_size: 5,
      },
      prize: `Cash prize worth ₹7 Lakh.`,
      rules: [
        `Judge's decision will be final.`,
    ,
        `Project status must be in "Ready to Use".`,
    ,
        `Already registered candidates need not register again.`,
      ],
      note: `Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded ₹1 Lakh Cash Prize from PICT.`,

      // contact: ['Apoorvaraj 8530191073 ', 'Mrugank 7083823772', 'Vrushali 9766176681', 'Aarti 9405119460'],
      button_link: "https://pictinc.org/register/events/impetus",
      schedule: "5th 6th & 7th of April",
    }, 
    concepts: {
      id: 'concepts',
      logo: concepts,
      criteria: "Final year students enrolled in BE/ BTech degree.",
      schedule: "5th 6th & 7th of April",
      name: "Concepts",
      notices: [
        "1. The Participants should be present on campus and the labs during the time period allocated.",
        "2. At least 2 judges will be judging each project. However there will be judges from other organizations who will be evaluating projects for probable hiring or for special prizes etc. Hence none of the groups should leave the campus unless informed officially by the judging team.",
        "3. The judging criteria includes the following points :- , <p>i. Innovative Ideas Involved.</p>, <p>ii. Approach to Exploit Ideas.</p>, <p> iii. Approach towards Implementing the system and Future Applications.</p>, <p> iv. Implementation of engineering Principles. </p>, <p>v. Presentation and Q & A</p>",
        "4. We request all the group members to visit the stalls put up in the campus.",
        "5. For any judging related queries contact the lab coordinator associated with the respective lab only. Their contact details are written on each lab white board.",
      ],

      short_desc:
        "The most grand project exhibition event Concepts for final year student",

      description: ["Concepts is an inter-collegiate international-level competition and has been attracting corporate giants for not only sponsorship but also  for guiding and mentoring the participants for their Quality products/projects and providing on spot job offers & internships. It offers Patent registration fees for Innovative and Patentable projects. During the 3 day event, Final Year students from various colleges across India and abroad showcase their projects.",],

      domains: [`Application Development `, `Communication, Networking, Security `, `DIGITAL / IMAGE / SPEECH / VIDEO PROCESSING`, `EMBEDDED/VLSI SYSTEMS`, `Others`],

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
          national: `₹100 /-`,
          international: `Free`,
        },
        max_team_size: 5,
      },

      prize: "Cash prize worth ₹7 Lakh.",
      note: ` Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded ₹ 1 Lakh Cash Prize from PICT.`,

      rules: [
        'Judges decision will be final',
        'Project status must be in "Ready to Use',
        'Already registered candidates need not register again',
      ],
      button_link: "https://pictinc.org/register/events/concepts",
    },
    pradnya: {
      // contact: [
      //   "Pratik 9145439727",
      //   "Neha 9579678142"
      // ],
      id: 'pradnya',
      prize: "Cash prize worth ₹7 Lakh",
      note1: `🔹Judge's decision will be final.`,
      note3: `🔹Already registered candidatess need not register again.`,
      schedule: "5th 6th & 7th of April",
      criteria: `Junior Level - This category is open for all students who are pursuing first or second year of any undergraduate  degree/course.#$Senior Level - Third year engineering, final year engineering of any undergraduate degree/course.`,
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
          name: "Round 1 : MCQ Round [ Day 1 ] ",
          details:
            "In this event the participants are given multiple-choice and short-answer questions. This round is conducted for both levels using a web platform specially designed by the PICT Pradnya team. The team will communicate information regarding scheduled slots for this round to the participants one day before the event.",
        },
        {
          name: "Round 2: Programming Round [ Day 2 ]",
          details:
            "Winners in the MCQ-based round and wild card winners are eligible for the programming contest. Five problem statements are allotted to each level, i.e., the junior and senior levels.  This round is held on an online programming platform. The team will communicate information regarding scheduled slots for this round to the participants one day before the event.",
        },
        {
          name: "Round 3: Judges Round  [ Day 2 ]",
          details:
            "In the final round, the top 5 teams qualified for round 2 will enter the judging round. Esteemed industry professionals are invited to serve as judges for this competition stage. During the judging round, the judges will evaluate the five teams based on their solutions from round 2. The judges will then select the top three winning teams.",
        },
      ],
      registrations: {
        fees: {
          national: `₹100 /-`,
          international: `Free`,
        },
        max_team_size: 2,
      },
      rules: [
        "All students whose colleges are located within the Pune district are required to attend this round in person at the PICT Campus.", "For students residing outside of the Pune district, there is an option to take the round in hybrid mode.",
      ],
      button_link: "https://pictinc.org/register/events/pradnya",
      rule_book: ""
    },
  };

  
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
  
  
  export { about_text, events, timeline, navLinks, sponsors, notifications, eventsData };