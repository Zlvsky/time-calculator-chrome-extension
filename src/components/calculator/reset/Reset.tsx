interface IProps {
    handleReset: () => void;
}

function Reset({ handleReset }: IProps) {
    return (
      <div className="w-full text-right mt-2">
        <span
          className="border-b border-black text-sm text-right"
          onClick={handleReset}
        >
          Reset
        </span>
      </div>
    );
}

export default Reset;