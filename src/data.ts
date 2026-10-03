// Centralized content & image references for Zad Almadina Technical Services

export const IMAGES = {
  hero1: 'https://images.pexels.com/photos/14915303/pexels-photo-14915303.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
  hero2: 'https://images.pexels.com/photos/6957083/pexels-photo-6957083.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
  hero3: 'https://images.pexels.com/photos/28350363/pexels-photo-28350363.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
  whyChooseUs: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  pageHeaders: {
    about: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&h=600&w=1920',
    services: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&h=600&w=1920',
    projects: 'https://images.pexels.com/photos/11875898/pexels-photo-11875898.jpeg?auto=compress&cs=tinysrgb&h=600&w=1920',
    contact: 'https://images.pexels.com/photos/5506033/pexels-photo-5506033.jpeg?auto=compress&cs=tinysrgb&h=600&w=1920',
  },
  projects: {
    villaMaintenance: 'https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    kitchen: 'https://images.pexels.com/photos/18285887/pexels-photo-18285887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ac: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    plumbing: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    flooring: 'https://images.pexels.com/photos/11806489/pexels-photo-11806489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    painting: 'https://images.pexels.com/photos/6764270/pexels-photo-6764270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    falseCeiling: 'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    carpentry: 'https://images.pexels.com/photos/1388944/floor-flooring-hand-man-1388944.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    villaPool: 'https://images.pexels.com/photos/10647324/pexels-photo-10647324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    officeInterior: 'https://images.pexels.com/photos/13219418/pexels-photo-13219418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    officeSpace: 'https://images.pexels.com/photos/32205998/pexels-photo-32205998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    renovation: 'https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    plaster: 'https://images.pexels.com/photos/6473966/pexels-photo-6473966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    paintingWall: 'https://images.pexels.com/photos/8481700/pexels-photo-8481700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
];

export type Service = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  iconName: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Air Conditioning & Ventilation',
    description: 'Comprehensive HVAC solutions ensuring optimal indoor air quality and temperature control for residential and commercial spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1617502353457-3a13919e8557?q=80&w=800',
    iconName: 'Wind',
    features: ['AC installation & commissioning', 'Preventative maintenance', 'Duct cleaning', 'Emergency repairs'],
  },
  {
    id: 2,
    title: 'Plumbing & Sanitary',
    description: 'Expert plumbing installations, repairs, and sanitary fittings to ensure leak-free and efficient water management systems.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800',
    iconName: 'Droplets',
    features: ['Water pipe installation', 'Sanitary ware fitting', 'Drainage maintenance', 'Water heaters'],
  },
  {
    id: 3,
    title: 'Electromechanical Works',
    description: 'Safe and compliant electrical and mechanical installations tailored to the specific power and operational requirements of your facility.',
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800',
    iconName: 'Zap',
    features: ['Complete electrical wiring', 'Lighting systems', 'Power distribution', 'Fault finding'],
  },
  {
    id: 4,
    title: 'Kitchen Installation',
    description: 'Professional kitchen fitting and assembly services, customized to match your space, requirements, and design preferences.',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800',
    iconName: 'ChefHat',
    features: ['Cabinet installation', 'Appliance fitting', 'Countertop placement', 'Custom woodwork'],
  },
  {
    id: 5,
    title: 'Floor & Wall Tiling',
    description: 'Precision tiling and flooring services using high-quality materials to enhance the aesthetics and durability of your spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800',
    iconName: 'LayoutGrid',
    features: ['Ceramic & porcelain tiling', 'Marble installation', 'Bathroom tiling', 'Grouting & levelling'],
  },
  {
    id: 6,
    title: 'Painting Contracting',
    description: 'Premium interior and exterior painting services delivering flawless finishes and long-lasting protection for your property.',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800',
    iconName: 'PaintRoller',
    features: ['Interior & exterior painting', 'Surface preparation', 'Decorative finishes', 'Weather-resistant coats'],
  },
  {
    id: 7,
    title: 'Building Cleaning Services',
    description: 'Thorough and professional cleaning services for residential and commercial buildings, ensuring a pristine environment.',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800',
    iconName: 'Sparkles',
    features: ['Deep cleaning', 'Post-construction cleaning', 'Facade cleaning', 'Regular maintenance'],
  },
  {
    id: 8,
    title: 'Engraving & Ornamentation',
    description: 'Detailed engraving and ornamentation works that add a unique, artistic, and luxurious touch to your interiors.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    iconName: 'PenTool',
    features: ['Custom wall designs', 'Decorative motifs', 'Gypsum engraving', 'Artistic finishes'],
  },
  {
    id: 9,
    title: 'Wallpaper Fixing Works',
    description: 'Professional wallpaper installation services ensuring smooth, bubble-free, and perfectly aligned finishes.',
    imageUrl: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800',
    iconName: 'Image',
    features: ['Surface smoothing', 'Pattern alignment', 'Vinyl & fabric wallpapers', 'Removal & replacement'],
  },
  {
    id: 10,
    title: 'False Ceiling & Partitions',
    description: 'Modern false ceiling installations and light partitions designed to improve acoustics, lighting, and spatial organization.',
    imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800',
    iconName: 'Square',
    features: ['Gypsum board ceilings', 'Grid ceilings', 'Glass partitions', 'Drywall setup'],
  },
  {
    id: 11,
    title: 'Plaster Works',
    description: 'High-quality plastering services providing smooth and durable surfaces ready for final finishing and painting.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800',
    iconName: 'Brush',
    features: ['Wall plastering', 'Surface repair', 'Smoothing & finishing', 'Exterior rendering'],
  },
  {
    id: 12,
    title: 'Swimming Pool Installation',
    description: 'Complete swimming pool installation and setup services, built to the highest safety and design standards.',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800',
    iconName: 'Waves',
    features: ['Excavation & structural work', 'Waterproofing', 'Filtration systems', 'Tile finishing'],
  },
  {
    id: 13,
    title: 'Carpentry & Wood Flooring',
    description: 'Expert carpentry and wood flooring services, delivering custom woodwork and elegant floor finishes.',
    imageUrl: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800',
    iconName: 'Hammer',
    features: ['Hardwood flooring', 'Custom cabinetry', 'Door & window fitting', 'Wood repairs'],
  },
];

