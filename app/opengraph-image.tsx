import { ImageResponse } from "next/og";

export const alt = "Jabal Dreams architectural art, sculpture, and heritage restoration";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f2ed",
          color: "#1a1a1a",
          padding: 72,
          position: "relative",
          overflow: "hidden",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 32,
            border: "1px solid rgba(26,26,26,0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -180,
            top: -140,
            width: 520,
            height: 520,
            border: "1px solid rgba(197,160,89,0.35)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            fontWeight: 700,
            color: "#8a8074",
          }}
        >
          <span
            style={{
              width: 74,
              height: 1,
              background: "#c5a059",
              display: "block",
            }}
          />
          Muscat, Sultanate of Oman
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 0.96,
              fontWeight: 400,
              letterSpacing: 0,
              maxWidth: 920,
            }}
          >
            Jabal Dreams
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.2,
              color: "#c5a059",
              maxWidth: 880,
            }}
          >
            Architectural Art, Sculptures, Interiors and Heritage Restoration
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            fontFamily: "sans-serif",
            color: "#8a8074",
          }}
        >
          <span>Preserving the Past, Crafting the Future.</span>
          <span>jabaldreams.com</span>
        </div>
      </div>
    ),
    size
  );
}
