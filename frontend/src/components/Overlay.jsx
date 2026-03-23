import React from "react";

export default function Overlay({ answer }) {
  return (
    <div style={{
      background: "rgba(0,0,0,0.7)",
      color: "white",
      padding: "10px",
      borderRadius: "10px"
    }}>
      {answer || "Listening... 🎧"}
    </div>
  );
}