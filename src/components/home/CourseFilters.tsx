const filters = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

export function CourseFilters() {
  return (
    <nav className="course-filters" aria-label="Filter courses by topic">
      {filters.map((row, index) => <div className="filter-row" key={index}>
        {row.map((filter) => <a href="#courses" className={`filter-pill${filter === "Featured" ? " is-active" : ""}`} key={filter}>{filter}</a>)}
      </div>)}
    </nav>
  );
}
