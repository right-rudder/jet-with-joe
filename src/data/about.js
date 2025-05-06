import { COMPANY_NAME } from "../consts";

const about = {
  data: {
    // SEO Header Stuff
    pageTitle: `About Us | ${COMPANY_NAME}`,
    pageDescription:
      "Learn about Speedway Flight Training, the premier flight school at Atlanta Speedway Airport offering exceptional training programs, a cohesive team of expert instructors, and a modern fleet. With a 100% checkride pass rate and over 1,000 graduates, we are committed to helping you achieve your aviation goals.",
    pageKeywords:
      "Speedway Flight Training, Hampton flight school, 100% checkride pass rate, modern aircraft fleet, pilot training Hampton, aviation school in Georgia",

    // Top Header
    header: {
      imagePath: "/src/assets/placeholder.webp",
      imageAlt: "Aircraft inside Speedway Flight Training hangar at Atlanta Speedway Airport",
      headerH1: `ABOUT US`,
      paragraph:
        "Speedway Flight Training is dedicated to providing top-tier flight training with a focus on real-world skills, personalized instruction, and a streamlined path to success. With a highly experienced team, well-maintained aircraft, and a strong track record of student achievement, we prepare pilots for confident, capable careers in aviation.",
      buttons: [
        {
          name: "Get in Touch",
          link: "/contact",
          primary: false,
        },
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },
  },
};
export default about;
