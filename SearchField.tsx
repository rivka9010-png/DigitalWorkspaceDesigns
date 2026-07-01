import React from "react";

const imgIconSearch = "https://www.figma.com/api/mcp/asset/10735bd2-dfe1-450f-9b43-83df51e6b858";

function IconSearch({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ position: "relative", width: 24, height: 24, flexShrink: 0, ...style }}>
      <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} src={imgIconSearch} />
    </div>
  );
}

type SearchFieldProps = {
  style?: React.CSSProperties;
  placeholder?: string;
};

export default function SearchField({ style, placeholder = "איתור אדם" }: SearchFieldProps) {
  return (
    <div
      style={{
        background: "#fff",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        overflow: "clip",
        padding: 4,
        position: "relative",
        borderRadius: 8,
        width: 528,
        ...style,
      }}
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #006aff",
          display: "flex",
          flex: "1 0 0",
          gap: 8,
          height: 64,
          alignItems: "center",
          justifyContent: "flex-end",
          minWidth: 0,
          padding: "12px 16px",
          position: "relative",
          borderRadius: 8,
        }}
      >
        <p
          style={{
            flex: "1 0 0",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            lineHeight: 1.25,
            minWidth: 0,
            margin: 0,
            color: "#8e929f",
            fontSize: 16,
            textAlign: "right",
            wordBreak: "break-word",
            direction: "rtl",
          }}
        >
          {placeholder}
        </p>
        <IconSearch />
      </div>
    </div>
  );
}
