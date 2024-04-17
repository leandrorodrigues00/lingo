import Image from "next/image";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export interface CourseCardProps {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
}

export function CourseCard({
  title,
  id,
  imageSrc,
  disabled,
  onClick,
  active,
}: CourseCardProps) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[217px] min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-b-4 p-3 pb-6 hover:bg-black/5 active:border-b-2",
        disabled && "pointer-events-none opacity-50",
      )}
      onClick={() => onClick(id)}
    >
      <div className="min-[24px] flex w-full items-center justify-end">
        {active && (
          <div className="flex items-center justify-center rounded-md bg-green-600 p-1.5">
            <Check className="h-4 w-4 stroke-[4] text-white" />
          </div>
        )}
      </div>

      <Image
        className="rounded-lg border object-cover drop-shadow-md"
        src={imageSrc}
        alt={title}
        height={70}
        width={93.33}
      />

      <p className="mt-3 text-center font-bold text-neutral-700"> {title}</p>
    </div>
  );
}
