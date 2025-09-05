const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-white text-sm">
              © {currentYear} <span className="text-white">Aryan</span>. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Built with React, Vite & TailwindCSS ✨
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-white hover:text-gray-400 transition-colors duration-200 group"
          >
            <span className="text-sm font-medium">Back to top</span>
            <svg 
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Decorative line */}
        <div className="mt-6 pt-6 border-t border-white">
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-white"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
