const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    color: "#a855f7",
    link: "https://github.com/Matheshs777",
    hoverClass: "hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]",
    icon: (
      <svg className="w-7 h-7 fill-white group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "LinkedIn",
    color: "#38bdf8",
    link: "https://www.linkedin.com/in/mathesh-s-598ab7367",
    hoverClass: "hover:border-sky-500 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]",
    icon: (
      <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="3.5" fill="#0A66C2" />
        <path
          fill="#ffffff"
          transform="translate(3.6 3.6) scale(0.7)"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Instagram",
    color: "#ec4899",
    link: "https://www.instagram.com/mathesh_x_7?igsh=MWk3ejQ5MTBmZmNrZg%3D%3D",
    hoverClass: "hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]",
    icon: (
      <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <radialGradient id="igGrad" gradientUnits="userSpaceOnUse" cx="6" cy="25" r="28">
            <stop offset="0" stopColor="#FFDD55" />
            <stop offset="0.1" stopColor="#FFDD55" />
            <stop offset="0.5" stopColor="#FF543E" />
            <stop offset="1" stopColor="#C837AB" />
          </radialGradient>
          <radialGradient id="igGrad2" gradientUnits="userSpaceOnUse" cx="-4" cy="2" r="14">
            <stop offset="0" stopColor="#3771C8" />
            <stop offset="0.13" stopColor="#3771C8" />
            <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
        <rect width="24" height="24" rx="6" fill="url(#igGrad2)" />
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3.3" fill="none" stroke="#fff" strokeWidth="1.7" />
        <circle cx="16.4" cy="7.6" r="1" fill="#fff" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Gmail",
    color: "#ef4444",
    link: "mailto:matheshs777@gmail.com",
    hoverClass: "hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]",
    icon: (
      <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
        <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
        <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
        <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" />
        <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "WhatsApp",
    color: "#22c55e",
    link: "https://wa.me/916369669003",
    hoverClass: "hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]",
    icon: (
      <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#25D366" />
        <path
          fill="#ffffff"
          transform="translate(3.6 3.6) scale(0.7)"
          d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .14 5.34.14 11.92c0 2.1.55 4.15 1.6 5.95L.05 24l6.28-1.64a11.96 11.96 0 0 0 5.73 1.46h.01c6.57 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.17-3.48-8.41Zm-8.45 18.32h-.01a9.95 9.95 0 0 1-5.07-1.39l-.36-.21-3.73.98 1-3.64-.24-.37a9.9 9.9 0 0 1-1.52-5.25c0-5.47 4.46-9.92 9.94-9.92a9.87 9.87 0 0 1 7.03 2.91 9.87 9.87 0 0 1 2.91 7.04c0 5.48-4.46 9.93-9.95 9.93Zm5.45-7.44c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Sketchfab",
    color: "#22d3ee",
    link: "https://sketchfab.com/Mathesh_7",
    hoverClass: "hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]",
    icon: (
      <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 180 180" aria-hidden="true">
        <circle cx="90" cy="90" r="90" fill="#1AA9DB" />
        <polygon points="89.1,35.4 134.9,61.9 89.1,86.3 43.2,61.9" fill="#ffffff" />
        <polygon points="43.3,76 82.2,96.9 82.2,143.5 43.3,121.2" fill="#ffffff" />
        <polygon points="135,76.2 96.4,97 96.4,143.5 135,121.3" fill="#ffffff" />
      </svg>
    ),
  },
];

const socialStyles = `
/* 1. "Exploded view" -> snaps together like an assembly */
@keyframes sxAssemble {
  0%   { opacity: 0; transform: translate(var(--ox), var(--oy)) rotate(var(--or)) scale(0.6); filter: blur(6px); }
  65%  { opacity: 1; filter: blur(0); }
  82%  { transform: translate(0, 0) rotate(0) scale(1.08); }
  100% { opacity: 1; transform: translate(0, 0) rotate(0) scale(1); filter: blur(0); }
}
/* 2. Orbit ring that keeps turning like a gear / CFD swirl */
@keyframes sxSpin { to { transform: rotate(360deg); } }
/* 3. CAD centre-line drawing itself */
@keyframes sxLine { from { transform: scaleX(0); } to { transform: scaleX(1); } }

.sx-item { animation: sxAssemble 0.9s cubic-bezier(0.2, 0.9, 0.3, 1) var(--d) both; }

.sx-ring {
  position: absolute; inset: -6px; border-radius: 9999px;
  border: 1.5px dashed var(--c); opacity: 0.25;
  animation: sxSpin 14s linear infinite;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.sx-btn:hover .sx-ring { opacity: 1; animation-duration: 2.5s; }

/* CAD-style selection brackets */
.sx-corner {
  position: absolute; width: 9px; height: 9px;
  border: 0 solid var(--c); opacity: 0;
  transition: all 0.3s ease; pointer-events: none;
}
.sx-tl { top: -11px; left: -11px;  border-top-width: 2px;    border-left-width: 2px; }
.sx-tr { top: -11px; right: -11px; border-top-width: 2px;    border-right-width: 2px; }
.sx-bl { bottom: -11px; left: -11px;  border-bottom-width: 2px; border-left-width: 2px; }
.sx-br { bottom: -11px; right: -11px; border-bottom-width: 2px; border-right-width: 2px; }
.sx-btn:hover .sx-corner { opacity: 1; }
.sx-btn:hover .sx-tl { transform: translate(4px, 4px); }
.sx-btn:hover .sx-tr { transform: translate(-4px, 4px); }
.sx-btn:hover .sx-bl { transform: translate(4px, -4px); }
.sx-btn:hover .sx-br { transform: translate(-4px, -4px); }

/* dimension-callout label */
.sx-label {
  position: absolute; bottom: calc(100% + 16px); left: 50%;
  transform: translate(-50%, 6px);
  padding: 2px 8px; white-space: nowrap;
  font: 600 10px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--c); background: rgba(0, 0, 0, 0.9);
  border: 1px solid var(--c); border-radius: 4px;
  opacity: 0; transition: all 0.25s ease; pointer-events: none;
}
.sx-label::after {
  content: ""; position: absolute; top: 100%; left: 50%;
  width: 1px; height: 8px; background: var(--c);
}
.sx-btn:hover .sx-label { opacity: 1; transform: translate(-50%, 0); }

.sx-line {
  transform-origin: left center;
  animation: sxLine 1.4s ease-out 0.2s both;
}

@media (prefers-reduced-motion: reduce) {
  .sx-item, .sx-ring, .sx-line { animation: none !important; }
}
`;

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 pt-8 pb-10 c-space bg-black/40 backdrop-blur-md">
      <style>{socialStyles}</style>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">

        {/* Links */}
        <div className="flex gap-2 text-neutral-400 text-xs sm:text-sm">
          <a href="/portfolio_terms.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="/privacy_policy.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
            Privacy Policy
          </a>
        </div>

        {/* Social Buttons */}
        <div className="relative flex flex-wrap items-center justify-center gap-x-7 gap-y-6">
          {/* dashed CAD centre-line */}
          <span className="sx-line pointer-events-none absolute left-0 right-0 top-1/2 hidden sm:block h-px bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.18)_0_8px,transparent_8px_14px)]" />
          {socialLinks.map((social, i) => (
            <span
              key={social.id}
              className="sx-item relative z-10 inline-block"
              style={{
                "--d": `${i * 0.12}s`,
                "--ox": i % 2 ? "28px" : "-28px",
                "--oy": i % 2 ? "-44px" : "44px",
                "--or": i % 2 ? "40deg" : "-40deg",
              }}
            >
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                style={{ "--c": social.color }}
                className={`sx-btn group relative flex items-center justify-center w-14 h-14 rounded-full border border-white/15 bg-black/80 hover:scale-110 active:scale-90 transition-all duration-300 ease-out shadow-md ${social.hoverClass}`}
              >
                <span className="sx-ring" />
                <span className="sx-corner sx-tl" />
                <span className="sx-corner sx-tr" />
                <span className="sx-corner sx-bl" />
                <span className="sx-corner sx-br" />
                <span className="sx-label">{social.name}</span>
                {social.icon}
              </a>
            </span>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-neutral-400 text-xs sm:text-sm text-center">
          © {new Date().getFullYear()} Mathesh S. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;