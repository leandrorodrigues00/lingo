"use client";

import { useState } from "react";

import { challengeOptions, challenges } from "@/database/schema";
import { QuizHeader } from "@/components/quiz-header";

export interface QuizProps {
  initialLessonId: number;
  initialHearts: number;
  initialPercentage: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription: any;
}

export function Quiz({
  initialLessonId,
  initialHearts,
  initialPercentage,
  initialLessonChallenges,
  userSubscription,
}: QuizProps) {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);

  return (
    <>
      <QuizHeader
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  );
}
