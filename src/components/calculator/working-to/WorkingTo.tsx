import { Button } from "@/components/ui/button/Button";
import InputHeader from "@/components/ui/input-header/InputHeader";
import { TimePicker } from "@/components/ui/time-picker/TimePicker";

interface IProps {
  workingTo: Date | undefined;
  setWorkingTo: (date: Date | undefined) => void;
  isSet: boolean;
  error: boolean;
  lastTimeSet: Date | undefined;
  handleAddTime: () => void;
}

function WorkingTo({
  workingTo,
  setWorkingTo,
  isSet,
  error,
  lastTimeSet,
  handleAddTime,
}: IProps) {
  return (
    <div className="w-full flex flex-col justify-between gap-3">
      <div className="flex flex-row gap-5 justify-between ">
        <div className="flex flex-col items-start">
          <InputHeader>Working to:</InputHeader>
          {error ? (
            <p className="text-sm text-red-600">
              must be after {lastTimeSet!.toLocaleTimeString().slice(0, 5)}
            </p>
          ) : (
            <p className="text-sm text-secondary/80">example: 12:30</p>
          )}
        </div>
        <TimePicker disabled={!isSet} setDate={setWorkingTo} date={workingTo} />
      </div>
      <Button
        className="w-full"
        size={"sm"}
        disabled={!isSet}
        onClick={handleAddTime}
      >
        Add
      </Button>
    </div>
  );
}

export default WorkingTo;