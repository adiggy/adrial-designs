export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  role: string[];
  tools: string[];
  heroImage: string;
  summary: string;
  challenge: string;
  approach: string;
  gallery: {
    type: 'full' | 'half' | 'third';
    image: string;
    label: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: 'gillings-school',
    title: 'UNC Gillings School of Global Public Health',
    subtitle: 'Complete digital platform for the #1 public school of public health',
    category: 'Web Design',
    client: 'UNC Chapel Hill',
    role: ['Strategy', 'UX Design', 'Visual Design', 'Development'],
    tools: ['Figma', 'Next.js', 'Drupal', 'Tailwind CSS'],
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    summary:
      'A ground-up redesign of the digital presence for UNC\'s flagship public health institution, serving 3,000+ students and faculty worldwide.',
    challenge:
      'The existing website was fragmented across multiple systems, making it difficult for prospective students to navigate programs and for researchers to showcase their work. The school needed a unified platform that reflected its position as a global leader in public health.',
    approach:
      'We conducted extensive stakeholder interviews and user research to understand the diverse needs of students, faculty, and the public. The new architecture prioritizes clear pathways for different user types while maintaining flexibility for complex research content.',
    gallery: [
      { type: 'full', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', label: 'Homepage Hero' },
      { type: 'half', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80', label: 'Program Finder' },
      { type: 'half', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', label: 'Research Hub' },
      { type: 'third', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80', label: 'Mobile Nav' },
      { type: 'third', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', label: 'Faculty Cards' },
      { type: 'third', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', label: 'Event Calendar' },
    ],
  },
  {
    slug: 'premier-international',
    title: 'Premier International',
    subtitle: 'Strategic brand identity for a global advisory firm',
    category: 'Brand Identity',
    client: 'Premier International',
    role: ['Brand Strategy', 'Visual Identity', 'Collateral Design'],
    tools: ['Figma', 'Illustrator', 'After Effects'],
    heroImage: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1600&q=80',
    summary:
      'A comprehensive rebrand for a strategic advisory firm, translating their expertise in international business into a sophisticated visual language.',
    challenge:
      'Premier\'s previous brand felt dated and didn\'t communicate the caliber of their global clientele. They needed an identity that could stand alongside Fortune 500 brands while remaining approachable for emerging market clients.',
    approach:
      'We developed a brand strategy rooted in the concept of "bridge-building"—connecting markets, cultures, and opportunities. The visual system uses geometric precision softened by warm gradients, reflecting both expertise and accessibility.',
    gallery: [
      { type: 'full', image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=80', label: 'Logo System' },
      { type: 'half', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80', label: 'Business Cards' },
      { type: 'half', image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80', label: 'Stationery' },
      { type: 'full', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=80', label: 'Brand Guidelines' },
    ],
  },
  {
    slug: 'sunset-grove',
    title: 'Sunset Grove',
    subtitle: 'Master-planned community brand and marketing',
    category: 'Strategy',
    client: 'Sunset Grove Development',
    role: ['Brand Strategy', 'Naming', 'Visual Identity', 'Marketing'],
    tools: ['Figma', 'Illustrator', 'InDesign'],
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80',
    summary:
      'From naming to launch, we built the complete brand identity for a 500-home master-planned community in the Pacific Northwest.',
    challenge:
      'The development team had land and plans but no story. In a competitive real estate market, they needed a brand that could command premium pricing while appealing to families seeking community-oriented living.',
    approach:
      'We led naming workshops, competitive analysis, and buyer persona development. The "Sunset Grove" name emerged from the site\'s western orientation and mature tree preservation plan. The brand balances natural warmth with modern sophistication.',
    gallery: [
      { type: 'full', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', label: 'Brand Identity' },
      { type: 'half', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', label: 'Signage' },
      { type: 'half', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', label: 'Marketing Collateral' },
    ],
  },
  {
    slug: 'covid-dashboard',
    title: 'NC COVID-19 Dashboard',
    subtitle: 'Real-time pandemic data visualization for North Carolina',
    category: 'App/Tool',
    client: 'UNC Chapel Hill',
    role: ['UX Design', 'Data Visualization', 'Frontend Development'],
    tools: ['React', 'D3.js', 'Mapbox', 'Python'],
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
    summary:
      'An accessible, real-time data dashboard that made pandemic statistics understandable for all North Carolinians.',
    challenge:
      'During the pandemic\'s peak, North Carolina needed a way to communicate complex epidemiological data to the public. The information had to be accurate, accessible, and updated in real-time without causing panic or confusion.',
    approach:
      'We prioritized clarity over comprehensiveness. Working with epidemiologists, we identified the key metrics that mattered most and designed visualizations that told a story rather than just displaying numbers. Accessibility was paramount—the dashboard works on any device and meets all WCAG standards.',
    gallery: [
      { type: 'full', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', label: 'Dashboard Overview' },
      { type: 'third', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80', label: 'County Map' },
      { type: 'third', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', label: 'Trend Charts' },
      { type: 'third', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80', label: 'Mobile View' },
    ],
  },
  {
    slug: 'davinci-education',
    title: 'DaVinci Education',
    subtitle: 'Educational platform redesign for next-gen learning',
    category: 'Web Design',
    client: 'DaVinci Education',
    role: ['UX Research', 'UX Design', 'Visual Design'],
    tools: ['Figma', 'Maze', 'Hotjar'],
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
    summary:
      'A complete UX overhaul of an educational technology platform, improving student engagement and learning outcomes.',
    challenge:
      'DaVinci\'s platform had powerful features but poor discoverability. Students weren\'t using the tools available to them, and instructors struggled with course management. The redesign needed to serve both audiences without increasing complexity.',
    approach:
      'We conducted extensive user research with both students and instructors. The new design uses progressive disclosure to reveal complexity only when needed, and introduces a consistent component system that makes the platform feel cohesive across all touchpoints.',
    gallery: [
      { type: 'full', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', label: 'Student Dashboard' },
      { type: 'half', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80', label: 'Course Builder' },
      { type: 'half', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', label: 'Assignment View' },
    ],
  },
  {
    slug: 'bronco-rentals',
    title: 'Luxury Bronco Rentals',
    subtitle: 'Premium 4x4 rental experience in Los Cabos',
    category: 'Brand Identity',
    client: 'Cabo Bronco Co.',
    role: ['Brand Strategy', 'Visual Identity', 'Web Design'],
    tools: ['Figma', 'Webflow', 'Illustrator'],
    heroImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1600&q=80',
    summary:
      'A bold brand identity for a luxury off-road rental experience targeting high-end tourists in Baja California.',
    challenge:
      'The client wanted to position their Bronco fleet as a premium experience, not just car rentals. They needed a brand that communicated adventure and luxury simultaneously—a difficult balance in the automotive space.',
    approach:
      'We leaned into the rugged heritage of the Bronco while adding modern luxury touches. The brand uses desert-inspired earth tones with high-contrast typography that works both on digital platforms and vehicle wraps in bright Mexican sunlight.',
    gallery: [
      { type: 'full', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80', label: 'Brand Identity' },
      { type: 'half', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80', label: 'Website' },
      { type: 'half', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80', label: 'Vehicle Graphics' },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
