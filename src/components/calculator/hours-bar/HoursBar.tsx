import { useEffect, useState } from "react";
import Worked from "./_components/Worked";
import Remaining from "./_components/Remaining";

interface IProps {
  isSet: boolean;
  goal: Date | undefined;
  storedTimes: {
    timeData: {
      hours: number;
      minutes: number;
      isBreak: boolean;
    };
    timeString: string;
  }[];
}

function HoursBar({ isSet, goal, storedTimes }: IProps) {
  const [hoursData, setHoursData] = useState<any>();

  useEffect(() => {
    if (!storedTimes.length || !goal || !isSet) return;
    const sumHours = storedTimes.reduce(
      (total, time) =>
        total + (time.timeData.isBreak ? 0 : time.timeData.hours),
      0
    );
    const sumMinutes = storedTimes.reduce(
      (total, time) =>
        total + (time.timeData.isBreak ? 0 : time.timeData.minutes),
      0
    );

    const totalHours = Math.floor(sumMinutes / 60) + sumHours;
    const totalMinutes = sumMinutes % 60;

    let remainingHours = goal.getHours() - totalHours;
    let remainingMinutes = goal.getMinutes();
    if (remainingMinutes - totalMinutes < 0) {
      remainingHours -= 1;
      remainingMinutes = remainingMinutes + (60 - totalMinutes);
    } else remainingMinutes -= totalMinutes;

    const data = {
      worked: {
        hours: totalHours,
        minutes: totalMinutes,
      },
      remaining: {
        hours: remainingHours,
        minutes: remainingMinutes,
      },
    };

    setHoursData(data);
  }, [storedTimes]);

  return (
    <div className="my-6 w-full border bg-muted py-1 px-2 border-lightGray rounded-md flex items-center justify-between">
      <Worked goal={goal} isSet={isSet} worked={hoursData?.worked} />
      <Remaining isSet={isSet} remaining={hoursData?.remaining} />
    </div>
  );
}

export default HoursBar;
