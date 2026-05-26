const links = [
  { label: "Email", href: "mailto:ayaichi.toyama@example.com", display: "ayaichi.toyama@example.com" },
  { label: "GitHub", href: "https://github.com/ayaichi-toyama", display: "github.com/ayaichi-toyama" },
];

export default function Footer() {
  return (
    <footer className="py-5 px-6 border-t border-gray-100">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-xs text-gray-400 font-[family-name:var(--font-dm-sans)]">
          © 2025 外山 綾一 All rights reserved.
        </p>
        <div className="flex flex-col gap-1.5">
          {links.map((l) => (
            <div key={l.label} className="flex items-center gap-3">
              <span className="text-[10px] text-gray-300 font-[family-name:var(--font-dm-sans)] uppercase tracking-widest w-10 shrink-0">
                {l.label}
              </span>
              <a
                href={l.href}
                className="text-xs text-gray-400 hover:text-[#2563eb] transition-colors font-[family-name:var(--font-dm-sans)]"
              >
                {l.display}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
