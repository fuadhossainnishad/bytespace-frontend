import { CourseCard, type Course } from "@/components/home/CourseCard";
import Link from "next/link";

export const catalogCourses: Course[] = [
  { title: "Learn Figma from Basic", image: "/assets/course-figma.png" },
  { title: "Build Digital Asset", image: "/assets/course-digital-asset.png" },
  { title: "the Power of Big Data", image: "/assets/course-big-data.png" },
  { title: "Balancing Productivity and Self-Care", image: "/assets/course-productivity.png" },
  { title: "Mastering Money Management", image: "/assets/course-money.png" },
  { title: "From Idea to Startup Success", image: "/assets/course-startup.png" },
];

const categories = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"];

function CourseLink({ course }: { course: Course }) {
  const card = <CourseCard course={course} decorative />;

  return course.title === "Build Digital Asset"
    ? <Link className="catalog-card-link" href="/courses/digital-asset" aria-label={`${course.title}, course details`}>{card}</Link>
    : card;
}

export function CourseCatalog({ creator = false }: { creator?: boolean }) {
  const courses = creator ? catalogCourses : Array.from({ length: 3 }, () => catalogCourses).flat();

  return (
    <section className={`catalog-section${creator ? " creator-catalog" : ""}`} id="courses" aria-label={creator ? "Creator courses" : "Course results"}>
      <div className="catalog-toolbar" role="group" aria-label="Course filters">
        <div className="catalog-filter-group"><span className="catalog-control">⚲ &nbsp;Filter</span><span className="catalog-control">▥ &nbsp;Level</span><span className="catalog-control">♧ &nbsp;Category</span></div>
        <span className="catalog-control catalog-sort">≡ &nbsp;Most relevant</span>
      </div>
      {!creator && (
        <>
          <div className="catalog-categories" role="group" aria-label="Course categories">
            {categories.map((category, index) => <span className={index === 0 ? "is-active" : ""} key={category}>{category}</span>)}
          </div>
        </>
      )}
      <div className="catalog-grid">
        {courses.map((course, index) => <CourseLink course={course} key={`${index}-${course.title}`} />)}
      </div>
      {!creator && <div className="catalog-pagination" role="group" aria-label="Search result pages"><span aria-hidden="true">‹</span>{[1, 2, 3, 4, 5].map((page) => <span className={page === 1 ? "is-active" : ""} key={page} aria-current={page === 1 ? "page" : undefined}>{page}</span>)}<span aria-hidden="true">›</span></div>}
    </section>
  );
}
