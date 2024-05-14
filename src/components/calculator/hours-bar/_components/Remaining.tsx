interface IProps {
  isSet: boolean
  remaining: { hours: number; minutes: number }
}

function Remaining({ isSet, remaining }: IProps) {
  if (!isSet) return <span className="text-sm">Remaining -h</span>

  if (!remaining?.hours && !remaining?.minutes)
    return <span className="text-sm">Remaining 0h0m</span>

  return (
    <span className="text-sm">
      Remaining {`${remaining.hours}h${remaining.minutes}m`}
    </span>
  )
}

export default Remaining
