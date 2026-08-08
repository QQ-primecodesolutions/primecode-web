import { readFileSync } from "fs";
import { join } from "path";

// The source logo (1024x928) is a full lockup: an icon mark on top of a
// "PrimeCode Solutions" wordmark. Favicons need a square, mark-only crop —
// zoom into the top ~620x620 region (centered on the mark) via scale + offset
// since Satori/ImageResponse has no native crop, only flex/position CSS.
const SOURCE_WIDTH = 1024;
const SOURCE_HEIGHT = 928;
const CROP_SIZE = 620;
const CROP_X = (SOURCE_WIDTH - CROP_SIZE) / 2;
const CROP_Y = 0;

export function AppIconGraphic({ size }: { size: number }) {
  const logoData = readFileSync(join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;
  const scale = size / CROP_SIZE;

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        overflow: "hidden",
        position: "relative",
        background: "#ffffff",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- rendered by next/og's Satori engine, not the DOM; next/image and alt text don't apply here */}
      <img
        src={logoSrc}
        alt=""
        width={SOURCE_WIDTH * scale}
        height={SOURCE_HEIGHT * scale}
        style={{
          position: "absolute",
          left: -CROP_X * scale,
          top: -CROP_Y * scale,
        }}
      />
    </div>
  );
}
