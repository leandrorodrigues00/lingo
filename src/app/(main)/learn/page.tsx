import { FeedHeader } from "@/components/feed-header";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";

export default function LearnPage() {
  return (
    // TODO: try to remove flex-row-reverse later
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "./icons/es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <FeedHeader title="Spanish" />
      </FeedWrapper>
    </div>
  );
}
