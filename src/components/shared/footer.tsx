import { FC } from "react";
import { Container, Logo } from "./";

export const Footer: FC = () => {
  return (
    <footer className="py-5 bg-bg_surface_container">
      <Container className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <Logo />

          <div className="flex items-center gap-6">
            <img src="/inst.svg" />
            <img src="/in.svg" />
            <img src="/x.svg" />
          </div>
        </div>

        <hr className="border-outline_v" />

        <h5 className="text-base text-center font-normal  text-on_surface_v">
          ©2025 Все права защищены
        </h5>
      </Container>
    </footer>
  );
};
