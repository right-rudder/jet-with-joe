// Default title
export const SITE_TITLE =
  "Jet with Joe | Accelerated Flight Training with Independent CFIs";

// Default meta description (homepage fallback)
export const SITE_DESCRIPTION =
  "Jet with Joe offers accelerated, affordable flight training with a personal touch. Train one-on-one with experienced CFIs through a flexible, independent network. Whether you're starting from zero or advancing your career, our students reach their goals faster and cheaper than traditional schools. Available in Akron, Fort Myers, and more cities nationwide.";

// SEO keywords
export const KEYWORDS =
  "accelerated flight training, independent CFI network, private pilot license, flight training near me, faster flight school, zero to hero flight program, learn to fly, instrument rating, commercial pilot license, certified flight instructor training, Stratus Financial aviation loans, flexible flight schedule, pilot training USA, aviation career program, affordable flight training, cross country flight training";

// Primary keywords by search intent
export const PRIMARY_KEYWORDS = {
  informational:
    "how to become a pilot, what is accelerated flight training, cost of flight school, pros and cons of CFI vs flight school, how long does it take to become a pilot",
  navigational:
    "Jet with Joe website, flight training with Joe Boles, Echo Aviation Akron, Jet with Joe program",
  commercial:
    "affordable flight school near me, fastest flight training in USA, flexible pilot training, best CFI network, aviation training with financing",
  transactional:
    "apply for flight training, enroll in pilot program, book training call, sign up for discovery call, join CFI network",
};

// Program-based keywords
export const PROGRAM_KEYWORDS = {
  privatePilot:
    "private pilot license USA, PPL accelerated training, learn to fly fast, independent CFI for private pilot, one-on-one pilot training",
  instrument:
    "instrument rating fast track, IFR certification, fly in clouds training, 12-day instrument program, affordable IFR training",
  commercial:
    "commercial pilot license training, CPL in 6 months, flight time building, airline pilot training USA, flight career prep",
  multiEngine:
    "multi-engine rating training, MEL certification, twin-engine flight school alternative, faster multi-engine training",
  flightInstructor:
    "CFI training USA, flight instructor certification, build hours as instructor, CFII fast track, become a flight instructor",
};

// Location keywords
export const LOCATION_KEYWORDS = {
  primary:
    "Akron OH flight training, Fort Myers Page Field pilot program, Chicago accelerated flight training",
  secondary:
    "Lansing IL flight school, Valparaiso Indiana aviation training, Seattle pilot training, flexible training locations USA",
};

export const OG_IMAGE = "/jet-with-joe-logo-white.webp";
export const LOGO = "/jet-with-joe-logo-white.webp";
export const LOGO_ASSETS = "/src/assets/jet-with-joe-logo-white.webp";

// Business info
export const COMPANY_NAME = "Jet with Joe";
export const COMPANY_NAME_CAPS = "JET WITH JOE";
export const COMPANY_NICKNAME = "Jet with Joe";
export const LOGO_PRIMARY = "/jet-with-joe-logo-white.webp";
export const LOGO_SECONDARY = "/jet-with-joe-logo-white.webp";
export const AIRPORT = "Akron-Canton Airport";
export const CITIES = "Akron, Fort Myers, Chicago, Lansing, Valparaiso, and Seattle!";
export const AIRPORT_CODE = "CAK";
export const PHONE_NUMBER = "(012) 345-6789"; // TBD
export const ADDRESS_LINE_1 = "3867 West Market St. #216";
export const ADDRESS_LINE_2 = "Akron, OH 44333";
export const ADDRESS = "3867 West Market St. #216, Akron, OH 44333";
export const ADDRESS_CITY = "Akron";
export const ADDRESS_STATE = "Ohio";
export const ADDRESS_ZIP = "44333";
export const GMAPS = "https://maps.app.goo.gl/hKb9eMTWDQ9uBNpE9";
export const EMAIL_ADDRESS = "info@jetwithjoe.com";

// Social
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61570027001967";
export const INSTAGRAM_URL = "https://www.instagram.com/jet_with_joe/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/jetwithjoe/";
export const X_URL = "";
export const YOUTUBE_URL = "https://www.youtube.com/@JetwithJoe";
export const TIKTOK = "https://www.tiktok.com/@jetwithjoe";
export const YELP_URL = "";
export const GITHUB_URL = "";

// Locations
export const LOCATIONS = [
  {
    title: `Akron, OH<br><small class="text-xs -mt-3">Echo Aviation HQ</small>`,
    address: "3867 West Market St. #216",
    city: "Akron",
    state: "OH",
    zip: "44333",
    gMaps: "https://maps.app.goo.gl/hKb9eMTWDQ9uBNpE9",
    phone: "", // TBD
    forwardPhone: "", // TBD
  },
  {
    title: `Fort Myers, FL<br><small class="text-xs -mt-3">Page Field</small>`,
    address: "", // TBD
    city: "Fort Myers",
    state: "FL",
    zip: "", // TBD
    gMaps: "", // TBD
    phone: "", // TBD
    forwardPhone: "", // TBD
  },
  // Future:
  // Chicago, Lansing IL, Valparaiso, Seattle
];

// Courses
export const COURSES = [
  {
    1: {
      title: "Zero to Hero",
      path: "zero-to-hero",
    },
    2: {
      title: "Private Pilot",
      path: "private-pilot",
    },
    3: {
      title: "Instrument Rating",
      path: "instrument-rating",
    },
    4: {
      title: "Commercial Pilot",
      path: "commercial-pilot",
    },
    5: {
      title: "CFI / CFII",
      path: "flight-instructor",
    },
  },
];

// Fleet (simplified, Jet with Joe works with various aircraft)
export const FLEET = [
  {
    1: {
      title: "Cessna 172 (various)",
      path: "cessna-172",
    },
    2: {
      title: "Piper Archer",
      path: "piper-archer",
    },
    3: {
      title: "Mooney, Bonanza, Diamond (varies by location)",
      path: "advanced-aircraft",
    },
  },
];
