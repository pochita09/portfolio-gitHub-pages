/* Site-wide data — English version */

const SITE = {
  name: 'Akihiro Takahashi',
  tagline: 'Solving workplace problems with AI',
  intro1: 'I build small tools that cut workplace waste using AI.',
  intro2: 'Vibe coding — turning ideas into working tools, fast.',
  about: 'From field interviews, I identify inefficiencies and solve them with AI tools. Based on real workflows and team feedback, I build only what\'s truly needed — quickly.',
  email: 'your@email.com',
};

const TOOLS = [
  {
    id: 'tool-1',
    featured: true,
    href: 'tools/tool-report-agent.html',
    thumb: null,
    thumbImg: 'https://img.youtube.com/vi/Ykko1A4yw2c/hqdefault.jpg',
    name: 'Field Report Generator',
    category: 'Field Work / Reports',
    description: 'Attach a photo and an Excel file to auto-generate a field report in seconds.',
  },
  {
    id: 'tool-2',
    featured: true,
    href: 'tools/tool-qa-agent.html',
    thumb: null,
    thumbImg: 'https://img.youtube.com/vi/m-RAh11qkL4/hqdefault.jpg',
    name: 'Parental Leave Support AI (RAG)',
    category: 'HR Docs / Help Desk',
    description: 'Load work regulations and manuals as PDFs — get instant answers to "How does this work?" questions.',
  },
  {
    id: 'tool-3',
    featured: true,
    href: 'tools/tool-osint-agent.html',
    thumb: null,
    thumbImg: '../images/mosaic_image.png',
    name: 'AI News Monitor',
    category: 'Research / Automation',
    description: 'Automatically collects AI vendor updates via RSS, filters for what matters, and delivers summaries to email and spreadsheet.',
  },
  {
    id: 'tool-6',
    featured: true,
    href: 'tools/tool-obsidian-gmail.html',
    thumb: null,
    thumbImg: '../images/obsidian-ai-demo.jpg',
    name: 'AI Employee Trained on Your Notes',
    category: 'Work OS / AI Employee',
    description: 'Feed your Obsidian notes to AI as your "brain" — build an AI alter ego that learns your judgment and grows smarter with use.',
  },
  {
    id: 'tool-5',
    featured: false,
    href: 'tools/tool-code-review.html',
    thumb: null,
    thumbImg: '../images/review-demo.png',
    name: 'Code & Security Review System',
    category: 'Dev Support / Code Review',
    description: 'Three custom slash commands plus official /security-review check security, cost, data, and logic across 4 dimensions with a single /review command.',
  },
];
