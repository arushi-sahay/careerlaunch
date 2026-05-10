import { Progress } from "@/components/ui/progress";

export function ResumeScore({ score }: { score: number }) {
  let colorClass = "text-red-500";
  if (score >= 80) colorClass = "text-green-500";
  else if (score >= 50) colorClass = "text-amber-500";

  return (
    <div className="bg-white dark:bg-card p-4 rounded-xl border border-border shadow-sm flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-foreground">Resume Score</span>
        <span className={`text-sm font-bold ${colorClass}`}>{score}/100</span>
      </div>
      <Progress value={score} className="h-2" />
      <p className="text-xs text-muted-foreground mt-1">
        {score < 50
          ? "Keep going! Add more sections to improve your score."
          : score < 80
          ? "Looking good. Add some projects or achievements to boost your score."
          : "Great job! Your resume is ready to go."}
      </p>
    </div>
  );
}
