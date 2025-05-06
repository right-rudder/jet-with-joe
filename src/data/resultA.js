import {
  COMPANY_NAME,
} from "../consts";

const resultA = {
  data: {
    //SEO Header Stuff
    pageTitle: `Sky's the Limit! | ${COMPANY_NAME}`,
    pageDescription:
      `You’re a natural adventurer with the spirit of a pilot. You’re ready to take on the skies and embrace the thrill of flying. Let’s get you started on your journey with ${COMPANY_NAME}!`,
    pageKeywords:
      `quiz, pilot quiz, Speedway, Speedway Flight Training, Hampton, Hampton, result A`,


    header: {
      imagePath:
        "/src/assets/placeholder.webp",
      imageAlt: `${COMPANY_NAME} CFI watching as student prepares to take first solo flight`,
      headerH1: "Sky's the Limit!",
      paragraph:
        `You’re a natural adventurer with the spirit of a pilot. You’re ready to take on the skies and embrace the thrill of flying. Let’s get you started on your journey with ${COMPANY_NAME}!`,
      buttons: [
        {
          name: "Home",
          link: "/",
          primary: true,
        },
        {
          name: "Discovery Flight",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },
  }
};

export default resultA;