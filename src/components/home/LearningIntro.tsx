type LearningIntroProps = { variant?: "passion" | "paths" };

export function LearningIntro({ variant = "passion" }: LearningIntroProps) {
  const isPaths = variant === "paths";
  return (
    <section className={`learning-intro${isPaths ? " learning-intro--paths" : ""}`}>
      <h2>{isPaths ? "Explore Diverse Learning Paths at Bytespace" : "Discover Your Passion, Build Your Skills"}</h2>
      <p>{isPaths
        ? "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        : "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."}</p>
    </section>
  );
}
