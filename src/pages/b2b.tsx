import { B2bForm } from "@/components/shared";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";

interface Props {
  className?: string;
}

export const B2b: FC<Props> = ({ className }) => {
  const [stage, setStage] = useState(1);

  return (
    <div className={"pb-[120px]"}>
      <div className="relative flex items-center h-[216px] w-full justify-center ">
        <img
          src="/b2b-cover.png"
          className="-z-10 absolute size-full object-cover top-0 left-0"
        />
        <h1 className="text-on_primary text-5xl">B2B | B2G</h1>
      </div>

      <div className="w-[808px] mx-auto my-20">
        <div className="relative h-14 w-full">
          <div
            className={cn(
              "h-2 absolute rounded-[2px] top-0 left-0",
              stage === 1 ? "bg-primary_container w-1/2" : "bg-primary w-[75%]"
            )}
          />
          <div className="bg-[#D0D3D8] rounded-[2px] h-2 w-full" />

          <div
            className={cn(
              "progress-circle absolute -top-6 flex items-center justify-center",
              stage === 1
                ? "bg-primary_container left-1/2"
                : "bg-primary !text-on_primary left-[20%]"
            )}
          >
            1
          </div>
          <div
            className={cn(
              "progress-circle absolute -top-6 right-[17%] -translate-x-1/2 flex items-center justify-center",
              stage === 2 ? "bg-primary_container" : "bg-[#D0D3D8]"
            )}
          >
            2
          </div>
          <div
            className={cn(
              "progress-circle absolute -top-6 right-0 flex items-center justify-center",
              stage === 3 ? "bg-primary_container" : "bg-[#D0D3D8]"
            )}
          >
            3
          </div>
        </div>
      </div>

      <div className="w-[808px] mx-auto">
        <B2bForm stage={stage} setStage={setStage} />
      </div>
    </div>
  );
};
