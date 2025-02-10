import { TimeType } from "@/hooks/tanstack/use-exhibition-time";
import { IndustriesType } from "@/hooks/tanstack/use-industries";
import { StaticType } from "@/hooks/tanstack/use-static-words";
import { ContactsFormType } from "@/lib/get-contacts-details";
import { SponsorFormType } from "@/lib/get-sponsor-form-details";
import { StandFormType } from "@/lib/get-stend-form-details";
import { LangState } from "@/store/lang";
import axios from "axios";

const URL = "https://itse.turkmenexpo.com/app/api/v1";

// const API_CONFIG = {
//   BASE_URL: "https://itse.turkmenexpo.com/app/api/v1",
//   SUCCESS_STATUS: [200, 201],
// };

// const apiClient = axios.create({
//   baseURL: API_CONFIG.BASE_URL,
// });

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
