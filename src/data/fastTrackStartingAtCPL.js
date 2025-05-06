import { COMPANY_NAME } from "../consts";

const fastTrackStartingAtCPL = {
  pageTitle: `Fast Track to the Flight Deck – Commercial Pilot | ${COMPANY_NAME}`,
  pageDescription:
    "Speedway Flight Training’s Fast Track to the Flight Deck program allows pilots with an Instrument Rating (IR) to efficiently complete their Commercial Pilot License (CPL) and Certified Flight Instructor (CFI & CFII) training.",
  pageKeywords:
    "accelerated CPL training, fast track commercial pilot, professional pilot program, CFI training, CFII certification, aviation school Atlanta, Speedway Flight Training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/stock-adrien-brun-L87clzV761M-unsplash.webp",
    imageAlt: "Speedway Flight Training commercial pilot student preparing for a checkride",
    headerH1: `Fast Track to <br>the Flight Deck</span>`,
    paragraph: `For pilots with an Instrument Rating (IR), this program provides a structured path to earning your Commercial Pilot License (CPL), Certified Flight Instructor (CFI), and Certified Flight Instructor - Instrument (CFII) certification.`,
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
    upperHeading: "Advance Your Aviation Career with",
    heading: "Fast Track to the Flight Deck – Starting at CPL",
    subHeading:
      "For pilots who already hold an Instrument Rating (IR), this structured program takes you from Commercial Pilot License (CPL) through Certified Flight Instructor (CFI) and Certified Flight Instructor - Instrument (CFII).",

    title: "Overview",
    description: `
      Speedway Flight Training’s <strong>Fast Track to the Flight Deck</strong> program is designed for pilots who already hold an Instrument Rating and want to efficiently complete their professional training.
      <br/><br/>
      🚀 <strong>Accelerated Program:</strong> Complete from <strong>CPL to CFII in 8-12 months</strong>.<br/>
      📆 <strong>Flexible Training:</strong> Choose a self-paced option if needed.<br/>
      ✈️ <strong>Training Location:</strong> Speedway Flight Training at <strong>Atlanta Speedway Airport (KHMP)</strong>.<br/>
      💰 <strong>Estimated Cost:</strong> <strong>$53,625</strong> (based on <strong>165 total flight hours</strong>; additional expenses apply).<br/>
      🛩 <strong>Aircraft Used:</strong> Modern, well-maintained <strong>Cessna 172 fleet</strong>.<br/>
      📜 <strong>FAA Requirements:</strong> Includes all necessary flight hours for CPL, CFI, and CFII.<br/>
      <br/>
      This program provides <strong>one-on-one mentorship, advanced scenario-based training, and full checkride preparation</strong> to ensure you're ready for a successful aviation career.
    `,

    keyPoints: [
      "Structured Training from CPL to CFII",
      "165 Flight Hours with One-on-One Instructor Mentorship",
      "Scenario-Based Training for Professional Flight Operations",
      "Modern, Well-Maintained Aircraft with Advanced Avionics",
      "Comprehensive Ground School & FAA Exam Preparation",
      "Full Checkride Preparation for Each Certification Level",
    ],

    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "165 flight training hours",
        "One-on-one instructor mentorship",
        "Ground school & exam preparation",
        "Gleim Deluxe Commercial Pilot Kit",
        "Gleim Flight/Ground Instructor + FOI Kit",
        "Advanced flight maneuvers and scenario-based training",
        "Pre-checkride preparation for each certification level",
        "Emphasis on leadership, safety, and real-world flight operations",
      ],
    },

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

    benefits: {
      heading: "Why Train with Speedway?",
      items: [
        "Fast-Track Program for Pilots Holding an Instrument Rating",
        "Comprehensive Training from CPL to CFII",
        "One-on-One Mentorship and Advanced Flight Training",
        "Scenario-Based Learning for Professional Readiness",
        "Modern Aircraft Fleet with Advanced Avionics",
        "Full Checkride Preparation for Every Certification Level",
      ],
    },

    cta: {
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-125.webp",
      imageAlt: "Speedway Flight Training student preparing for a commercial flight checkride",
      title: "Accelerate Your Career with Structured Training",
      description:
        "Train with expert instructors and complete your Commercial Pilot License, Certified Flight Instructor, and Certified Flight Instructor - Instrument certification in as little as 8-12 months.",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    faqs: [
      {
        question: "How long does it take to complete the program?",
        answer:
          "Our accelerated program allows students to complete training in <strong>8-12 months</strong>. A self-paced option is also available for those needing more flexibility.",
      },
      {
        question: "Can I finance my training?",
        answer:
          "Yes! We partner with <a href='https://stratus.finance' target='_blank' class='hover:brightness-125 text-primary-600'>Stratus Financial</a> to offer financing options. Contact us to learn more about making your flight training affordable.",
      },
      {
        question: "What kind of aircraft will I train on?",
        answer:
          "Students train on <strong>modern, well-maintained Cessna 172 aircraft</strong>, equipped for professional pilot training.",
      },
      {
        question: "Will I be ready for my checkride after training?",
        answer:
          "Yes! Our program includes <strong>comprehensive checkride preparation</strong> and <strong>scenario-based training</strong> to ensure you're fully prepared.",
      },
      {
        question: "What happens after I complete my CFII training?",
        answer:
          "Many graduates become flight instructors to build experience before transitioning into airline careers. Speedway also provides networking opportunities and career guidance.",
      },
    ],
  },
};

export default fastTrackStartingAtCPL;
