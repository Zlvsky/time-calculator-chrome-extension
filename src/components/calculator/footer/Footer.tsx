function Footer() {
  return (
    <div className="mt-10 flex w-full items-center justify-between gap-10 border-t border-lightGray pt-3">
      <span className="text-xs text-secondary/80">
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
  )
}

export default Footer
