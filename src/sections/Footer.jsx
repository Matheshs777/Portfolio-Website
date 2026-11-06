const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/Matheshs777",
    hoverClass: "hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]",
    icon: (
      <svg className="w-7 h-7 fill-white group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mathesh-s-598ab7367",
    hoverClass: "hover:border-sky-500 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]",
    icon: (
      <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24">
        <path fill="#0A66C2" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://www.instagram.com/mathesh_x_7?igsh=MWk3ejQ5MTBmZmNrZg%3D%3D",
    hoverClass: "hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]",
    icon: (
      <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24">
        <radialGradient id="igGrad" cx="30%" cy="107%" r="138%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
        <path fill="url(#igGrad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Gmail",
    link: "mailto:matheshs777@gmail.com",
    hoverClass: "hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]",
    icon: (
      <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24">
        {/* Blue Left Leg */}
        <path fill="#4285F4" d="M2.25 18.75v-9.375l4.5 3.375v8.25H3.75A1.5 1.5 0 0 1 2.25 18.75Z" />
        {/* Green Right Leg */}
        <path fill="#34A853" d="M21.75 18.75v-9.375l-4.5 3.375v8.25h3A1.5 1.5 0 0 0 21.75 18.75Z" />
        {/* Yellow Top-Right Fold */}
        <path fill="#FBBC04" d="M21.75 9.375V5.25A1.5 1.5 0 0 0 19.33 4.2L17.25 5.75v7z" />
        {/* Dark Red Top-Left Fold (This was the missing piece!) */}
        <path fill="#C5221F" d="M2.25 9.375V5.25A1.5 1.5 0 0 1 4.67 4.2L6.75 5.75v7z" />
        {/* Red Center Arch */}
        <path fill="#EA4335" d="M6.75 12.75 12 16.5l5.25-3.75v-7L12 9.5l-5.25-3.75z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "WhatsApp",
    link: "https://wa.me/916369669003",
    hoverClass: "hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]",
    icon: (
       <svg className="w-7 h-7 fill-[#25D366] group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .14 5.34.14 11.92c0 2.1.55 4.15 1.6 5.95L.05 24l6.28-1.64a11.96 11.96 0 0 0 5.73 1.46h.01c6.57 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.17-3.48-8.41Zm-8.45 18.32h-.01a9.95 9.95 0 0 1-5.07-1.39l-.36-.21-3.73.98 1-3.64-.24-.37a9.9 9.9 0 0 1-1.52-5.25c0-5.47 4.46-9.92 9.94-9.92a9.87 9.87 0 0 1 7.03 2.91 9.87 9.87 0 0 1 2.91 7.04c0 5.48-4.46 9.93-9.95 9.93Zm5.45-7.44c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 pt-8 pb-10 c-space bg-black/40 backdrop-blur-md">
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

        {/* Larger, Animated Social Buttons */}
        <div className="flex items-center justify-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className={`group flex items-center justify-center w-14 h-14 rounded-full border border-white/15 bg-black/80 hover:-translate-y-2 hover:scale-110 active:scale-95 transition-all duration-300 ease-out shadow-md ${social.hoverClass}`}
            >
              {social.icon}
            </a>
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