import { Button } from '@/components/ui/button/Button'
import InputHeader from '@/components/ui/input-header/InputHeader'
import { TimePicker } from '@/components/ui/time-picker/TimePicker'

interface IProps {
  breakTo: Date | undefined
  setBreakTo: (date: Date | undefined) => void
  isSet: boolean
  error: boolean
  lastTimeSet: Date | undefined
  handleAddTime: () => void
}

function BreakTo({
  breakTo,
  setBreakTo,
  isSet,
  error,
  lastTimeSet,
  handleAddTime
}: IProps) {
  return (
    <div className="mt-3 flex w-full flex-col justify-between gap-3">
      <div className="flex flex-row justify-between gap-5">
        <div className="flex flex-col items-start">
          <InputHeader>Break to:</InputHeader>
          {error ? (
            <p className="text-sm text-red-600">
              must be after {lastTimeSet!.toLocaleTimeString().slice(0, 5)}
            </p>
          ) : (
            <p className="text-sm text-secondary/80">example: 15:30</p>
          )}
        </div>
        <TimePicker disabled={!isSet} setDate={setBreakTo} date={breakTo} />
      </div>
      <Button
        className="w-full border border-black"
        variant={'outline'}
        size={'sm'}
        disabled={!isSet}
        onClick={handleAddTime}
      >
        Add
      </Button>
    </div>
  )
}

export default BreakTo
