import { FC } from "react";

interface Props {
  className?: string;
}

export const B2b: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="relative flex items-center h-[216px] w-full justify-center">
        <img
          src="/b2b-cover.png"
          className="-z-10 absolute size-full object-cover top-0 left-0"
        />
        <h1 className="text-on_primary text-5xl">B2B | B2G</h1>
      </div>

      <div className="w-[808px] mx-auto my-20">
        <div className="relative h-14 w-full">
          <div className="bg-[#D0D3D8] h-2 w-full" />

          <div className="progress-circle absolute -top-6 flex items-center justify-center">
            1
          </div>
          <div className="progress-circle absolute -top-6 right-1/2 -translate-x-1/2 flex items-center justify-center">
            2
          </div>
          <div className="progress-circle absolute -top-6 right-0 flex items-center justify-center">
            3
          </div>
        </div>
      </div>
    </div>
  );
};
