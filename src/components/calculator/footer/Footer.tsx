function Footer() {
    return (
      <div className="w-full border-t border-lightGray mt-10 flex items-center justify-between gap-10 pt-3">
        <span className="text-sm text-secondary">
          Made with 🖤 by <a href="https://twitter.com/Zlvskyy">@zlvskyy</a>
        </span>
        <a
          href="https://github.com/Zlvsky/time-calculator-chrome-extension"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            alt="GitHub Repo stars"
            src="https://img.shields.io/github/stars/Zlvsky/time-calculator-chrome-extension"
          />
        </a>
      </div>
    );
}

export default Footer;