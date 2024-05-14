interface IProps {
    isSet: boolean;
    goal: Date | undefined;
    storedTimes: Date[];
}

function HoursBar({ isSet, goal, storedTimes }: IProps) {
    return (
      <div className="my-6 w-full border bg-muted py-1 px-2 border-lightGray rounded-md flex items-center justify-between">
        <span className="text-sm">Worked {isSet ? "" : "-/-h"}</span>
        <span className="text-sm">Remaining {isSet ? "" : "-h"}</span>
      </div>
    );
}

export default HoursBar;