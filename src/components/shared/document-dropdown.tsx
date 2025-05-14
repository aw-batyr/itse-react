import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUp, Download } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  className?: string;
  name: string;
  files: {
    title: string;
    path: string;
    file_name: string;
  }[];
}

export const DocumentDropdown: FC<Props> = ({ className, name, files }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <div
        onClick={() => setActive(!active)}
        className="rounded-t-[2px] bg-[#F3F5F7] cursor-pointer flex items-center justify-between gap-6 px-6"
      >
        <h3 className="text-sm py-[18px]">{name}</h3>
        <AnimatePresence>
          {active ? (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src="/chevron.svg"
              alt="chevron"
            />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <ArrowUp size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{
          maxHeight: 0,
          opacity: 0,
          paddingBottom: 0,
          paddingTop: 0,
          pointerEvents: "none",
        }}
        animate={
          active
            ? {
                maxHeight: "fit-content",
                opacity: 1,
                paddingTop: 24,
                paddingBottom: 24,
                pointerEvents: "all",
              }
            : {}
        }
        transition={{ type: "tween", duration: 0.2 }}
        className="rounded-b-[2px] px-10 py-6 bg-[#E0E6EB] overflow-hidden"
      >
        {files.map((item, i) => (
          <>
            <div
              key={i}
              className={cn(
                "flex items-center justify-between gap-2.5 pb-4 cursor-pointer"
              )}
            >
              <a
                target="_blank"
                download
                href={item.path}
                className="text-sm flex-1"
              >
                {item?.file_name}
              </a>
              <Download
                size={18}
                className="md:flex-[0_0_18px] flex-[0_0_14px]"
              />
            </div>
            {i !== files?.length - 1 && (
              <hr className="border-outline_v pt-4" />
            )}
          </>
        ))}
      </motion.div>
    </div>
  );
};
