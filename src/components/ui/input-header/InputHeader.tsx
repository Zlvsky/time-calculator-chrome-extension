interface IProps {
    children: React.ReactNode;
}

function InputHeader({ children }: IProps) {
  return <h3 className="text-primary  font-medium tracking-tight text-center">{children}</h3>;
}

export default InputHeader;