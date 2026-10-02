import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";

type CourseTab = "about" | "lessons" | "reviews";

const tabLinks: { label: string; key: CourseTab; href: string }[] = [
  { label: "About", key: "about", href: "/courses/digital-asset" },
  { label: "Lessons", key: "lessons", href: "/courses/digital-asset/lessons" },
  { label: "Reviews", key: "reviews", href: "/courses/digital-asset/reviews" },
];

const keyPoints = [
  "Foundational Concepts", "Design Principles Mastery", "Advanced Techniques in Digital Creation", "Project Showcase and Critique",
  "Optimizing for Various Platforms", "Digital Asset Management Best Practices", "Monetization Strategies", "Capstone Project: Building Your Portfolio",
];

const modules = [
  ["Module 1: Introduction to Digital Assets", "Lay the groundwork with lessons like ‘Understanding Digital Elements’ and ‘Navigating Design Software Tools.’ Dive into the essentials of digital asset creation."],
  ["Module 2: Design Principles for Impact", "Master the principles that drive impactful designs with lessons such as ‘Color Theory in Digital Design’ and ‘Typography Essentials.’ Elevate your visual communication skills."],
  ["Module 4: User-Centric Design Strategies", "Understand ‘Design Thinking in Digital Creation’ and delve into ‘User Experience (UX) Essentials.’ Craft digital assets with a focus on user-centric design."],
  ["Module 5: Interactive Media and Engagement", "Engage your audience with lessons like ‘Creating Interactive Presentations’ and ‘Integrating Multimedia Elements.’ Master the art of creating immersive digital experiences."],
  ["Module 6: Project Showcase and Critique", "Perfect your presentation skills with ‘Effective Presentation Techniques’ and embrace collaboration with ‘Peer Critique and Collaboration.’ Showcase your work with confidence."],
  ["Module 7: Optimizing Digital Assets for Various Platforms", "Adapt your digital creations for ‘Mobile Platforms’ and optimize for ‘Social Media.’ Ensure widespread accessibility and engagement across diverse digital landscapes."],
];

const reviews = [
  ["PurePearl Studio", "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!", "student-avatar-one.png"],
  ["Albert Flores", "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!", "student-avatar-two.png"],
  ["Cody Fisher", "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.", "student-avatar-four.png"],
  ["Brooklyn Simmons", "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.", "student-avatar-three.png"],
];

function PurchaseCard() {
  return (
    <aside className="purchase-card" aria-label="Course enrollment">
      <h2>112 Lessons (24 hours)</h2>
      <ol className="preview-lessons">
        <li><span>Introduction to Digital Assets</span><time>12 mins</time></li>
        <li><span>Design Principles for Impact</span><time>21 mins</time></li>
        <li><span>Advanced Techniques in Digital Creation</span><time>16 mins</time></li>
      </ol>
      <Link className="more-videos" href="/courses/digital-asset/lessons">99 more videos</Link>
      <p className="purchase-copy">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <p className="purchase-price"><strong>$25</strong> /lifetime</p>
      <Link className="enroll-button" href="/register">Enroll Now</Link>
      <h3>This course include</h3>
      <ul className="included-list"><li>Learning Resources</li><li>Quality Lesson Videos</li><li>Certificate of Completion</li><li>Private Consultation</li></ul>
      <div className="purchase-creator"><Image src="/assets/student-avatar-one.png" width={64} height={64} alt="" /><div><strong>PurePearl Studio</strong><span>Professional Creator</span></div></div>
      <p className="purchase-copy">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <Link className="creator-profile-link" href="/creators/purepearl-studio">See Full Profile</Link>
    </aside>
  );
}

