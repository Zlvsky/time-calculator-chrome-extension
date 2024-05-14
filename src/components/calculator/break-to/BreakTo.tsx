import { Button } from "@/components/ui/button/Button";
import InputHeader from "@/components/ui/input-header/InputHeader";
import { TimePicker } from "@/components/ui/time-picker/TimePicker";

interface IProps {
  breakTo: Date | undefined;
  setBreakTo: (date: Date | undefined) => void;
  isSet: boolean;
}

function BreakTo({ breakTo, setBreakTo, isSet }: IProps) {
  return (
    <div className="w-full flex flex-col justify-between gap-3 mt-3">
      <div className="flex flex-row gap-5 justify-between">
        <InputHeader>Break to:</InputHeader>
        <TimePicker disabled={!isSet} setDate={setBreakTo} date={breakTo} />
      </div>
      <Button
        className="w-full border border-black"
        variant={"outline"}
        size={"sm"}
        disabled={!isSet}
      >
        Add
      </Button>
    </div>
  );
}

export default BreakTo;
