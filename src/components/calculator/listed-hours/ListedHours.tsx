interface IProps {
    storedTimes: any
}

function ListedHours({ storedTimes }: IProps) {

  if (!storedTimes?.length) return null;

  return (
    <div className="flex flex-col mt-6">
      {storedTimes.map((time: any, index: number) => (
        <span key={index} className="text-sm">
          {time.timeString}
        </span>
      ))}
    </div>
  );
}

export default ListedHours;