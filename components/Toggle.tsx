import React from "react";

const imgToggleOff = "https://www.figma.com/api/mcp/asset/196723f1-5cee-48fb-958f-ed2b28df9197";
const imgToggleOn = "https://www.figma.com/api/mcp/asset/4d0846bc-5e4b-4ae4-bdce-7df94bf9e664";

type ToggleProps = {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
};

export default function Toggle({ checked, onChange, style }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={() => onChange?.(!checked)}
      style={{
        display: "flex",
        gap: 4,
        alignItems: "center",
        position: "relative",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        ...style,
      }}
    >
      <div style={{ position: "relative", width: 48, height: 24, flexShrink: 0 }}>
        <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} src={checked ? imgToggleOn : imgToggleOff} />
      </div>
      <p
        style={{
          fontFamily: "Rubik, sans-serif",
          fontWeight: 400,
          lineHeight: 1.25,
          margin: 0,
          color: "#8e929f",
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          direction: "rtl",
        }}
      >
        {checked ? "פעיל" : "לא פעיל"}
      </p>
    </button>
  );
}
