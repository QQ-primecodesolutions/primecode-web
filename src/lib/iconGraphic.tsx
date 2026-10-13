import { readFileSync } from "fs";
import { join } from "path";

// Favicons use the compact logo symbol (public/images/symbol.svg): the Mont-aux-Sources skyline
// with the prime stroke, drawn taller than in the full logo so it fills a square and still reads
// at 32px. It comes from the PrimeCode Studio repo (assets/brand, built by build_logo.py).
const PADDING = 0.1;

export function AppIconGraphic({ size }: { size: number }) {
  const svg = readFileSync(join(process.cwd(), "public/images/symbol.svg"));
  const src = `data:image/svg+xml;base64,${svg.toString("base64")}`;
  const pad = Math.round(size * PADDING);
  const inner = size - 2 * pad;

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        padding: pad,
        background: "#ffffff",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- rendered by next/og's Satori engine, not the DOM; next/image and alt text don't apply here */}
      <img src={src} alt="" width={inner} height={inner} />
    </div>
  );
}
