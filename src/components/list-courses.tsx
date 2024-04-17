"use client";

import { courses } from "@/database/schema";
import { CourseCard } from "@/components/Course-card";

export interface ListCoursesProps {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
}

export function ListCourses({ activeCourseId, courses }: ListCoursesProps) {
  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            imageSrc={course.imageSrc}
            onClick={() => {}}
            disabled={false}
            active={course.id === activeCourseId}
          />
        );
      })}
    </div>
  );
}
