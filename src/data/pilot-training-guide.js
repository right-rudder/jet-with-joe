const pilotTrainingGuide = {
  data: {
    //SEO Header Stuff
    pageTitle: "Ascent to a Pilot Career | Speedway Flight Training",
    pageDescription:
      "Follow Speedway Flight Training’s step-by-step guide to becoming a professional pilot. From earning your Private Pilot License to landing a job with a commercial airline, discover the complete pathway to success in aviation.",
    pageKeywords:
      "Pilot Training Guide, ascend flight training, professional pilot pathway, private pilot license, commercial pilot training, become an airline pilot Hampton, step-by-step pilot career guide",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/placeholder.webp",
      imageAlt:
        "Speedway Flight Training student pilot and CFI flying in a Beechcraft Twin Engine",
      headerH1: `PATHWAY TO <br>COMMERCIAL AIRLINE PILOT`,
      paragraph: `At Speedway Flight Training, we’re here to guide you through every step of your journey to becoming a professional pilot, starting from your first flight to earning your ATP certificate.`,
      buttons: [
        {
          name: "Start Your Journey",
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

    pathway: {
      heading: "Your Pathway to Becoming a Professional Pilot",
      description:
        "Follow these steps to achieve your dream of becoming a commercial airline pilot. Speedway Flight Training is here to support you every step of the way.",
      steps: [
        {
          stepNumber: 1,
          title: "Earn Your Private Pilot License (PPL)",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Student pilot in training for their private pilot license",
          description:
            "The first step to becoming a professional pilot is earning your PPL. This license allows you to fly for personal or recreational purposes and builds the foundation for all advanced certifications.",
          link: "/programs/private-pilot-course",
        },
        {
          stepNumber: 2,
          title: "Add Your Instrument Rating (IR)",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Cockpit during instrument training at Speedway",
          description:
            "The Instrument Rating teaches you to fly in various weather conditions and is essential for advancing to commercial-level training.",
          link: "/instrument-rating",
        },
        {
          stepNumber: 3,
          title: "Earn Your Commercial Pilot License (CPL)",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Twin-engine aircraft preparing for commercial training",
          description:
            "The Commercial Pilot License qualifies you to be paid as a pilot and is the gateway to a professional flying career.",
          link: "/commercial-pilot-training",
        },
        {
          stepNumber: 4,
          title: "Obtain Your Multi-Engine Rating (ME)",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Multi-engine aircraft during a training session",
          description:
            "The Multi-Engine Rating is critical for aspiring airline pilots, allowing you to fly planes with more than one engine safely and efficiently.",
          link: "/multi-engine-rating",
        },
        {
          stepNumber: 5,
          title: "Build Flight Hours",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Pilot logging flight hours over Georgia skies",
          description:
            "Most airlines require a minimum number of hours before hiring. Build time by working as a Certified Flight Instructor (CFI) or other time-building opportunities.",
          link: "/certified-flight-instructor-cfi",
        },
        {
          stepNumber: 6,
          title: "Earn Your Airline Transport Pilot Certificate (ATP)",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "ATP training session at Speedway",
          description:
            "The ATP certificate is the highest level of pilot certification and a mandatory requirement to fly for airlines. Speedway offers accelerated ATP programs to help you achieve this milestone.",
          link: "/airline-transport-pilot-atp",
        },
        {
          stepNumber: 7,
          title: "Land a Job with a Commercial Airline",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Commercial airline cockpit view",
          description:
            "With the right training, flight hours, and certifications, you’ll be ready to apply for your first airline job and launch your professional pilot career.",
          link: "/contact",
        },
      ],
    },
  },
};

export default pilotTrainingGuide;
