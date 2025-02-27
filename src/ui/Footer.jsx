import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-4 bg-stone-900 px-4 py-2 font-semibold text-white">
      <Link>
        <Instagram size={20} strokeWidth={1.75} />
      </Link>
      <Link>
        <Facebook size={20} strokeWidth={1.75} />
      </Link>
      <Link>
        <Youtube size={20} strokeWidth={1.75} />
      </Link>
    </footer>
  );
};

export default Footer;
