import { useEffect, useRef } from "react";

const StarCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Background stars (static, more numerous)
    const bgStars = Array.from({ length: 1000 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 0.8 + 0.2,
      opacity: Math.random() * 0.5 + 0.1,
      color: ["#ffffff", "#bcdfff", "#ffe9a7"][Math.floor(Math.random() * 3)],
    }));

    // Foreground stars (animated, twinkling)
    const fgStars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random(),
      twinkle: Math.random() * 0.05 + 0.01,
      color: ["#ffffff", "#bcdfff", "#ffe9a7"][Math.floor(Math.random() * 3)],
    }));

    const drawStars = () => {
      // Space gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#000010");
      gradient.addColorStop(1, "#000000");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw background stars (static)
      bgStars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(star.color)}, ${star.opacity})`;
        ctx.fill();
      });

      // Draw foreground stars (animated)
      fgStars.forEach((star) => {
        // Twinkling logic
        star.opacity += star.twinkle;
        if (star.opacity >= 1 || star.opacity <= 0) star.twinkle *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(star.color)}, ${star.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = star.color;
        ctx.fill();
      });
    };

    const animate = () => {
      fgStars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      drawStars();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recreate stars on resize to fill new dimensions
      bgStars.forEach(star => {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
      });
      
      fgStars.forEach(star => {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper: Convert hex to rgb
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

export default StarCanvas;