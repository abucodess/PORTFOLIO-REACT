export default function TiltCard({ children, className = "" }) {
  return (
    <div
      className={`glow-border relative overflow-hidden rounded-2xl border border-white/10 bg-surface/85 transition-colors duration-300 hover:border-violet-400/35 ${className}`}
    >
      <div className="relative h-full">{children}</div>
    </div>
  );
}

