import { COMPANY_NAME } from "../consts";

const whyData = {
  pageTitle: `Why Choose Speedway? | ${COMPANY_NAME}`,
  pageDescription:
    "Discover why Speedway Flight Training is the trusted choice for flight students in the greater Atlanta area. Our personalized instruction, well-maintained fleet, and commitment to safety make us a top choice for aspiring pilots in Hampton, McDonough, Fayetteville, Griffin, and beyond.",
  pageKeywords:
    "Flight School Atlanta, Flight School Hampton GA, pilot training near Atlanta, flight school McDonough, aviation training Georgia, flight instruction Georgia, learn to fly Atlanta",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-141.webp",
    imageAlt: "Speedway Flight Training student pilot celebrating her first solo flight",
    headerH1: `Why Choose <br>Speedway?</span>`,
    paragraph: `At Speedway Flight Training, our mission is to deliver high-quality flight training in a supportive and professional environment. From your first flight to your commercial career, we’re here to guide your journey with integrity, safety, and passion.`,
    buttons: [
      {
        name: "Enroll Today",
        link: "/enroll",
        primary: false,
      },
      {
        name: "Discovery Flight",
        link: "/discovery-flight",
        primary: false,
      },
    ],
  },

  pageSummary: {
    title: "Why Choose Speedway?",
    paragraphs: [
      "Speedway Flight Training offers a structured, hands-on approach to flight education with a focus on personalized instruction, safe operations, and modern training tools.",
      "Whether you're learning to fly for fun or preparing for a career, our welcoming community, experienced instructors, and reliable aircraft create the perfect environment to grow as a pilot.",
    ],
    buttons: [
      {
        name: "Learn More",
        link: "#info",
        primary: true,
      },
    ],
  },

  contentSplit: {
    upperHeading: "Get Started",
    heading: "Your Pilot Journey Starts at Speedway",
    descriptions: [
      "Our programs are designed for aspiring aviators at every stage—from your first flight to becoming a professional pilot. With structured ground instruction and immersive flight experience, we provide the tools you need to succeed.",
      "You’ll train in a well-maintained fleet of Cessna aircraft equipped with Garmin avionics, supported by instructors who care deeply about your progress.",
      "Located at Atlanta Speedway Airport (KHMP) in Hampton, GA, our quiet airspace and proximity to Class B airspace give you a perfect mix of low-traffic flying and professional exposure.",
    ],
    bulletsTitle: "Why Train at Speedway?",
    bullets: [
      {
        title: "Experienced Instructors",
        descriptions: ["Learn from passionate, professional CFIs with real-world aviation backgrounds who are committed to your growth."],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Modern Aircraft",
        descriptions: ["Train in a reliable fleet of Cessna 172s with modern Garmin 650 avionics and dual G5s, maintained to the highest standards."],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Personalized Instruction",
        descriptions: ["We pair you with instructors who match your learning style and goals for a truly personalized training experience."],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Structured Training Programs",
        descriptions: ["Follow clear, organized paths from Private Pilot through Commercial and CFI training with full checkride prep at each stage."],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Quiet, Convenient Location",
        descriptions: ["Fly out of KHMP—a non-towered airport with minimal traffic, nearby practice areas, and exposure to ATL Class B airspace."],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Supportive Community",
        descriptions: ["Join a close-knit aviation family that celebrates your milestones and motivates you every step of the way."],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
    ],
    finalSection: {
      heading: "Ready for Takeoff?",
      descriptions: [
        "Speedway Flight Training is more than a school—it’s a community of future aviators and professionals who share a passion for flight.",
        "Our programs are built to help you grow with confidence and clarity. Let’s get started on your aviation goals today.",
      ],
    },
    finalButton: {
      name: "Get Started",
      link: "/enroll",
      primary: true,
    },
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-43.webp",
    imageAlt:
      "Speedway Flight Training student and instructor reviewing preflight checklist at Atlanta Speedway Airport",
  },
};

export default whyData;
