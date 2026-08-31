export const siteConfig = {
  name: "AMBE",
  wordmark: "AMBE",
  // placeholder hero line — change here to update navbar + hero + footer
  tagline: "Interiors composed like still lifes.",
  description:
    "AMBE is an interior design studio working in warm oak, lime-washed plaster, black steel and quiet light. Full-home interiors, renovations and styling across California and beyond.",
  email: "studio@ambe.design",
  phone: "+1 (415) 555 0142",
  serviceArea: "San Francisco · Sonoma · Kyoto",
  instagram: "@ambe.studio",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Studio", href: "#studio" },
    { label: "Contact", href: "#contact" },
  ],
};

/* ---------------------------------------------------------------- credibility */

export const stats: { value: string; label: string }[] = [
  { value: "60+", label: "Homes delivered" },
  { value: "12", label: "Years in practice" },
  { value: "3", label: "Design awards" },
  { value: "94%", label: "Clients refer a friend" },
];

export const pressLogos = ["Dwell", "Architectural Digest", "Kinfolk", "Sight Unseen", "The Modern House"];

/* ------------------------------------------------------------------- services */

export type Service = {
  title: string;
  tag: string;
  copy: string;
  image: string;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Full-home interiors",
    tag: "Ground-up & whole-house",
    copy: "From framing to the final vase. We hold the architectural detail, the millwork, the palette and the furniture plan as one composition, so the house reads as a single quiet idea.",
    image: "/photos/living-room",
    points: ["Architectural & millwork detailing", "Material & lighting design", "Furniture, art & procurement"],
  },
  {
    title: "Renovation & remodels",
    tag: "Kitchens, baths, additions",
    copy: "Older houses, re-planned for how you actually live. We open the right walls, keep the good bones, and bring warmth back with oak, plaster and honest hardware.",
    image: "/photos/kitchen-concrete",
    points: ["Space planning & permitting support", "Contractor tender & site oversight", "Before / after documentation"],
  },
  {
    title: "Styling & procurement",
    tag: "The last ten percent",
    copy: "You have the shell; you need the soul. We source the furniture, textiles, lighting and objects, then install and style down to the tray on the ottoman.",
    image: "/photos/bedroom-oak",
    points: ["Furniture & textile sourcing", "Art advisory", "Install & photography styling"],
  },
  {
    title: "Design consultation",
    tag: "Half-day & remote",
    copy: "A focused working session for a single room or a whole direction. You leave with a palette, a plan and a shopping list you can act on yourself.",
    image: "/photos/home-office",
    points: ["On-site or video", "Palette & layout direction", "Written follow-up within 48h"],
  },
];

/* -------------------------------------------------------------------- process */

export const processSteps: {
  no: string;
  when: string;
  title: string;
  copy: string;
}[] = [
  {
    no: "01",
    when: "Day one · no charge",
    title: "Consultation",
    copy: "We walk the space, talk about how you live in it, and agree on scope, timeline and budget. No charge, no obligation.",
  },
  {
    no: "02",
    when: "Weeks 1–3",
    title: "Concept & direction",
    copy: "Plans, a material palette you can hold, and reference imagery. One clear direction — not ten options to referee.",
  },
  {
    no: "03",
    when: "Weeks 3–8",
    title: "Sourcing & documentation",
    copy: "Full drawing set for the trades, every finish specified, every piece of furniture selected and costed before anything is ordered.",
  },
  {
    no: "04",
    when: "Install in one week",
    title: "Build & install",
    copy: "We run point with your builder, receive and inspect deliveries, then install and style the whole house in a single week.",
  },
];

/* ------------------------------------------------------------------- projects */

export type Project = {
  slug: string;
  title: string;
  location: string;
  sqft: number;
  type: string;
  year: number;
  image: string; // /public/photos prefix
  blurb: string;
};

/** Cinematic full-screen panels. */
export const featuredProjects: Project[] = [
  {
    slug: "the-long-room",
    title: "The Long Room",
    location: "Marin County, California",
    sqft: 2400,
    type: "Whole-house renovation",
    year: 2025,
    image: "/photos/living-room",
    blurb:
      "A dark 1970s ranch opened to the ridline. Polished concrete, a single linen sofa, and a wall of glass that does most of the decorating.",
  },
  {
    slug: "black-and-brass",
    title: "Black & Brass",
    location: "San Francisco, California",
    sqft: 540,
    type: "Kitchen",
    year: 2025,
    image: "/photos/kitchen-black",
    blurb:
      "A jewel-box kitchen for a couple who cook every night. Hand-blackened oak, unlacquered brass, a slab of Calacatta that will patina for decades.",
  },
  {
    slug: "paper-lantern",
    title: "Paper Lantern",
    location: "Kyoto, Japan",
    sqft: 1450,
    type: "Guest house",
    year: 2024,
    image: "/photos/bedroom-japandi",
    blurb:
      "Built around a borrowed view of a bamboo court. Rice-paper light, a low oak platform, and nothing on the floor that doesn't need to be there.",
  },
];

