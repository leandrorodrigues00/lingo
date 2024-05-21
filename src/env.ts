import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().min(1),
    DATABASE_URL: z.string().url(),
    STRIPE_API_KEY: z.string().min(1),
    STRIPE_WEBHOOK_SECRET: z.string().min(1),
  },

  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_TEST_EMAIL: z.string().min(1),
    NEXT_PUBLIC_CLERK_TEST_PASSWORD: z.string().min(1),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_TEST_EMAIL: process.env.NEXT_PUBLIC_CLERK_TEST_EMAIL,
    NEXT_PUBLIC_CLERK_TEST_PASSWORD:
      process.env.NEXT_PUBLIC_CLERK_TEST_PASSWORD,
  },
});
