import { CourseCatalog } from "@/components/catalog/CourseCatalog";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata = { title: "Search Courses | ByteSpace" };

export default function SearchPage() {
  return <><section className="search-hero" id="top"><div className="search-hero-grid" aria-hidden="true" /><Header /><div className="search-hero-content"><h1>Find Your Next Course</h1><form className="catalog-search" action="/search" role="search"><label><span className="sr-only">Search courses</span><span aria-hidden="true">⌕</span><input type="search" name="q" placeholder="Search" /></label><button type="submit">Courses &nbsp;⌄</button></form></div></section><main className="search-main"><CourseCatalog /></main><Footer /></>;
}
