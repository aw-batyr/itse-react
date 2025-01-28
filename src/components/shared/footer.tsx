import { FC } from "react";
import { Container, Logo } from "./";

export const Footer: FC = () => {
  return (
    <footer className="py-5 bg-bg_surface_container">
      <Container className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between items-center">
          <Logo />

          <div className="flex items-center gap-6">
            <img src="/inst.svg" />
            <img src="/in.svg" />
            <img src="/x.svg" />
          </div>
        </div>

        <hr className="border-outline_v" />

        <h5 className="text-base text-center normal  text-on_surface_v">
          ©2025 Все права защищены
        </h5>
      </Container>
    </footer>
  );
};
