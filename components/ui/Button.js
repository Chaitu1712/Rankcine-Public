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

const variantStyles = {
  black: "bg-rc-black text-white",
  purple: "bg-rc-purple text-white",
  "outline-purple": "border border-rc-purple text-rc-purple-dark bg-white",
  "outline-green": "border border-emerald-400 text-emerald-600 bg-white",
  "outline-pink": "border border-pink-400 text-pink-600 bg-white",
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
