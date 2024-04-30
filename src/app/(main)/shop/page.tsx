import Image from "next/image";
import { redirect } from "next/navigation";

import { getUserProgress } from "@/database/queries";
import { FeedWrapper } from "@/components/feed-wrapper";
import { ShopItems } from "@/components/shop-items";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";

export default async function ShopPage() {
  const UserProgressData = getUserProgress();
  const [userProgress] = await Promise.all([UserProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <Image src="/icons/shop.svg" alt="Shop" height={90} width={90} />
          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Shop
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            Spend your points on cool stuff.
          </p>
          <ShopItems
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={false} // TODO: Add subscription
          />
        </div>
      </FeedWrapper>
    </div>
  );
}
