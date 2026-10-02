const testimonials = [
  { name: "Sarah M.", role: "Enthusiastic Learner", image: "/assets/testimonial-sarah.png", quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  { name: "James L.", role: "Lifelong Learner", image: "/assets/testimonial-james.png", quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { name: "Alex B.", role: "Inspired Creator", image: "/assets/testimonial-alex.png", quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." },
];

export function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-heading content-width">
        <h2>Discover What Our Community Is Saying</h2>
        <p>At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
      </div>
      <div className="testimonial-grid content-width">
        {testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.name}>
          <img src={testimonial.image} alt="" />
          <h3>{testimonial.name}</h3><p className="testimonial-role">{testimonial.role}</p>
          <blockquote>“{testimonial.quote}”</blockquote>
        </article>)}
      </div>
    </section>
  );
}
