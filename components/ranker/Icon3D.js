// Simulates a "3D" glossy icon circle purely with CSS — a radial
// gradient background, a soft inner highlight (top-left, like light
// hitting a glossy sphere), and an outer drop shadow for lift.
//
// This is a CSS approximation, not a real 3D-rendered asset. If you
// want the exact chunky-3D illustrated look from Figma (like the
// screenshot's heart/arrow/chart icons), replace the `glyph` prop
// with a real exported PNG/SVG later — this component's job (sizing +
// shadow + rounded circle) stays the same either way.
//
// `gradientFrom`/`gradientTo` accept hex colors (not Tailwind classes)
// since the gradient angle/stops are built inline for the glossy
// highlight effect to work correctly.
export default function Icon3D({
  glyph,
  gradientFrom = "#8B7BFF",
  gradientTo = "#6C5CE7",
  size = "h-16 w-16",
  glyphSize = "text-2xl",
}) {
  return (
    <span
      className={`relative flex ${size} shrink-0 items-center justify-center rounded-full ${glyphSize} text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105`}
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        boxShadow: `inset -4px -4px 10px rgba(0,0,0,0.15), inset 4px 4px 10px rgba(255,255,255,0.35), 0 8px 16px rgba(0,0,0,0.15)`,
      }}
    >
      {glyph}
    </span>
  );
}
