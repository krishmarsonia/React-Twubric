import { ReactNode } from "react";

const DateInput = (props: {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  rightClose?: boolean;
}) => {
  const { changeHandler, children, rightClose } = props;
  return (
    <div
      className={`border-2 border-black w-1/2 p-2 ${
        rightClose ? `border-r-0` : null
      }`}
    >
      <h1 className="text-xl font-medium">{children}</h1>
      <input type="date" onChange={changeHandler} />
    </div>
  );
};

export default DateInput;
