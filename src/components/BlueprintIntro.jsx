// Enhance the BlueprintIntro with mechanical blueprint-style animations:
//
// 1. Add two rotating SVG gears (one small, one large).
//    - Place them in opposite corners (e.g., bottom-left, top-right).
//    - Animate them with continuous slow rotation (CSS or Framer Motion).
//
// 2. Add 4 screws/bolts at the corners of the intro container.
//    - Each screw should rotate into place (tightening effect).
//    - Use Tailwind + keyframes for rotation animation.
//
// 3. (Optional) Add a simple piston animation on the side.
//    - Small rectangle moving up and down connected by a line (like a crank).
//
// 4. Keep animations subtle (not distracting).
// 5. Match colors to blueprint theme (light-blue strokes, transparent fill).
// 6. Ensure all mechanical elements respect responsiveness and do not overlap text.


import { useEffect, useState } from 'react';

const BlueprintIntro = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    if (mediaQuery.matches) {
      setAnimationComplete(true);
    } else {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-black relative flex items-center justify-center px-4 overflow-hidden"
    >
      {/* White Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="whiteGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#whiteGrid)" />
        </svg>
      </div>

      {/* Optional diagonal scan-line animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent w-20 h-full animate-scan"></div>
      </div>

      {/* Enhanced Mechanical Background Animations */}
      {!prefersReducedMotion && (
        <>
          {/* Large Rotating Gears in Corners */}
          <div className="absolute top-8 left-8 opacity-5">
            <svg width="120" height="120" viewBox="0 0 120 120" className="text-white animate-spin" style={{ animationDuration: '60s' }}>
              <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const x1 = 60 + 35 * Math.cos(angle);
                const y1 = 60 + 35 * Math.sin(angle);
                const x2 = 60 + 50 * Math.cos(angle);
                const y2 = 60 + 50 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1"/>;
              })}
              <circle cx="60" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          
          <div className="absolute top-8 right-8 opacity-5">
            <svg width="100" height="100" viewBox="0 0 100 100" className="text-white animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1"/>
              {[...Array(10)].map((_, i) => {
                const angle = (i * 36) * Math.PI / 180;
                const x1 = 50 + 28 * Math.cos(angle);
                const y1 = 50 + 28 * Math.sin(angle);
                const x2 = 50 + 40 * Math.cos(angle);
                const y2 = 50 + 40 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1"/>;
              })}
              <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>

          <div className="absolute bottom-8 left-8 opacity-5">
            <svg width="80" height="80" viewBox="0 0 80 80" className="text-white animate-spin" style={{ animationDuration: '75s' }}>
              <circle cx="40" cy="40" r="32" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="40" cy="40" r="22" fill="none" stroke="currentColor" strokeWidth="1"/>
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const x1 = 40 + 22 * Math.cos(angle);
                const y1 = 40 + 22 * Math.sin(angle);
                const x2 = 40 + 32 * Math.cos(angle);
                const y2 = 40 + 32 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1"/>;
              })}
              <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>

          <div className="absolute bottom-8 right-8 opacity-5">
            <svg width="90" height="90" viewBox="0 0 90 90" className="text-white animate-spin" style={{ animationDuration: '90s', animationDirection: 'reverse' }}>
              <circle cx="45" cy="45" r="36" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="45" cy="45" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
              {[...Array(9)].map((_, i) => {
                const angle = (i * 40) * Math.PI / 180;
                const x1 = 45 + 25 * Math.cos(angle);
                const y1 = 45 + 25 * Math.sin(angle);
                const x2 = 45 + 36 * Math.cos(angle);
                const y2 = 45 + 36 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1"/>;
              })}
              <circle cx="45" cy="45" r="9" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>

          {/* Scattered Medium Gears */}
          <div className="absolute top-1/4 left-1/4 opacity-3">
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-white animate-spin" style={{ animationDuration: '50s' }}>
              <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="30" cy="30" r="18" fill="none" stroke="currentColor" strokeWidth="1"/>
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60) * Math.PI / 180;
                const x1 = 30 + 18 * Math.cos(angle);
                const y1 = 30 + 18 * Math.sin(angle);
                const x2 = 30 + 24 * Math.cos(angle);
                const y2 = 30 + 24 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1"/>;
              })}
            </svg>
          </div>

          <div className="absolute top-3/4 right-1/3 opacity-3">
            <svg width="50" height="50" viewBox="0 0 50 50" className="text-white animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }}>
              <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="25" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
              {[...Array(5)].map((_, i) => {
                const angle = (i * 72) * Math.PI / 180;
                const x1 = 25 + 15 * Math.cos(angle);
                const y1 = 25 + 15 * Math.sin(angle);
                const x2 = 25 + 20 * Math.cos(angle);
                const y2 = 25 + 20 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1"/>;
              })}
            </svg>
          </div>

          {/* Enhanced Floating Nuts & Bolts System */}
          {[...Array(16)].map((_, i) => {
            // Randomize properties for each element
            const size = i % 4 === 0 ? 'large' : i % 3 === 0 ? 'medium' : 'small';
            const sizeMap = { small: 12, medium: 18, large: 24 };
            const elementSize = sizeMap[size];
            
            // Trajectory and timing variations
            const leftPosition = 5 + (i * 6) % 90; // Spread across width
            const fallDuration = size === 'large' ? 25 + i * 2 : size === 'medium' ? 18 + i * 1.5 : 12 + i;
            const rotationSpeed = size === 'large' ? 12 + i * 2 : size === 'medium' ? 8 + i : 6 + i * 0.5;
            const rotationDirection = i % 2 === 0 ? 'normal' : 'reverse';
            const drift = (i % 3 - 1) * 20; // -20px, 0px, or 20px horizontal drift
            const opacity = Math.max(0.15, 0.5 - (i * 0.02)); // Varying opacity
            const shineDelay = i * 3; // Staggered shine effects
            
            return (
              <div
                key={`enhanced-floating-${i}`}
                className="absolute opacity-20 animate-enhanced-float"
                style={{
                  left: `${leftPosition}%`,
                  opacity: opacity,
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: `${fallDuration}s`,
                  '--drift-x': `${drift}px`,
                  '--shine-delay': `${shineDelay}s`
                }}
              >
                {i % 4 === 0 ? (
                  // Large Hexagonal Nut with metallic shine
                  <div className="relative">
                    <svg 
                      width={elementSize} 
                      height={elementSize} 
                      viewBox="0 0 24 24" 
                      className="text-white animate-enhanced-spin metallic-shine" 
                      style={{ 
                        animationDuration: `${rotationSpeed}s`,
                        animationDirection: rotationDirection
                      }}
                    >
                      <polygon points="12,1 21,6 21,18 12,23 3,18 3,6" fill="none" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
                      {/* Thread details */}
                      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.6"/>
                    </svg>
                    {/* Metallic shine overlay */}
                    <div className="absolute inset-0 metallic-glint" style={{ animationDelay: `${shineDelay}s` }}></div>
                  </div>
                ) : i % 4 === 1 ? (
                  // Medium Screw with cross pattern
                  <div className="relative">
                    <svg 
                      width={elementSize} 
                      height={elementSize} 
                      viewBox="0 0 18 18" 
                      className="text-white animate-enhanced-spin metallic-shine" 
                      style={{ 
                        animationDuration: `${rotationSpeed}s`,
                        animationDirection: rotationDirection
                      }}
                    >
                      <circle cx="9" cy="9" r="8" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                      <line x1="4" y1="9" x2="14" y2="9" stroke="currentColor" strokeWidth="1"/>
                      <line x1="9" y1="4" x2="9" y2="14" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="9" cy="9" r="2" fill="currentColor" opacity="0.4"/>
                      {/* Screw threads */}
                      <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
                    </svg>
                    <div className="absolute inset-0 metallic-glint" style={{ animationDelay: `${shineDelay}s` }}></div>
                  </div>
                ) : i % 4 === 2 ? (
                  // Square Bolt with center hole
                  <div className="relative">
                    <svg 
                      width={elementSize} 
                      height={elementSize} 
                      viewBox="0 0 16 16" 
                      className="text-white animate-enhanced-spin metallic-shine" 
                      style={{ 
                        animationDuration: `${rotationSpeed}s`,
                        animationDirection: rotationDirection
                      }}
                    >
                      <rect x="3" y="3" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                      <circle cx="8" cy="8" r="2.5" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                      <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.5"/>
                      {/* Corner reinforcements */}
                      <circle cx="5" cy="5" r="0.8" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                      <circle cx="11" cy="5" r="0.8" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                      <circle cx="5" cy="11" r="0.8" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                      <circle cx="11" cy="11" r="0.8" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                    </svg>
                    <div className="absolute inset-0 metallic-glint" style={{ animationDelay: `${shineDelay}s` }}></div>
                  </div>
                ) : (
                  // Small Washer/Ring
                  <div className="relative">
                    <svg 
                      width={elementSize} 
                      height={elementSize} 
                      viewBox="0 0 14 14" 
                      className="text-white animate-enhanced-spin metallic-shine" 
                      style={{ 
                        animationDuration: `${rotationSpeed}s`,
                        animationDirection: rotationDirection
                      }}
                    >
                      <circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                      <circle cx="7" cy="7" r="3" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                      <circle cx="7" cy="7" r="1" fill="currentColor" opacity="0.3"/>
                      {/* Washer texture */}
                      <circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.6"/>
                    </svg>
                    <div className="absolute inset-0 metallic-glint" style={{ animationDelay: `${shineDelay}s` }}></div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Additional Micro Elements for Richness */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`micro-element-${i}`}
              className="absolute opacity-10 animate-micro-float"
              style={{
                left: `${10 + i * 7}%`,
                animationDelay: `${i * 2.5}s`,
                animationDuration: `${20 + i * 2}s`,
                '--micro-drift': `${(i % 2 - 0.5) * 30}px`
              }}
            >
              <div className="w-2 h-2 border border-white rounded-full opacity-60"></div>
            </div>
          ))}

          {/* Blueprint Line Effects */}
          <div className="absolute top-0 left-0 w-full h-full opacity-2 pointer-events-none">
            {/* Horizontal blueprint lines */}
            <svg width="100%" height="100%" className="absolute inset-0">
              <line x1="0" y1="20%" x2="100%" y2="20%" stroke="white" strokeWidth="0.5" opacity="0.1" className="animate-blueprint-draw" style={{ animationDelay: '2s' }} />
              <line x1="0" y1="40%" x2="100%" y2="40%" stroke="white" strokeWidth="0.5" opacity="0.1" className="animate-blueprint-draw" style={{ animationDelay: '4s' }} />
              <line x1="0" y1="60%" x2="100%" y2="60%" stroke="white" strokeWidth="0.5" opacity="0.1" className="animate-blueprint-draw" style={{ animationDelay: '6s' }} />
              <line x1="0" y1="80%" x2="100%" y2="80%" stroke="white" strokeWidth="0.5" opacity="0.1" className="animate-blueprint-draw" style={{ animationDelay: '8s' }} />
            </svg>
            
            {/* Vertical blueprint lines */}
            <svg width="100%" height="100%" className="absolute inset-0">
              <line x1="15%" y1="0" x2="15%" y2="100%" stroke="white" strokeWidth="0.5" opacity="0.1" className="animate-blueprint-draw" style={{ animationDelay: '3s' }} />
              <line x1="35%" y1="0" x2="35%" y2="100%" stroke="white" strokeWidth="0.5" opacity="0.1" className="animate-blueprint-draw" style={{ animationDelay: '5s' }} />
              <line x1="65%" y1="0" x2="65%" y2="100%" stroke="white" strokeWidth="0.5" opacity="0.1" className="animate-blueprint-draw" style={{ animationDelay: '7s' }} />
              <line x1="85%" y1="0" x2="85%" y2="100%" stroke="white" strokeWidth="0.5" opacity="0.1" className="animate-blueprint-draw" style={{ animationDelay: '9s' }} />
            </svg>

            {/* Diagonal construction lines */}
            <svg width="100%" height="100%" className="absolute inset-0">
              <line x1="0" y1="0" x2="30%" y2="30%" stroke="white" strokeWidth="0.3" opacity="0.08" className="animate-blueprint-draw" style={{ animationDelay: '10s' }} />
              <line x1="70%" y1="0" x2="100%" y2="30%" stroke="white" strokeWidth="0.3" opacity="0.08" className="animate-blueprint-draw" style={{ animationDelay: '11s' }} />
              <line x1="0" y1="70%" x2="30%" y2="100%" stroke="white" strokeWidth="0.3" opacity="0.08" className="animate-blueprint-draw" style={{ animationDelay: '12s' }} />
              <line x1="70%" y1="70%" x2="100%" y2="100%" stroke="white" strokeWidth="0.3" opacity="0.08" className="animate-blueprint-draw" style={{ animationDelay: '13s' }} />
            </svg>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Name Section with Emphasized Typography and Interactive Effects */}
        <div className="mb-12 relative group">
          {/* Sparks effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={`spark-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full animate-spark"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.5s'
                }}
              />
            ))}
          </div>

          {/* Aryan - Extra Bold Sans-Serif */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-2 leading-none transition-all duration-300 hover:drop-shadow-lg"
              style={{ 
                fontFamily: "'Poppins', 'Montserrat', system-ui, sans-serif",
                fontWeight: '900',
                textShadow: '0 4px 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05)',
                letterSpacing: '-0.02em'
              }}
          >
            Aryan
          </h1>
          
          {/* Mittal - Semi-Bold Serif */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-white leading-none transition-all duration-300 hover:drop-shadow-lg"
              style={{ 
                fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif",
                fontWeight: '600',
                textShadow: '0 4px 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05)',
                letterSpacing: '0.01em'
              }}
          >
            Mittal
          </h1>
        </div>

        {/* Tagline with fade-in animation */}
        <div 
          className={`text-base md:text-lg lg:text-xl mb-12 transition-all duration-1000 ${
            animationComplete || prefersReducedMotion 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            transitionDelay: prefersReducedMotion ? '0ms' : '800ms',
            marginTop: '3rem'
          }}
        >
          <span className="text-white font-normal">
            <span className="font-bold">Mechanical Engineering</span> Student | Budding <span className="font-bold">Entrepreneur</span> 🚀
          </span>
        </div>

        {/* CTA Buttons - Monochrome Style */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
            animationComplete || prefersReducedMotion 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            transitionDelay: prefersReducedMotion ? '0ms' : '1200ms' 
          }}
        >
          {/* View My Work - White bg, black text */}
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative bg-white text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black hover:text-white border border-white overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            {/* Hover spark effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={`button-spark-${i}`}
                  className="absolute w-0.5 h-0.5 bg-white rounded-full animate-spark"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${20 + i * 30}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '0.4s'
                  }}
                />
              ))}
            </div>
          </button>
          
          {/* Get in Touch - Black bg, white border */}
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative bg-black border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            {/* Hover spark effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={`button-spark-${i}`}
                  className="absolute w-0.5 h-0.5 bg-black rounded-full animate-spark"
                  style={{
                    left: `${25 + i * 25}%`,
                    top: `${15 + i * 35}%`,
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: '0.4s'
                  }}
                />
              ))}
            </div>
          </button>
          
          {/* Download Resume - Black bg, white border */}
          <button
            onClick={async () => {
              try {
                // Add cache-busting parameter to ensure fresh download
                const timestamp = new Date().getTime();
                const response = await fetch(`/Aryan_Mittal_Resume.pdf?v=${timestamp}`, {
                  cache: 'no-cache',
                  headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                  }
                });
                
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                // Get the blob data
                const blob = await response.blob();
                
                // Create object URL
                const url = window.URL.createObjectURL(blob);
                
                // Create download link with timestamp to ensure unique download
                const link = document.createElement('a');
                link.href = url;
                link.download = `Aryan_Mittal_Resume_${timestamp}.pdf`;
                link.type = 'application/pdf';
                
                // Trigger download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Clean up the object URL
                window.URL.revokeObjectURL(url);
                
              } catch (error) {
                console.error('Error downloading resume:', error);
                alert('Sorry, there was an error downloading the resume. Please try again or contact me directly.');
                
                // Fallback: try direct navigation with cache-busting
                try {
                  const timestamp = new Date().getTime();
                  window.open(`/Aryan_Mittal_Resume.pdf?v=${timestamp}`, '_blank');
                } catch (fallbackError) {
                  console.error('Fallback also failed:', fallbackError);
                }
              }
            }}
            className="group relative bg-black border border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 justify-center overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Resume
            </span>
            {/* Hover spark effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div
                  key={`button-spark-${i}`}
                  className="absolute w-0.5 h-0.5 bg-black rounded-full animate-spark"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${10 + i * 25}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '0.5s'
                  }}
                />
              ))}
            </div>
          </button>
        </div>

        {/* Social Media Links - Monochrome */}
        <div 
          className={`flex justify-center gap-6 mt-8 transition-all duration-1000 ${
            animationComplete || prefersReducedMotion 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            transitionDelay: prefersReducedMotion ? '0ms' : '1600ms' 
          }}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aryan-mittal-5762941b9"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 border border-white rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/CodeManiac798"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 border border-white rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            aria-label="GitHub Profile"
          >
            <svg className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/aryannnmittal?igsh=MXZ3Mmp4N3Rpd3d5aA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 border border-white rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            aria-label="Instagram Profile"
          >
            <svg className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlueprintIntro;