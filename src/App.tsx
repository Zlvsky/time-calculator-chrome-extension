import { useState } from "react";
import SetTime from "./components/calculator/set-time/SetTime";
import HoursBar from "./components/calculator/hours-bar/HoursBar";
import WorkingTo from "./components/calculator/working-to/WorkingTo";
import BreakTo from "./components/calculator/break-to/BreakTo";
import ListedHours from "./components/calculator/listed-hours/ListedHours";
import Footer from "./components/calculator/footer/Footer";

function App() {
  const [startTime, setStartTime] = useState<Date>();
  const [goal, setGoal] = useState<Date>();
  const [isSet, setIsSet] = useState<boolean>(false);
  const [lastTimeSet, setLastTimeSet] = useState<Date>();

  const [workingTo, setWorkingTo] = useState<Date>();
  const [breakTo, setBreakTo] = useState<Date>();
  const [storedTimes, setStoredTimes] = useState<any>([]);

  const handleSet = () => {
    setIsSet(true);
    setLastTimeSet(startTime);
  };

  // STORE STRING IN 00:00 - 00:00 (3H 30M) FORMAT
  const formatTimeData = (
    startTime: Date,
    workingTo: Date,
    timeData: { hours: number; minutes: number }
  ) => {
    const formattedTime = `${startTime
      ?.toLocaleTimeString()
      .slice(0, 5)} - ${workingTo?.toLocaleTimeString().slice(0, 5)} (${
      timeData.hours
    }h${timeData.minutes}m)`;
    return formattedTime;
  };

  // CALCULATE HOURS AND MINUTES BETWEEN lastTimeSet AND workingTo AND PASS IT TO FLOAT
  const calculateTimeData = (lastTimeSet: Date, workingTo: Date, isBreak: boolean) => {
    const hoursDiff =
      Math.abs(workingTo.getTime() - lastTimeSet.getTime()) / 36e5;
    const minutesDiff = (hoursDiff - Math.floor(hoursDiff)) * 60;
    const timeData = {
      hours: Math.floor(hoursDiff),
      minutes: Math.round(minutesDiff),
      isBreak: isBreak,
    };
    return timeData;
  };

  const handleAddTime = (isBreak: boolean = false) => {
    if ((isBreak && !breakTo) || !lastTimeSet) return;
    else if ((!isBreak && !workingTo) || !lastTimeSet) return;

    const timeData = calculateTimeData(lastTimeSet, isBreak ? breakTo! : workingTo!, isBreak);
    const formattedTime = formatTimeData(lastTimeSet, isBreak ? breakTo! : workingTo!, timeData);

    if (isBreak) {
      setLastTimeSet(breakTo);
      setBreakTo(undefined);
    } else {
      setLastTimeSet(workingTo);
      setWorkingTo(undefined);
    }

    const storedTimeData = {
      timeString: formattedTime,
      timeData: timeData,
    };

    setStoredTimes((prev: any) => [...prev, storedTimeData]);
  };

  return (
    <main className="bg-white p-6">
      <SetTime
        startTime={startTime}
        setStartTime={setStartTime}
        goal={goal}
        setGoal={setGoal}
        isSet={isSet}
        setIsSet={handleSet}
      />

      <HoursBar isSet={isSet} goal={goal} storedTimes={storedTimes} />

      <WorkingTo
        workingTo={workingTo}
        setWorkingTo={setWorkingTo}
        isSet={isSet}
        handleAddTime={() => handleAddTime(false)}
      />

      <BreakTo
        breakTo={breakTo}
        setBreakTo={setBreakTo}
        isSet={isSet}
        handleAddTime={() => handleAddTime(true)}
      />

      <ListedHours storedTimes={storedTimes} />

      <Footer />
    </main>
  );
}

export default App;
