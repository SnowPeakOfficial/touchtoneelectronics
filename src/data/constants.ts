export const COMPANY_INFO = {
  name: "TouchTone Electronics",
  tagline: "Your Electronics Experts",
  description: "Professional electronics repair, phone unlocking, and retail services in Mississauga",
  phone: "905-277-5552",
  email: "touchtone.electronics@gmail.com",
  address: {
    street: "33-377 Burnhamthorpe Rd E",
    city: "Mississauga",
    province: "ON",
    postalCode: "L5A 3Y1",
    full: "33-377 Burnhamthorpe Rd E, Mississauga, ON, L5A 3Y1"
  },
  hours: {
    weekdays: "Monday - Friday: 10:00 AM - 7:00 PM",
    saturday: "Saturday: 10:30 AM - 6:00 PM",
    sunday: "Sunday: 12:00 PM - 5:00 PM"
  },
  social: {
    facebook: "",
    instagram: "",
    google: ""
  }
};

export const SERVICES = [
  {
    id: "repair",
    title: "Electronic Device Repair",
    description: "Expert repair services for smartphones, tablets, laptops, and other electronic devices",
    icon: "Wrench",
    features: [
      "Screen replacements",
      "Battery replacements", 
      "Water damage repair",
      "Charging port repair",
      "Software troubleshooting"
    ],
    estimatedTime: "Same day to 3 business days",
    warranty: "90-day warranty on all repairs"
  },
  {
    id: "unlocking",
    title: "Phone Unlocking",
    description: "Professional phone unlocking services for all major carriers and devices",
    icon: "Unlock",
    features: [
      "All carrier unlocking",
      "iPhone & Android support",
      "Fast turnaround time",
      "Safe & legal process",
      "No voided warranties"
    ],
    estimatedTime: "15 minutes to 24 hours",
    warranty: "100% success guarantee"
  },
  {
    id: "digitizing",
    title: "Cassette Digitizing",
    description: "Convert your old cassette tapes to digital format to preserve precious memories",
    icon: "Music",
    features: [
      "High-quality digital conversion",
      "Multiple format options",
      "Noise reduction",
      "Custom labeling",
      "USB/CD delivery"
    ],
    estimatedTime: "3-5 business days",
    warranty: "Quality guarantee"
  },
  {
    id: "screen-protection",
    title: "Screen Protector Installation",
    description: "Professional installation of screen protectors with bubble-free guarantee",
    icon: "Shield",
    features: [
      "Tempered glass installation",
      "Bubble-free application",
      "Perfect alignment",
      "All device types",
      "Replacement warranty"
    ],
    estimatedTime: "10-15 minutes",
    warranty: "Free replacement if damaged during install"
  },
  {
    id: "watch-repair",
    title: "Watch Repairs & Battery Replacement",
    description: "Complete watch repair services including battery replacement and maintenance",
    icon: "Watch",
    features: [
      "Battery replacement",
      "Band replacement",
      "Water resistance testing",
      "Movement repair",
      "Cleaning & maintenance"
    ],
    estimatedTime: "Same day service",
    warranty: "6-month warranty on batteries"
  },
  {
    id: "printing",
    title: "Copy, Scan, Print & Email Services",
    description: "Full-service document solutions for all your business and personal needs",
    icon: "Printer",
    features: [
      "High-quality printing",
      "Document scanning",
      "Email services",
      "Copying services",
      "Multiple format support"
    ],
    estimatedTime: "While you wait",
    warranty: "Quality guarantee"
  }
];

export const KOODO_SERVICES = {
  title: "Authorized Koodo Vendor",
  description: "Official Koodo vendor providing prepaid phone plans and SIM card activation",
  features: [
    "Prepaid plan setup",
    "SIM card activation", 
    "Plan consultations",
    "Device compatibility check",
    "Account management assistance"
  ],
  benefits: [
    "No contracts required",
    "Flexible payment options",
    "Canada-wide coverage",
    "Competitive rates",
    "Expert guidance"
  ]
};

export const SHOP_INFO = {
  title: "Electronics Shop",
  description: "Wide variety of electronics, accessories, and general merchandise",
  categories: [
    "Smartphones & Tablets",
    "Laptops & Computers", 
    "Accessories & Cases",
    "Charging Cables & Adapters",
    "Audio Equipment",
    "Smart Home Devices",
    "General Electronics"
  ],
  features: [
    "Competitive pricing",
    "Quality products",
    "Expert recommendations",
    "Warranty support",
    "Trade-in options"
  ]
};

export const STATS = [
  {
    number: "5000+",
    label: "Devices Repaired",
    description: "Successfully repaired devices"
  },
  {
    number: "100%",
    label: "Success Rate",
    description: "Customer satisfaction rate"
  },
  {
    number: "15+",
    label: "Years Experience",
    description: "In electronics services"
  },
  {
    number: "24hr",
    label: "Average Turnaround",
    description: "For most repairs"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Chen",
    rating: 5,
    text: "Amazing service! They fixed my iPhone screen in just 2 hours and it looks brand new. The staff was incredibly knowledgeable and friendly.",
    service: "Screen Repair",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    rating: 5,
    text: "Best phone unlocking service in Mississauga. Quick, professional, and affordable. Highly recommend!",
    service: "Phone Unlocking",
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "Jennifer Park",
    rating: 5,
    text: "They digitized all my old family cassettes perfectly. Great quality and very reasonable prices. So happy to have these memories preserved!",
    service: "Cassette Digitizing",
    date: "2024-01-08"
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    text: "Excellent Koodo service setup. They explained everything clearly and got me the perfect plan for my needs.",
    service: "Koodo Plans",
    date: "2024-01-05"
  }
];

export const FAQ = [
  {
    question: "How long do repairs typically take?",
    answer: "Most repairs are completed within 24-48 hours. Simple repairs like screen protector installation can be done while you wait."
  },
  {
    question: "Do you offer warranties on repairs?",
    answer: "Yes! We provide a 90-day warranty on all repair services and parts used."
  },
  {
    question: "Can you unlock any phone?",
    answer: "We can unlock most smartphones from major carriers. Bring your device in for a free consultation."
  },
  {
    question: "Do you buy used electronics?",
    answer: "Yes, we offer trade-in services for various electronics. Contact us for a quote on your device."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, debit, credit cards (Visa, MasterCard), and e-transfer payments."
  }
];

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Koodo Plans", href: "/koodo" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export const CONTACT_FORM_FIELDS = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    required: true,
    placeholder: "Enter your full name"
  },
  {
    name: "email", 
    label: "Email Address",
    type: "email",
    required: true,
    placeholder: "Enter your email address"
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: false,
    placeholder: "Enter your phone number"
  },
  {
    name: "service",
    label: "Service Interested In",
    type: "select",
    required: true,
    options: [
      "Device Repair",
      "Phone Unlocking", 
      "Cassette Digitizing",
      "Screen Protector Installation",
      "Watch Repair",
      "Koodo Plans",
      "General Inquiry"
    ]
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
    placeholder: "Tell us about your device or service needs..."
  }
];
