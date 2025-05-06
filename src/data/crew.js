import { COMPANY_NAME } from "../consts";

const crew = {
  data: {
    // SEO Header Stuff
    pageTitle: `Crew | ${COMPANY_NAME}`,
    pageDescription:
      "Learn about Speedway Flight Training's CFI team, the premier flight school at Atlanta Speedway Airport offering exceptional training programs, a cohesive team of expert instructors, and a modern fleet. With a 100% checkride pass rate and over 1,000 graduates, we are committed to helping you achieve your aviation goals.",
    pageKeywords:
      "Speedway Flight Training, Hampton flight school, 100% checkride pass rate, modern aircraft fleet, pilot training Hampton, aviation school in Georgia",

    // Top Header
    header: {
      imagePath: "/src/assets/placeholder.webp",
      imageAlt: "Speedway Flight Training CFIs",
      headerH1: `Experience</br><span>Excellence in Flight Training</span>`,
      paragraph:
        "Our team of experienced flight instructors and aviation professionals at Speedway Flight Training is dedicated to providing world-class training. Learn more about our team and how they can help you soar to new heights in aviation.",
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

    staffGrid: {
      imagePath: "/src/assets/placeholder.webp",
      imageAlt: "Speedway Flight Training team standing near aircraft",
      upperHeading: "Meet Our Team",
      heading: "About Us",
      description: `
        Speedway Flight Training (Speedway) was established at Atlanta Speedway Airport with a vision to provide high-quality flight training in the competitive Hampton area. What started as a passion project quickly evolved into a leading flight school with over 1,000 graduates and a 100% checkride pass rate.<br>

        Our commitment to excellence is reflected in our carefully curated team of experienced Certified Flight Instructors (CFIs), who have a combined 13,000+ flight hours and bring a wealth of real-world aviation expertise. Many of our instructors are trained in-house, ensuring a cohesive, family-like atmosphere that supports student success.<br>

        Speedway offers a range of programs, from Private Pilot License (PPL) to advanced certifications like Certified Flight Instructor (CFI), Multi-Engine Instructor (MEI), and Airline Transport Pilot (ATP). We also specialize in accelerated multi-engine training, attracting students nationwide with an average completion time of 1.5 weeks.<br>

        Our modern fleet features IFR-capable aircraft equipped with Garmin Dual G5s and advanced avionics, providing students with hands-on experience using the latest technology. Additionally, we maintain strong relationships with Designated Pilot Examiners (DPEs), ensuring a smooth path to certification for our students.<br>

        Whether you're beginning your aviation journey or advancing your career, Speedway Flight Training is here to help you achieve your goals with personalized instruction, state-of-the-art equipment, and an unparalleled support system.
      `,
      membersTitle: "Our Instructors",
      members: [
        {
          name: `Alex Feldman<br><small class="text-accent-100 font-normal text-sm">Chief Pilot, CFI-I, MEI</small>`,
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Alex Feldman, Chief Pilot, CFI-I, and MEI of Speedway Flight Training",
        },
        {
          name: `Cameron Diamond<br><small class="text-accent-100 font-normal text-sm">Asst Chief Pilot, CFI-I, MEI</small>`,
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Cameron Diamond, Asst Chief Pilot, CFI-I, MEI at Speedway Flight Training",
        },
        {
          name: `Parker Capp<br><small class="text-accent-100 font-normal text-sm">CFI</small>`,
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Parker Capp, CFI at Speedway Flight Training",
        },
        {
          name: `Dror Waissengrin<br><small class="text-accent-100 font-normal text-sm">CFI-I</small>`,
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Dror Waissengrin, CFI-I at Speedway Flight Training",
        },
        {
          name: `Matthew Ronder-Seid<br><small class="text-accent-100 font-normal text-sm">CFI</small>`,
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Matthew Ronder-Seid, CFI at Speedway Flight Training",
        },
        {
          name: `Jack Keshishian<br><small class="text-accent-100 font-normal text-sm">CFI</small>`,
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Jack Keshishian, CFI at Speedway Flight Training",
        },
        {
          name: `Chris Ghazarian<br><small class="text-accent-100 font-normal text-sm">CFI</small>`,
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Chris Ghazarian, CFI at Speedway Flight Training",
        },
        {
          name: `Andre Dassin<br><small class="text-accent-100 font-normal text-sm">CFI</small>`,
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Andre Dassin, CFI at Speedway Flight Training",
        },
        {
          name: `Mason Morrow<br><small class="text-accent-100 font-normal text-sm">CFI-I</small>`,
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "Mason Morrow, CFI-I at Speedway Flight Training",
        },
      ],
    },
  },
};
export default crew;
