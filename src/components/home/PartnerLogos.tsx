const partners = ["one", "two", "three", "four", "five"];

export function PartnerLogos() {
  return (
    <section className="partner-band" aria-label="Our partners">
      <div className="partner-logos">
        {partners.map((partner, index) => <img key={partner} src={`/assets/partner-${partner}.svg`} alt={`Partner ${index + 1}`} />)}
      </div>
    </section>
  );
}
