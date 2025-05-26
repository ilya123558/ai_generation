import { Button } from "@/shared/buttons/button/Button";
import { PropsWithChildren, useRef } from "react";

interface IProps extends PropsWithChildren {
  isFocus: boolean
  setFocus: (isFocus: boolean) => void
}

export const InputFocusWrapper = ({isFocus, setFocus, children}: IProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const removeFocus = () => {
    inputRef.current?.blur();
    setFocus(false);
  };

  if(!isFocus) return children

  return (
    <div className={isFocus ? "fixed z-[10] w-full h-full left-0 top-0 flex flex-col transition-all bg-[#0000001a] p-[200px_4.27vw_0px] backdrop-blur-[10px]" : ""}>
      {children}
      {isFocus && (
        <div className="w-full flex flex-row-reverse mt-[2vw]">
          <Button onClick={removeFocus} className={`!p-[2vw_5vw] !w-fit border-[1px] border-[#ffffff0d]`}>
            <p className="fs-14 font-medium">Готово</p>
          </Button>
        </div>
      )}
    </div>
  );
};
