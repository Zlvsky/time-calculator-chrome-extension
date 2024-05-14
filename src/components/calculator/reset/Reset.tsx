interface IProps {
  handleReset: () => void
}

function Reset({ handleReset }: IProps) {
  return (
    <div className="mt-2 w-full text-right">
      <button
        className="cursor-pointer border-b border-black text-right text-sm"
        onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}

export default Reset
