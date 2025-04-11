import { TimeType } from "@/hooks/tanstack/use-exhibition-time";
import { IndustriesType } from "@/hooks/tanstack/use-industries";
import { StaticType } from "@/hooks/tanstack/use-static-words";
import { StatsType } from "@/hooks/tanstack/use-stats";
import { ContactsFormType } from "@/lib/get-contacts-details";
import { SponsorFormType } from "@/lib/get-sponsor-form-details";
import { StandFormType } from "@/lib/get-stend-form-details";
import { LangState } from "@/store/lang";
import axios from "axios";
import { ContactsPageType } from "./types/contacts.type";
import { HomeContactsType } from "./types/home-contacts.type";
import { PartnersType } from "@/hooks/tanstack/use-partners";
import { NewsInnerType, NewsType } from "./types/news.type";
import { ParticipantsType } from "./types/participants.type";

const axios_url = axios.create({
  baseURL: "https://itse.turkmenexpo.com/app/api/v1/",
});

export const postStend = async (
  data: StandFormType,
  lang: LangState["lang"]
): Promise<boolean> => {
  const res = axios_url.post(`book_stand_form`, data, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return (await res).status === 201;
};

export const postB2b = async (
  data: FormData,
  lang: LangState["lang"]
): Promise<boolean> => {
  const res = axios_url.post(`form`, data, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return (await res).status === 201;
};

export const postSponsor = async (
  data: SponsorFormType,
  lang: LangState["lang"]
): Promise<boolean> => {
  const res = axios_url.post(`become_sponsor_form`, data, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return (await res).status === 201;
};

export const postContact = async (data: ContactsFormType): Promise<boolean> => {
  const res = axios_url.post(`contact_form`, data);

  return (await res).status === 201;
};

export const postSubscribe = async (data: { email: string }) => {
  const res = axios_url.post("subscribe_news_form", data);

  return (await res).status === 201;
};

export const getExhibitionTime = async (lang: LangState["lang"]) => {
  const data = axios_url.get<TimeType>(`exhibition_time`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getPartners = async () => {
  const data = axios_url.get<PartnersType>("partners");

  return data;
};

export const getMediaPartners = async () => {
  const data = axios_url.get<PartnersType>("media_partner");

  return data;
};

export const getStaticWords = async (lang: LangState["lang"], id: string) => {
  const data = axios_url.get<StaticType>(`pages/${id}`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getIndustries = async (lang: LangState["lang"]) => {
  const data = axios_url.get<IndustriesType>(`industries`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getStats = async (lang: LangState["lang"]) => {
  const data = axios_url.get<StatsType>("stats", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getContacts = async (lang: LangState["lang"]) => {
  const data = axios_url<ContactsPageType>("contact_info", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getHomeContacts = async (lang: LangState["lang"]) => {
  const data = axios_url<HomeContactsType>("contact_data", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getNews = async (lang: LangState["lang"]) => {
  const data = axios_url<NewsType>("news", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getNewsInner = async (lang: LangState["lang"], id = 1) => {
  const data = axios_url<NewsInnerType>(`news/${id}`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getParticipants = async (lang: LangState["lang"]) => {
  const data = axios_url<ParticipantsType>("participants", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};
