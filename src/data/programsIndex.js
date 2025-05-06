import { COMPANY_NAME, PRIMARY_KEYWORDS, LOCATION_KEYWORDS } from "../consts";

const programsIndex = {
  pageTitle: `Pilot Training Programs | Flight School Atlanta | ${COMPANY_NAME}`,
  pageDescription:
    "Complete flight training programs from Private Pilot to Certified Flight Instructor at Atlanta Speedway Airport. Accelerated courses, modern aircraft, and financing options make Speedway your ideal flight training partner.",
  pageKeywords: `${PRIMARY_KEYWORDS.commercial}, ${PRIMARY_KEYWORDS.informational}, ${LOCATION_KEYWORDS.primary}, ${LOCATION_KEYWORDS.secondary}, flight school program options, pilot certification pathway, aviation career training Georgia, accelerated flight programs, zero to hero pilot training, flight school with financing, complete pilot license programs, professional pilot training, flight instructor certification, multi-engine training Atlanta, part 61 training programs`,

  header: {
    stars: true,
    imagePath: "/src/assets/atlanta-airport-Speedway-Flight-Training-80.webp",
    imageAlt: "Speedway Flight Training aircraft lineup at the airport",
    headerH1: `Flight Training <br>PROGRAMS</span>`,
    paragraph: `Speedway Flight Training offers structured flight programs designed for both aspiring and advancing pilots. Whether you're starting your journey or preparing for a professional aviation career, our expert instructors and well-maintained fleet provide the best environment for success.`,
    buttons: [
      {
        name: "Get Started",
        link: "/enroll",
        primary: false,
      },
    ],
  },
};

export default programsIndex;
