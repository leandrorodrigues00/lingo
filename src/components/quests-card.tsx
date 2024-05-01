import Image from "next/image";
import Link from "next/link";

import { quests } from "@/config/quests";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface QuestsCardProps {
  points: number;
}

export function QuestsCard({ points }: QuestsCardProps) {
  return (
    <div className="space-y-4 rounded-xl border-2 p-4">
      <div className="flex w-full items-center justify-between space-y-2">
        <h3 className="text-lg font-bold">Quests</h3>
        <Link href="/quests">
          <Button size="sm" variant="primaryOutline">
            View all
          </Button>
        </Link>
      </div>
      <ul>
        {quests.map((quest) => {
          const progress = (points / quest.value) * 100;

          return (
            <div
              className="flex w-full items-center gap-x-3 border-t-2 p-4"
              key={quest.title}
            >
              <Image
                src="/icons/points.svg"
                alt="Points"
                width={40}
                height={40}
              />
              <div className="flex w-full flex-col gap-y-2">
                <p className="text-sm font-bold text-neutral-700">
                  {quest.title}
                </p>
                <Progress className="h-2" value={progress} />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
