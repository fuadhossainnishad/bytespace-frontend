import { SearchBar } from "@/components/ui/SearchBar";
import Link from "next/link";

const browseColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
];
const platformLinks = ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content content-width">
        <div className="footer-main">
          <div className="newsletter">
            <Link className="brand" href="/"><img src="/assets/bytespace-symbol.svg" alt="" /><span>ByteSpace</span></Link>
            <p>Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <SearchBar compact />
            <small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small>
          </div>
          <div className="footer-links">
            <div className="footer-link-group"><h2>Browse</h2><div>{browseColumns.map((column, index) => <ul key={index}>{column.map((label) => <li key={label}><Link href="/search">{label}</Link></li>)}</ul>)}</div></div>
            <div className="footer-link-group"><h2>Platform</h2><ul>{platformLinks.map((label) => <li key={label}>{label === "Become a Creator" ? <Link href="/#creator-cta">{label}</Link> : <span>{label}</span>}</li>)}</ul></div>
          </div>
        </div>
        <div className="footer-legal"><p>@ 2023 ByteSpace. All rights reserved.</p><nav aria-label="Legal"><span>Privacy Policy</span><span>Terms of Service</span><span>Cookies Settings</span></nav></div>
      </div>
    </footer>
  );
}
