interface IProps {
  children: React.ReactNode
}

function InputHeader({ children }: IProps) {
  return (
    <h3 className="text-center text-[16px]  font-medium tracking-tight text-primary">
      {children}
    </h3>
  )
}

export default InputHeader
