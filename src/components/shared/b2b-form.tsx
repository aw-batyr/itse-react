import { FC } from "react";

interface Props {
  className?: string;
}

export const B2bForm: FC<Props> = ({ className }) => {
  return <form className={className}></form>;
};
