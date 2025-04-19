export interface MasterTypes {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
