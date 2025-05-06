const privatePilotCourse = {
  data: {
    slug: "private-pilot-course",
    // SEO Header Stuff
    pageTitle: "PRIVATE PILOT COURSE | Speedway Flight Training",
    pageDescription:
      "Begin your aviation journey with Speedway Flight Training's Private Pilot Course. Train with experienced instructors at Atlanta Speedway Airport and earn your Private Pilot License (PPL) to take your first step toward the skies.",
    pageKeywords:
      "Private Pilot Course, PPL training Hampton, learn to fly Georgia, flight school Hampton, private pilot license, pilot training for beginners",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/placeholder.webp",
      imageAlt:
        "Speedway Flight Training student preparing for their first solo flight at Atlanta Speedway Airport",
      headerH1: `Private <br>Pilot Course</span>`,
      paragraph: `This course is your first step in becoming a licensed pilot. Achieve your Private Pilot Certificate and gain the freedom to explore the skies for personal and recreational flying.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll",
          primary: false,
        },
        {
          name: "Learn More",
          link: "/path",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: `Private Pilot<br> Certificate`,
      paragraphs: [
        "The Private Pilot Certificate (PPL) is your gateway to aviation, enabling you to act as pilot in command of an aircraft for personal and recreational purposes. It’s an essential milestone for aspiring aviators, providing foundational skills and knowledge for future training and certifications.",
        "At Speedway Flight Training, our comprehensive PPL program prepares you for every step of the journey, from ground school to flight training and your FAA checkride. Whether you aim to fly recreationally or pursue an aviation career, this course sets the foundation for your success.",
      ],
    },

    roadmap: {
      upperHeading: "Roadmap",
      heading: "Private Pilot License",
      descriptions: [
        "Our Private Pilot License program combines personalized instruction, modern aircraft, and a supportive learning environment to help you achieve your goals efficiently and confidently.",
      ],
      steps: [
        {
          title: "Meet Eligibility Requirements",
          paragraphs: [
            "To begin your Private Pilot training, you must meet basic FAA requirements, including being at least 17 years old, obtaining a third-class medical certificate, and demonstrating proficiency in English. At Speedway Flight Training, we guide you through the process to ensure a smooth start.",
          ],
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Speedway Flight Training CFI enrolling a new student",
        },
        {
          title: "Ground School Training",
          paragraphs: [
            "Our ground school equips you with essential knowledge in aerodynamics, navigation, weather, regulations, and more. With expert instructors and tailored study materials, you'll be prepared to ace the FAA Knowledge Test and build a solid foundation for flight training.",
          ],
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Speedway Flight Training students during a ground school session",
        },
        {
          title: "Flight Training",
          paragraphs: [
            "Learn to fly at Atlanta Speedway Airport with experienced instructors. Our program includes 40 hours of flight training, covering takeoffs, landings, maneuvers, and emergency procedures. Night flying and simulated instrument training are also integrated to ensure well-rounded skill development.",
          ],
          imagePath: "/src/assets/placeholder.webp",
          imageAlt:
            "Student pilot and instructor preparing for flight at Hampton",
        },
        {
          title: "Solo Flight Experience",
          paragraphs: [
            "Experience the thrill of flying solo! Under your instructor's guidance, you'll gain the confidence to act as pilot in command, practicing maneuvers and cross-country flights independently.",
          ],
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Speedway Flight Training student on their first solo flight",
        },
        {
          title: "Cross-Country and Night Training",
          paragraphs: [
            "Prepare for cross-country and night flying with structured lessons designed to build confidence and proficiency. Navigate to unfamiliar airports, communicate with ATC, and operate safely in low-visibility conditions.",
          ],
          imagePath: "/src/assets/placeholder.webp",
          imageAlt:
            "Speedway Flight Training aircraft on a cross-country training flight",
        },
        {
          title: "Pass the FAA Knowledge Test",
          paragraphs: [
            "Our ground school and study materials thoroughly prepare you for the FAA Knowledge Test, ensuring you have the knowledge and confidence to pass on your first attempt.",
          ],
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Student taking the FAA Knowledge Test",
        },
        {
          title: "Prepare for and Pass the Checkride",
          paragraphs: [
            "The final step is the FAA checkride, where you'll demonstrate your knowledge and skills to an examiner. At Speedway Flight Training, we provide mock checkrides and detailed feedback to help you succeed with confidence.",
          ],
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Pilot and examiner conducting a checkride",
        },
      ],
      finalParagraph:
        "Completing your Private Pilot License at Speedway Flight Training is your first step toward exploring the skies with confidence and independence.",
      finalButton: {
        name: "Enroll Now",
        link: "/enroll",
        primary: true,
      },
    },
  },
};
export default privatePilotCourse;
