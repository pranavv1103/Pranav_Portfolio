// ─── Education ────────────────────────────────────────────────────────────────

export const education = [
  {
    id: 1,
    degree: 'Master of Science in Computer Science',
    institution: 'University of Central Florida',
    location: 'Orlando, FL, USA',
    period: 'Aug 2024 to May 2026',
    gpa: '3.97 / 4.0',
    highlight: true,
  },
  {
    id: 2,
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Gokaraju Rangaraju Institute of Engineering and Technology',
    location: 'Hyderabad, India',
    period: 'Dec 2020 to Jun 2024',
    gpa: '8.6 / 10',
    highlight: false,
  },
]

// ─── Experience ──────────────────────────────────────────────────────────────

export const experience = [
  {
    id: 1,
    role: 'Software Engineer / Graduate Assistant',
    company: 'University of Central Florida',
    location: 'Orlando, FL',
    period: 'Aug 2024 to Present',
    type: 'Full-time',
    highlights: [
      'Built data processing pipelines with Python, Java, and SQL, cutting evaluation turnaround by 30%',
      'Developed React dashboards that processed 200+ student submissions per cycle',
      'Engineered REST APIs with Spring Boot, Spring Security, and JWT across full-stack features',
      'Designed PostgreSQL and MongoDB schemas for structured and document-based workflows',
      'Deployed and managed services with Docker, Kubernetes, AWS S3, and Lambda',
    ],
    tech: ['Python', 'Java', 'Spring Boot', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    id: 2,
    role: 'Software Developer',
    company: 'Next CloudWave Solutions',
    location: 'Remote',
    period: 'Prior to Aug 2024',
    type: 'Full-time',
    highlights: [
      'Built and maintained 20+ REST APIs across Java, Python, Spring Boot, and SQL service layers',
      'Optimized MySQL query performance and reduced average API latency by 25%',
      'Developed 15+ React UI components and pages for production features',
      'Contributed across 12+ Agile sprints using Docker, AWS EC2, Git, and Linux',
    ],
    tech: ['Java', 'Python', 'Spring Boot', 'React', 'MySQL', 'Docker', 'AWS EC2', 'Linux'],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    name: 'Phoenix',
    tagline: 'Production-grade content publishing platform with AI and granular feed logic.',
    description:
      'Phoenix is a full-stack publishing platform built with the depth of a real SaaS product. It combines secure role-based access, flexible content workflows, AI-powered features, and granular feed logic across a clean REST API architecture.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'React'],
    metrics: [
      { label: 'REST APIs', value: '20+' },
      { label: 'React Components', value: '20+' },
      { label: 'Platform Features', value: '15+' },
      { label: 'Secured Endpoints', value: '20+' },
    ],
    features: [
      'JWT authentication with RBAC enforced across 20+ endpoints',
      'Drafts and scheduled publishing with timed visibility enforcement',
      'Series, tagging, comments, and built-in analytics modules',
      'AI-generated content summaries integrated into the publishing pipeline',
      'Feed, profile, search, trending, and direct post access surfaces',
    ],
    category: 'Full-Stack',
    featured: true,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    id: 2,
    name: 'DevCollab',
    tagline: 'Real-time collaboration platform for developer teams with AI-powered tools.',
    description:
      'DevCollab is a developer-first collaboration platform with structured workspaces, persistent channels, and real-time messaging. AI developer tools are embedded directly into the workflow for code explanation and discussion summarization.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'WebSockets'],
    metrics: [
      { label: 'Core Modules', value: '5' },
      { label: 'Workspaces', value: '10+' },
      { label: 'AI Tools', value: '2' },
    ],
    features: [
      'WebSocket-powered real-time messaging across channels and servers',
      'Five core modules: authentication, servers, channels, messaging, and profiles',
      'Supports parallel discussions across 10+ workspaces simultaneously',
      'AI code explanation tool embedded directly into developer conversations',
      'Thread summarization to reduce cognitive overhead in long discussions',
    ],
    category: 'Full-Stack',
    featured: true,
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
  },
  {
    id: 3,
    name: 'StudySync',
    tagline: 'Real-time accountability and goal tracking platform with smart notifications.',
    description:
      'StudySync is a two-user accountability platform built around real-time synchronization and intelligent scheduling. It solves the cold-start problem in productivity tracking by combining WebSocket-driven state updates, cron-based reminders, and deduplication logic for notifications.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Socket.IO', 'node-cron'],
    metrics: [
      { label: 'Real-time Sync', value: 'Live' },
      { label: 'Notification States', value: '3+' },
      { label: 'Analytics Window', value: '7-day' },
    ],
    features: [
      'Two-user accountability system with real-time progress sync via Socket.IO',
      'Daily goal tracking with smart status notifications: on-track, behind, and completed',
      'Scheduled reminders using node-cron with support for quiet hours',
      'Deduplication logic for notifications with clean state transition handling',
      'Seven-day trend analytics and summary cards for progress visibility',
    ],
    category: 'Full-Stack',
    featured: true,
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
  },
  {
    id: 4,
    name: 'Smart Attendance with AI',
    tagline: 'AI facial recognition system with QR fraud prevention and automated reporting.',
    description:
      'A computer vision attendance system that replaces manual check-ins with real-time facial recognition and a QR-based fraud prevention layer. Includes a full GUI workflow and automated reporting managing 150+ records.',
    tech: ['Python', 'Django', 'OpenCV', 'CNN', 'HOG', 'Pandas', 'Tkinter'],
    metrics: [
      { label: 'Detection Accuracy', value: '97%' },
      { label: 'Manual Effort Saved', value: '85%' },
      { label: 'Records Managed', value: '150+' },
    ],
    features: [
      '97% facial recognition accuracy using CNN and HOG models',
      'QR code verification layer preventing fraudulent check-ins',
      'Real-time Tkinter GUI for live attendance management',
      'Automated Pandas-based reporting across 150+ student records',
      'Django backend serving the recognition and reporting API',
    ],
    category: 'AI / ML',
    featured: false,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillGroups = [
  {
    category: 'Languages',
    icon: 'Code2',
    color: 'indigo',
    skills: ['Java', 'Python', 'JavaScript', 'SQL', 'C', 'C++', 'C#', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    color: 'purple',
    skills: ['Spring Boot', 'Spring Security', 'Node.js', 'Express', 'REST APIs', 'JWT', 'WebSockets', 'Django'],
  },
  {
    category: 'Frontend',
    icon: 'Monitor',
    color: 'cyan',
    skills: ['React', 'Angular', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Databases',
    icon: 'Database',
    color: 'emerald',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma'],
  },
  {
    category: 'Cloud / DevOps',
    icon: 'Cloud',
    color: 'sky',
    skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'GitHub Actions', 'AWS Lambda', 'AWS S3', 'AWS EC2'],
  },
  {
    category: 'Tools & Libraries',
    icon: 'Wrench',
    color: 'amber',
    skills: ['Linux', 'Git', 'Pandas', 'NumPy', 'OpenCV', 'PyTorch', 'Postman'],
  },
]

// ─── DSA / Achievements ───────────────────────────────────────────────────────

export const dsaStats = [
  { label: 'LeetCode Solved', value: 650, suffix: '+', color: 'indigo' },
  { label: 'Smart Interviews Rank', value: 119, prefix: '#', suffix: ' / 55K', color: 'cyan' },
  { label: 'Students Mentored', value: 250, suffix: '+', color: 'purple' },
]

export const achievements = [
  {
    title: 'Diamond Certified',
    subtitle: 'Smart Interviews',
    detail: 'Ranked #119 out of 55,000+ participants nationally',
    icon: '💎',
    color: 'cyan',
  },
  {
    title: '650+ Problems Solved',
    subtitle: 'LeetCode',
    detail: 'Consistent problem solving across arrays, graphs, DP, and system design patterns',
    icon: '🧠',
    color: 'indigo',
  },
  {
    title: 'Top 5 Percentile',
    subtitle: 'NPTEL: Data Analytics with Python',
    detail: 'National-level recognition across IIT-conducted certification',
    icon: '🏅',
    color: 'amber',
  },
  {
    title: 'Mentored 250+ Students',
    subtitle: 'Academic Mentorship',
    detail: 'Guided peers on DSA, system design, career preparation, and interview readiness',
    icon: '🎓',
    color: 'emerald',
  },
]

export const codingBadges = [
  { label: '365 Days', icon: '🔥', active: true, desc: 'Active yearly consistency badge' },
  { label: '100 Days', icon: '⚡', active: false, desc: '100-day problem solving streak milestone' },
  { label: '50 Days', icon: '🌟', active: false, desc: 'First 50-day streak milestone' },
  { label: '50 Days II', icon: '🌟', active: false, desc: 'Second 50-day streak milestone' },
  { label: 'Diamond Rank', icon: '💎', active: false, desc: 'Smart Interviews Diamond certification' },
  { label: 'Top 5%', icon: '🥇', active: false, desc: 'NPTEL national top percentile' },
]

// ─── Certifications ───────────────────────────────────────────────────────────

export const certifications = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    icon: '☁️',
    color: 'amber',
  },
  {
    title: 'Generative AI Essentials',
    issuer: 'Industry Certification',
    icon: '🤖',
    color: 'purple',
  },
  {
    title: 'Data Analytics with Python',
    issuer: 'NPTEL (IIT)',
    icon: '📊',
    color: 'cyan',
  },
  {
    title: 'Networking Academy',
    issuer: 'Cisco',
    icon: '🌐',
    color: 'sky',
  },
  {
    title: 'SmartCoder Certification',
    issuer: 'Smart Interviews',
    icon: '💡',
    color: 'indigo',
  },
  {
    title: 'NPTEL Certification',
    issuer: 'IIT National Programme',
    icon: '🎓',
    color: 'emerald',
  },
]

// ─── Nav links ────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'DSA', href: '#dsa' },
  { label: 'Contact', href: '#contact' },
]
