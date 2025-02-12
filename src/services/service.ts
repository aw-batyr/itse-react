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

const URL = "https://itse.turkmenexpo.com/app/api/v1";

const axios_url = axios.create({
  baseURL: "https://itse.turkmenexpo.com/app/api/v1/",
});

export const postStend = async (data: StandFormType): Promise<boolean> => {
  const res = axios.post(`${URL}/book_stand_form`, data);

  return (await res).status === 201;
};

export const postB2b = async (data: FormData): Promise<boolean> => {
  const res = axios.post(`${URL}/form`, data);

  return (await res).status === 201;
};

export const postSponsor = async (data: SponsorFormType): Promise<boolean> => {
  const res = axios.post(`${URL}/become_sponsor_form`, data);

  return (await res).status === 201;
};

export const postContact = async (data: ContactsFormType): Promise<boolean> => {
  const res = axios.post(`${URL}/contact_form`, data);

  return (await res).status === 201;
};

export const postSubscribe = async (data: { email: string }) => {
  const res = axios_url.post("subscribe_news_form", data);

  return (await res).status === 201;
};

export const getExhibitionTime = async (lang: LangState["lang"]) => {
  const data = axios.get<TimeType>(`${URL}/exhibition_time`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getStaticWords = async (lang: LangState["lang"], id: string) => {
  const data = axios.get<StaticType>(`${URL}/pages/${id}`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getIndustries = async (lang: LangState["lang"]) => {
  const data = axios.get<IndustriesType>(`${URL}/industries`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getStats = async (lang: LangState["lang"]) => {
  const data = axios_url.get<StatsType>("/stats", {
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
