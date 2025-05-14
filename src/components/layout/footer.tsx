import { FC } from "react";
import { Container, Logo } from "../shared";
import { Language, useLangStore } from "@/store/lang";
import { SubscribeForm } from "../forms/subscribe-form";
import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";

export const Footer: FC = () => {
  const lang = useLangStore((state) => state.lang);

  return (
    <footer>
      <SubscribeForm />

      <div className="py-5 bg-surface_high">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between items-center">
            <Logo />

            <div className="flex items-center gap-6">
              <Link
                target="_blank"
                to="https://www.facebook.com/profile.php?id=61567254728028"
              >
                <Facebook className="text-on_surface" />
              </Link>

              <Link
                target="_blank"
                to="https://www.instagram.com/turkmenexpo_tm?igsh=bnhkOWpmNWcwcHBq"
              >
                <img src="/inst.svg" />
              </Link>

              <Link
                target="_blank"
                to="https://www.linkedin.com/company/turkmen-expo"
              >
                <img src="/in.svg" />
              </Link>

              <Link
                target="_blank"
                to="https://x.com/turkmenexpo?t=D-XSa8d0AC8GAv5peAzteA&s=09"
              >
                <img src="/x.svg" />
              </Link>
            </div>
          </div>

          <hr className="border-outline_v" />

          <h5 className="text-base text-center normal  text-on_surface_v">
            {lang === Language.RU
              ? "©2025 Все права защищены"
              : "All rights reserved"}
          </h5>
        </Container>
      </div>
    </footer>
  );
};
