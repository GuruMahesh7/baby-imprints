const whatsappLink =
  "https://wa.me/919866937777?text=I'm%20interested%20in%20your%20services";

const FloatingWhatsappButton = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.72 11.72 0 0012 .5a11.6 11.6 0 00-9.32 6.35A11.74 11.74 0 003 19.5L.5 23l3.05-.9A11.64 11.64 0 0012 23.5c3.12 0 6.04-1.22 8.24-3.43A11.64 11.64 0 0023.5 11.99 11.72 11.72 0 0020.52 3.48z" />
        <path d="M17.6 14.2c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15s-.79.98-.97 1.18c-.18.2-.36.22-.66.07a5.54 5.54 0 01-1.64-1.02 6.06 6.06 0 01-1.12-1.4c-.12-.2 0-.31.09-.41.1-.1.22-.24.33-.36.1-.12.14-.2.22-.33.08-.12.04-.22-.03-.36-.07-.12-.69-1.66-.95-2.28-.25-.6-.5-.52-.69-.53-.18-.01-.4-.01-.62-.01s-.36.05-.55.24c-.2.19-.78.76-.78 1.86s.8 2.17.9 2.32c.1.15 1.54 2.34 3.73 3.29 2.19.95 2.19.64 2.59.6.4-.04 1.26-.5 1.44-.99.18-.49.18-.9.13-.99-.05-.1-.18-.15-.38-.3z" />
      </svg>
      <span>Get Our Services</span>
    </a>
  );
};

export default FloatingWhatsappButton;

