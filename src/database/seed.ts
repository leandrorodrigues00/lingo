import "dotenv/config";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/database/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      { id: 1, title: "Spanish", imageSrc: "./icons/es.svg" },
      { id: 2, title: "Italian", imageSrc: "./icons/it.svg" },
      { id: 3, title: "French", imageSrc: "./icons/fr.svg" },
      { id: 4, title: "Croatian", imageSrc: "./icons/hr.svg" },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
