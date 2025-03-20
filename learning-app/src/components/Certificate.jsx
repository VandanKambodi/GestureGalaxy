import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Certificate = ({ name, score }) => {
  const certificateRef = useRef();

  const downloadCertificate = async () => {
    const element = certificateRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape");
    pdf.addImage(imgData, "PNG", 0, 0, 297, 210);
    pdf.save(`Certificate_${name}.pdf`);
  };

  return (
    <div style={styles.container}>
      <div ref={certificateRef} style={styles.certificate}>
        <img src="/certificate_bg.png" alt="Certificate" style={styles.image} />
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.score}>Score: {score}%</p>
      </div>
      <button onClick={downloadCertificate} style={styles.button}>
        Download Certificate
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  certificate: {
    position: "relative",
    width: "900px",
    height: "600px",
    margin: "auto",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
  },
  name: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "40px",
    fontWeight: "bold",
    color: "#222",
  },
  score: {
    position: "absolute",
    top: "65%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "24px",
    color: "#444",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default Certificate;
