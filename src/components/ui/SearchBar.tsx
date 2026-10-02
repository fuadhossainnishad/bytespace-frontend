export function SearchBar({ compact = false }: { compact?: boolean }) {
  return (
    <form className={`search-bar${compact ? " search-bar--compact" : ""}`} action="#courses" role="search">
      <label className="search-bar__field">
        {!compact && <svg aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="10.8" cy="10.8" r="6.3" />
          <path d="m15.5 15.5 4.2 4.2" />
        </svg>}
        <span className="sr-only">{compact ? "Email address" : "Search courses"}</span>
        <input type={compact ? "email" : "search"} name={compact ? "email" : "q"} placeholder={compact ? "Enter your email" : "Course, topic, creator"} />
      </label>
      <button className="button button--primary" type="submit">Search</button>
    </form>
  );
}
