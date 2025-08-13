export default function Footer() {
  return (
    <footer className="bg-[#0B0C0E] py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-6 flex flex-col items-center gap-4 text-center">
        <div className="font-sans-bold text-3xl tracking-wide">GridX</div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/PritamMohapatra06"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <i className="ri-github-line text-xl"></i>
          </a>
              <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <i className="ri-linkedin-line text-xl"></i>
          </a>
              <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <i className="ri-instagram-line text-xl"></i>
          </a>
        </div>
        {/* Copy */}
        <p className="text-sm text-mute">
          © {new Date().getFullYear()} Pritam Mohapatra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
