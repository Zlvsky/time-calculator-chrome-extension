import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table/Table'
// import Bin from "@/assets/bin.svg";

interface IProps {
  storedTimes: any
  // handleDelete: (index: number) => void
}

function ListedHours({ storedTimes }: IProps) {
  const EmptyRows = () => {
    return (
      <TableRow>
        <TableCell colSpan={4} className="text-center">
          No hours added yet
        </TableCell>
      </TableRow>
    )
  }

  const TimeRows = () => {
    return (
      <>
        {storedTimes?.map((time: any, index: number) => (
          <TableRow key={'time_' + index}>
            <TableCell>{time.formattedTime.from}</TableCell>
            <TableCell className="text-center">{time.formattedTime.to}</TableCell>
            <TableCell className="text-right">{time.formattedTime.timeString}</TableCell>
            {/* <TableCell className="text-right">
              <img src={Bin} alt="delete" className='w-6 h-6 p-1 cursor-pointer' onClick={() => handleDelete(index)} />
            </TableCell> */}
          </TableRow>
        ))}
      </>
    )
  }

  return (
    <Table className="mt-6">
      <TableHeader>
        <TableRow>
          <TableHead>from</TableHead>
          <TableHead className="text-center">to</TableHead>
          <TableHead className="text-right">time</TableHead>
          {/* <TableHead className="text-right"></TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>{storedTimes.length ? <TimeRows /> : <EmptyRows />}</TableBody>
    </Table>
  )
}

export default ListedHours
