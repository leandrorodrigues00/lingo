import { challengeOptions, challenges } from "@/database/schema";
import { cn } from "@/lib/utils";
import { ChallengeCard } from "@/components/challenge-card";

export interface ChallengeProps {
  options: Array<typeof challengeOptions.$inferSelect>;
  onSelect: (id: number) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
  type: (typeof challenges.$inferSelect)["type"];
}

export function Challenge({
  options,
  onSelect,
  selectedOption,
  disabled,
  type,
  status,
}: ChallengeProps) {
  return (
    <div
      className={cn(
        "grid gap-2",
        type === "ASSIST" && "grid-cols-1",
        type === "SELECT" &&
          "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
      )}
    >
      {options.map((option, i) => {
        return (
          <ChallengeCard
            key={option.id}
            id={option.id}
            text={option.text}
            imageSrc={option.imageSrc}
            shortCut={`${i + 1}`}
            selected={selectedOption === option.id}
            onClick={() => onSelect(option.id)}
            audioSrc={option.audioSrc}
            status={status}
            disabled={disabled}
            type={type}
          />
        );
      })}
    </div>
  );
}
