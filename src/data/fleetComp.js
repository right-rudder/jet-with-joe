const fleetCompData = {
  data: {
    // SEO Header Stuff
    pageTitle: "Fleet | Speedway Flight Training",
    pageDescription:
      "Discover Speedway Flight Training’s well-maintained fleet of aircraft, including Cessna and Piper models equipped with advanced avionics like Garmin G1000 and Dual G5 systems. Designed to support student pilots and advanced certifications with reliability and safety.",
    pageKeywords:
      "flight school fleet Hampton, Cessna training aircraft, Piper training planes, Garmin G1000 aircraft Georgia, IFR training fleet, aviation school planes",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/placeholder.webp",
      imageAlt:
        "Speedway Flight Training's modern fleet of training aircraft at Atlanta Speedway Airport in Hampton, GA",
      headerH1: `Our <br><span>FLEET</span>`,
      paragraph: `Speedway Flight Training’s fleet is meticulously maintained to provide a safe, modern, and reliable training environment. Explore our range of Cessna and Piper aircraft, ideal for both beginners and advanced pilots.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll",
          primary: false,
        },
      ],
    },
  },
  imagePath: "/src/assets/placeholder.webp",
  imageAlt:
    "Cockpit view of a Speedway Flight Training aircraft with Garmin avionics during flight over Georgia",
  header: `Our Fleet`,
  fleet: [
    {
      name: "N120B",
      rates: "($380hr/$350 block)",
      description:
        "This 260hp fuel Injected aircraft is ideal for Commercial Multi-Engine and MEI Training.",
      image: "/src/assets/placeholder.webp",
      details: [
        "1962 Beechcraft 95-A55 Twin Engine",
        "260hp per Engine — Fuel Injected",
        "Garmin 375 Touchpad GPS with Bluetooth Flightstream",
        "Dual Axis Autopilot",
        "Multi / Complex / High Performance all-in-one",
        "IFR Certified",
        "Ideal for Commercial Multi-Engine and MEI Training",
        "$380/hour (wet)",
        "$350/hour 10 hour block (wet)",
      ],
      imageAlt:
        "Beechcraft 95-A55 Twin Engine aircraft (N120B) at Speedway Flight Training for multi-engine certification",
    },
    {
      name: "N252SP",
      rates: "($185hr/$175 block)",
      description:
        "This 180HP fuel injected four seat aircraft is ideal for Instrument, Commercial and CFI training. Manufactured in 1999.",
      image: "/src/assets/placeholder.webp",
      details: [
        "1999 Cessna 172S",
        "180hp — Fuel Injected",
        "Garmin 750 Touchpad GPS with Bluetooth Flightstream",
        "Dual G5's (Attitude Indicator & Directional Gyro)",
        "Autopilot",
        "IFR Certified",
        "Ideal for Instrument, Commercial and CFI Training",
        "$185/hour (wet)",
        "$175/hour 10 hour block (wet)",
      ],
      imageAlt:
        "1999 Cessna 172S (N252SP) with Garmin 750 GPS and dual G5s at Atlanta Speedway Airport",
    },
    {
      name: "N76015",
      rates: "($165hr/$155 block)",
      description:
        "This aircraft is ideal for Private Pilot, Commercial, CFI and Spin Training.",
      image: "/src/assets/placeholder.webp",
      details: [
        "1976 Cessna 172N",
        "160hp Carbureted",
        "Dual VOR’s and Comm’s",
        "IFR Certified",
        "Ideal for Private Pilot, Commercial, CFI and Spin Training",
        "$165/hour (wet)",
        "$155/hour 10 hour block (wet)",
      ],
      imageAlt:
        "1976 Cessna 172N (N76015) used for Private Pilot and CFI training at Speedway Flight Training",
    },
    {
      name: "N7901C",
      rates: "($175hr/$165 block)",
      description:
        "This Piper Archer II PA28-181 is a four seat, 180HP, low wing aircraft that is ideal for Private Pilot, Instrument, Commercial and CFI Training.",
      image: "/src/assets/placeholder.webp",
      details: [
        "1975 Piper Archer II PA28-181",
        "180hp Carbureted",
        "Garmin 430 GPS",
        "Dual VOR’s and Comm’s",
        "IFR Certified",
        "Ideal for Private Pilot, Instrument, Commercial and CFI Training",
        "$175/hour (wet)",
        "$165/hour 10 hour block (wet)",
      ],
      imageAlt:
        "1975 Piper Archer II (N7901C) with Garmin 430 GPS used for instrument training in Hampton, GA",
    },
    {
      name: "N4313F",
      rates: "($175HR/$165 block)",
      description:
        "This Piper Archer II is a reliable and versatile piston-single aircraft, ideal for Private Pilot and Time-Building training. Manufactured in 1978.",
      image: "/src/assets/placeholder.webp",
      details: [
        "1978 Piper Archer II PA28-181",
        "180hp — Piston-Single",
        "Garmin 430 GPS",
        "Traditional Round-Gauge Panel",
        "Comfortable Four-Seat Configuration",
        "Time-Building and Private Pilot Training",
        "$175/hour (wet)",
        "$165/hour 10 hour block (wet)",
      ],
      imageAlt:
        "1978 Piper Archer II (N4313F) training aircraft at Speedway Flight Training's Hampton, GA location",
    },
    {
      name: "N8156R",
      rates: "($165HR/$155 block)",
      description:
        "This Piper Warrior II is a reliable and versatile piston-single aircraft, ideal for Private Pilot and Time-Building training. Manufactured in 1979.",
      image: "/src/assets/placeholder.webp",
      details: [
        "1979 Piper Warrior II PA28-161",
        "160hp — Piston-Single",
        "Garmin 650 GPS",
        "Traditional Round-Gauge Panel",
        "Comfortable Four-Seat Configuration",
        "Time-Building and Private Pilot Training",
        "$165/hour (wet)",
        "$155/hour 10 hour block (wet)",
      ],
      imageAlt:
        "1979 Piper Warrior II (N8156R) with Garmin 650 GPS for private pilot training at Atlanta Speedway Airport",
    },
  ],
  buttons: [
    {
      name: "Learn More",
      link: "/packages/fleet",
      primary: true,
    },
  ],
};
export default fleetCompData;
