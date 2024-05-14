interface IProps {
  handleReset: () => void
}

function Reset({ handleReset }: IProps) {
  return (
    <div className="mt-2 w-full text-right">
      <span className="border-b border-black text-right text-sm" onClick={handleReset}>
        Reset
      </span>
    </div>
  )
}

export default Reset
