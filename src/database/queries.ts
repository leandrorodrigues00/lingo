import { cache } from "react";

import db from "@/database/drizzle";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});
