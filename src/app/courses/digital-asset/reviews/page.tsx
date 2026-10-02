import type { Metadata } from "next";
import { CoursePage } from "@/components/course/CoursePage";

export const metadata: Metadata = { title: "Course Reviews | ByteSpace" };
export default function CourseReviewsPage() { return <CoursePage active="reviews" />; }
