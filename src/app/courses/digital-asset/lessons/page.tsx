import type { Metadata } from "next";
import { CoursePage } from "@/components/course/CoursePage";

export const metadata: Metadata = { title: "Course Lessons | ByteSpace" };
export default function CourseLessonsPage() { return <CoursePage active="lessons" />; }
