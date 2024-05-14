import { Button } from "@/components/ui/button/Button";
import InputHeader from "@/components/ui/input-header/InputHeader";
import { TimePicker } from "@/components/ui/time-picker/TimePicker";

interface IProps {
    workingTo: Date | undefined;
    setWorkingTo: (date: Date | undefined) => void;
    isSet: boolean;
}

function WorkingTo({ workingTo, setWorkingTo, isSet}: IProps) {
    return (
      <div className="w-full flex flex-col justify-between gap-3">
        <div className="flex flex-row gap-5 justify-between ">
          <InputHeader>Working to:</InputHeader>
          <TimePicker disabled={!isSet} setDate={setWorkingTo} date={workingTo} />
        </div>
        <Button className="w-full" size={"sm"} disabled={!isSet}>
          Add
        </Button>
      </div>
    );
}

export default WorkingTo;