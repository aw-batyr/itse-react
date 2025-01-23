import { FC } from "react";
import { Container, OfferCard } from "../";

export const HomeOffers: FC = () => {
  return (
    <section className="bg-surface_high py-10 relative">
      <Container>
        <div className="overflow-hidden">
          <div className="mb-2 flex gap-6">
            <OfferCard
              img="/offer-1.png"
              className="flex-[0_0_50%]"
              title="Гостиницы, трансфер, визы"
              text="По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете обращаться к официальным туроператорам выставки"
            />
            <OfferCard
              img="/offer-2.png"
              className="flex-[0_0_50%]"
              title="Гостиницы, трансфер, визы"
              text="По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете обращаться к официальным туроператорам выставки"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
