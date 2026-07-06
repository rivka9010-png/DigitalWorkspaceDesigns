import { useState } from "react";
import FeedItem, { FeedItemProps } from "./FeedItem";

const feedItems: (Omit<FeedItemProps, "active" | "onClick"> & { key: string })[] = [
  {
    key: "1",
    category: "ביקורות",
    status: "מתנהל",
    id: "1234567",
    title: "ביקורת",
    subtitle: "מ ביסר / סגן",
    meta: "יחידה",
    location: "אילון",
    date: "14.06.2026",
    time: "17:30",
  },
  {
    key: "2",
    category: "ארועים",
    status: "מתנהל",
    id: "2345678",
    title: "תנועת רכבים",
    subtitle: "כניסת רכב",
    location: "השרון",
    date: "13.06.2026",
    time: "09:15",
  },
  {
    key: "3",
    category: "הודעות",
    title: "הסלמה",
    subtitle: "מסגרת שינוי",
    meta: "נפתח בתאריך :1.05.2026",
    date: "12.06.2026",
    time: "11:45",
  },
];

export function FeedReport() {
  const [selectedKey, setSelectedKey] = useState<string | null>("1");

  return (
    <section className="w-full max-w-[420px] flex flex-col gap-3 items-start">
      <p className="m-0 font-rubik font-medium text-lg leading-6 text-[#00033d]" dir="auto">
        דוחות אחרונים
      </p>

      <div className="flex flex-col gap-[10px] items-end w-full">
        {feedItems.map(({ key, ...item }) => (
          <FeedItem
            key={key}
            {...item}
            active={selectedKey === key}
            onClick={() => setSelectedKey((prev) => (prev === key ? null : key))}
          />
        ))}
      </div>
    </section>
  );
}

export default FeedReport;
