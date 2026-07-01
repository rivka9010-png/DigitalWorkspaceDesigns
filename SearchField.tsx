import React, { useState } from "react";
import { CitizenIcon, GuardIcon, PrisonerIcon, SearchIcon } from "./components/icons";
import Toggle from "./components/Toggle";
import Tabs, { TabKey } from "./components/Tabs";
import ResultRow, { ResultRowData } from "./components/ResultRow";

const imgSampleProfile = "https://www.figma.com/api/mcp/asset/49082810-f52e-44e5-91c5-a80a3b53dea1";

const SAMPLE_RESULTS: ResultRowData[] = [
  { id: "123456", name: "עלי מזרחי", personalNumber: "356565595959", line2: "סוג אסיר | 052-7654321", line3: "שיבוץ | 052-7654321", photoUrl: imgSampleProfile, online: true },
  { id: "123456", name: "עלי מזרחי", personalNumber: "356565595959", line2: "סוג אסיר | 052-7654321", line3: "שיבוץ | 052-7654321", online: true },
  { id: "123456", name: "עלי מזרחי", personalNumber: "356565595959", line2: "סוג אסיר | 052-7654321", line3: "שיבוץ | 052-7654321", online: true },
  { id: "123456", name: "עלי מזרחי", personalNumber: "356565595959", line2: "סוג אסיר | 052-7654321", line3: "שיבוץ | 052-7654321", online: true },
  { id: "123456", name: "עלי מזרחי", personalNumber: "356565595959", line2: "סוג אסיר | 052-7654321", line3: "שיבוץ | 052-7654321", online: true },
];

const TAB_COUNTS: Record<TabKey, number> = { citizens: 10, guards: 10, prisoners: 10 };

type PersonFilter = "citizen" | "guard" | "prisoner";

type SearchFieldProps = {
  style?: React.CSSProperties;
  placeholder?: string;
};

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        borderRadius: 8,
        background: active ? "#e6f4ff" : "transparent",
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default function SearchField({ style, placeholder = "איתור אדם" }: SearchFieldProps) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [activeOnly, setActiveOnly] = useState(true);
  const [personFilter, setPersonFilter] = useState<PersonFilter>("citizen");
  const [activeTab, setActiveTab] = useState<TabKey>("prisoners");

  const open = focused || query.length > 0;

  return (
    <div
      style={{
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-end",
        overflow: "hidden",
        padding: 4,
        position: "relative",
        borderRadius: 8,
        width: 528,
        boxShadow: open ? "0px 4px 12px 0px rgba(6,77,173,0.15)" : "none",
        ...style,
      }}
    >
      <div
        style={{
          background: "#fff",
          border: "2px solid #006aff",
          display: "flex",
          gap: 8,
          height: 64,
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "12px 16px",
          position: "relative",
          borderRadius: 8,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FilterButton active={personFilter === "citizen"} onClick={() => setPersonFilter("citizen")}>
            <CitizenIcon active={personFilter === "citizen"} />
          </FilterButton>
          <FilterButton active={personFilter === "guard"} onClick={() => setPersonFilter("guard")}>
            <GuardIcon />
          </FilterButton>
          <FilterButton active={personFilter === "prisoner"} onClick={() => setPersonFilter("prisoner")}>
            <PrisonerIcon variant="filter" />
          </FilterButton>
        </div>
        <Toggle checked={activeOnly} onChange={setActiveOnly} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          style={{
            flex: "1 0 0",
            minWidth: 0,
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            lineHeight: 1.25,
            color: "#00033d",
            fontSize: 16,
            textAlign: "right",
            direction: "rtl",
            border: "none",
            outline: "none",
            background: "transparent",
          }}
        />
        <SearchIcon />
      </div>

      {open && (
        <div
          style={{
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            overflow: "hidden",
            borderRadius: 8,
            width: "100%",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderBottom: "1px solid #f5f5f5",
              display: "flex",
              height: 48,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 16,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Tabs active={activeTab} counts={TAB_COUNTS} onChange={setActiveTab} />
          </div>
          {SAMPLE_RESULTS.map((result, i) => (
            <ResultRow key={i} {...result} />
          ))}
        </div>
      )}
    </div>
  );
}