/** Smaller grid for the rest of the portfolio. */
export const workGrid: Project[] = [
  {
    slug: "cast-and-grain",
    title: "Cast & Grain",
    location: "Napa, California",
    sqft: 620,
    type: "Kitchen & scullery",
    year: 2024,
    image: "/photos/kitchen-concrete",
    blurb:
      "Board-formed concrete meets rift-sawn oak, cone pendants in matte black overhead.",
  },
  {
    slug: "board-and-branch",
    title: "Board & Branch",
    location: "Healdsburg, California",
    sqft: 1800,
    type: "Dining pavilion",
    year: 2024,
    image: "/photos/dining-room",
    blurb:
      "A ten-foot oak table on a concrete floor, black steel chairs, a shelf of things collected slowly.",
  },
  {
    slug: "pale-oak",
    title: "Pale Oak",
    location: "Carmel, California",
    sqft: 480,
    type: "Kitchen",
    year: 2024,
    image: "/photos/kitchen-oak",
    blurb: "Travertine, blond oak and a woven pendant — a kitchen that disappears into the light.",
  },
  {
    slug: "slow-morning",
    title: "Slow Morning",
    location: "Ojai, California",
    sqft: 2100,
    type: "Primary suite",
    year: 2024,
    image: "/photos/bedroom-oak",
    blurb: "An oak headboard wall, washed linen, and a window kept deliberately bare.",
  },
  {
    slug: "the-reading-wall",
    title: "The Reading Wall",
    location: "London, United Kingdom",
    sqft: 220,
    type: "Home office",
    year: 2023,
    image: "/photos/home-office",
    blurb: "Floor-to-ceiling oak joinery for a writer who owns more books than wall.",
  },
  {
    slug: "threshold",
    title: "Threshold",
    location: "Sonoma, California",
    sqft: 180,
    type: "Entry",
    year: 2025,
    image: "/photos/entryway",
    blurb: "A black steel pivot door, a plaster tunnel, and one bowl on a blackened console.",
  },
];

/* --------------------------------------------------------------- before/after */

export type Transformation = {
  slug: string;
  project: string;
  kind: string;
  location: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

/** [0] is the big scroll-scrubbed feature; the rest render as drag sliders. */
export const transformations: Transformation[] = [
  {
    slug: "the-quiet-bath",
    project: "The Quiet Bath",
    kind: "Bathroom renovation",
    location: "Sausalito, California",
    before: "/photos/bathroom-before",
    after: "/photos/bathroom",
    beforeAlt:
      "The bathroom before renovation — bare grey plaster walls, exposed sink plumbing, a dated toilet and unfinished wall tile",
    afterAlt:
      "The finished bathroom — pale oak vanity, freestanding stone tub, matte black fittings and a full-height window onto the garden",
  },
  // placeholder pairs — swap `before`/`after` for real shots later
  {
    slug: "pale-oak-kitchen",
    project: "Pale Oak",
    kind: "Kitchen — shell to finished",
    location: "Carmel, California",
    before: "/photos/kitchen-oak-before",
    after: "/photos/kitchen-oak",
    beforeAlt:
      "The room before — an empty plaster shell with a bare oak floor and a curtained glass door to the garden",
    afterAlt:
      "The finished kitchen — blond oak cabinetry, a travertine island, a woven pendant and the same garden door",
  },
  {
    slug: "the-long-room-living",
    project: "The Long Room",
    kind: "Living & dining",
    location: "Marin County, California",
    before: "/photos/dining-room",
    after: "/photos/living-room",
    beforeAlt: "Dining area before the reconfigure",
    afterAlt: "Living room after — linen seating and a wall of glass",
  },
];

/* --------------------------------------------------------------- testimonials */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We interviewed five studios. AMBE was the only one that asked how we make coffee before they asked about our budget. The house feels like it was always ours.",
    name: "Elena & Marcus R.",
    role: "The Long Room",
    location: "Marin County, CA",
  },
  {
    quote:
      "They took a gut-job bathroom with exposed pipes and gave us the calmest room in the house. On budget, and a week early.",
    name: "Priya S.",
    role: "The Quiet Bath",
    location: "Sausalito, CA",
  },
  {
    quote:
      "Every finish decision came with one recommendation and a reason. It made a two-year renovation feel almost easy.",
    name: "Daniel K.",
    role: "Cast & Grain",
    location: "Napa, CA",
  },
  {
    quote:
      "I've worked with designers who decorate. AMBE composes. There isn't a corner of this apartment I don't want to photograph.",
    name: "Yuki T.",
    role: "Paper Lantern",
    location: "Kyoto, JP",
  },
];

/* ----------------------------------------------------------------- ugc videos */

export type UgcVideo = {
  handle: string;
  caption: string;
  poster: string;
  /** YouTube URL or 11-char id — plays as a click-to-load nocookie embed */
  youtube?: string;
  /** or an mp4 dropped into /public/videos */
  src?: string;
};

export const ugcVideos: UgcVideo[] = [
  {
    handle: "@marin.reno",
    caption: "Client review — living & dining",
    poster: "/photos/living-room",
    youtube: "https://youtu.be/qnmOOgN9Bso",
  },
  {
    handle: "@napa.build",
    caption: "Client review — kitchen",
    poster: "/photos/kitchen-concrete",
    youtube: "https://youtu.be/AYve1Wgc_nc",
  },
  {
    handle: "@kojima.house",
    caption: "Client review — full home",
    poster: "/photos/bedroom-japandi",
    youtube: "https://youtu.be/1EvWIs_rP3U",
  },
  {
    handle: "@thethreshold",
    caption: "Client review — first walk-through",
    poster: "/photos/entryway",
    youtube: "https://youtu.be/34nZ8kDauKc",
  },
];

/* -------------------------------------------------------------------- contact */

export const projectTypes = [
  "Full-home interior",
  "Renovation / remodel",
  "Single room",
  "Styling & procurement only",
  "Design consultation",
  "Not sure yet",
];

export const budgetBands = [
  "Under $50k",
  "$50k – $150k",
  "$150k – $400k",
  "$400k+",
  "Prefer to discuss",
];
