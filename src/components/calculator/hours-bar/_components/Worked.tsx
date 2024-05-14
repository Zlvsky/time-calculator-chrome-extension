interface IProps {
  goal: Date | undefined
  isSet: boolean
  worked: { hours: number; minutes: number }
}

function Worked({ goal, isSet, worked }: IProps) {
  if (!isSet || !goal) return <span className="text-sm">Worked -h of -h</span>

  if (!worked?.hours && !worked?.minutes)
    return <span className="text-sm">Worked 0h0m of {goal.getHours()}h</span>

  return (
    <span className="text-sm">
      Worked {`${worked.hours}h${worked.minutes}m of ${goal.getHours()}h`}
    </span>
  )
}

export default Worked
