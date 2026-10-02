import { CourseCard, type Course } from "@/components/home/CourseCard";

const courses: Course[] = [
  { title: "Learn Figma from Basic", image: "/assets/course-figma.png" },
  { title: "Build Digital Asset", image: "/assets/course-digital-asset.png" },
  { title: "the Power of Big Data", image: "/assets/course-big-data.png" },
  { title: "Balancing Productivity and Self-Care", image: "/assets/course-productivity.png" },
  { title: "Mastering Money Management", image: "/assets/course-money.png" },
  { title: "From Idea to Startup Success", image: "/assets/course-startup.png" },
];

export function CourseGrid() {
  return <div className="course-grid">{courses.map((course) => <CourseCard key={course.title} course={course} />)}</div>;
}
