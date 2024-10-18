const Footer = () => {
  return (
    <footer
      className={`flex items-center justify-center gap-2 py-4 px-4 border-t
    border-border-light bg-header-light dark:border-border-dark dark:bg-header-dark
    `}
    >
      <span className={`text-sm text-gray-600 dark:text-gray-400`}>
        Developed by
      </span>
      <a
        href="https://github.com/yksa"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-sm font-medium hover:underline text-blue-600 hover:text-blue-800
        dark:text-blue-400 dark:hover:text-blue-300
        `}
      >
        Ye Kyaw
      </a>
    </footer>
  );
};

export default Footer;
