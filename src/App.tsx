import { useState } from "react";
import { TimePicker } from "./components/ui/time-picker/TimePicker";
import InputHeader from "./components/ui/input-header/InputHeader";
import { SingleTimePicker } from "./components/ui/time-picker/SingleTimePicker";
import { Button } from "./components/ui/button/Button";

function App() {
  const [date, setDate] = useState<Date>();

  return (
    <main className="bg-white p-6">
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-1 max-w-max">
          <InputHeader>Start time</InputHeader>
          <TimePicker setDate={setDate} date={date} />
        </div>
        <div className="flex flex-col gap-1 max-w-max">
          <InputHeader>Goal</InputHeader>
          <SingleTimePicker setDate={setDate} date={date} />
        </div>
      </div>

      <div className="my-6 w-full border bg-muted py-1 px-2 border-lightGray rounded-md flex items-center justify-between">
        <span className="text-sm">
          Worked 0/8h
        </span>
        <span className="text-sm">Remaining 8h</span>
      </div>

      <div className="w-full flex flex-col justify-between gap-3">
        <div className="flex flex-row gap-5 justify-between ">
          <InputHeader>Working to</InputHeader>
          <TimePicker setDate={setDate} date={date} />
        </div>
        <Button className="w-full" size={"sm"}>
          Add
        </Button>
      </div>

      <div className="w-full flex flex-col justify-between gap-3 mt-3">
        <div className="flex flex-row gap-5 justify-between">
          <InputHeader>Break</InputHeader>
          <TimePicker setDate={setDate} date={date} />
        </div>
        <Button
          className="w-full border border-black"
          variant={"outline"}
          size={"sm"}
        >
          Add
        </Button>
      </div>

      <div className="flex flex-col mt-6">
        <span className="text-sm">09:00 - 12:00 (3h)</span>
      </div>

      <div className="w-full border-t border-lightGray mt-10 flex items-center justify-between gap-10 pt-3">
        <span className="text-sm text-secondary">
          Made with 🖤 by <a href="https://twitter.com/Zlvskyy">@zlvskyy</a>
        </span>
        <a
          href="https://github.com/Zlvsky/time-calculator-chrome-extension"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            alt="GitHub Repo stars"
            src="https://img.shields.io/github/stars/Zlvsky/time-calculator-chrome-extension"
          />
        </a>
      </div>
    </main>
  );
}

export default App
