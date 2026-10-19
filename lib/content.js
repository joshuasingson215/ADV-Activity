// All portfolio content lives here so every page stays in sync.

export const site = {
  name: "Joshua Temario Singson",
  email: "joshuasingson215@gmail.com",
  phoneDisplay: "🇵🇭 +63 967 935 1663",
  phoneLink: "tel:+639679351663",
  linkedin: "https://www.linkedin.com/in/davy-jones-locker-mercado-73a80636a",
  photo: "/images/DesignerImage/JoshuaMe.png",
  logo: "/images/logo/Logome.svg",
};

// Drives the dynamic Header: add a page here and it appears in the nav.
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export const experience = [
  {
    role: "UI/UX Designer",
    company: "Freelance / Remote",
    date: "2022 – Present",
    description:
      "Designed user-centered web and mobile interfaces with a focus on usability, accessibility, and visual consistency. Collaborated with clients to craft engaging digital experiences and consistently delivered projects on time with a 95% customer satisfaction rate.",
  },
  {
    role: "UI/UX Designer Intern",
    company: "Project Moonshot IT Solutions",
    date: "2026 – 2026",
    description:
      "Contributed to the design of user-centered interfaces by applying UI/UX principles and user-focused thinking in real-world projects. Enhanced problem-solving and design accuracy while improving digital experiences, resulting in a notable improvement in design efficiency and technical skills within 2 weeks of intensive practice.",
  },
  {
    role: "AI Engineer and Automation Specialist",
    company: "Freelance / Remote",
    date: "2025 – Present",
    description:
      "Build AI-powered tools and automated workflows that help teams save time and reduce repetitive work. Integrate large language models and APIs into practical solutions such as chat assistants, document processing, and data extraction. Design and maintain automations that connect apps, sync data, and handle routine tasks reliably end to end.",
  },
  {
    role: "AI Video Annotator",
    company: "Atlas Capture (Auditor)",
    date: "2025 – 2026",
    description:
      "Annotated and labeled video datasets to support AI and machine learning model training. Performed object tracking, activity labeling, and data validation while adhering to strict annotation guidelines and quality standards. Achieved a 100% accuracy score based on QA validation and quality checks.",
  },
  {
    role: "Lead Generation Specialist",
    company: "Freelance",
    date: "2026 – 2026",
    description:
      "Sourced and verified email contacts for educational institutions, targeting key decision-makers such as school administrators and department heads. Maintained up to 95% data accuracy through rigorous research and validation, producing clean and structured lead lists for outreach.",
  },
  {
    role: "Academic Mentoring Secretary / Social Media Manager",
    company: "Organization Role",
    date: "2022 – 2026",
    description:
      "Coordinated academic mentoring programs by organizing activities, managing documentation, and facilitating communication between mentors and students. Led social media efforts by creating content and increasing page engagement and reach by 64%.",
  },
];

export const services = [
  {
    icon: "/images/Fig.png",
    title: "UI/UX Design",
    tags: ["Web", "Mobile"],
    description: "Clean, intuitive interfaces with usercentered design approach",
  },
  {
    icon: "/images/ReactF.png",
    title: "Full Stack Development",
    tags: ["Frontend", "Backend"],
    description:
      "End-to-end web applications, from responsive interfaces to APIs, servers, and databases",
  },
  {
    icon: "/images/Globe.png",
    title: "Website Portfolio",
    tags: ["Web", "Mobile"],
    description:
      "Modern, responsive website portfolios that showcase personal brands, projects, and professional identity.",
  },
];