export const WHY_CHOOSE_US = [
  { icon: 'Layers', title: 'Integrated Solutions', desc: 'All technical services under one roof for seamless project execution.' },
  { icon: 'ClipboardList', title: 'Project Requirements Expertise', desc: 'Deep understanding of diverse project requirements and specifications.' },
  { icon: 'Ruler', title: 'Attention to Detail', desc: 'Every aspect of the work is handled with meticulous care and precision.' },
  { icon: 'Lightbulb', title: 'Tailored Solutions', desc: 'Customized approaches designed for each project\'s unique needs.' },
  { icon: 'Grid', title: 'Diverse Services', desc: 'A wide range of technical services covering every building requirement.' },
  { icon: 'BadgeCheck', title: 'Professional Service', desc: 'Delivered with professionalism, responsibility, and quality execution.' },
];

export const CORE_VALUES = [
  { icon: 'ShieldCheck', title: 'Quality Assurance', desc: 'We deliver the highest standards in every project, using premium materials and proven techniques to ensure lasting results.' },
  { icon: 'Clock', title: 'Reliability', desc: 'We are committed to on-time project completion, respecting your schedule and deadlines without compromising on quality.' },
  { icon: 'HeartHandshake', title: 'Integrity', desc: 'Transparent pricing and honest communication are at the core of everything we do — no hidden costs, no surprises.' },
];

