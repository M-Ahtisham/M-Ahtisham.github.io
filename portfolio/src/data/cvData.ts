// File: portfolio/src/data/cvData.ts

export interface Project {
  title: string;
  description: string;
  tech?: string[];
  link?: string;
  linkText?: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
}

export interface Involvement {
  role: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
}

export const personal = {
  name: 'Muhammad Ahtisham Bhatti',
  tagline: 'Majoring in Artificial Intelligence',
  email: 'muhammadabhatti1234@gmail.com',
  phone: '+49 15510 413430',
  location: 'Deggendorf, Germany',
  linkedin: 'm-ahtisham-bhatti',
  github: 'M-Ahtisham',
  orcid: '0009-0002-6013-9963',
};

export const skills: string[] = [
  'Python', 'Java', 'Pandas', 'NumPy', 'scikit-learn', 'OpenCV',
  'Streamlit', 'Android SDK', 'Git/GitHub', 'SQL', 'HTML/CSS',
  'Machine Learning', 'Computer Vision', 'CI/CD', 'Agile'
];

export const languages = [
  { name: 'Swahili', level: 'First Language', score: 5 },
  { name: 'English', level: 'C1', score: 4.5 },
  { name: 'German', level: 'B2 (ongoing)', score: 3.5 },
];

export const education: Education[] = [
  {
    degree: 'B.Sc. in Artificial Intelligence',
    institution: 'Deggendorf Institute of Technology',
    period: 'Oct 2023 – Ongoing',
    location: 'Deggendorf, Germany',
    details: 'Specializing in Machine Learning and Computer Vision. Applying Python, Algorithms & Data Structures in team projects.'
  },
  {
    degree: 'B.Sc. in Computer Science and Software Engineering',
    institution: 'Ruaha Catholic University',
    period: 'Nov 2022 – July 2023',
    location: 'Iringa, Tanzania',
    details: 'Foundation in computer systems, programming (Java, C++), hardware management, and networking.'
  },
  {
    degree: 'Advanced Certificate in Secondary Education',
    institution: 'Feza Boys\' High School',
    period: 'July 2020 – May 2022',
    location: 'Dar es Salaam, Tanzania',
    details: 'Physics, Mathematics, Chemistry.'
  }
];

export const experience: Experience[] = [
  {
    title: 'Logistics Assistant and Production Helper',
    organization: 'MZ ExCom GmbH',
    period: 'Oct 2024 – Oct 2025',
    location: 'Regensburg, Germany',
    bullets: [
      'Supported logistics processes (sorting, packaging, dispatching), enhancing attention to detail, workflow coordination, and time management.'
    ]
  },
  {
    title: 'Cashier and Crew Member',
    organization: 'Burger King',
    period: 'Apr 2025 – Ongoing',
    location: 'Deggendorf, Germany',
    bullets: [
      'Take orders, handle payments, provide friendly customer service, and learn German in a fast‑paced environment.'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Vision2ASCII',
    description: 'Real‑time video to ASCII art converter using Python, Streamlit, OpenCV, and NumPy.',
    tech: ['Python', 'Streamlit', 'OpenCV', 'NumPy'],
    link: 'https://github.com/M-Ahtisham/Vision2ASCII',
    linkText: 'GitHub'
  },
  {
    title: 'StarX – Car Price Analytics',
    description: 'Web app to analyse car prices in India using Pandas, NumPy, and ML tools.',
    tech: ['Python', 'Pandas', 'scikit-learn'],
    link: 'https://github.com/M-Ahtisham/StarX',
    linkText: 'GitHub'
  },
  {
    title: 'BasraAsianFood – Android App',
    description: 'Official Android app for an online store, built with Java and Android SDK.',
    tech: ['Java', 'Android SDK', 'Git'],
    link: 'https://play.google.com/store/apps/details?id=com.store.basraasianfood',
    linkText: 'Play Store'
  },
  {
    title: 'Plato – Room Booking Assistant',
    description: 'Conversational AI chatbot that helps users book rooms, using LLMs for natural language understanding.',
    tech: ['LLMs', 'Python', 'Azure'],
    link: 'https://plato-confirm-human.azurewebsites.net/',
    linkText: 'Live Demo'
  }
];

export const involvement: Involvement[] = [
  {
    role: 'Active Member',
    organization: 'United AI e.V.',
    period: 'Mar 2025 – Present',
    location: 'Deggendorf, Germany',
    bullets: ['Collaborating on AI projects, sharing code, debugging, and exploring ML concepts in a team setting.']
  },
  {
    role: 'Regional Umur‑e‑Tulaba (Volunteer)',
    organization: 'Ahmadiyya Muslim Jamaat Deutschland KdöR',
    period: '2025 – Present',
    location: 'Bavaria, Germany',
    bullets: [
      'Mentoring students in religious and moral development, organising educational programs.',
      'Volunteered in construction, disassembly, and cleaning at Jalsa Salana Deutschland 2025.',
      'Photographer at regional Ijtema events.'
    ]
  },
  {
    role: 'Member',
    organization: 'Computer Maintenance Club',
    period: 'Jan 2023 – July 2023',
    location: 'Ruaha Catholic University, Tanzania',
    bullets: ['Hands‑on experience in computer troubleshooting, repair, and maintenance.']
  }
];

export const awards = [
  {
    title: 'Samia Scholarship',
    organization: 'President of United Republic of Tanzania',
    date: 'Sep 2022',
    description: 'Recognised for high academic achievement in ACSEE (Division 1, 4 points).'
  },
  {
    title: 'Scholarship by North American University',
    organization: 'North American University (NAU)',
    date: 'Dec 2021',
    description: 'Awarded for performance in the Online International Math Challenge 2021.'
  },
  {
    title: 'Silver Award – Online International Math Challenge',
    organization: 'Online International Math Challenge',
    date: '12 Nov 2021',
    description: 'Awarded with a cash prize of 400,000 Tsh.'
  }
];