export default function Overlay({ answer }) {
  return (
    <div style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      width: "300px",
      background: "rgba(0,0,0,0.8)",
      color: "white",
      padding: "15px",
      borderRadius: "12px",
      zIndex: 9999
    }}>
      {answer || "🎧 Listening..."}
    </div>
  );
}