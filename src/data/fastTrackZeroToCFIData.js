import { COMPANY_NAME } from "../consts";

const fastTrackZeroToCFIData = {
  pageTitle: `Fast Track to the Flight Deck | ${COMPANY_NAME}`,
  pageDescription:
    "Speedway Flight Training’s Fast Track to the Flight Deck program takes students from zero experience to Certified Flight Instructor (CFI) in as little as 12-18 months. Train with expert instructors, modern aircraft, and a structured curriculum designed for career-focused pilots.",
  pageKeywords:
    "accelerated flight training, zero to cfi, professional pilot program, fast track pilot training, airline pilot career, aviation school Atlanta, Speedway Flight Training",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-120-croped.webp",
    imageAlt: "Speedway Flight Training students and instructors preparing for flights",
    headerH1: `Fast Track to <br>the Flight Deck</span>`,
    paragraph: `An all-inclusive, structured program designed to take you from zero experience to a Certified Flight Instructor (CFI). Build flight hours, gain real-world experience, and launch your professional aviation career.`,
    buttons: [
      {
        name: "Apply Now",
        link: "/enroll",
        primary: false,
      },
      {
        name: "Roadmap",
        link: "#info",
        primary: false,
      },
    ],
  },

  // Program Details
  details: {
    upperHeading: "Accelerate Your Aviation Career",
    heading: "Fast Track to the Flight Deck",
    subHeading:
      "For aspiring pilots who want an efficient and structured path to becoming a professional pilot, this all-inclusive program takes students from zero flight hours to Certified Flight Instructor (CFI).",

    title: "Overview",
    description: `
      Speedway Flight Training’s <strong>Fast Track to the Flight Deck</strong> program is designed for students looking to complete their training efficiently and advance toward a career in aviation.
      <br/><br/>
      🚀 <strong>Accelerated Program:</strong> Complete from <strong>zero to CFI in 12-18 months</strong>.<br/>
      📆 <strong>Flexible Training:</strong> Choose a self-paced option if needed.<br/>
      ✈️ <strong>Training Location:</strong> Speedway Flight Training at <strong>Atlanta Speedway Airport (KHMP)</strong>.<br/>
      💰 <strong>Estimated Cost:</strong> <strong>$86,125</strong> (based on <strong>265 total flight hours</strong>; additional expenses apply).<br/>
      🛩 <strong>Aircraft Used:</strong> Modern, well-maintained <strong>Cessna 172 fleet</strong>.<br/>
      📜 <strong>FAA Requirements:</strong> Includes all required licenses and ratings for professional pilot training.<br/>
      <br/>
      This program provides <strong>one-on-one mentorship, scenario-based training, and full checkride preparation</strong> to ensure you graduate ready for a successful aviation career.
    `,

    keyPoints: [
      "Complete Training from Zero to CFI in 12-18 Months",
      "Includes PPL, Instrument, CPL, and CFI Ratings",
      "265 Flight Hours with One-on-One Instructor Mentorship",
      "Hands-On Experience in Modern, Well-Maintained Aircraft",
      "Structured Ground School & FAA Exam Preparation",
      "Comprehensive Checkride Preparation",
    ],

    // What's Included
    included: {
      heading: "What’s Included in Your Training Package?",
      items: [
        "265 flight training hours",
        "One-on-one instructor mentorship",
        "Ground school & exam preparation",
        "Gleim Deluxe Private Pilot Kit",
        "Gleim Instrument Pilot Materials",
        "Gleim Commercial Pilot Materials",
        "Gleim Flight/Ground Instructor + FOI Kit",
        "Foggles (for instrument training)",
        "Fuel tester",
        "Advanced flight maneuvers and scenario-based training",
        "Pre-checkride preparation for each certification level",
        "Emphasis on leadership, safety, and real-world flight operations",
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
        "Structured, Accelerated Program for Career-Oriented Pilots",
        "Comprehensive Training from Zero Experience to CFI",
        "Expert Instructors and One-on-One Mentorship",
        "Real-World Scenario-Based Training & Advanced Flight Maneuvers",
        "State-of-the-Art Training Fleet and Safety-Focused Environment",
        "Comprehensive Checkride Preparation for Every Certification Level",
      ],
    },

    cta: {
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-128.webp",
      imageAlt: "Speedway Flight Training students in a classroom session",
      title: "Launch Your Aviation Career with Speedway",
      description:
        "Train with expert instructors, gain hands-on experience, and complete your flight training in as little as 12-18 months. Start your journey toward a professional aviation career today!",
      button: {
        name: "Apply Now",
        link: "/enroll",
      },
    },

    // FAQs
    faqs: [
      {
        question: "How long does it take to complete the Fast Track to the Flight Deck program?",
        answer:
          "Our accelerated program allows students to complete training in <strong>12-18 months</strong>. A self-paced option is also available for those needing more flexibility.",
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
          "Yes! Our program includes <strong>comprehensive checkride preparation</strong> and <strong>scenario-based flight training</strong> to ensure you're fully prepared.",
      },
      {
        question: "What happens after I complete my CFI training?",
        answer:
          "Many graduates become flight instructors to build experience before transitioning into airline careers. Speedway also provides networking opportunities and guidance for career progression.",
      },
    ],
  },
};

export default fastTrackZeroToCFIData;
