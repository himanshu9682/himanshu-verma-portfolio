/**
 * Central portfolio data — generated from Himanshu Verma's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Himanshu Verma',
  displayName: 'Himanshu Verma',
  firstName: 'HIMANSHU',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A VERMA ORIGINAL',
  role: 'Technical Writer & Software Engineer',
  tagline: ['Technical Writer', 'Software Engineer', 'SEO Strategist'],
  intro:
    'Technical Writer and Software Engineer with nearly 4 years of experience spanning full-stack development, SEO, and technical content strategy. Drove 960% growth in organic search impressions (2.5M to 26.5M) and scaled monthly clicks from 8K to 6.3M within two years at UniConverge Technologies.',
  location: 'Noida, India',
  email: 'himanshu.hv3992@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/himanshu-verma',
    github: 'https://github.com/himanshu-verma',
  },
  resumePdf: '/assets/himanshu_verma_CV.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1110.webp 1110w',
    alt: 'Portrait of Himanshu Verma',
  },
  interests: ['Generative AI', 'IoT & Embedded Systems', 'Prompt Engineering'],
};

export const education = [
  {
    school: 'Mahatma Gandhi Kashi Vidyapith',
    place: 'Varanasi',
    degree: 'B.Sc., Computer Science and Technology',
    period: '2019 – 2022',
    score: '',
  },
  {
    school: 'CBSE',
    place: 'India',
    degree: 'Class XII',
    period: '2019',
    score: '',
  },
  {
    school: 'CBSE',
    place: 'India',
    degree: 'Class X',
    period: '2017',
    score: '',
  },
];

export const experience = [
  {
    company: 'UniConverge Technologies',
    role: 'Research, Content and Cross-Functional Execution Lead',
    place: 'Noida, India',
    period: 'Nov 2023 – Present',
    points: [
      'Managed full-spectrum SEO and content marketing strategy across owned and external channels, delivering record organic performance.',
      'Achieved 960% growth in total organic impressions (2.5M to 26.5M) and grew monthly clicks from 8K to 6.3M within two years, verified through Google Search Console.',
      'Led end-to-end development of The IoT Academy platform — curriculum design, content creation, LMS and website integration, QA, and launch support.',
      'Built and scaled upSkill Campus, an ed-tech platform offering 20+ courses, free internship programs, and career-support content.',
      'Provided end-to-end supervision for high-priority in-house initiatives including IIT-Roorkee and prepHQ.',
    ],
  },
  {
    company: 'EPIS Pvt. Ltd.',
    role: 'Full-Stack Web Developer',
    place: 'India',
    period: 'Feb 2023 – Oct 2023',
    points: [
      'Built scalable, high-performance back-end solutions using modern technologies to support complex web platforms.',
      'Collaborated within a 4-member development team, ensuring efficient coordination and smooth system integration.',
      'Delivered clean, maintainable code and implemented features that measurably enhanced application performance.',
    ],
  },
  {
    company: 'Velocity India',
    role: 'Web Developer Intern',
    place: 'India',
    period: 'Oct 2022 – Jan 2023',
    points: [
      'Led front-end development of an Employee Feedback System, ensuring an intuitive UI/UX.',
      'Collaborated with an 8-developer team to deliver a seamless, fully integrated front-end solution.',
    ],
  },
  {
    company: 'Zuxus Business Solution',
    role: 'Database Administrator Intern',
    place: 'India',
    period: 'Jul 2022 – Oct 2022',
    points: [
      'Supported database administration tasks, gaining hands-on experience in database management and query optimization.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'prephq',
    title: 'prepHQ',
    year: '2026',
    genre: 'Ed-Tech • Career Prep • Full-Stack',
    logline: 'Tech interview and career-preparation platform built for The IoT Academy, helping learners practice skills and prepare for interviews.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Oracle SQL'],
    build: [
      'Built prepHQ as a tech interview and career-preparation platform for The IoT Academy, providing structured support for learners moving into tech roles.',
      'Designed and implemented skill-practice modules, interview prep content, and career-guidance workflows end-to-end.',
    ],
    features: [
      'Tech interview practice modules',
      'Structured career-preparation content',
      'Skill assessment workflows',
      'Integration with The IoT Academy LMS',
    ],
    metrics: [
      { value: '20+', label: 'courses supported' },
      { value: '2026', label: 'launched' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'iot-academy',
    title: 'The IoT Academy',
    year: '2024',
    genre: 'Ed-Tech • IoT • Content Strategy',
    logline: 'End-to-end IoT and Embedded Systems learning platform — curriculum, content, LMS integration and launch.',
    stack: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Oracle SQL'],
    build: [
      'Led end-to-end development of The IoT Academy platform covering curriculum design, content creation, LMS and website integration, QA, and launch support for IoT, Embedded Systems, Edge AI, and Data Analytics courses.',
      'Directed content development for specialized technical domains including Data Analytics, Generative AI, Python, IoT, and Embedded Systems.',
    ],
    features: [
      'IoT, Embedded Systems, Edge AI & Data Analytics courses',
      'Full LMS and website integration',
      'Curriculum design and QA',
      'Launch support and ongoing content strategy',
    ],
    metrics: [
      { value: '20+', label: 'courses published' },
      { value: '960%', label: 'organic impression growth' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'upskill-campus',
    title: 'upSkill Campus',
    year: '2024',
    genre: 'Ed-Tech • Career Upskilling • SEO',
    logline: 'Ed-tech and career-upskilling platform offering 20+ courses, free internship programs, and placement-oriented content.',
    stack: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Oracle SQL'],
    build: [
      'Built and scaled upSkill Campus, an ed-tech platform offering 20+ courses, free internship programs, and placement-oriented, job-readiness content.',
      'Drove organic growth through targeted SEO and content strategy, contributing to the 960% impression growth across UniConverge properties.',
    ],
    features: [
      '20+ courses across tech domains',
      'Free internship programs',
      'Placement-oriented job-readiness content',
      'SEO-driven content strategy',
    ],
    metrics: [
      { value: '20+', label: 'courses offered' },
      { value: '6.3M', label: 'monthly clicks (peak)' },
      { value: '26.5M', label: 'organic impressions' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'seo-growth',
    title: '960% Impression Growth',
    org: 'UniConverge Technologies',
    detail: 'Drove organic search impressions from 2.5M to 26.5M and monthly clicks from 8K to 6.3M within two years, verified via Google Search Console.',
    laurel: 'Record Growth',
  },
  {
    id: 'platform-launches',
    title: 'Three Platforms Launched',
    org: 'UniConverge Technologies',
    detail: 'Led end-to-end build and launch of The IoT Academy, upSkill Campus, and prepHQ — spanning curriculum design, content strategy, and LMS/website integration.',
    laurel: 'Platform Lead',
  },
  {
    id: 'guest-posts',
    title: '5+ Guest Articles Published',
    org: 'TechMarketToday • TechNewsGather • Technologicz',
    detail: 'Published guest articles on AI, IoT, and marketing technology topics across external industry platforms including Newport Paper House and TechsProHub.',
    laurel: 'Published Author',
  },
  {
    id: 'prompt-engineer',
    title: 'Certified Prompt Engineer',
    org: 'Prompt Engineering Certification',
    detail: 'Applies structured prompt design to content research, ideation, and technical documentation workflows.',
    laurel: 'Certified',
  },
  {
    id: 'career-transition',
    title: 'Full-Stack to Content Lead',
    org: '4-Year Career Arc',
    detail: 'Transitioned from hands-on full-stack development and database administration into technical content strategy and cross-functional project leadership within four years.',
    laurel: 'Career Milestone',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Skillsoft', name: 'Oracle Database 11g: RAC Administration', link: '#' },
  { issuer: 'Great Learning', name: 'JIRA Project Management', link: '#' },
  { issuer: 'Great Learning', name: '.NET OOPs', link: '#' },
  { issuer: 'Certified Professional', name: 'Prompt Engineering', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming languages',
    skills: [
      { name: 'PHP', mono: 'Ph', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'C++', mono: 'C+' },
      { name: 'C', mono: 'C' },
      { name: 'VB.NET', mono: 'Vb' },
      { name: 'Oracle SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Web Designing', mono: 'Wd' },
      { name: 'Wireframing', mono: 'Wf' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Administration & optimization',
    skills: [
      { name: 'Oracle SQL', mono: 'Or' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Data Structures', mono: 'Ds' },
    ],
  },
  {
    id: 'seo-content',
    title: 'SEO & Content',
    subtitle: 'Search, strategy & writing',
    skills: [
      { name: 'SEO', mono: 'Se', note: 'Core' },
      { name: 'Keyword Research', mono: 'Kr' },
      { name: 'Technical Writing', mono: 'Tw' },
      { name: 'Content Strategy', mono: 'Cs' },
      { name: 'Google Search Console', mono: 'Gc' },
      { name: 'Web Analytics', mono: 'Wa' },
      { name: 'Guest Posting', mono: 'Gp' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Design',
    subtitle: 'Workflow & collaboration',
    skills: [
      { name: 'JIRA', mono: 'Ji' },
      { name: 'Figma', mono: 'Fi' },
      { name: 'Microsoft Office', mono: 'Ms' },
      { name: 'Visual Studio', mono: 'Vs' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership',
    subtitle: 'Cross-functional execution',
    skills: [
      { name: 'Project Leadership', mono: 'Pl' },
      { name: 'Cross-Functional Teams', mono: 'Cf' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'Problem Solving', mono: 'Ps' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  PHP: ['The IoT Academy', 'upSkill Campus', 'prepHQ'],
  JavaScript: ['The IoT Academy', 'upSkill Campus', 'Employee Feedback System'],
  'Oracle SQL': ['Oracle Database 11g: RAC Administration', 'Zuxus DBA Internship'],
  'VB.NET': ['.NET OOPs – Great Learning'],
  HTML: ['The IoT Academy', 'upSkill Campus', 'Employee Feedback System'],
  CSS: ['The IoT Academy', 'upSkill Campus'],
  DBMS: ['Oracle Database 11g: RAC Administration', 'Zuxus DBA Internship'],
  SEO: ['960% impression growth', 'upSkill Campus', 'The IoT Academy'],
  'Keyword Research': ['UniConverge Technologies – 6.3M monthly clicks'],
  'Technical Writing': ['5+ guest articles published', 'The IoT Academy content'],
  'Content Strategy': ['upSkill Campus', 'The IoT Academy'],
  'Google Search Console': ['960% impression growth verified'],
  JIRA: ['JIRA Project Management – Great Learning'],
  Figma: ['Employee Feedback System UI/UX'],
  'Prompt Engineering': ['Certified Prompt Engineer'],
  'Project Leadership': ['The IoT Academy', 'upSkill Campus', 'prepHQ'],
  'Cross-Functional Teams': ['UniConverge Technologies', 'EPIS Pvt. Ltd.'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2017 – 2022',
    synopsis: 'School years through B.Sc. Computer Science and Technology at Mahatma Gandhi Kashi Vidyapith, Varanasi.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Student',
        description: 'Class X (CBSE, 2017) and Class XII (CBSE, 2019) — building the academic base.',
        tags: ['CBSE', 'Class X', 'Class XII'],
        runtime: '2017 – 2019',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Computer Scientist',
        description: 'B.Sc. in Computer Science and Technology at Mahatma Gandhi Kashi Vidyapith, Varanasi.',
        tags: ['B.Sc.', 'Computer Science', 'Varanasi'],
        runtime: '2019 – 2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'First Deployments',
    period: '2022 – 2023',
    synopsis: 'From database administration intern to full-stack web developer — three roles in under two years.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The DBA',
        description: 'Database Administrator Intern at Zuxus Business Solution — hands-on database management and query optimization.',
        tags: ['Oracle SQL', 'DBMS', 'DBA'],
        runtime: 'Jul – Oct 2022',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Front-End Lead',
        description: 'Web Developer Intern at Velocity India — led front-end development of an Employee Feedback System with an 8-developer team.',
        tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
        runtime: 'Oct 2022 – Jan 2023',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Full-Stack Engineer',
        description: 'Full-Stack Web Developer at EPIS Pvt. Ltd. — scalable back-end solutions and clean, maintainable code in a 4-member team.',
        tags: ['Full-Stack', 'Backend', 'PHP'],
        runtime: 'Feb – Oct 2023',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'The Content Pivot',
    period: '2023 – 2024',
    synopsis: 'Joined UniConverge Technologies as Research, Content and Cross-Functional Execution Lead — and immediately started breaking records.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Strategist',
        description: 'Took ownership of full-spectrum SEO and content marketing strategy across owned and external channels at UniConverge Technologies.',
        tags: ['SEO', 'Content Strategy', 'Technical Writing'],
        runtime: 'Nov 2023',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'The Platform Builder',
        description: 'Led end-to-end development of The IoT Academy and upSkill Campus — curriculum, LMS integration, QA, and launch.',
        tags: ['IoT', 'Ed-Tech', 'LMS', 'Curriculum Design'],
        runtime: 'Nov 2024 – Present',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Record Numbers',
    period: '2024 – 2026',
    synopsis: 'Organic impressions hit 26.5M. Monthly clicks reached 6.3M. Three platforms live. Five guest articles published.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Growth Engine',
        description: '960% growth in organic impressions (2.5M → 26.5M) and monthly clicks from 8K to 6.3M — verified via Google Search Console.',
        tags: ['SEO', 'Google Search Console', 'Organic Growth'],
        runtime: 'Within 2 years',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Author',
        description: 'Published 5+ guest articles on AI, IoT, and marketing technology across TechMarketToday, TechNewsGather, Technologicz, Newport Paper House, and TechsProHub.',
        tags: ['Generative AI', 'IoT', 'Guest Posts'],
        runtime: 'Jan – Mar 2025',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'The Execution Lead',
        description: 'Launched prepHQ — a tech interview and career-preparation platform — while supervising IIT-Roorkee and other high-priority in-house initiatives.',
        tags: ['prepHQ', 'IIT-Roorkee', 'Project Leadership'],
        runtime: 'Feb 2026 – Present',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Generative AI, IoT, and Prompt Engineering point to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring Generative AI, IoT & Embedded Systems, and structured Prompt Engineering at scale.',
        tags: ['Generative AI', 'IoT', 'Prompt Engineering'],
        runtime: 'In production',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Biggest metric', title: '960% Growth', detail: 'Organic impressions: 2.5M → 26.5M', palette: crimson },
  { label: 'Monthly peak', title: '6.3M Clicks', detail: 'Verified via Google Search Console', palette: amber },
  { label: 'Platforms launched', title: '3 Platforms', detail: 'IoT Academy · upSkill Campus · prepHQ', palette: ocean },
  { label: 'Current role', title: 'Content & Execution Lead', detail: 'UniConverge Technologies · Nov 2023 – Present', palette: violet },
  { label: 'Certified', title: 'Prompt Engineer', detail: 'Certified Professional', palette: jade },
  { label: 'Published author', title: '5+ Guest Articles', detail: 'AI · IoT · Marketing Technology', palette: amber },
  { label: 'Database credential', title: 'Oracle RAC Admin', detail: 'Skillsoft · Valid from Jul 2023', palette: crimson },
  { label: 'Project tool', title: 'JIRA Certified', detail: 'Great Learning · Aug 2023', palette: ocean },
  { label: 'Engineering base', title: 'B.Sc. CS & Tech', detail: 'Mahatma Gandhi Kashi Vidyapith · 2022', palette: jade },
  { label: 'Current focus', title: 'Generative AI', detail: 'with IoT & Prompt Engineering', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'Writer. Engineer.',
    lines: ['Technical Writer & Software Engineer', 'Nearly 4 years of cross-functional impact'],
    chips: ['SEO', 'Full-Stack', 'Content Strategy'],
  },
  {
    kicker: 'Education',
    title: 'B.Sc. CS & Tech',
    lines: ['Mahatma Gandhi Kashi Vidyapith, Varanasi', '2019 – 2022'],
  },
  {
    kicker: 'The Numbers',
    title: '960% Growth',
    lines: ['Organic impressions: 2.5M → 26.5M', 'Monthly clicks: 8K → 6.3M', 'Verified via Google Search Console'],
    chips: ['960%', '26.5M impressions', '6.3M clicks'],
  },
  {
    kicker: 'Platforms',
    title: 'Three Originals',
    lines: ['The IoT Academy — IoT, Edge AI & Data Analytics courses', 'upSkill Campus — 20+ courses, free internships', 'prepHQ — tech interview & career prep'],
  },
  {
    kicker: 'Published',
    title: '5+ Guest Articles',
    lines: ['Role of RAG in AI · Top 15 Generative AI Applications', 'LoRaWAN Technology · Omnichannel Marketing Platforms'],
  },
  {
    kicker: 'Certified',
    title: '4 Certifications',
    lines: ['Oracle RAC Admin · JIRA Project Management', '.NET OOPs · Prompt Engineering'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Generative AI · IoT & Embedded Systems · Prompt Engineering at scale'],
  },
];

export type ProfileId = 'himanshu' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'himanshu',
    name: 'Himanshu',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2024–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
