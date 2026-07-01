import React from "react";

const imgIconSearch = "https://www.figma.com/api/mcp/asset/96c82ab6-43c4-4f8b-99a6-fcebcc8b54f9";
const imgCitizenDefault = "https://www.figma.com/api/mcp/asset/46db93be-27d6-473a-ba35-b095d9817088";
const imgCitizenActive = "https://www.figma.com/api/mcp/asset/178cc78f-b7ca-44e7-b9a9-5689cac78ecc";
const imgGuard = "https://www.figma.com/api/mcp/asset/d1a85968-1d7a-4019-98d8-fe1e73676586";

const imgPrisonerHeadA = "https://www.figma.com/api/mcp/asset/d5398034-24f2-494b-b84a-4b8668bfd063";
const imgPrisonerShouldersA = "https://www.figma.com/api/mcp/asset/ab1efaa8-dc2b-416a-bde1-1d11848fb694";
const imgPrisonerBaseA = "https://www.figma.com/api/mcp/asset/451cd7cb-b5bc-4436-87cf-845df52d4ca0";

const imgPrisonerHeadB = "https://www.figma.com/api/mcp/asset/8e165379-95da-47cc-a2a5-1885fef5d48b";
const imgPrisonerShouldersB = "https://www.figma.com/api/mcp/asset/d048a2a7-5a20-46be-90df-5971316b5529";
const imgPrisonerBaseB = "https://www.figma.com/api/mcp/asset/aedd5fb1-6352-4fbd-8f7e-e89518948e96";

export function SearchIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ position: "relative", width: 24, height: 24, flexShrink: 0, ...style }}>
      <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} src={imgIconSearch} />
    </div>
  );
}

export function CitizenIcon({ active = false, style }: { active?: boolean; style?: React.CSSProperties }) {
  return (
    <div style={{ position: "relative", width: 24, height: 24, flexShrink: 0, ...style }}>
      <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} src={active ? imgCitizenActive : imgCitizenDefault} />
    </div>
  );
}

export function GuardIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ position: "relative", width: 24, height: 24, flexShrink: 0, ...style }}>
      <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} src={imgGuard} />
    </div>
  );
}

/**
 * The prisoner glyph is assembled from three overlaid vector pieces in Figma.
 * `variant` selects which of the two exported vector sets to use (the filter
 * row and the result-row badge use separate exports of the same glyph).
 */
export function PrisonerIcon({ variant = "filter", style }: { variant?: "filter" | "row"; style?: React.CSSProperties }) {
  const head = variant === "filter" ? imgPrisonerHeadA : imgPrisonerHeadB;
  const shoulders = variant === "filter" ? imgPrisonerShouldersA : imgPrisonerShouldersB;
  const base = variant === "filter" ? imgPrisonerBaseA : imgPrisonerBaseB;
  return (
    <div
      style={{
        position: "relative",
        width: 24,
        height: 24,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        overflow: "hidden",
        padding: "3px 6px",
        ...style,
      }}
    >
      <div style={{ position: "relative", width: 8, height: 8, flexShrink: 0 }}>
        <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={head} />
      </div>
      <div style={{ position: "relative", width: 12, height: 6, flexShrink: 0 }}>
        <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={shoulders} />
      </div>
      <div style={{ position: "absolute", left: "50%", top: 10, transform: "translateX(-50%)", display: "flex", height: 11, alignItems: "flex-end", justifyContent: "center" }}>
        <div style={{ position: "relative", width: 6, height: 8, flexShrink: 0 }}>
          <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={base} />
        </div>
      </div>
    </div>
  );
}
