import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);
  const meteorsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Star class
    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.angle = 0;
      }

      update() {
        if (!prefersReducedMotion) {
          this.angle += this.twinkleSpeed;
          this.opacity = 0.3 + Math.sin(this.angle) * 0.4;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Meteor class
    class Meteor {
      constructor() {
        this.reset();
        this.opacity = 0;
        this.fadeIn = true;
      }

      reset() {
        this.x = Math.random() * width + 100;
        this.y = -50;
        this.length = Math.random() * 80 + 20;
        this.speed = Math.random() * 3 + 2;
        this.angle = Math.PI / 4; // 45 degree angle
        this.opacity = 0;
        this.fadeIn = true;
      }

      update() {
        if (prefersReducedMotion) return;

        this.x -= this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);

        // Fade in/out effect
        if (this.fadeIn) {
          this.opacity += 0.02;
          if (this.opacity >= 1) this.fadeIn = false;
        } else {
          this.opacity -= 0.01;
        }

        // Reset when off screen
        if (this.x < -100 || this.y > height + 50 || this.opacity <= 0) {
          this.reset();
        }
      }

      draw() {
        if (this.opacity <= 0) return;

        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Create gradient for meteor trail
        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          this.x + this.length * Math.cos(this.angle),
          this.y - this.length * Math.sin(this.angle)
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(100, 149, 237, 0.8)');
        gradient.addColorStop(1, 'rgba(100, 149, 237, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x + this.length * Math.cos(this.angle),
          this.y - this.length * Math.sin(this.angle)
        );
        ctx.stroke();
        ctx.restore();
      }
    }

    const initStars = () => {
      starsRef.current = [];
      const starCount = Math.min(200, Math.floor(width * height / 8000)); // Responsive star count
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push(new Star());
      }
    };

    const initMeteors = () => {
      meteorsRef.current = [];
      if (!prefersReducedMotion) {
        for (let i = 0; i < 3; i++) {
          meteorsRef.current.push(new Meteor());
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw stars
      starsRef.current.forEach(star => {
        star.update();
        star.draw();
      });

      // Update and draw meteors
      meteorsRef.current.forEach(meteor => {
        meteor.update();
        meteor.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      initStars();
      initMeteors();
      animate();
    };

    init();

    const handleResize = () => {
      resizeCanvas();
      initStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'radial-gradient(ellipse at center, #0f0f23 0%, #000000 100%)'
      }}
    />
  );
};

export default StarBackground;
