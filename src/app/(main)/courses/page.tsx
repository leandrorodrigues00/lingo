import { getCourses, getUserProgress } from "@/database/queries";
import { ListCourses } from "@/components/list-courses";

export default async function CoursesPage() {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <ListCourses
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
}
