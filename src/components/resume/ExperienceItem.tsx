import Badge from "@/components/ui/Badge";
import type { WorkExperience } from "@/types";

export default function ExperienceItem({ item }: { item: WorkExperience }) {
  return (
    <div className="py-6 border-b border-gray-100 last:border-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between mb-2">
        <div>
          <h3 className="text-base font-semibold text-gray-900">{item.company}</h3>
          <p className="text-sm text-gray-500">
            {item.role} &middot; {item.location}
          </p>
        </div>
        <span className="text-sm text-gray-400 whitespace-nowrap mt-1 sm:mt-0">
          {item.startDate} – {item.endDate}
        </span>
      </div>
      <ul className="mt-3 space-y-1.5">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="text-sm text-gray-700 flex gap-2">
            <span className="text-gray-400 mt-0.5 shrink-0">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {item.skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.skills.map((skill) => (
            <Badge key={skill} variant="muted">
              {skill}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
