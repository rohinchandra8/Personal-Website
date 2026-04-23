import { cn } from "@/lib/utils";

const variants = {
  default: "bg-white/10 text-white border border-white/20",
  muted: "bg-white/5 text-zinc-400 border border-white/10",
  success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
  warning: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
