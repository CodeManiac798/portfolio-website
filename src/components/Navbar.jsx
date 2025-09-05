import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - White text with subtle glow hover */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white hover:text-white transition-all duration-300 cursor-pointer hover:underline decoration-white decoration-2 underline-offset-4 hover:drop-shadow-lg">Aryan</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 hover:underline decoration-white decoration-1 underline-offset-4"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 hover:underline decoration-white decoration-1 underline-offset-4"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 hover:underline decoration-white decoration-1 underline-offset-4"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 hover:underline decoration-white decoration-1 underline-offset-4"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 border-t border-white/20">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-white hover:underline decoration-white decoration-1 underline-offset-4 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-white hover:underline decoration-white decoration-1 underline-offset-4 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white hover:text-white hover:underline decoration-white decoration-1 underline-offset-4 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-white hover:underline decoration-white decoration-1 underline-offset-4 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
// Redesign Navbar with dark/cosmic theme
// - Background: translucent black with glassmorphism effect
// - Text: white with hover glow
// - Active link: gradient underline (violet → blue)
// - Add subtle drop shadow
// - Responsive (mobile: hamburger menu)

