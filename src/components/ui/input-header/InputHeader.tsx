interface IProps {
    children: React.ReactNode;
}

function InputHeader({ children }: IProps) {
  return <h3 className="text-[16px] text-primary  font-medium tracking-tight text-center">{children}</h3>;
}

export default InputHeader;