import React from "react";
import Badge from "./Badge";
import Avatar from "./Avatar";
import { PrisonerIcon } from "./icons";

function NameBlock({ id, name, personalNumber, line2, line3 }: { id: string; name: string; personalNumber: string; line2: string; line3: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", position: "relative", width: 220 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start", justifyContent: "flex-end", fontSize: 16, width: "100%", whiteSpace: "nowrap" }}>
        <p style={{ margin: 0, fontFamily: "Rubik, sans-serif", fontWeight: 500, color: "#00033d", direction: "rtl" }}>{id}</p>
        <p style={{ margin: 0, fontFamily: "Rubik, sans-serif", fontWeight: 500, color: "#00033d", direction: "rtl" }}>{name} | </p>
      </div>
      <p style={{ margin: 0, fontFamily: "Rubik, sans-serif", fontWeight: 400, fontSize: 14, color: "#8e929f", width: "100%", direction: "rtl" }}>{personalNumber}</p>
      <p style={{ margin: 0, fontFamily: "Rubik, sans-serif", fontWeight: 400, fontSize: 14, color: "#8e929f", width: "100%", direction: "rtl" }}>{line2}</p>
      <p style={{ margin: 0, fontFamily: "Rubik, sans-serif", fontWeight: 400, fontSize: 14, color: "#8e929f", width: "100%", direction: "rtl" }}>{line3}</p>
    </div>
  );
}

export type ResultRowData = {
  id: string;
  name: string;
  personalNumber: string;
  line2: string;
  line3: string;
  photoUrl?: string;
  online?: boolean;
};

export default function ResultRow({ id, name, personalNumber, line2, line3, photoUrl, online, style }: ResultRowData & { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: "#fff",
        borderBottom: "1px solid #f5f5f5",
        display: "flex",
        gap: 24,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: 16,
        width: "100%",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <div style={{ flex: "1 0 0", minWidth: 0 }} />
      <div style={{ display: "flex", gap: 4, alignItems: "center", justifyContent: "center", padding: "0 4px", alignSelf: "stretch", flexShrink: 0 }}>
        <PrisonerIcon variant="row" style={{ padding: 4, borderRadius: 8 }} />
        <div style={{ display: "flex", gap: 3, alignItems: "center", flexShrink: 0 }}>
          <Badge status="active" />
          <Badge status="future" />
          <Badge status="past" />
        </div>
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start", justifyContent: "flex-end", alignSelf: "stretch", flexShrink: 0 }}>
        <NameBlock id={id} name={name} personalNumber={personalNumber} line2={line2} line3={line3} />
        <Avatar photoUrl={photoUrl} online={online} />
      </div>
    </div>
  );
}
