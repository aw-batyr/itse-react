import { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  title: string;

  content: unknown[];
}

export const PopoupTitle: FC<Props> = ({ className }) => {
  return (
    <div className={cn("relative", className)}>
      {/* <h3 className="text-3xl">{activeTitle}</h3>s
      <div className="">
        {content.map((item, i) => (
          <div key={i} onClick={() => setActiveTitle(item.text)} className="">
            {item.text}
          </div>
        ))}
      </div> */}
    </div>
  );
};
