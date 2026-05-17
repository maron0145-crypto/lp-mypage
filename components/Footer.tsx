const contacts = [
  {
    label: "Email",
    href: "mailto:ayaichi.toyama@example.com",
    display: "ayaichi.toyama@example.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/ayaichi-toyama",
    display: "github.com/ayaichi-toyama",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-16 md:py-20 px-6 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-[family-name:var(--font-dm-sans)] tracking-widest text-[#2563eb] uppercase mb-3">
          Contact
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10">連絡先</h2>
        <ul className="space-y-4 mb-12 md:mb-16">
          {contacts.map((c) => (
            <li key={c.label} className="flex items-start sm:items-center gap-3 sm:gap-4">
              <span className="w-14 sm:w-16 text-xs text-gray-400 font-[family-name:var(--font-dm-sans)] uppercase shrink-0 pt-0.5 sm:pt-0">
                {c.label}
              </span>
              <a
                href={c.href}
                className="text-gray-700 hover:text-[#2563eb] transition-colors text-xs sm:text-sm break-all min-w-0"
              >
                {c.display}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-400 font-[family-name:var(--font-dm-sans)]">
          © 2025 外山 綾一 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
