import { Button } from "@/components/ui/Button";

const benefits = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];
const stats = [["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]];

export function GrowthSection() {
  return (
    <section className="growth-section" id="creators">
      <div className="growth-top content-width">
        <div className="growth-copy">
          <h2>Your Path to Professional Growth Starts Here!</h2>
          <p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
          <dl className="growth-stats">{stats.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}</dl>
        </div>
        <div className="growth-art growth-art--top" aria-hidden="true">
          <div className="mini-course"><img src="/assets/course-figma.png" alt="" /><b>Learn Figma from Basic</b><small>by purepearl studio</small><span>Beginner</span><strong>$25</strong></div>
          <img className="growth-person" src="/assets/hero-student.png" alt="" />
          <div className="progress-float growth-progress"><span>Learning Progress</span><strong>55%</strong><i><b /></i></div>
        </div>
      </div>
      <div className="growth-bottom content-width">
        <div className="growth-art growth-art--bottom" aria-hidden="true">
          <div className="revenue-card"><span>Total Revenue</span><strong>$120.29</strong><i /></div>
          <img src="/assets/growth-woman.png" alt="" />
          <div className="students-float growth-students"><strong>Happy Students</strong><span className="rating-small">4.5 (240) <b>★</b></span><div className="avatar-stack">{[1, 2, 3, 4].map((avatar) => <img key={avatar} src={`/assets/student-avatar-${["one", "two", "three", "four"][avatar - 1]}.png`} alt="" />)}<span>2K+</span></div></div>
        </div>
        <div className="growth-copy growth-copy--creator">
          <h2>Create &amp; Manage Courses Easily.</h2>
          <p><strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul>{benefits.map((benefit) => <li key={benefit}><span aria-hidden="true">✓</span>{benefit}</li>)}</ul>
          <Button href="#creator-cta" className="growth-cta">Become a Creator</Button>
        </div>
      </div>
    </section>
  );
}
