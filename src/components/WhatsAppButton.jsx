import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/school.js";

const message =
  "Good day. I would like to make an enquiry about Seat of Wisdom Montessori School.";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp (opens in a new tab)"
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}

export default WhatsAppButton;
