import {
    meta,
    starbucks,
    tesla,
    shopify,
    eq,
    imocha,
    logo,
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
  
  
  export { about_text, timeline, navLinks, sponsors, notifications };