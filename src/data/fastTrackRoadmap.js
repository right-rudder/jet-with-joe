import { COMPANY_NAME } from "../consts";

const fastTrackRoadmap = {
  upperHeading: "Roadmap",
  heading: "Fast Track to the Flight Deck – Your Path to an Airline Career",
  descriptions: [
    `Achieve your dream of becoming an airline pilot with ${COMPANY_NAME}. Our Fast Track to the Flight Deck program provides an efficient and structured path from zero experience to a professional aviation career.`
  ],
  steps: [
    {
      title: "Earn a Private Pilot License (PPL)",
      link: "/programs/private-pilot",
      paragraphs: [
        "The journey begins with earning your Private Pilot License (PPL). This certification introduces you to aviation fundamentals, including aircraft operations, flight navigation, and air traffic communication.",
        "At Speedway Flight Training, our PPL course is designed to give you hands-on flight experience with expert one-on-one instruction. This is your first major milestone toward becoming a professional pilot."
      ],
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-132.webp",
      imageAlt: "Speedway Flight Training student after their first solo flight"
    },
    {
      title: "Add an Instrument Rating (IR)",
      link: "/programs/instrument-rating",
      paragraphs: [
        "An Instrument Rating (IR) is your next step, allowing you to fly in various weather conditions and under Instrument Flight Rules (IFR). This is an essential qualification for any pilot pursuing a career in commercial aviation.",
        "Our IR program at Speedway focuses on precision, advanced navigation, and decision-making skills in IFR environments, preparing you for professional operations."
      ],
      imagePath: "/src/assets/stock-kristina-delp-xx7EiLeralM-unsplash.webp",
      imageAlt: "Speedway student practicing IFR flight techniques"
    },
    {
      title: "Earn a Commercial Pilot License (CPL)",
      link: "/programs/commercial-pilot",
      paragraphs: [
        "With your PPL and IR completed, the next step is obtaining a Commercial Pilot License (CPL), which allows you to fly professionally and be compensated for your flights.",
        "At Speedway, our CPL training emphasizes advanced maneuvers, professionalism, and flight proficiency. This certification sets the foundation for commercial airline careers."
      ],
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-71.webp",
      imageAlt: "Speedway Flight Training student practicing commercial maneuvers"
    },
    {
      title: "Earn a Flight Instructor Certificate (CFI)",
      link: "/programs/certified-flight-instructor",
      paragraphs: [
        "Becoming a Certified Flight Instructor (CFI) is a strategic step for building flight hours efficiently while earning income. This role strengthens your aviation knowledge and instructional skills.",
        "At Speedway, we offer a structured CFI program that prepares you to train the next generation of pilots while working toward your ultimate career goals."
      ],
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-125.webp",
      imageAlt: "Speedway instructor and student in a pre-flight briefing"
    },
    {
      title: "Add a Certified Flight Instructor - Instrument (CFII)",
      link: "/programs/certified-flight-instructor",
      paragraphs: [
        "Enhancing your credentials with a Certified Flight Instructor - Instrument (CFII) rating allows you to train students in instrument flight procedures, further increasing your flight hours and expertise.",
        "At Speedway, our CFII program refines your instructional techniques and prepares you to mentor pilots through IFR training."
      ],
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-129.webp",
      imageAlt: "Speedway instructor reviewing instrument navigation techniques"
    },
    {
      title: "Optional: Add a Multi-Engine Rating (ME)",
      link: "/programs/multi-engine#top",
      paragraphs: [
        "Adding a Multi-Engine Rating (ME) enhances your capabilities and opens doors to airline, corporate, and charter operations. It's a valuable credential that demonstrates your ability to handle more complex aircraft.",
        "Speedway’s Multi-Engine Add-On program is designed to be completed in just 3–5 weeks and includes advanced maneuvers, emergency procedures, and full checkride preparation in a modern twin-engine aircraft."
      ],
      imagePath: "/src/assets/stock-david-b-o27uCBOPbG0-unsplash.webp",
      imageAlt: "Speedway student pilot in a multi-engine aircraft"
    },
    {
      title: "Build Flight Hours & Gain Experience",
      paragraphs: [
        "After completing your instructor ratings (and optionally, your Multi-Engine Rating), the focus shifts to time-building. You’ll work toward meeting the 1,500-hour requirement for the Airline Transport Pilot (ATP) certificate.",
        "Speedway students often build hours as instructors or by flying in charter operations. Through our partnership with Indy Jet, eligible graduates can be referred to their charter operation — providing a direct path to commercial experience and turbine time."
      ],
          imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-38.webp",
      imageAlt: "Speedway graduate logging flight hours as a CFI"
    },
    {
      title: "Interview with Airlines & Begin ATP Training",
      paragraphs: [
        "When you reach 1,500 flight hours, you're eligible for the Airline Transport Pilot (ATP) certificate, the final requirement for becoming an airline pilot.",
        "Airline interviews assess your technical knowledge, decision-making skills, and readiness for commercial operations. Successful candidates receive conditional job offers and formal ATP training with their airline."
      ],
      imagePath: "/src/assets/cessna-172-runway-takeoff-speedway-flight-training.webp",
      imageAlt: "Speedway graduate at an airline interview session"
    },
    {
      title: "Begin Your Airline Career",
      paragraphs: [
        "After meeting ATP requirements, you'll begin your career as a First Officer at a regional airline. This is your opportunity to gain real-world airline experience, preparing you for long-term success.",
        "With continuous training and experience, you can progress to Captain and eventually transition to major airlines, achieving your goal of flying for a commercial airline."
      ],
      imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-134.webp",
      imageAlt: "First Officer preparing for a flight in an airline cockpit"
    }
  ],
  finalParagraph:
    "Ready to take the first step toward becoming an airline pilot? Enroll in Speedway Flight Training’s Fast Track to the Flight Deck program and accelerate your journey to the skies.",
  finalButton: {
    name: "Apply Now",
    link: "/enroll",
    primary: true
  }
};

export default fastTrackRoadmap;
