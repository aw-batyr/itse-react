import { B2bForm, B2bFormProgress, Cover } from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { FC, useState } from "react";

interface Props {
  className?: string;
}

export const B2b: FC<Props> = () => {
  useScrollTop();

  const [stage, setStage] = useState(1);

  return (
    <div className={"pb-[120px]"}>
      <Cover title="B2B | B2G встречи" />

      {stage !== 0 && <B2bFormProgress stage={stage} />}

      <div className="max-w-[808px] md:mx-auto mx-5">
        <B2bForm stage={stage} setStage={setStage} />
      </div>
    </div>
  );
};
