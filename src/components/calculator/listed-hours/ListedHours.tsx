import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table/Table'

interface IProps {
  storedTimes: any
}

function ListedHours({ storedTimes }: IProps) {
  const EmptyRows = () => {
    return (
      <TableRow>
        <TableCell colSpan={3} className="text-center">
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
        </TableRow>
      </TableHeader>
      <TableBody>{storedTimes.length ? <TimeRows /> : <EmptyRows />}</TableBody>
    </Table>
  )
}

export default ListedHours
