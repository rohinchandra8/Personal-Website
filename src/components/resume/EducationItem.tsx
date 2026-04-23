import type { Education } from "@/types";

export default function EducationItem({ item }: { item: Education }) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900">{item.school}</h3>
          <p className="text-sm text-gray-500">
            {item.degree} {item.major}
            {item.notes && ` · ${item.notes}`}
          </p>
        </div>
        <span className="text-sm text-gray-400 whitespace-nowrap mt-1 sm:mt-0">
          Class of {item.graduationYear}
        </span>
      </div>
    </div>
  );
}
