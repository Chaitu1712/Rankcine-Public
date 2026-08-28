// Generic pill-shaped button used everywhere on the marketing site
// (navbar buttons, hero CTAs, "I WANT TO RANK" card buttons, etc).
//
// `variant` controls the color scheme, `as` lets you render it as a
// real <button> (default) or wrap it around a <Link> by passing
// `as="span"` when the parent element is already a Next.js <Link>.
//
// Example:
//   <Button variant="black">Download App →</Button>
//   <Button variant="purple">PLATFORM DEMO →</Button>
//   <Button variant="outline-pink">I WANT TO PUBLISH →</Button>
//   <Button variant="pill-purple">I WANT TO RANK →</Button>

const variantStyles = {
  black: "bg-rc-black text-white",
  purple: "bg-rc-purple text-white",
  "outline-purple": "border border-rc-purple text-rc-purple-dark bg-white",
  "outline-green": "border border-emerald-400 text-emerald-600 bg-white",
  "outline-pink": "border border-pink-400 text-pink-600 bg-white",
  // Soft-tinted / solid pill variants used on the ecosystem role cards
  "pill-purple": "bg-violet-200/70 text-violet-800 hover:bg-violet-300/80",
  "pill-green": "bg-emerald-100/80 text-emerald-800 hover:bg-emerald-200/90",
  "pill-pink": "bg-pink-500 text-white hover:bg-pink-600",
};

export default function Button({
  children,
  variant = "black",
  className = "",
  as: Component = "button",
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center rounded-pill px-6 py-2.5 text-xs font-bold transition hover:opacity-90 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}