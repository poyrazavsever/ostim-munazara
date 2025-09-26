"use client";
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { tr } from "date-fns/locale/tr";

const locales = {
  tr: tr,
};
const turkishMonths = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

function formatWithTurkishMonths(date: Date, formatStr: string, options: any) {
  if (formatStr === "MMMM yyyy") {
    const month = turkishMonths[date.getMonth()];
    return `${month} ${date.getFullYear()}`;
  }
  return format(date, formatStr, { ...options, locale: tr });
}

const localizer = dateFnsLocalizer({
  format: formatWithTurkishMonths,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const events = [
  {
    title: "Stand Günü",
    start: new Date(2025, 8, 23, 10, 0),
    end: new Date(2025, 8, 23, 17, 0),
    allDay: false,
    desc: "Tanıtım standı açık.",
  },
  {
    title: "Stand Günü",
    start: new Date(2025, 8, 24, 10, 0),
    end: new Date(2025, 8, 24, 17, 0),
    allDay: false,
    desc: "Tanıtım standı açık.",
  },
  {
    title: "Stand Günü",
    start: new Date(2025, 8, 25, 10, 0),
    end: new Date(2025, 8, 25, 17, 0),
    allDay: false,
    desc: "Tanıtım standı açık.",
  },
  {
    title: "Stand Günü",
    start: new Date(2025, 8, 26, 10, 0),
    end: new Date(2025, 8, 26, 17, 0),
    allDay: false,
    desc: "Tanıtım standı açık.",
  },
  {
    title: "Tanışma Toplantısı",
    start: new Date(2025, 8, 30, 16, 0),
    end: new Date(2025, 8, 30, 17, 0),
    allDay: false,
    desc: "Tanışma toplantısı.",
  },
  {
    title: "Parlamenter Münazara 101",
    start: new Date(2025, 9, 14, 16, 0),
    end: new Date(2025, 9, 14, 17, 0),
    allDay: false,
    desc: "Eğitim ve tanışma etkinliği.",
  },
  {
    title: "Parlamenter Münazara 101 - 2",
    start: new Date(2025, 9, 28, 16, 0),
    end: new Date(2025, 9, 28, 17, 0),
    allDay: false,
    desc: "İkinci eğitim oturumu.",
  },
];

const Takvim = () => {
  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 shadow">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        messages={{
          next: "İleri",
          previous: "Geri",
          today: "Bugün",
          month: "Ay",
          date: "Tarih",
          time: "Saat",
          event: "Etkinlik",
          showMore: (total: number) => `+${total} daha`,
        }}
        popup
        views={["month"]}
        eventPropGetter={(event: { title: string }) => {
          if (event.title.includes("Stand")) {
            return {
              style: {
                backgroundColor: "#e0e7ff",
                color: "#3730a3",
                borderRadius: "8px",
                border: "1px solid #6366f1",
              },
            };
          }
          return {
            style: {
              backgroundColor: "#fef9c3",
              color: "#92400e",
              borderRadius: "8px",
              border: "1px solid #f59e42",
            },
          };
        }}
      />
    </div>
  );
};

export default Takvim;
