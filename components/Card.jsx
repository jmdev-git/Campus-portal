export default function Card({ title, subtitle, children, className = "" }) {
  return (
    <div className={`rounded-xl border border-zinc-200 bg-white/90 p-4 shadow-sm transition-shadow hover:shadow-md ${className}`}>
      {title && <h3 className="text-base font-semibold text-zinc-900">{title}</h3>}
      {subtitle && <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>}
      <div className="mt-3 text-base text-zinc-800">{children}</div>
    </div>
  );
}