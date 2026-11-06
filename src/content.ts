/*
 * Everything on the site that changes over time lives in this file.
 * Edit the data below, commit, and push — the layout updates itself.
 *
 * Images go in public/images/ and are referenced as '/images/<file>'.
 * The résumé lives at public/Paul-Lee-Resume.pdf; replace the file, keep the name.
 */

export interface Metric {
  value: string
  label: string
  /* 0–1. When present, a progress bar is drawn under the metric. */
  ratio?: number
}

export interface Photo {
  src: string
  alt: string
  caption?: string
}

/*
 * The illustration on the right of each project card. `kind` picks the design:
 *  - steps:      numbered chips (the simple default for new projects)
 *  - factsLabel: a nutrition-label style card of facts
 *  - phone:      a wireframe phone with sticker labels
 *  - cards:      offset notification cards, one per step
 */
export type ProjectVisual =
  | { kind: 'steps'; steps: string[] }
  | { kind: 'factsLabel'; title: string; subtitle: string; rows: [string, string][]; meter?: { label: string; percent: number }; footnote?: string }
  | { kind: 'phone'; stickers: [string, string] }
  | { kind: 'cards'; steps: string[]; highlight?: number }

export interface Project {
  title: string
  period: string
  description: string
  impact: string
  tags: string[]
  visual: ProjectVisual
  /* Card colors: a CSS background and whether the text should be light. */
  background: string
  dark: boolean
  /* Spans the full width and gets a "Latest" badge. Use on one project. */
  featured?: boolean
}

export interface Role {
  title: string
  company: string
  companyNote?: string
  period: string
  summary: string
  /* Only the first role's results are shown, as metric tiles. */
  results?: Metric[]
}

export const profile = {
  name: 'Paul Lee',
  initials: 'PL',
  email: 'paullee1606@gmail.com',
  github: 'https://github.com/paullee564',
  linkedin: 'https://www.linkedin.com/in/paullee2028',
  resume: '/Paul-Lee-Resume.pdf',
  nextStop: { short: 'SWE intern ’27', long: 'Summer 2027 SWE internship' },
  intro: 'I’m Paul, a UVA computer science student building full-stack products, developer tools, and agentic AI.',
  about: 'At UVA I study algorithms, systems, compilers, software engineering, and LLMs. I turn those foundations into products for real communities and tools that help engineers move faster.',
  heroPhoto: { src: '/images/paullee.jpg', alt: 'Paul in a white hoodie on a mountain trail during a snowfall', width: 965, height: 1146 },
  sticker: 'CDL holder · drives buses for UTS',
}

export const facts: Metric[] = [
  { value: '3.92', label: 'GPA at UVA' },
  { value: '2028', label: 'Graduating' },
  { value: '3', label: 'AI agents built at Lockheed Martin' },
  { value: '210', label: 'Backend tests on my latest project' },
]

export const stackGroups: { name: string; code: string; items: string[] }[] = [
  { name: 'Languages', code: 'L1', items: ['Python', 'TypeScript', 'Java', 'JavaScript', 'SQL', 'C'] },
  { name: 'Frameworks', code: 'F2', items: ['Mastra', 'CrewAI', 'Agno', 'n8n', 'React Native', 'Django', 'FastAPI'] },
  { name: 'Cloud & data', code: 'C3', items: ['Kubernetes', 'Docker', 'AWS S3', 'Supabase', 'PostgreSQL', 'Redis'] },
]

