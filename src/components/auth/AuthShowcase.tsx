import { CourseCard, type Course } from "@/components/home/CourseCard";

const showcaseCourses: Course[] = [
  { title: "Build Digital Asset", image: "/assets/course-digital-asset.png" },
  { title: "the Power of Big Data", image: "/assets/course-big-data.png" },
];

const avatarNames = ["one", "two", "three", "four"] as const;

export function AuthShowcase() {
  return (
    <div className="auth-showcase" aria-hidden="true">
      <div className="auth-card auth-card--rear">
        <CourseCard course={showcaseCourses[0]} decorative />
      </div>
      <div className="auth-card auth-card--front">
        <CourseCard course={showcaseCourses[1]} decorative />
      </div>
      <img className="auth-ornament auth-ornament--ring" src="/assets/hero-cone-one.png" alt="" />
      <img className="auth-ornament auth-ornament--cone" src="/assets/hero-cone-three.png" alt="" />
      <img className="auth-ornament auth-ornament--coil" src="/assets/hero-art-one.png" alt="" />
      <div className="auth-students">
        <div>
          <strong>Happy Students</strong>
          <span className="auth-student-rating">4.5 (240) <b>★</b></span>
        </div>
        <div className="auth-student-avatars">
          {avatarNames.map((avatar) => (
            <img key={avatar} src={`/assets/student-avatar-${avatar}.png`} alt="" />
          ))}
          <span>2K+</span>
        </div>
      </div>
    </div>
  );
}
