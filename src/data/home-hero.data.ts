import { Language } from "@/store/lang";

export const btns = [
  {
    lang: Language.RU,
    data: [
      {
        title: "План выставки",
        link: "https://itse.turkmenexpo.com/app/storage/app/media/Floor%20plan/Floor%20plan.pdf",
        blank: true,
      },
      {
        title: "Забронировать стенд",
        link: "/stend-form",
      },
      {
        title: "B2B | B2G встречи",
        link: "/B2B-B2G",
      },
      {
        title: "Стать спонсором",
        link: "/become-sponsor",
      },
    ],
  },

  {
    lang: Language.EN,
    data: [
      {
        title: "Floor Plan",
        link: "https://itse.turkmenexpo.com/app/storage/app/media/Floor%20plan/Floor%20plan.pdf",
        blank: true,
      },
      {
        title: "Book a stand",
        link: "/stend-form",
      },
      {
        title: "B2B | B2G meetings",
        link: "/B2B-B2G",
      },
      {
        title: "Become a sponsor",
        link: "/become-sponsor",
      },
    ],
  },
];
