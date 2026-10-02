import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function NotFound() {
  return <><section className="not-found-hero" id="top"><div className="not-found-grid" aria-hidden="true" /><Header /><main className="not-found-content"><div className="not-found-number" aria-hidden="true">404</div><h1>The page you are looking for doesn’t exist</h1><p>Try to use a correct url or go back to homepage to start again</p><Button href="/" className="not-found-button">Back to Home</Button></main></section><Footer /></>;
}
