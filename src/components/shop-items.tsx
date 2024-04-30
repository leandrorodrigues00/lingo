"use client";

import { useTransition } from "react";
import Image from "next/image";
import { toast } from "sonner";

import { POINTS_TO_REFILL } from "@/config/docs";
import { Button } from "@/components/ui/button";
import { createStripeUrl, refillHearts } from "@/app/_actions";

interface ShopItemsProps {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

export function ShopItems({
  hearts,
  points,
  hasActiveSubscription,
}: ShopItemsProps) {
  const [pending, startTransition] = useTransition();

  const onRefilHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
      return;
    }

    startTransition(() => {
      refillHearts().catch(() => toast.error("Something went wrong"));
    });
  };

  const onUpgrade = () => {
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if (response.data) {
            window.location.href = response.data;
          }
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <ul className="w-full">
      <div className="flex w-full items-center gap-x-4 border-t-2 p-4">
        <Image src="/icons/heart.svg" alt="heart" height={60} width={60} />
        <div className="flex-1">
          <p className="text-base font-bold text-neutral-700 lg:text-xl">
            Refill hearts
          </p>
        </div>
        <Button
          onClick={onRefilHearts}
          disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}
        >
          {hearts === 5 ? (
            "full"
          ) : (
            <div className="flex items-center">
              <Image
                src="/icons/points.svg"
                alt="Points"
                height={20}
                width={20}
              />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>

      <div className="flex w-full items-center gap-x-4 border-t-2 p-4 pt-8 ">
        <Image
          src="/icons/unlimited.svg"
          alt="Unlimited"
          width={60}
          height={60}
        />
        <div className="flex-1">
          <p className="text-base font-bold text-neutral-700 lg:text-xl">
            Unlimited hears
          </p>
        </div>
        <Button onClick={onUpgrade} disabled={pending}>
          {hasActiveSubscription ? "settings" : "upgrade"}
        </Button>
      </div>
    </ul>
  );
}
