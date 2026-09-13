// Company content transcribed verbatim (lists) from the Jabal Dreams / JD profile PDFs.

export const company = {
  legalName: "Jabal Dreams Intl. LLC",
  brand: "Jabal Dreams",
  subBrand: "JD · Sculptures, Interiors",
  tagline: "Preserving the Past, Crafting the Future.",
  location: "Muscat, Sultanate of Oman",
  cr: "1656478",
  poBox: "1250",
  pc: "120",
  street: "Hail Al Shamaliya St., Al Hail",
  country: "Sultanate of Oman",
  email: "jabaldreams@gmail.com",
  website: "www.jabaldreams.com",
  phones: ["+968 99 10 6834", "+968 97 66 6886", "+968 90 10 4561"],
  disciplines: [
    "Architectural Art",
    "Heritage Restoration",
    "Archaeological Conservation Support",
    "Creative Fabrication",
    "Scale Modeling",
  ],
  intro:
    "Jabal Dreams is a specialized creative fabrication, architectural enhancement, and heritage restoration company based in Muscat, Oman. We collaborate with architects, interior designers, engineers, consultants, developers, contractors, and government entities to transform concepts into distinctive architectural and artistic realities.",
  intro2:
    "Our expertise combines artistic creativity, technical precision, and skilled craftsmanship to deliver sculptural features, textured finishes, architectural elements, heritage restoration works, and highly detailed scale models for a wide range of projects across Oman.",
  intro3:
    "From concept development to final installation, we provide customized solutions that enhance the visual identity, functionality, and cultural value of every space.",
} as const;

export type Service = {
  id: string;
  title: string;
  blurb: string;
  listLabel: string;
  items: string[];
  icon: string;
};

export const services: Service[] = [
  {
    id: "heritage",
    title: "Heritage Restoration & Archaeological Conservation",
    blurb:
      "Restoration, conservation support, and renovation of heritage structures, forts, archaeological monuments, and culturally significant buildings — preserving historical authenticity while integrating modern techniques that ensure durability and long-term preservation.",
    listLabel: "Services Include",
    icon: "Landmark",
    items: [
      "Archaeological Monument Restoration",
      "Heritage Building Restoration & Conservation",
      "Fort Rehabilitation & Enhancement",
      "Traditional Architectural Repairs",
      "Historical Façade Restoration",
      "Decorative Surface Recreation",
      "Texture & Mural Restoration",
      "Architectural Feature Reconstruction",
      "Custom Sculptural Replication",
      "Architectural Documentation & Replication",
      "Adaptive Reuse of Heritage Spaces",
      "Interior Upgrading of Historic Buildings",
    ],
  },
  {
    id: "sculptural",
    title: "Sculptural Wall Art",
    blurb:
      "Custom-designed sculptural installations that create powerful visual statements and become focal points within architectural spaces.",
    listLabel: "Applications",
    icon: "Shapes",
    items: [
      "Artistic Relief Sculptures",
      "Feature Walls",
      "Decorative Architectural Elements",
      "Custom Thematic Installations",
      "Contemporary & Organic Designs",
      "Interior & Exterior Sculptural Features",
    ],
  },
  {
    id: "3d-features",
    title: "3D Architectural Features",
    blurb:
      "Unique three-dimensional architectural elements that add depth, texture, and character to interior and exterior environments.",
    listLabel: "Applications",
    icon: "Boxes",
    items: [
      "Hotel Lobbies",
      "Reception Areas",
      "Corporate Offices",
      "Retail Spaces",
      "Restaurants & Cafés",
      "Villas & Residential Projects",
    ],
  },
  {
    id: "texture-murals",
    title: "Texture Murals & Decorative Finishes",
    blurb:
      "Creative wall treatments that combine artistic expression with architectural enhancement.",
    listLabel: "Services Include",
    icon: "Brush",
    items: [
      "Handcrafted Texture Murals",
      "Decorative Textured Surfaces",
      "Artistic Wall Compositions",
      "Custom Design Patterns",
      "Modern & Traditional Finishes",
      "Interior & Exterior Applications",
    ],
  },
  {
    id: "acoustic",
    title: "Acoustic & Soundproofing Solutions",
    blurb:
      "Functional acoustic treatments designed to improve sound quality while maintaining aesthetic appeal.",
    listLabel: "Applications",
    icon: "AudioLines",
    items: [
      "Offices",
      "Conference Rooms",
      "Studios",
      "Home Theaters",
      "Hospitality Venues",
      "Commercial Spaces",
    ],
  },
  {
    id: "water-features",
    title: "Interior & Exterior Water Features",
    blurb:
      "Custom-designed water features that introduce movement, elegance, and tranquility into architectural environments.",
    listLabel: "Services Include",
    icon: "Waves",
    items: [
      "Decorative Waterfalls",
      "Feature Water Walls",
      "Indoor Water Installations",
      "Outdoor Water Features",
      "Landscape Water Elements",
      "Custom Fountain Concepts",
    ],
  },
  {
    id: "scale-modeling",
    title: "Miniature Scale Modeling",
    blurb:
      "Highly detailed architectural and engineering scale models that assist in project visualization and presentation.",
    listLabel: "Applications",
    icon: "Ruler",
    items: [
      "Architectural Projects",
      "Urban Planning Developments",
      "Heritage Restoration Proposals",
      "Engineering Presentations",
      "Marketing & Exhibitions",
      "Architectural Competitions",
      "Investor & Client Presentations",
    ],
  },
  {
    id: "consultancy",
    title: "Design & Material Consultancy",
    blurb:
      "Professional consultation for architects, interior designers, engineers, developers, and project owners during the design and planning stages — helping clients achieve visually impactful, technically feasible, and cost-effective solutions.",
    listLabel: "Consultancy Services Include",
    icon: "Compass",
    items: [
      "Architectural Feature Design Consultation",
      "Sculptural Art & Landmark Design Development",
      "3D Wall & Texture Concept Design",
      "Interior Rock Formation & Artificial Rock Design",
      "Decorative Surface & Texture Painting Consultation",
      "Colour Scheme & Material Selection",
      "Artistic Theme Development",
      "Material Specification & Recommendation",
      "Fabrication Methodology Planning",
      "Installation Strategy & Technical Guidance",
      "Cost Optimization & Value Engineering",
      "Prototype & Mock-up Development",
      "Custom Architectural Feature Detailing",
      "Project Feasibility Assessment",
    ],
  },
];

export const industries: string[] = [
  "Architecture Firms",
  "Interior Design Companies",
  "Engineering Consultants",
  "Property Developers",
  "Hospitality Projects",
  "Retail Brands",
  "Government Institutions",
  "Public Sector Developments",
  "Event & Exhibition Companies",
  "Residential Projects",
  "Heritage Conservation Projects",
];

// Short, factual notes describing each category (shown when a Work category is selected).
export const categoryNotes: Record<string, string> = {
  "Heritage & Cultural":
    "Cultural recreations, commemorative pieces, and heritage-led work that carry historical and national significance.",
  "Sculpture & Fabrication":
    "Sculptural figures, architectural forms, and bespoke fabrication — built, finished, and installed at scale.",
  "Texture & Murals":
    "Hand-painted murals, textured finishes, and decorative surface work across walls, logos, and canvases.",
  "Scale Models & Miniatures":
    "Precise miniatures and presentation models — and oversized scale pieces — built for visualization and display.",
  "Events & Installations":
    "Festival and exhibition environments fabricated and installed to deadline across Oman.",
};
