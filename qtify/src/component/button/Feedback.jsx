import React from "react";

export default function Feedback() {
  return (    <button
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-primary)",
        border: "1px solid var(--color-primary)",
        borderRadius: "8px",
        padding: "12px 16px",
        cursor: "pointer",
      }}
    >
      Give Feedback
    </button>
  );
}
