import { Button } from '@/components/ui/button/Button'
import InputHeader from '@/components/ui/input-header/InputHeader'
import { SingleTimePicker } from '@/components/ui/time-picker/SingleTimePicker'
import { TimePicker } from '@/components/ui/time-picker/TimePicker'

interface IProps {
  startTime: Date | undefined
  setStartTime: (date: Date | undefined) => void
  goal: Date | undefined
  setGoal: (date: Date | undefined) => void
  isSet: boolean
  setIsSet: (isSet: boolean) => void
}

function SetTime({ startTime, setStartTime, goal, setGoal, isSet, setIsSet }: IProps) {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full justify-between">
        <div className="flex max-w-max flex-col gap-1">
          <InputHeader>Start time</InputHeader>
          <TimePicker disabled={isSet} setDate={setStartTime} date={startTime} />
        </div>
        <div className="flex max-w-max flex-col gap-1">
          <InputHeader>Goal</InputHeader>
          <SingleTimePicker disabled={isSet} setDate={setGoal} date={goal} />
        </div>
      </div>
      <Button
        className="w-full"
        size={'sm'}
        onClick={() => setIsSet(true)}
        disabled={isSet}
      >
        Set
      </Button>
    </div>
  )
}

export default SetTime
