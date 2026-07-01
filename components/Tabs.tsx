import React from "react";
import { CitizenIcon, PrisonerIcon } from "./icons";

export type TabKey = "citizens" | "guards" | "prisoners";

const TAB_ORDER: { key: TabKey; label: string }[] = [
  { key: "citizens", label: "אזרחים" },
  { key: "guards", label: "סוהרים" },
  { key: "prisoners", label: "אסירים" },
];

export default function Tabs({
  active,
  counts,
  onChange,
}: {
  active: TabKey;
  counts: Record<TabKey, number>;
  onChange?: (key: TabKey) => void;
}) {
  return (
    <div style={{ display: "flex", flex: "1 0 0", height: "100%", alignItems: "center", justifyContent: "flex-end", minWidth: 0 }}>
      {TAB_ORDER.map(({ key, label }) => {
        const isActive = key === active;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange?.(key)}
            style={{
              display: "flex",
              gap: 8,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 8px",
              background: "none",
              border: "none",
              borderBottom: isActive ? "1px solid #006aff" : "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                background: isActive ? "#e6f4ff" : "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px 8px",
                borderRadius: 32,
                width: 24,
                height: 24,
                boxSizing: "border-box",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "Rubik, sans-serif",
                  fontWeight: isActive ? 500 : 400,
                  fontSize: 14,
                  lineHeight: isActive ? 1 : 1.25,
                  color: isActive ? "#006aff" : "#8e929f",
                  whiteSpace: "nowrap",
                  direction: "rtl",
                }}
              >
                {counts[key]}
              </p>
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "Rubik, sans-serif",
                fontWeight: isActive ? 600 : 400,
                fontSize: 16,
                lineHeight: 1.25,
                color: isActive ? "#006aff" : "#8e929f",
                whiteSpace: "nowrap",
                direction: "rtl",
              }}
            >
              {label}
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 4, borderRadius: 8 }}>
              {isActive ? <CitizenIcon active /> : <PrisonerIcon variant="filter" />}
            </div>
          </button>
        );
      })}
    </div>
  );
}
