// Centralized content & image references for Zad Almadina Technical Services

export const IMAGES = {
  hero1: 'https://images.pexels.com/photos/14915303/pexels-photo-14915303.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
  hero2: 'https://images.pexels.com/photos/6957083/pexels-photo-6957083.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
  hero3: 'https://images.pexels.com/photos/28350363/pexels-photo-28350363.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
  whyChooseUs: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  projects: {
    villaMaintenance: 'https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    kitchen: 'https://images.pexels.com/photos/18285887/pexels-photo-18285887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ac: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    plumbing: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    flooring: 'https://images.pexels.com/photos/11806489/pexels-photo-11806489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    painting: 'https://images.pexels.com/photos/6764270/pexels-photo-6764270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    falseCeiling: 'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    carpentry: 'https://images.pexels.com/photos/1388944/floor-flooring-hand-man-1388944.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Projects', href: '#projects' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'Contact Us', href: '#contact' },
];

export const SERVICES = [
  { icon: 'Wind', title: 'Air Conditioning & Ventilation', desc: 'AC installation, ventilation, and air filtration systems for residential and commercial buildings.' },
  { icon: 'Wrench', title: 'Electromechanical Equipment', desc: 'Installation and maintenance of electromechanical equipment with certified technicians.' },
  { icon: 'Droplets', title: 'Plumbing & Sanitary', desc: 'Complete plumbing and sanitary installation services with quality materials and precision.' },
  { icon: 'ChefHat', title: 'Kitchen Installation', desc: 'Modern kitchen installation from cabinetry to countertops with meticulous attention to detail.' },
  { icon: 'Grid3x3', title: 'Floor & Wall Tiling', desc: 'Expert floor and wall tiling works for interiors and exteriors using premium materials.' },
  { icon: 'PaintRoller', title: 'Painting Contracting', desc: 'Professional painting services for interiors and exteriors with flawless finishes.' },
  { icon: 'Sparkles', title: 'Building Cleaning', desc: 'Comprehensive building cleaning services for post-construction and regular maintenance.' },
  { icon: 'Feather', title: 'Engraving & Ornamentation', desc: 'Decorative engraving and ornamentation works that add elegance to any space.' },
  { icon: 'Wallpaper', title: 'Wallpaper Fixing', desc: 'Precision wallpaper installation with seamless patterns and premium materials.' },
  { icon: 'PanelsTopLeft', title: 'False Ceiling & Partitions', desc: 'False ceiling and light partition installation for modern, functional interior spaces.' },
  { icon: 'Layers', title: 'Plaster Works', desc: 'Skilled plaster works for smooth, durable walls and ceilings prepared for finishing.' },
  { icon: 'Waves', title: 'Swimming Pool Installation', desc: 'Swimming pool design, installation, and maintenance for residential and commercial properties.' },
  { icon: 'Hammer', title: 'Carpentry & Wood Flooring', desc: 'Custom carpentry and wood flooring solutions crafted with precision and premium timber.' },
];

export const WHY_CHOOSE_US = [
  { icon: 'Layers', title: 'Integrated Solutions', desc: 'All technical services under one roof for seamless project execution.' },
  { icon: 'ClipboardList', title: 'Project Requirements Expertise', desc: 'Deep understanding of diverse project requirements and specifications.' },
  { icon: 'Ruler', title: 'Attention to Detail', desc: 'Every aspect of the work is handled with meticulous care and precision.' },
  { icon: 'Lightbulb', title: 'Tailored Solutions', desc: 'Customized approaches designed for each project\'s unique needs.' },
  { icon: 'Grid', title: 'Diverse Services', desc: 'A wide range of technical services covering every building requirement.' },
  { icon: 'BadgeCheck', title: 'Professional Service', desc: 'Delivered with professionalism, responsibility, and quality execution.' },
];

export const HOW_WE_WORK = [
  { step: '01', title: 'Contact Us', desc: 'Reach out via phone, WhatsApp, or our online form to share your project needs.' },
  { step: '02', title: 'Inspection & Understanding', desc: 'We visit your site to inspect and fully understand your requirements.' },
  { step: '03', title: 'Quotation', desc: 'Receive a detailed, transparent quotation tailored to your project scope.' },
  { step: '04', title: 'Execution', desc: 'Our skilled team executes the work with precision and professionalism.' },
  { step: '05', title: 'Handover', desc: 'Final inspection and handover with quality assurance and your complete satisfaction.' },
];

export const PROJECTS = [
  { title: 'Villa Maintenance', img: IMAGES.projects.villaMaintenance, category: 'Maintenance' },
  { title: 'Kitchen Installation', img: IMAGES.projects.kitchen, category: 'Installation' },
  { title: 'AC & Ventilation', img: IMAGES.projects.ac, category: 'HVAC' },
  { title: 'Plumbing Works', img: IMAGES.projects.plumbing, category: 'Plumbing' },
  { title: 'Flooring & Tiling', img: IMAGES.projects.flooring, category: 'Tiling' },
  { title: 'Painting Works', img: IMAGES.projects.painting, category: 'Painting' },
  { title: 'False Ceiling', img: IMAGES.projects.falseCeiling, category: 'Ceiling' },
  { title: 'Carpentry & Wood Flooring', img: IMAGES.projects.carpentry, category: 'Carpentry' },
];

export const SERVICE_TYPES = [
  'Air Conditioning & Ventilation',
  'Electromechanical Equipment',
  'Plumbing & Sanitary',
  'Kitchen Installation',
  'Floor & Wall Tiling',
  'Painting Contracting',
  'Building Cleaning',
  'Engraving & Ornamentation',
  'Wallpaper Fixing',
  'False Ceiling & Partitions',
  'Plaster Works',
  'Swimming Pool Installation',
  'Carpentry & Wood Flooring',
  'Other',
];

export const CONTACT = {
  phone: '+971 56 912 1295',
  phoneRaw: '+971569121295',
  email: 'ali.warda86@gmail.com',
  location: 'Dubai, United Arab Emirates',
};
