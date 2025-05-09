import { FaWhatsapp, FaFacebookMessenger, FaEnvelope } from "react-icons/fa";

export default function SideIcons() {
  const iconStyle =
    "text-white text-2xl m-2 hover:scale-110 transition-transform duration-300";
  const containerStyle =
    "fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center bg-blue-300 rounded-l-2xl p-2 shadow-lg z-50";

  return (
    <div className={containerStyle}>
      <a
        href="https://wa.me/9851362001"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className={iconStyle} />
      </a>
      <a
        href="https://m.me/yourmessengerid"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on Messenger"
      >
        <FaFacebookMessenger className={iconStyle} />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=dristikode@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send an Email via Gmail"
      >
        <FaEnvelope className={iconStyle} />
      </a>
    </div>
  );
}
