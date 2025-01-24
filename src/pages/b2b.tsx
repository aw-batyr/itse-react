import { B2bForm, B2bFormProgress } from "@/components/shared";
import { useFormStore } from "@/store/form";
import { FC, useEffect } from "react";

interface Props {
  className?: string;
}

export const B2b: FC<Props> = () => {
  const [stage, setStage] = useFormStore((state) => [
    state.stage,
    state.setStage,
  ]);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [stage]);

  return (
    <div className={"pb-[120px]"}>
      <div className="relative flex items-center h-[216px] w-full justify-center">
        <img
          src="/b2b-cover.png"
          className="-z-10 absolute size-full object-cover top-0 left-0"
        />
        <h1 className="text-on_primary text-5xl">B2B | B2G</h1>
      </div>

      {stage !== 0 && <B2bFormProgress stage={stage} />}

      <div className="w-[808px] mx-auto">
        <B2bForm stage={stage} setStage={setStage} />
      </div>
    </div>
  );
};
