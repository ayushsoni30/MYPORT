import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-left py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-line pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-sm text-ink-muted">
            © {currentYear} Ayush Soni. Designed & built by me. Lucknow, India.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ayushsoni30"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-muted hover:text-accent transition-colors duration-150"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushsoni3030"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted hover:text-accent transition-colors duration-150"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=ayushsoni55aa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-ink-muted hover:text-accent transition-colors duration-150"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}