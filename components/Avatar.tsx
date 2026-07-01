import React from "react";

const imgOnlineDot = "https://www.figma.com/api/mcp/asset/cb961335-fbb6-42a1-a3ef-33b4263d0c6f";

export default function Avatar({ photoUrl, online = true, style }: { photoUrl?: string; online?: boolean; style?: React.CSSProperties }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-end", padding: 4, position: "relative", ...style }}>
      <div style={{ position: "relative", width: 45.714, height: 45.714, flexShrink: 0 }}>
        <div
          style={{
            position: "absolute",
            border: "1px solid #393b58",
            inset: "2.5%",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          {photoUrl && (
            <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} src={photoUrl} />
          )}
        </div>
        {online && (
          <div style={{ position: "absolute", left: 40, top: 2, width: 10, height: 10 }}>
            <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={imgOnlineDot} />
          </div>
        )}
      </div>
    </div>
  );
}