export const HOW_WE_WORK = [
  { step: '01', title: 'Contact Us', desc: 'Reach out via phone, WhatsApp, or our online form to share your project needs.' },
  { step: '02', title: 'Inspection & Understanding', desc: 'We visit your site to inspect and fully understand your requirements.' },
  { step: '03', title: 'Quotation', desc: 'Receive a detailed, transparent quotation tailored to your project scope.' },
  { step: '04', title: 'Execution', desc: 'Our skilled team executes the work with precision and professionalism.' },
  { step: '05', title: 'Handover', desc: 'Final inspection and handover with quality assurance and your complete satisfaction.' },
];

export const PROJECT_CATEGORIES = ['All', 'Villa Maintenance', 'Commercial', 'Finishing Works'] as const;

export const PROJECTS = [
  { title: 'Luxury Villa AC Installation', img: IMAGES.projects.ac, category: 'Villa Maintenance' },
  { title: 'Villa Pool & Maintenance', img: IMAGES.projects.villaPool, category: 'Villa Maintenance' },
  { title: 'Villa Plumbing Works', img: IMAGES.projects.plumbing, category: 'Villa Maintenance' },
  { title: 'Villa Kitchen Installation', img: IMAGES.projects.kitchen, category: 'Villa Maintenance' },
  { title: 'Modern Villa Interior', img: IMAGES.projects.villaMaintenance, category: 'Villa Maintenance' },
  { title: 'Office Tiling & Flooring', img: IMAGES.projects.officeInterior, category: 'Commercial' },
  { title: 'Corporate Office Space', img: IMAGES.projects.officeSpace, category: 'Commercial' },
  { title: 'Commercial False Ceiling', img: IMAGES.projects.falseCeiling, category: 'Commercial' },
  { title: 'Flooring & Tiling Project', img: IMAGES.projects.flooring, category: 'Finishing Works' },
  { title: 'Interior Painting Works', img: IMAGES.projects.painting, category: 'Finishing Works' },
  { title: 'Plaster & Wall Renovation', img: IMAGES.projects.plaster, category: 'Finishing Works' },
  { title: 'Carpentry & Wood Flooring', img: IMAGES.projects.carpentry, category: 'Finishing Works' },
  { title: 'Wall Painting Finishing', img: IMAGES.projects.paintingWall, category: 'Finishing Works' },
  { title: 'Renovation & Finishing', img: IMAGES.projects.renovation, category: 'Finishing Works' },
];

export const TESTIMONIALS = [
  { name: 'Ahmed Al Mansoori', role: 'Villa Owner, Palm Jumeirah', quote: 'Zad Almadina handled our entire villa AC installation and plumbing with incredible professionalism. The team was punctual, clean, and the quality of work exceeded our expectations.' },
  { name: 'Sarah Williams', role: 'Property Manager, Downtown Dubai', quote: 'We have used Zad Almadina for multiple properties under our management. Their attention to detail and ability to handle everything from tiling to painting under one roof has been invaluable.' },
  { name: 'Khalid Rahman', role: 'Business Owner, Business Bay', quote: 'They renovated our entire office space — false ceilings, flooring, and painting — all completed on time and within budget. Highly reliable team that I would recommend to anyone.' },
  { name: 'Fatima Hassan', role: 'Homeowner, Arabian Ranches', quote: 'From the kitchen installation to the decorative finishes, every detail was handled with care. The team was respectful of our home and delivered beautiful results.' },
  { name: 'James Cooper', role: 'Real Estate Developer, JBR', quote: 'Zad Almadina has been our go-to technical services partner for years. Their integrated approach saves us time and money, and the quality is consistently excellent.' },
  { name: 'Mariam Al Zaabi', role: 'Hotel Manager, Dubai Marina', quote: 'Their swimming pool installation and maintenance service is top-notch. Professional, responsive, and always delivering to the highest standards. A truly dependable partner.' },
];

export const SERVICE_TYPES = [
  'Air Conditioning & Ventilation',
  'Plumbing & Sanitary',
  'Electromechanical Works',
  'Kitchen Installation',
  'Floor & Wall Tiling',
  'Painting Contracting',
  'Building Cleaning Services',
  'Engraving & Ornamentation',
  'Wallpaper Fixing Works',
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
