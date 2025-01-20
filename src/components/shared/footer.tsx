import { FC } from "react";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return <footer className={className}>Footer</footer>;
};
