import { Button } from "@/components/ui/Button";

export function CreatorCta() {
  return (
    <section className="creator-cta" id="creator-cta">
      <div className="cta-grid" aria-hidden="true" />
      <img className="cta-art cta-art--left" src="/assets/hero-art-two.png" alt="" />
      <img className="cta-art cta-art--right" src="/assets/hero-cone-three.png" alt="" />
      <img className="cta-art cta-art--ring" src="/assets/hero-cone-one.png" alt="" />
      <img className="cta-art cta-art--lower" src="/assets/hero-art-one.png" alt="" />
      <div className="creator-cta-content">
        <h2>Unlock Your Potential as a Creator with ByteSpace</h2>
        <p>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <Button href="/register">Join as Creator</Button>
      </div>
    </section>
  );
}
