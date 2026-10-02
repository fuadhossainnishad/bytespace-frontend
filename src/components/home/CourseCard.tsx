export type Course = { title: string; image: string };

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <div className="course-image">
        <img src={course.image} alt="" />
        <div className="course-meta"><span>17 Lessons</span><span>2 hours 16 mins</span><span>59 Comments</span></div>
      </div>
      <div className="course-card-content">
        <div className="course-title-row">
          <div><h3>{course.title}</h3><p>by <a href="#creators">purepearl studio</a></p></div>
          <span className="course-rating">4.5 <b>★</b></span>
        </div>
        <div className="course-details">
          <span className="level-pill"><span aria-hidden="true">▮</span> Beginner</span>
          <div className="avatar-stack course-avatars" aria-label="26 or more students">
            {[1, 2, 3, 4].map((avatar) => <img key={avatar} src={`/assets/student-avatar-${["one", "two", "three", "four"][avatar - 1]}.png`} alt="" />)}<span>26+</span>
          </div>
        </div>
        <p className="course-price"><strong>$25</strong> /lifetime</p>
      </div>
    </article>
  );
}
