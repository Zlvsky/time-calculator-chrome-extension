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

  const [workingToError, setWorkingToError] = useState(false);
  const [breakToError, setBreakToError] = useState(false);

  const handleSet = () => {
    if (!startTime || !goal) return;
    console.log(goal?.getHours())
    if (!goal?.getHours()) return;
    setIsSet(true);
    setLastTimeSet(startTime);
  };

  // STORE STRING IN 00:00 - 00:00 (3H 30M) FORMAT
  const formatTimeData = (
    startTime: Date,
    workingTo: Date,
    timeData: { hours: number; minutes: number },
    isBreak: boolean
  ) => {
    let timeString = `${timeData.hours}h${timeData.minutes}m`;
    if (isBreak) timeString += " (break)";
    const formattedTimeData = {
      from: startTime?.toLocaleTimeString().slice(0, 5),
      to: workingTo?.toLocaleTimeString().slice(0, 5),
      timeString: timeString,
    };
    return formattedTimeData;
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

  const handleValidate = (isBreak: boolean) => {
    // VALIDATE IF BREAK TIME HIGHER THAN LAST TIEM SET
    if (isBreak) {
      if (breakTo! < lastTimeSet!) {
        setBreakToError(true);
        return false;
      }
      else {
        setBreakToError(false);
        return true; 
    }
    }
    // VALIDATE IF WORKING TIME HIGHER THAN LAST TIEM SET
    if (workingTo! < lastTimeSet!) {
      setWorkingToError(true);
      return false;
    }
    else {
      setWorkingToError(false);
      return true;
    }
  }

  const handleAddTime = (isBreak: boolean = false) => {
    if ((isBreak && !breakTo) || !lastTimeSet) return;
    else if ((!isBreak && !workingTo) || !lastTimeSet) return;
    
    const isValid = handleValidate(isBreak);
    if (!isValid) return;

    const timeData = calculateTimeData(lastTimeSet, isBreak ? breakTo! : workingTo!, isBreak);
    const formattedTime = formatTimeData(lastTimeSet, isBreak ? breakTo! : workingTo!, timeData, isBreak);

    if (isBreak) {
      setLastTimeSet(breakTo);
      setBreakTo(undefined);
    } else {
      setLastTimeSet(workingTo);
      setWorkingTo(undefined);
    }

    const storedTimeData = {
      formattedTime: formattedTime,
      timeData: timeData,
    };

    setStoredTimes((prev: any) => [...prev, storedTimeData]);
  };

  return (
    <main className="max-w-[380px] w-full bg-white p-6">
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
        error={workingToError}
        lastTimeSet={lastTimeSet}
        handleAddTime={() => handleAddTime(false)}
      />

      <BreakTo
        breakTo={breakTo}
        setBreakTo={setBreakTo}
        isSet={isSet}
        error={breakToError}
        lastTimeSet={lastTimeSet}
        handleAddTime={() => handleAddTime(true)}
      />

      <ListedHours storedTimes={storedTimes} />

      <Footer />
    </main>
  );
}

export default App;
