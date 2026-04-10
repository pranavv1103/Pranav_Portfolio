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
    repoUrl: 'https://github.com/pranavv1103/Phoenix',
    tagline: 'Content publishing platform engineered to production SaaS depth with JWT security, AI editorial features, and granular feed logic.',
    description:
      'Phoenix is a full-stack publishing platform built with the architecture of a real SaaS product. It implements layered security, a complete content lifecycle, AI-powered editorial features, and granular feed personalization across a structured Spring Boot REST API backed by a React frontend.',
    highlight:
      'Implements a custom Spring Security filter chain with JWT validation and role hierarchy enforcement at the method level. The feed engine resolves content independently across personalized, trending, category, and author-based surfaces with separate query paths.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'React'],
    metrics: [
      { label: 'REST APIs', value: '20+' },
      { label: 'Platform Features', value: '15+' },
    ],
    features: [
      'Custom Spring Security filter chain with JWT validation and method-level role-based access control across all protected routes',
      'Content lifecycle management with draft state, time-triggered publishing, and timed post visibility enforcement',
      'Integrated analytics module tracking read counts, engagement rates, and trending signals per post',
      'AI-generated content summaries injected into the publishing workflow via external API integration',
      'Multi-surface feed engine delivering personalized, trending, category, and author-based content views independently',
    ],
    category: 'Full-Stack',
    featured: true,
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    id: 2,
    name: 'DevCollab',
    repoUrl: 'https://github.com/pranavv1103/DevCollab',
    tagline: 'Real-time developer collaboration platform with hierarchical workspaces, persistent channels, and inline AI tools.',
    description:
      'DevCollab is a developer-first real-time collaboration platform with hierarchical workspace organization, persistent channel history, and WebSocket-driven messaging. It integrates AI-powered code explanation and thread summarization directly into the conversation context, reducing context-switching for engineering teams.',
    highlight:
      'Manages persistent WebSocket sessions across multiple server contexts with event-driven message routing and isolated channel state per workspace. Each server context enforces independent permission boundaries with role-scoped member access.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'WebSockets'],
    metrics: [],
    features: [
      'Event-driven WebSocket architecture with persistent connection management and channel-scoped message routing',
      'Hierarchical workspace model where servers contain channels and channels support threaded conversations',
      'Role-based access per server with member permissions, invite flows, and profile management',
      'AI code explanation tool surfaced inline inside developer conversations without interrupting the message flow',
      'LLM-powered thread summarization to surface key decisions and action items from long-running discussions',
    ],
    category: 'Full-Stack',
    featured: true,
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    id: 3,
    name: 'StudySync',
    repoUrl: 'https://github.com/pranavv1103/StudySync',
    tagline: 'Two-user accountability platform with synchronized state, intelligent notification scheduling, and deduplication logic.',
    description:
      'StudySync is a two-user accountability platform designed around consistent shared state and intelligent notification scheduling. It solves the synchronization problem in shared goal tracking by combining Socket.IO event propagation, Prisma-managed transactional writes, cron-based reminders with quiet-hour support, and deduplication logic to prevent notification flooding.',
    highlight:
      'Combines Socket.IO push events with Prisma-managed transactional state to guarantee both users always see identical goal progress even across reconnections and quiet-hour windows. Notification delivery uses a state machine to prevent duplicate firing on the same transition.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Socket.IO', 'node-cron'],
    metrics: [
      { label: 'Analytics Window', value: '7-day' },
    ],
    features: [
      'Bidirectional real-time state sync via Socket.IO ensuring both users see identical goal progress without manual refresh',
      'Intelligent notification system with three state transitions, on-track, behind, and completed, with per-user scheduling rules',
      'node-cron based reminder scheduler with configurable quiet hours and timezone-aware delivery windows',
      'Notification deduplication engine preventing repeated delivery for the same state transition event',
      'Seven-day rolling analytics with trend visualization and weekly summary cards for accountability reviews',
    ],
    category: 'Full-Stack',
    featured: true,
    gradient: 'from-violet-600 to-blue-600',
  },
  {
    id: 4,
    name: 'Smart Attendance with AI',
    repoUrl: null,
    tagline: 'Computer vision attendance system with dual-layer fraud prevention, 97% recognition accuracy, and automated reporting.',
    description:
      'A production-grade computer vision attendance system built to eliminate manual check-ins and proxy fraud. It runs a two-stage verification pipeline combining CNN and HOG-based facial recognition with time-bound QR code validation, backed by a Django REST API, a full Tkinter GUI, and automated Pandas reporting across 150+ records.',
    highlight:
      'Uses a two-stage verification pipeline: CNN and HOG facial recognition as the primary gate followed by time-bound QR code validation as the fraud-prevention layer. Both stages must pass independently before an attendance record is written to the database.',
    tech: ['Python', 'Django', 'OpenCV', 'CNN', 'HOG', 'Pandas', 'Tkinter'],
    metrics: [
      { label: 'Detection Accuracy', value: '97%' },
      { label: 'Manual Effort Saved', value: '85%' },
      { label: 'Records Managed', value: '150+' },
    ],
    features: [
      'CNN and HOG ensemble model achieving 97% face recognition accuracy under lighting and angle variation',
      'Time-bound QR code layer as a secondary fraud-prevention gate, invalidating codes after single use or expiry',
      'Real-time Tkinter GUI with live feed integration for instructors to monitor attendance as it happens',
      'Automated Pandas pipeline generating reports and flagging anomalies across 150+ student records',
      'Django REST API backend serving recognition requests, attendance writes, and report generation endpoints',
    ],
    category: 'AI / ML',
    featured: false,
    gradient: 'from-slate-500 to-blue-700',
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
  { label: '365 Days', icon: '🔥', active: true, desc: 'Coding every single day, active yearly streak' },
  { label: '100 Days', icon: '⚡', active: false, desc: '100-day problem solving streak milestone' },
  { label: '50 Days', icon: '🌟', active: false, count: 4, years: ['2022', '2023', '2024', '2025'], desc: '50-day consistency streak' },
  { label: 'Diamond Rank', icon: '💎', active: false, desc: 'Smart Interviews Diamond, ranked #119 of 55,000' },
  { label: 'Top 5%', icon: '🥇', active: false, desc: 'NPTEL national top 5 percentile' },
]

// ─── Certifications ───────────────────────────────────────────────────────────

export const certifications = [
  {
    category: 'Cloud and AI',
    icon: '☁️',
    color: 'indigo',
    items: [
      { title: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services' },
      { title: 'AI Fundamentals', issuer: 'IBM SkillsBuild' },
      { title: 'Career Essentials in Generative AI', issuer: 'Microsoft and LinkedIn' },
    ],
  },
  {
    category: 'Data Science and Analytics',
    icon: '📊',
    color: 'cyan',
    items: [
      { title: 'Data Science for Engineers', issuer: 'NPTEL, IIT Madras' },
      { title: 'Data Analytics with Python', issuer: 'NPTEL, IIT Roorkee' },
    ],
  },
  {
    category: 'Programming and Competitive',
    icon: '💡',
    color: 'violet',
    items: [
      { title: 'SmartCoder Certificate', issuer: 'Smart Interviews' },
      { title: 'Java Certification', issuer: 'HackerRank' },
      { title: 'Python Certification', issuer: 'HackerRank' },
    ],
  },
  {
    category: 'Web and Networking',
    icon: '🌐',
    color: 'slate',
    items: [
      { title: 'HTML and CSS Courses', issuer: 'Inmovidu' },
      { title: 'Python, C, Advanced C and JavaScript Essentials', issuer: 'Cisco Networking Academy' },
    ],
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
