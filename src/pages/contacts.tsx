import { ContactsForm } from "@/components/forms/contacts-form";
import { Container } from "@/components/shared";
import { useContacts } from "@/hooks/tanstack/use-contacts";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { HOSTING } from "@/services/hosting";
import { useLangStore } from "@/store/lang";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Contacts: FC<Props> = () => {
  useScrollTop();
  const lang = useLangStore((state) => state.lang);

  const { data } = useContacts();

  const info = data?.info[0];

  function getLang(arg?: string, arg2?: string) {
    return lang === "ru" ? arg : arg2;
  }

  return (
    <div className={"flex flex-col gap-20 pt-10 md:pt-20"}>
      <Container>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-6">
          <ContactsForm />

          <div className="p-6 bg-bg_surface_container rounded-[8px]">
            <h2 className="h2 mb-10 xl:mb-8">{data?.header}</h2>

            <div className="flex flex-col gap-20">
              <div className="flex items-center gap-6">
                <img src={HOSTING + info?.address_image} alt="address" />

                <div>
                  <h3 className="text-xl mb-2">
                    {getLang(info?.title_address_ru, info?.title_address_en)}
                  </h3>
                  <address className="text-base normal not-italic">
                    {getLang(info?.address_ru, info?.address_en)}
                  </address>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <img src={HOSTING + info?.phone_image} alt="phone" />

                <div>
                  <h3 className="text-xl mb-2">
                    {getLang(info?.title_phone_ru, info?.title_phone_en)}
                  </h3>
                  <h4 className="text-base normal">{info?.phone_numbers} </h4>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <img src={HOSTING + info?.email_image} alt="email" />

                <div>
                  <h3 className="text-xl mb-2">
                    {" "}
                    {getLang(info?.title_email_ru, info?.title_email_en)}
                  </h3>
                  <h4 className="text-base normal">{info?.email}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1443.0869986358682!2d58.35620779177324!3d37.921200202365405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7001fd7afd2a95%3A0x9ce9dca95ea4b87e!2z0JDQstC40LDQutCw0YHRgdCwINCw0LLQuNCw0LrQvtC80L_QsNC90LjQuCDCq9CR0LXQu9Cw0LLQuNCwwrsg0LIg0KLRg9GA0LrQvNC10L3QuNGB0YLQsNC90LU!5e0!3m2!1sru!2sru!4v1738063695919!5m2!1sru!2sru"
          className="absolute inset-0 w-full h-full "
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </div>
  );
};
