import { useCallback } from "react";
import Image from "next/image";
import { useAudio, useKey } from "react-use";

import { challenges } from "@/database/schema";
import { cn } from "@/lib/utils";

export interface ChallengeCardProps {
  id: number;
  imageSrc: string | null;
  audioSrc: string | null;
  text: string;
  shortCut: string;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
  status?: "correct" | "wrong" | "none";
  type: (typeof challenges.$inferSelect)["type"];
}

export function ChallengeCard({
  id,
  imageSrc,
  audioSrc,
  text,
  shortCut,
  selected,
  onClick,
  status,
  disabled,
  type,
}: ChallengeCardProps) {
  const [audio, _, controls] = useAudio({ src: audioSrc || "" });

  const handleClick = useCallback(() => {
    if (disabled) return;

    controls.play();
    onClick();
  }, [disabled, onClick, controls]);

  useKey(shortCut, handleClick, {}, [handleClick]);

  return (
    <div
      onClick={handleClick}
      className={cn(
        "h-full cursor-pointer rounded-xl border-2 border-b-4 p-4 hover:bg-black/5 active:border-b-2 lg:p-6",
        selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
        selected &&
          status === "correct" &&
          "border-green-300 bg-green-100 hover:bg-green-100",
        selected &&
          status === "wrong" &&
          "border-rose-300 bg-rose-100 hover:bg-rose-100",
        disabled && "pointer-events-none hover:bg-white",
        type === "ASSIST" && "w-full lg:p-3",
      )}
    >
      {audio}
      {imageSrc && (
        <div className="relative mb-4 aspect-square max-h-[80px] w-full lg:max-h-[150px]">
          <Image src={imageSrc} fill alt={text} />
        </div>
      )}

      <div
        className={cn(
          "flex items-center justify-between",
          type === "ASSIST" && "flex-row-reverse",
        )}
      >
        {type === "ASSIST" && <div />}
        <p
          className={cn(
            "text-sm text-neutral-600 lg:text-base",
            selected && "text-sky-500",
            selected && status === "correct" && "text-green-500",
            selected && status === "wrong" && " text-rose-500",
          )}
        >
          {text}
        </p>

        <div
          className={cn(
            "flex h-[20px] w-[20px] items-center justify-center rounded-lg border-2 text-xs font-semibold text-neutral-400 lg:h-[30px] lg:w-[30px] lg:text-[15px]",
            selected && "border-sky-300 text-sky-500",
            selected &&
              status === "correct" &&
              "border-green-500 text-green-500",
            selected && status === "wrong" && "border-rose-500 text-rose-500",
          )}
        >
          {shortCut}
        </div>
      </div>
    </div>
  );
}
