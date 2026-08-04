// Generic small circular icon badge — a colored circle with an emoji
// or short glyph centered inside it. Used for the little icons next
// to each bullet point in the WhyRankcineTabs cards.
//
// NOTE: using emoji here as a fast placeholder so the layout can be
// built and reviewed quickly. Swap the `glyph` values for real SVG
// icons exported from Figma once you have them — the component's
// job (a colored circle container) won't need to change, just what
// you pass as children.
export default function IconBadge({ glyph, bg = "bg-rc-purple-light", size = "h-8 w-8" }) {
  return (
    <span
      className={`flex ${size} shrink-0 items-center justify-center rounded-full ${bg} text-sm`}
    >
      {glyph}
    </span>
  );
}