function CourseHero() {
  return (
    <section className="course-hero" id="top">
      <div className="course-hero-grid" aria-hidden="true" />
      <Header />
      <div className="course-hero-content">
        <div className="course-heading">
          <h1>Build Digital Asset: A Comprehensive Guide</h1>
          <p className="course-subtitle">Unlock the Power of Digital Creation with Expert Guidance</p>
          <Link className="course-byline" href="/creators/purepearl-studio">by purepearl studio</Link>
          <div className="course-badges"><span>▥ &nbsp;Intermediate</span><Link href="/courses/digital-asset/reviews">★ &nbsp;4.8 (172 reviews)</Link><span>♧ &nbsp;199 Students</span></div>
        </div>
        <span className="course-share" aria-hidden="true">↗ &nbsp;Share</span>
        <div className="course-video" role="img" aria-label="Preview video: instructor presenting the course">
          <Image src="/assets/course-instructor.jpg" alt="Course instructor wearing a purple sweater" fill sizes="(max-width: 767px) 100vw, 720px" />
          <span className="course-play" aria-hidden="true"><Image src="/assets/course-play.svg" width={72} height={72} alt="" /></span>
        </div>
        <PurchaseCard />
      </div>
    </section>
  );
}

function CourseTabs({ active }: { active: CourseTab }) {
  return <nav className="course-tabs" aria-label="Course information">{tabLinks.map((tab) => <Link className={tab.key === active ? "is-active" : ""} href={tab.href} key={tab.key} aria-current={tab.key === active ? "page" : undefined}>{tab.label}</Link>)}</nav>;
}

function AboutContent() {
  return (
    <div className="course-panel-content about-content">
      <h2>Description</h2>
      <p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.</p>
      <p>In the initial modules, you’ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.</p>
      <p>As you progress through the course, you’ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.</p>
      <h2>Sneak Peak</h2>
      <div className="sneak-peek">{["course-figma.png", "course-digital-asset.png", "course-money.png", "course-big-data.png"].map((image) => <Image src={`/assets/${image}`} width={698} height={465} alt="Course lesson preview" key={image} />)}</div>
      <h2>Key Points</h2>
      <ul className="key-points">{keyPoints.map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>
    </div>
  );
}

function LessonsContent() {
  return (
    <div className="course-panel-content lessons-content">
      <h2>Explore the Modules</h2>
      <p>Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
      <h2>Lesson List</h2>
      <ul className="module-list">{modules.map(([title, description]) => <li key={title}><span className="module-icon" aria-hidden="true">▣</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ul>
      <h2>Lesson Content</h2>
      <p>Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>
      <h2>Lesson Progress Tracking</h2>
      <p>Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
      <div className="learning-progress"><span>Learning Progress</span><strong>55%</strong><div><i /></div></div>
    </div>
  );
}

function ReviewsContent() {
  return (
    <div className="course-panel-content reviews-content">
      <h2>What Learners Are Saying</h2>
      <p>Discover what our learners have to say about their experience with ‘Build Digital Assets: A Comprehensive Guide.’ Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>
      <div className="rating-summary"><div className="rating-overall"><span>Rating</span><strong>4.7</strong></div><div className="rating-bars">{[120, 92, 20, 12, 8].map((count, index) => <div key={index}><span>{5 - index} ★</span><i><b style={{ width: `${Math.max(8, count / 1.2)}%` }} /></i><small>{count}</small></div>)}</div></div>
      <h2>Individual Reviews:</h2>
      <nav className="review-filters" aria-label="Filter reviews by rating">{["All rating", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"].map((label, index) => <span className={index === 0 ? "is-active" : ""} key={label}>{label}</span>)}</nav>
      <div className="review-list">{reviews.map(([name, copy, image]) => <article className="review-card" key={name}><div className="review-author"><Image src={`/assets/${image}`} width={64} height={64} alt="" /><div><h3>{name}</h3><span>UI/UX Designer</span></div><time> a year ago</time></div><p className="review-stars" aria-label="5 out of 5 stars">★★★★★</p><p className="review-copy">“{copy}”</p></article>)}</div>
    </div>
  );
}

export function CoursePage({ active }: { active: CourseTab }) {
  return <><CourseHero /><main className="course-body" id="courses"><div className="course-body-inner"><CourseTabs active={active} />{active === "about" ? <AboutContent /> : active === "lessons" ? <LessonsContent /> : <ReviewsContent />}</div></main><Footer /></>;
}
