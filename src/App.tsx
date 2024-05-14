import { useState } from "react";
import { TimePicker } from "./components/ui/time-picker/TimePicker";
import InputHeader from "./components/ui/input-header/InputHeader";
import { Button } from "./components/ui/button/Button";
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

  const [workingTo, setWorkingTo] = useState<Date>();
  const [breakTo, setBreakTo] = useState<Date>();
  const [storedTimes, setStoredTimes] = useState<Date[]>([]);

  const handleSet = () => {
    setIsSet(true);
    setStoredTimes([startTime!]);
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
      />

      <BreakTo breakTo={breakTo} setBreakTo={setBreakTo} isSet={isSet} />

      <ListedHours />

      <Footer />
    </main>
  );
}

export default App;