export const projects: Project[] = [
  {
    title: 'Recipe Nutrition Engine',
    period: '2026 — Present',
    description: 'Turns recipes from blog text, PDFs, and scanned images into traceable per-serving nutrition facts.',
    impact: 'JSON-LD extraction and Tesseract OCR, a deterministic ingredient parser, and USDA FoodData Central matching. Built test-first with 210 backend tests and 91% core coverage.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Docker'],
    visual: {
      kind: 'factsLabel',
      title: 'Pipeline Facts',
      subtitle: 'Per recipe imported',
      rows: [
        ['Input formats', 'Blog · PDF · scan'],
        ['Ingredient data', 'USDA FoodData Central'],
        ['Backend tests', '210'],
      ],
      meter: { label: 'Core coverage', percent: 91 },
      footnote: 'Parse → classify → match → compute per-serving macro- and micronutrients.',
    },
    background: 'linear-gradient(155deg, #d3defd 0%, #aec2f6 100%)',
    dark: false,
    featured: true,
  },
  {
    title: 'Hoos In Love',
    period: '2025 — Present',
    description: 'A React Native dating app for the UVA community, built with Project Code.',
    impact: 'A 15-table relational schema for swipes, matches, chats, and safety tools, plus compatibility scoring and multi-photo onboarding.',
    tags: ['React Native', 'PostgreSQL', 'Supabase'],
    visual: { kind: 'phone', stickers: ['15 tables', 'It’s a match'] },
    background: 'linear-gradient(155deg, #f8dc8f 0%, #f0bd4a 100%)',
    dark: false,
  },
  {
    title: 'UVA Sustainability Marketplace',
    period: '2025',
    description: 'A full-stack marketplace for the UVA community, built and deployed by an Agile team of four.',
    impact: 'Notification triggers, a transaction-state and buyer-request system, and a moderator dashboard with role-based suspension.',
    tags: ['Django', 'Python', 'PostgreSQL', 'AWS S3', 'Heroku'],
    visual: { kind: 'cards', steps: ['Buyer request sent', 'Seller approved', 'Chat opened'], highlight: 1 },
    background: 'linear-gradient(155deg, #2f5068 0%, #1d3346 100%)',
    dark: true,
  },
]

export const roles: Role[] = [
  {
    title: 'Software Engineer Intern',
    company: 'Lockheed Martin',
    companyNote: 'Zeta Associates',
    period: 'May — Aug. 2026',
    summary: 'Built autonomous AI agents in Python for codebase Q&A, Kubernetes diagnostics, and merge-request review.',
    results: [
      { value: '80%', label: 'GitLab codebase agent correct on a 50-question test set', ratio: 0.8 },
      { value: '17/20', label: 'Kubernetes failure scenarios diagnosed correctly', ratio: 0.85 },
      { value: '60%', label: 'Failing builds resolved by the MR reviewer across 30 MRs', ratio: 0.6 },
      { value: '3', label: 'Agent frameworks benchmarked for an air-gapped environment' },
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Project Code',
    period: 'Oct. 2025 — Present',
    summary: 'Building Hoos In Love with Supabase auth, storage, and PostgreSQL-backed matching and messaging.',
  },
]

export const education = {
  school: 'University of Virginia',
  degree: 'B.A. Computer Science · 3.92 GPA',
  period: '2024 — 2028',
  summary: 'Algorithms, systems, compilers, software engineering, and LLMs.',
}

export const job = {
  label: 'On the job',
  title: 'Driving for UTS',
  text: 'Fun fact: I hold a commercial driver’s license, so my part-time job is driving a transit bus for University Transit Service, UVA’s bus system.',
  photo: { src: '/images/paul-portrait.jpg', alt: 'Paul in the driver’s seat of a UTS bus, turning to smile at the camera' },
}

export const photos: Photo[] = [
  { src: '/images/baking.jpg', alt: 'Freshly baked chocolate-glazed donuts', caption: 'Baking, then sharing.' },
  { src: '/images/lake.jpg', alt: 'A mountain lake framed by evergreens', caption: 'More time outside.' },
  { src: '/images/caving.jpg', alt: 'A caving trip with a friend', caption: 'Always up to explore.' },
]

export const hobbies: string[] = ['Running', 'Baking', 'Bodybuilding', 'Reading', 'Rubik’s cube']

/* Leave `cover` out and a placeholder is shown instead of a cover image. */
export const nowReading: { title: string; author: string; cover?: Photo } = {
  title: 'Mistborn: The Final Empire',
  author: 'Brandon Sanderson',
  cover: { src: '/images/mistborn-cover.jpg', alt: 'Cover of Mistborn: The Final Empire by Brandon Sanderson' },
}

export const onRepeat = {
  title: 'True Romance',
  artist: 'Citizens!',
}
