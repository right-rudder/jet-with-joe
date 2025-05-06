import {
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  GMAPS
} from "../consts";

const indexFormData = {
  form_url: import.meta.env.CONTACT_WEBHOOK_URL,
  redirect_url: "/contact-confirmation",
  form_h: "Get in Touch",
  form_p1: "Whether you have questions about flight training programs, scheduling a discovery flight, or enrollment requirements, our team is here to help. At Speedway Flight Training, we’re committed to supporting you at every step of your aviation journey.",
  form_p2: "Conveniently located at Atlanta Speedway Airport, we proudly serve aspiring pilots and aviation enthusiasts in the greater Hampton area and beyond. Fill out the contact form, and one of our team members will reach out to assist you with your inquiry or booking.",
  address_1: ADDRESS_LINE_1,
  address_2: ADDRESS_LINE_2,
  gmaps: GMAPS,
  phone_num: PHONE_NUMBER,
  email: EMAIL_ADDRESS,
  textArea: "Say hello! We’re happy to answer any questions you have about our training programs or services.",
  checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by Speedway Flight Training. By providing my phone number, I agree to receive text messages from the academy.`,
};

export default indexFormData;
