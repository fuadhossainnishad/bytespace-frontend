import { SearchBar } from "@/components/ui/SearchBar";

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
            <a className="brand" href="#top"><img src="/assets/bytespace-symbol.svg" alt="" /><span>ByteSpace</span></a>
            <p>Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <SearchBar compact />
            <small>By subscribing, you agree to our <a href="#privacy">Privacy Policy</a> and consent to receive updates from our company.</small>
          </div>
          <div className="footer-links">
            <div className="footer-link-group"><h2>Browse</h2><div>{browseColumns.map((column, index) => <ul key={index}>{column.map((label) => <li key={label}><a href="#courses">{label}</a></li>)}</ul>)}</div></div>
            <div className="footer-link-group"><h2>Platform</h2><ul>{platformLinks.map((label) => <li key={label}><a href={label === "Become a Creator" ? "#creator-cta" : "#top"}>{label}</a></li>)}</ul></div>
          </div>
        </div>
        <div className="footer-legal"><p>@ 2023 ByteSpace. All rights reserved.</p><nav aria-label="Legal"><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a><a href="#cookies">Cookies Settings</a></nav></div>
      </div>
    </footer>
  );
}
