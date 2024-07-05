import { ReactNode } from "react";

const CustomButton = (props: {
  children: ReactNode;
  clickHandler: () => void;
  rightClose?: boolean
}) => {
  const { children, clickHandler, rightClose } = props;
  return (
    <button className={`w-1/4 pr-5 pl-1 py-1 font-medium border-2 border-black ${rightClose ? `border-r-0` : null}`} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default CustomButton;
