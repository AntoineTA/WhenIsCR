"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [nextShowDate, setNextShowDate] = useState<Date | null>(null);

  useEffect(() => {
    const getNextShowDate = () => {
      const showDayUTC = 5; // Friday
      const showHourUTC = 3; // 3am UTC

      const now = new Date();
      const daysUntilNextShow = (showDayUTC - now.getUTCDay() + 7) % 7;

      const nextShowDate = new Date(now);
      nextShowDate.setUTCDate(now.getUTCDate() + daysUntilNextShow);
      nextShowDate.setUTCHours(showHourUTC, 0, 0, 0);

      return nextShowDate;
    };

    setNextShowDate(getNextShowDate());
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h2>Next show is on</h2>
          <p>{nextShowDate?.toISOString()}</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
