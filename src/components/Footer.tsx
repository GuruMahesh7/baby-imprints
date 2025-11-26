import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Baby Imprints</h3>
            <p className="text-sm mb-4">
              Capturing your baby's precious moments since 2004. Over 20 years
              of experience in Hyderabad.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="h-4 w-4 text-primary" />
              <span>3000+ Happy Parents</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                to="/about"
                className="hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className="hover:text-primary transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                Book Session
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm">
              <span>3D Hand & Foot Casts</span>
              <span>3D Face Casts</span>
              <span>Silver Casts</span>
              <span>Framed Keepsakes</span>
              <span>Baby Gifts</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+919866937777"
                  className="text-primary transition-colors"
                >
                  +91 9866937777
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@babyimprints.in"
                  className="text-primary transition-colors"
                >
                  info@babyimprints.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                {/* WhatsApp icon (inline SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-green-500"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.72 11.72 0 0012 .5a11.6 11.6 0 00-9.32 6.35A11.74 11.74 0 003 19.5L.5 23l3.05-.9A11.64 11.64 0 0012 23.5c3.12 0 6.04-1.22 8.24-3.43A11.64 11.64 0 0023.5 11.99 11.72 11.72 0 0020.52 3.48z" />
                  <path d="M17.6 14.2c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15s-.79.98-.97 1.18c-.18.2-.36.22-.66.07a5.54 5.54 0 01-1.64-1.02 6.06 6.06 0 01-1.12-1.4c-.12-.2 0-.31.09-.41.1-.1.22-.24.33-.36.1-.12.14-.2.22-.33.08-.12.04-.22-.03-.36-.07-.12-.69-1.66-.95-2.28-.25-.6-.5-.52-.69-.53-.18-.01-.4-.01-.62-.01s-.36.05-.55.24c-.2.19-.78.76-.78 1.86s.8 2.17.9 2.32c.1.15 1.54 2.34 3.73 3.29 2.19.95 2.19.64 2.59.6.4-.04 1.26-.5 1.44-.99.18-.49.18-.9.13-.99-.05-.1-.18-.15-.38-.3z" />
                </svg>
                <a
                  href="https://wa.me/919866937777?text=I'm%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors"
                >
                  Get Our Services
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Baby Imprints Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
