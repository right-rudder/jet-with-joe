import {
  COMPANY_NAME,
  PROGRAM_KEYWORDS,
  LOCATION_KEYWORDS,
  PRIMARY_KEYWORDS,
} from "../consts";

const commercialPilotData = {
  pageTitle: `Commercial Pilot License Training | Professional Pilot Career | ${COMPANY_NAME}`,
  pageDescription:
    "Turn your passion into a profession with our 6-8 month Commercial Pilot License program at Atlanta Speedway Airport. Real-world scenario training, advanced maneuvers, and guaranteed airline interview preparation. Financing available!",
  pageKeywords: `${PROGRAM_KEYWORDS.commercial}, ${LOCATION_KEYWORDS.primary}, professional pilot pathway Georgia, airline career preparation Atlanta, commercial pilot checkride prep Hampton, 250 flight hours program, CPL training with financing, advanced flight maneuvers, real-world scenario training, Garmin avionics training, complex aircraft endorsement, commercial pilot job preparation`,

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-71.webp",
    imageAlt:
      "Speedway Flight Training commercial pilot student preparing for a flight",
    headerH1: `Commercial Pilot <br>LICENSE</span>`,
    paragraph: `Advance your aviation career with structured commercial flight training. This program enhances your flight proficiency and prepares you for real-world professional operations.`,
    buttons: [
      {
        name: "Apply Now",
        link: "/enroll",
        primary: false,
      },
      {
        name: "Request Info",
        link: "/contact",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Train for a Career in Aviation with a",
    heading: "Commercial Pilot License",
    subHeading:
      "Refine your flying skills and prepare for professional pilot opportunities with our structured CPL program. Train for real-world commercial operations and build the experience needed to fly professionally.",

    title: "Overview",
    description: `
      Speedway Flight Training’s <strong>Commercial Pilot License (CPL) program</strong> is designed for pilots looking to <strong>turn their passion into a career</strong>. This structured program refines your flying skills, improves decision-making, and prepares you for commercial aviation.
      <br/><br/>
      🚀 <strong>Accelerated Program:</strong> Earn your CPL in <strong>6-8 months</strong>.<br/>
      📆 <strong>Flexible Training:</strong> Train at your own pace.<br/>
      ✈️ <strong>Training Location:</strong> Speedway Flight Training at <strong>Atlanta Speedway Airport (KHMP)</strong>.<br/>
      💰 <strong>Estimated Cost:</strong> <strong>$52,000</strong> (based on <strong>160 flight training hours</strong>; additional expenses apply).<br/>
      🛩 <strong>Aircraft Used:</strong> Modern, well-maintained <strong>Cessna 172 fleet</strong>.<br/>
      📜 <strong>FAA Requirements:</strong> Minimum <strong>250 total flight hours</strong>, including <strong>100 hours as pilot-in-command (PIC)</strong> and <strong>50 hours of cross-country flight time</strong>.<br/>
      <br/>
      This program includes <strong>advanced flight training, real-world scenario-based instruction, and full checkride preparation</strong> to ensure you're ready for a professional aviation career.
    `,

    keyPoints: [
      "Advanced Flight Training for Professional Aviation Careers",
      "Master Commercial Maneuvers and Flight Proficiency",
      "Scenario-Based Training for Real-World Flight Operations",
      "Structured Ground School & FAA Exam Preparation",
      "Build PIC and Cross-Country Hours for Career Readiness",
      "Comprehensive Checkride Preparation",
    ],

    // What's Included
    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "160 flight training hours (FAA minimum: 250 total flight hours required)",
        "Gleim Deluxe Commercial Pilot Kit",
        "Foggles (for simulated instrument training)",
        "Fuel tester",
        "Advanced maneuvers and flight proficiency training",
        "One-on-one instructor mentorship",
        "Ground school & exam preparation",
        "Scenario-based training for real-world commercial flight operations",
        "Pre-checkride preparation and evaluation",
      ],
    },

    // Additional Costs
    additionalCosts: {
      heading: "What’s Not Included (Additional Student Costs)?",
      items: [
        "Noise-canceling aviation headset (~$600 - $1,100; Recommended: Bose, Lightspeed, David Clark)",
        "iPad with GPS (~$500 - $700; Cellular capable, no data plan required)",
        "Aircraft rental insurance (~$600/year; Required for training flights)",
        "ForeFlight subscription (~$250/year; Flight planning & in-flight navigation)",
        "FAA 1st Class Medical clearance (~$150; Required for professional pilots)",
      ],
    },

    // Benefits
    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Accelerated Training: Earn your CPL in just 6-8 months",
        "Expert Instructors: Personalized mentorship from commercial flight instructors",
        "Comprehensive Training: Advanced maneuvers, flight proficiency, and real-world scenarios",
        "State-of-the-Art Training Fleet: Learn on modern, well-maintained aircraft",
        "Career Readiness: Build experience to transition into commercial or airline careers",
        "Commitment to Safety & Integrity: Structured, safety-first training environment",
      ],
    },

    cta: {
      imagePath:
        "/src/assets/atlanta-airport-Speedway-Flight-Training-133.webp",
      imageAlt: "Speedway Flight Training commercial pilot student in flight",
      title: "Fast Track Your Career with a Commercial Pilot License",
      description:
        "Advance your aviation career with expert training at Speedway Flight Training. Enroll in our Commercial Pilot License program today and gain the skills needed for professional flight operations.",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    // FAQs
    faqs: [
      {
        question: "How long does it take to earn my Commercial Pilot License?",
        answer:
          "With our accelerated program, students can complete training in <strong>6-8 months</strong>. A self-paced program is also available for those needing more scheduling flexibility.",
      },
      {
        question: "Can I finance my training?",
        answer:
          "Yes! We partner with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to offer financing options. Contact us to learn more about making your flight training affordable.",
      },
      {
        question: "What kind of aircraft will I train on?",
        answer:
          "Students train on <strong>modern, well-maintained Cessna 172 aircraft</strong>, equipped for commercial training.",
      },
      {
        question: "Will I be ready for my checkride after training?",
        answer:
          "Yes! Our program includes <strong>comprehensive checkride preparation</strong> and <strong>scenario-based commercial flight training</strong> to ensure you're fully prepared.",
      },
      {
        question: "What happens after I get my CPL?",
        answer:
          "After earning your CPL, many students continue their training for a <strong>Multi-Engine Rating (ME)</strong> or <strong>Certified Flight Instructor (CFI)</strong> certification to build experience before airline careers.",
      },
    ],
  },
};

export default commercialPilotData;
