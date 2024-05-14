import * as React from 'react'
import { Label } from '../label/Label'
import { TimePickerInput } from './TimePickerInput'

interface TimePickerDemoProps {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
  disabled?: boolean
}

export function SingleTimePicker({ date, setDate, disabled }: TimePickerDemoProps) {
  const hourRef = React.useRef<HTMLInputElement>(null)

  return (
    <div className="flex items-end gap-2">
      <div className="grid gap-1 text-center">
        <Label htmlFor="hours" className="text-xs">
          Hours
        </Label>
        <TimePickerInput
          picker="hours"
          date={date}
          setDate={setDate}
          disabled={disabled}
          ref={hourRef}
        />
      </div>
    </div>
  )
}
