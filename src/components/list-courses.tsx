"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { courses, userProgress } from "@/database/schema";
import { CourseCard } from "@/components/course-card";
import { upsertUserProgress } from "@/app/_actions";

import { toast } from "sonner";

export interface ListCoursesProps {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
}

export function ListCourses({ activeCourseId, courses }: ListCoursesProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function onClick(id: number) {
    if (pending) return;

    if (id === activeCourseId) {
      return router.push("/learn");
    }

    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Something went wrong."));
    });
  }
  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            imageSrc={course.imageSrc}
            onClick={onClick}
            disabled={pending}
            active={course.id === activeCourseId}
          />
        );
      })}
    </div>
  );
}
