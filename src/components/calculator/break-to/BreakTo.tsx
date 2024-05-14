import { Button } from "@/components/ui/button/Button";
import InputHeader from "@/components/ui/input-header/InputHeader";
import { TimePicker } from "@/components/ui/time-picker/TimePicker";

interface IProps {
  breakTo: Date | undefined;
  setBreakTo: (date: Date | undefined) => void;
  isSet: boolean;
  handleAddTime: () => void;
}

function BreakTo({ breakTo, setBreakTo, isSet, handleAddTime }: IProps) {
  return (
    <div className="w-full flex flex-col justify-between gap-3 mt-3">
      <div className="flex flex-row gap-5 justify-between">
        <div className="flex flex-col items-start">
          <InputHeader>Break to:</InputHeader>
          <p className="text-sm text-secondary/80">example: 15:30</p>
        </div>
        <TimePicker disabled={!isSet} setDate={setBreakTo} date={breakTo} />
      </div>
      <Button
        className="w-full border border-black"
        variant={"outline"}
        size={"sm"}
        disabled={!isSet}
        onClick={handleAddTime}
      >
        Add
      </Button>
    </div>
  );
}

export default BreakTo;
