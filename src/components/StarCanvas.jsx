import { useEffect, useRef } from "react";

const StarCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stars
    const stars = Array.from({ length: 500 }, () => {
      const size = Math.random();
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: size * 2 + 0.5,
        speed: size * 0.5 + 0.05,
        opacity: Math.random(),
        twinkle: Math.random() * 0.05 + 0.01,
        color: getRandomStarColor(),
        originalRadius: size * 2 + 0.5,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        isPulsing: Math.random() > 0.7
      };
    });

    // Feature stars
    for (let i = 0; i < 10; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        speed: Math.random() * 0.1,
        opacity: 1,
        twinkle: Math.random() * 0.03 + 0.01,
        color: getRandomBrightStarColor(),
        originalRadius: Math.random() * 3 + 2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        isPulsing: true
      });
    }

    // Shooting stars
    const shootingStars = [];
    const addShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: 0,
        speed: Math.random() * 15 + 10,
        length: Math.random() * 50 + 30,
        angle: Math.random() * Math.PI / 4 - Math.PI / 8,
        opacity: 1,
        decay: Math.random() * 0.02 + 0.01,
        color: getRandomBrightStarColor()
      });

      setTimeout(addShootingStar, Math.random() * 10000 + 5000);
    };
    addShootingStar();

    // Nebulas
    const nebulas = Array.from({ length: 3 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 300 + 200,
      color: getRandomNebulaColor(),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: Math.random() * 0.001 - 0.0005,
      opacity: Math.random() * 0.2 + 0.05
    }));

    const drawNebulas = () => {
      nebulas.forEach(nebula => {
        ctx.save();
        ctx.translate(nebula.x, nebula.y);
        ctx.rotate(nebula.rotation);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, nebula.radius);
        gradient.addColorStop(0, nebula.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = gradient;
        ctx.globalAlpha = nebula.opacity;
        ctx.beginPath();
        ctx.ellipse(0, 0, nebula.radius, nebula.radius * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        nebula.rotation += nebula.rotationSpeed;
      });
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawNebulas();

      stars.forEach((star) => {
        star.opacity += star.twinkle;
        if (star.opacity >= 1 || star.opacity <= 0.3) star.twinkle *= -1;

        if (star.isPulsing) {
          star.radius += star.pulseSpeed;
          if (star.radius >= star.originalRadius * 1.5 || star.radius <= star.originalRadius * 0.8) {
            star.pulseSpeed *= -1;
          }
        }

        if (star.radius > 2) {
          const haloGradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 3
          );
          haloGradient.addColorStop(0, star.color);
          haloGradient.addColorStop(1, 'rgba(0,0,0,0)');

          ctx.globalAlpha = star.opacity * 0.3;
          ctx.fillStyle = haloGradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.shadowBlur = star.radius * 2;
        ctx.shadowColor = star.color;
        ctx.fill();
      });

      shootingStars.forEach((star, index) => {
        ctx.globalAlpha = star.opacity;
        ctx.strokeStyle = star.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - Math.sin(star.angle) * star.length,
          star.y - Math.cos(star.angle) * star.length
        );
        ctx.stroke();

        ctx.globalAlpha = star.opacity * 0.3;
        ctx.lineWidth = 10;
        ctx.stroke();

        star.x += Math.sin(star.angle) * star.speed;
        star.y += Math.cos(star.angle) * star.speed;
        star.opacity -= star.decay;

        if (star.opacity <= 0) {
          shootingStars.splice(index, 1);
        }
      });
    };

    const animate = () => {
      stars.forEach((star) => {
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
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getRandomStarColor = () => {
    const colors = [
      "#ffffff", "#bcdfff", "#ffe9a7", "#ffd8a7", "#d4f1f9", "#f9d4e8"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomBrightStarColor = () => {
    const colors = [
      "#ffff00", "#00ffff", "#ff7f00", "#ff00ff", "#00ff00"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomNebulaColor = () => {
    const colors = [
      "#4d007a", "#007a7a", "#7a004d", "#7a4d00", "#004d7a"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default StarCanvas;
