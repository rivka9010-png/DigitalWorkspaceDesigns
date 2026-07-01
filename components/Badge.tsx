import React from "react";

export type BadgeStatus = "active" | "future" | "past";

const STATUS_STYLES: Record<BadgeStatus, { bg: string; border: string; text: string; label: string }> = {
  active: { bg: "#f6fff8", border: "#2e7d32", text: "#2e7d32", label: "פעיל" },
  future: { bg: "#fff9f0", border: "#ef6c00", text: "#ef6c00", label: "עתידי" },
  past: { bg: "#fafafa", border: "#6b7280", text: "#6b7280", label: "עבר" },
};

export default function Badge({ status, style }: { status: BadgeStatus; style?: React.CSSProperties }) {
  const { bg, border, text, label } = STATUS_STYLES[status];
  return (
    <div
      style={{
        background: bg,
        border: `${status === "past" ? 1 : 0.5}px solid ${border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "4px 8px",
        borderRadius: 8,
        ...style,
      }}
    >
      <p
        style={{
          wordBreak: "break-word",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 400,
          lineHeight: 1.25,
          margin: 0,
          color: text,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          direction: "rtl",
        }}
      >
        {label}
      </p>
    </div>
  );
}
