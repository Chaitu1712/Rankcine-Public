// components/ui/OutlinedHeading.js
//
// Renders bold outlined headline text. Deliberately does NOT use
// -webkit-text-stroke — that property renders broken, jagged
// arrow-shaped artifacts on some Windows/Chrome combinations at large
// font sizes (this is a real, known cross-browser inconsistency, not
// something we did wrong). Instead, the outline is faked using 8
// stacked text-shadows around the text — a classic, much more
// reliable technique since it's just shadow rendering, which every
// browser handles the same way.
export default function OutlinedHeading({
  children,
  as: Tag = "h2",
  className = "",
  strokeColor = "#4B3FBF",
  fillColor = "#C9BFFF",
  strokeSize = 2, // pixels
}) {
  const s = strokeSize;
  const c = strokeColor;

  // 8-directional offsets around the text, plus a soft drop shadow
  // underneath for depth (matches the Figma design's subtle shadow).
  const outlineShadow = [
    `-${s}px -${s}px 0 ${c}`,
    `${s}px -${s}px 0 ${c}`,
    `-${s}px ${s}px 0 ${c}`,
    `${s}px ${s}px 0 ${c}`,
    `0 -${s}px 0 ${c}`,
    `0 ${s}px 0 ${c}`,
    `-${s}px 0 0 ${c}`,
    `${s}px 0 0 ${c}`,
    `4px 4px 0 rgba(0,0,0,0.12)`,
  ].join(", ");

  return (
    <Tag
      className={`font-display font-extrabold uppercase ${className}`}
      style={{ color: fillColor, textShadow: outlineShadow }}
    >
      {children}
    </Tag>
  );
}