export const projects = [
  {
    year: "2026",
    name: "BASE360",
    description:
      "A UI/UX design challenge completed as part of the BASE360 application process. The objective was to design a B2C customer communication platform that unifies social comments, direct messages, WhatsApp, SMS, calls, and email into a single intelligent inbox. The project focused on creating a clean, scalable, and user-friendly interface with streamlined workflows, AI-assisted interactions, and a modern design system to improve productivity and enhance the customer support experience.",
    links: [
      {
        label: "View Design",
        href: "https://www.figma.com/proto/Qx9WKMrrvgrHrb5VTLkrZV/BASE-360?node-id=2-2&viewport=-912%2C856%2C0.36&t=yJ7PVcwwKeQuRwbA-8&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2%3A2&page-id=0%3A1&hide-ui=1",
        preview: "/Preview/BASE360.png",
      },
    ],
  },
  {
    year: "2026",
    name: "VIPTutors Website (Redesign)",
    description:
      "A UI/UX redesign concept created as part of the VIPTutors application process. The project focused on improving the website's visual hierarchy, user experience, accessibility, and overall usability while maintaining the brand's identity. The redesign includes a more intuitive layout, refined interface components, and a modern design system to enhance the user journey.",
    links: [
      {
        label: "View Design",
        href: "https://www.figma.com/proto/nR8exxben6QH9sydIpyLaS/VIP-tutors-Landing-Page-Redesign?page-id=0%3A1&node-id=1-2&viewport=287%2C178%2C0.09&t=NOxgCFxkhqukbXWd-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A2",
        preview: "/Preview/VIP1.png",
      },
      { label: "Visit Website", href: "https://m.viptutors.co/" },
    ],
  },
  {
    year: "2026",
    name: "SELLA",
    description:
      "SELLA is a modern sales management platform built for growing businesses. From tracking real-time revenue to managing your full product catalog, SELLA gives your team everything they need to close deals faster and stay on top of every order without the complexity of traditional systems.",
    links: [
      {
        label: "View Design",
        href: "https://www.figma.com/design/FV9aQX2OJ4LYHAYX6aM8g7/Sella?node-id=0-1&t=UsI8pIxk8kcHprtL-1",
        preview: "/Preview/SELLA.png",
      },
    ],
  },
  {
    year: "2026",
    name: "COFFEE CLOCK",
    description:
      "Coffee Clock is a modern coffee shop reimagined to enhance both aesthetics and user experience. The redesign focuses on creating a warm, inviting environment that balances comfort and functionality, making it ideal for socializing, working, or relaxing. Key elements include a cohesive visual identity, intuitive layout, and attention to detail in furniture, lighting, and branding. This project demonstrates my ability to merge design, atmosphere, and functionality to create a memorable customer experience.",
    links: [
      {
        label: "View Design",
        href: "https://www.figma.com/design/3T0rU3qFQcKvgj6KbNiJnh/COFFEE-CLOCK?node-id=412-4320&t=p4XP2Ulb5hrC6kFa-1",
        preview: "/Preview/CoffeClock.png",
      },
    ],
  },
  {
    year: "2026",
    name: "TAKESPOT",
    description:
      "TakeSpot is a geolocation-based selfie gallery app that turns real-world locations into shared visual stories. Snap a selfie at a spot, drop it on the map, and join a chain of photos left by everyone who's ever stood in that same place. Every location has its own gallery — a Spot Chain that grows over time as more people visit and contribute. Discover spots near you, explore what others have captured there, and leave your mark for the next person to find. It's not just about the photo. It's about the place, the moment, and the people who were there before you.",
    links: [
      {
        label: "View Design",
        href: "https://www.figma.com/design/RmR9UTq9As6EPwLdd8auPo/Takespot-Design?node-id=0-1&t=4kr30mKqMylkbTGs-1",
        preview: "/Preview/TakeSpot.png",
      },
    ],
  },
  {
    year: "2026",
    name: "CODEKEEPER ABOUT US PAGE (Redesign)",
    description:
      "Codekeeper is a Dutch legal tech company providing software and SaaS escrow solutions to ensure business continuity if a software vendor fails. They securely store and verify source code, configurations, and dependencies, enabling clients to access and redeploy critical applications. Codekeeper offers automated, double-encrypted deposits, 24/7 recovery support, and compliance support for regulations like DORA and NIS2.",
    links: [
      {
        label: "View Design",
        href: "https://www.figma.com/design/67Jn3g0OMiWW7axZ4E4jgv/About-Us-Codekeeper-Design?node-id=0-1&t=yoPdpoYod7k0mUzT-1",
        preview: "/Preview/Codekeeper.png",
      },
    ],
  },
  {
    year: "2024",
    name: "BUKSU SAVE PARKING",
    description:
      "BukSU Save Parking is a mobile application that allows users to save their parking location and easily navigate back to their parked vehicle using the built-in navigation feature.",
    links: [
      {
        label: "Project Web",
        href: "https://mercado69.github.io/BUKSU-SAVE-PARKING/",
        preview: "/Preview/Buksu1.png",
      },
      {
        label: "View Design",
        href: "https://www.figma.com/design/mA4ZmPUpHXHWpv0meiDvVR/App-Dev-Onboarding?m=auto&t=BO4a8mpli3Vbl4Ca-6",
        preview: "/Preview/Buksu2.png",
      },
    ],
  },
  {
    year: "2024",
    name: "SHOP GUARD",
    description:
      "Shopguard is a mobile-friendly application project designed to help users control shopping addiction by tracking spending habits, setting limits, and providing streaks or warnings when users are close to exceeding their set budget, encouraging smarter spending decisions in real time.",
    links: [
      {
        label: "View Design",
        href: "https://www.figma.com/design/LBL1l5Ka66BuH6zmwP69P4/SHOP-GUARD?m=auto&t=BO4a8mpli3Vbl4Ca-6",
        preview: "/Preview/ShopGuard.png",
      },
    ],
  },
  {
    year: "2021",
    name: "MIX AND MATCH FURNITURES",
    description:
      "Mix & Match Furnitures is a proposed online furniture shopping application that allows users to browse and customize furniture based on their personal style, tailor items to their preferences, and receive smarter recommendations by setting their room size for a better fit and layout.",
    links: [
      {
        label: "View Design",
        href: "https://www.figma.com/design/2Mq5q1j4U1f5jmjbsV9FGr/Mix-and-Match-Furnitures?m=auto&t=BO4a8mpli3Vbl4Ca-6",
        preview: "/Preview/MMFurnitures.png",
      },
    ],
  },
];

