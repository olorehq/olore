import { ImageResponse } from "next/og";

export const alt = "olore - Version-pinned docs for AI coding agents";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#09090b",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #27272a",
          padding: "60px 80px",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: "0.1em",
          }}
        >
          <span style={{ color: "#71717a" }}>[</span>
          <span> O(pen)LORE </span>
          <span style={{ color: "#71717a" }}>]</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#22d3ee",
            fontWeight: 700,
            textTransform: "uppercase" as const,
            letterSpacing: "0.05em",
          }}
        >
          Stop the hallucinations.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#a1a1aa",
            textAlign: "center",
          }}
        >
          Version-pinned docs for AI coding agents.
        </div>

        <div style={{ display: "flex", gap: "40px", marginTop: "16px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span style={{ fontSize: 32, fontWeight: 700, color: "#22d3ee" }}>
              70+
            </span>
            <span
              style={{
                fontSize: 12,
                color: "#71717a",
                textTransform: "uppercase" as const,
              }}
            >
              Packages
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span style={{ fontSize: 32, fontWeight: 700, color: "#22d3ee" }}>
              Offline
            </span>
            <span
              style={{
                fontSize: 12,
                color: "#71717a",
                textTransform: "uppercase" as const,
              }}
            >
              First
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span style={{ fontSize: 32, fontWeight: 700, color: "#22d3ee" }}>
              100%
            </span>
            <span
              style={{
                fontSize: 12,
                color: "#71717a",
                textTransform: "uppercase" as const,
              }}
            >
              Pass Rate
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "8px",
            padding: "8px 24px",
            border: "1px solid #27272a",
            fontSize: 16,
            color: "#71717a",
          }}
        >
          $ npm install -g @olorehq/olore
        </div>
      </div>
    </div>,
    { ...size }
  );
}
