export interface PresentationCategoriesTypes {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}
