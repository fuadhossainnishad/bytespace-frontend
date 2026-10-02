import { SearchBar } from "@/components/ui/SearchBar";

const studentAvatars = [1, 2, 3, 4];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true" />
      <img className="hero-ornament hero-ornament--lime-loop" src="/assets/hero-art-two.png" alt="" />
      <img className="hero-ornament hero-ornament--white-loop" src="/assets/hero-art-one.png" alt="" />
      <img className="hero-ornament hero-ornament--white-ring" src="/assets/hero-cone-one.png" alt="" />
      <img className="hero-ornament hero-ornament--lime-cone" src="/assets/hero-cone-three.png" alt="" />
      <img className="hero-ornament hero-ornament--white-cone" src="/assets/hero-cone-three.png" alt="" />
      <img className="hero-ornament hero-ornament--bar" src="/assets/hero-art-one.png" alt="" />
      <div className="hero-copy">
        <h1 id="hero-heading">Get Access to Hundreds Courses Available</h1>
        <p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        <SearchBar />
      </div>
      <div className="hero-visual" aria-label="A student learning online">
        <img className="hero-student" src="/assets/hero-student.png" alt="Student using a laptop while learning" />
        <div className="floating-card course-float">
          <strong>UI/UX Design</strong><span>200 Courses&nbsp; · &nbsp;1000+ Students</span>
        </div>
        <div className="floating-card progress-float">
          <span>Learning Progress</span><strong>55%</strong><i><b /></i>
        </div>
        <div className="floating-card students-float">
          <strong>Happy Students</strong><span className="rating-small">4.5 (240) <b>★</b></span>
          <div className="avatar-stack">
            {studentAvatars.map((avatar) => <img key={avatar} src={`/assets/student-avatar-${["one", "two", "three", "four"][avatar - 1]}.png`} alt="" />)}
            <span>2K+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