export const skills = [
  { icon: "/images/Fig.png", name: "Figma" },
  { icon: "/images/Canva-logo.png", name: "Canva" },
  { icon: "/images/WHtml.png", name: "HTML5" },
  { icon: "/images/WCss.png", name: "CSS3" },
  { icon: "/images/Javascript.png", name: "JavaScript" },
  { icon: "/images/WGit.png", name: "Git" },
  { icon: "/images/WGithub.png", name: "GitHub" },
  { icon: "/images/WPHP.png", name: "PHP" },
  { icon: "/images/Wmysql.png", name: "MySql" },
  { icon: "/images/Laravel.png", name: "Laravel" },
  { icon: "/images/ReactF.png", name: "React" },
  { icon: "/images/WExpo.png", name: "Expo" },
  { icon: "/images/Android Studio.png", name: "Android Studio" },
  { icon: "/images/ThunderBit.png", name: "ThunderBit" },
  { icon: "/images/Stitch.png", name: "GoogleStitch" },
];

export const certificates = [
  {
    title: "TESDA National Certificate II: Computer Systems Servicing",
    image: "/certificates/TESDA-NCII-CSS.jpg",
  },
];

// Gallery = project screenshots + certificates + photo
export const gallery = [
  ...projects.flatMap((p) =>
    p.links
      .filter((l) => l.preview)
      .map((l) => ({ src: l.preview, title: p.name, category: "Projects" })),
  ),
  ...certificates.map((c) => ({ src: c.image, title: c.title, category: "Certificates" })),
  { src: site.photo, title: site.name, category: "Personal" },
];
