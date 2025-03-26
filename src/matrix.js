import { useEffect } from "react";

const MatrixIntro = ({ onComplete }) => {
  useEffect(() => {
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>/={}()".split("");
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(drawMatrix, 30);

    setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 4000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", background: "black", zIndex: 999 }}>
      <canvas id="matrixCanvas" style={{ display: "block" }}></canvas>
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "24px", color: "#0F0", fontFamily: "monospace", background: "rgba(0, 0, 0, 0.7)", padding: "10px 20px", borderRadius: "5px" }}>
        Welcome to My Portfolio
      </div>
    </div>
  );
};

export default MatrixIntro;
