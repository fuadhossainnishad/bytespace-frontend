import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CourseCatalog } from "@/components/catalog/CourseCatalog";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = { title: "PurePearl Studio | ByteSpace" };

export default function CreatorProfilePage() {
  return <><section className="creator-hero" id="top"><div className="creator-hero-grid" aria-hidden="true" /><Header /><div className="creator-profile content-width"><div className="creator-heading"><Image src="/assets/student-avatar-one.png" width={64} height={64} alt="PurePearl Studio" /><div><h1>PurePearl Studio <span>Creator</span></h1><p>Passionate UI/UX, Web designer</p></div></div><p className="creator-bio">Welcome to the creative world of Creator’s Name! Here, you’ll discover the passion, expertise, and inspiration that drive my creative journey. Let’s explore and learn together!<br />Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p><div className="creator-stats"><span><strong>3</strong> Products</span><span><strong>12</strong> Followers</span><Link href="/login" aria-label="Sign in to follow PurePearl Studio">Follow</Link></div></div></section><main className="creator-main"><CourseCatalog creator /></main><Footer /></>;
}
