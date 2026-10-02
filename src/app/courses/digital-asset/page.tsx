import type { Metadata } from "next";
import { CoursePage } from "@/components/course/CoursePage";

export const metadata: Metadata = { title: "Build Digital Asset | ByteSpace" };
export default function CourseDetailsPage() { return <CoursePage active="about" />; }
