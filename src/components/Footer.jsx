import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically use current year (2026 as per design guidelines or dynamic)

  return (
    <footer className="bg-bg-dark border-t border-border-dark py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright Signature */}
        <p className="font-sans text-sm text-text-muted text-center md:text-left">
          Designed & Developed by{" "}
          <span className="text-white font-semibold hover:text-primary transition-colors duration-200">
            Ayush Soni
          </span>{" "}
          © {currentYear}
        </p>

        {/* Social Navigation */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ayushsoni30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary text-xl transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FiGithub />
          </a>
          <a
   href="https://mail.google.com/mail/?view=cm&to=ayushsoni55aa@gmail.com"
  rel="noopener noreferrer"
  className="text-text-muted hover:text-primary text-xl transition-all duration-300 hover:scale-110"
  aria-label="Send Email"
  onClick={(e) => {
    e.preventDefault();
    window.open("https://mail.google.com/mail/?view=cm&to=ayushsoni55aa@gmail.com");
  }}
>
  <FiMail />
</a>
        </div>
      </div>
    </footer>
  );
}
