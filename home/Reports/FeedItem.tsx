import { CalendarIcon, ClockIcon, LocationIcon } from "./icons/FeedItemIcons";

export type FeedCategory = "ארועים" | "הודעות" | "ביקורות";

const CATEGORY_STYLES: Record<FeedCategory, { bg: string; border: string; text: string }> = {
  ארועים: { bg: "bg-[#f3ebfd]", border: "border-[#8b5cf6]", text: "text-[#7c3aed]" },
  הודעות: { bg: "bg-[#fdf3e0]", border: "border-[#e8c77a]", text: "text-[#8a6100]" },
  ביקורות: { bg: "bg-[#e6f4ea]", border: "border-[#a3d9b1]", text: "text-[#1b7b3a]" },
};

function StatusBadge({ label }: { label: string }) {
  return (
    <div className="bg-[#eff4ff] border border-[#c6daf6] border-solid flex items-center overflow-clip px-[10px] py-[2px] rounded-full shrink-0">
      <p className="m-0 font-rubik font-normal text-xs leading-4 tracking-[0.4px] text-[#2864c8] whitespace-nowrap" dir="auto">
        {label}
      </p>
    </div>
  );
}

function CategoryBadge({ category }: { category: FeedCategory }) {
  const styles = CATEGORY_STYLES[category];
  return (
    <div className={`${styles.bg} ${styles.border} border border-solid flex items-center overflow-clip px-[10px] py-[2px] rounded-full shrink-0`}>
      <p className={`m-0 font-rubik font-normal text-xs leading-4 tracking-[0.4px] ${styles.text} whitespace-nowrap`} dir="auto">
        {category}
      </p>
    </div>
  );
}

export type FeedItemProps = {
  category: FeedCategory;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  id?: string;
  status?: string;
  meta?: string;
  location?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function FeedItem({
  category,
  title,
  subtitle,
  date,
  time,
  id,
  status,
  meta,
  location,
  active = false,
  onClick,
  className,
}: FeedItemProps) {
  const footerColor = "text-[#4a5568]";
  const footerIconColor = active ? "text-[#2b7fff]" : "group-hover:text-[#2b7fff]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex flex-col gap-4 items-end justify-center px-4 py-2 rounded-lg w-full text-right border border-solid transition-colors ${
        active
          ? "bg-[#f0f6fd] border-[#2b7fff] shadow-[0px_2px_3px_rgba(0,0,0,0.15)]"
          : "bg-white border-[#e2e8f0] hover:border-[#2b7fff] hover:shadow-[0px_2px_3px_rgba(0,0,0,0.15)]"
      } ${className ?? ""}`}
    >
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-end w-full">
          <div className="flex items-center justify-end w-full">
            <p className="m-0 flex-1 min-w-0 font-rubik font-medium text-base leading-6 text-[#00033d] text-right" dir="auto">
              {id ? `${title} | ${id}` : title}
            </p>
            <div className="flex gap-1 items-center shrink-0">
              {status && <StatusBadge label={status} />}
              <CategoryBadge category={category} />
            </div>
          </div>
          <p className="m-0 font-rubik font-medium text-sm leading-5 text-[#4a5568] text-right w-full" dir="auto">
            {subtitle}
          </p>
        </div>
        <p
          className={`m-0 font-rubik font-light text-sm leading-5 text-right w-full ${meta ? "text-[#6f7a8a]" : "text-transparent"}`}
          dir="auto"
        >
          {meta || " "}
        </p>
      </div>
      <div className={`flex gap-[14px] items-center justify-start overflow-clip w-full transition-colors ${footerColor}`}>
        {location && (
          <div className="flex gap-[3px] items-center shrink-0">
            <LocationIcon className={`size-[14px] shrink-0 ${footerIconColor}`} />
            <p className="m-0 font-rubik font-normal text-[10px] leading-normal whitespace-nowrap" dir="auto">
              {location}
            </p>
          </div>
        )}
        <div className="flex gap-[3px] items-center shrink-0">
          <CalendarIcon className={`size-[14px] shrink-0 ${footerIconColor}`} />
          <p className="m-0 font-rubik font-normal text-[10px] leading-normal whitespace-nowrap">{date}</p>
        </div>
        <div className="flex gap-[3px] items-center shrink-0">
          <ClockIcon className={`size-[14px] shrink-0 ${footerIconColor}`} />
          <p className="m-0 font-normal text-[10px] leading-normal whitespace-nowrap">{time}</p>
        </div>
      </div>
    </button>
  );
}
