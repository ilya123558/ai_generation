import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  className?: string
}

export const Container = ({className, children}: IProps) => {
  return (
    <div className={`w-screen p-[0px_4.27vw]`}>
      <div className={className ? className: ''}>
        {children}
      </div>
    </div>
  );
};