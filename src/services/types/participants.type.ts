export interface ParticipantsType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  participants: Participant[];
}

export interface Participant {
  id: number;
  name: string;
  about: string;
  country: string;
  participant_category_id: number;
  created_at: Date;
  updated_at: Date;
  image: Image;
  image_country: Image;
}

export interface Image {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: null;
  description: null;
  field: string;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
  path: string;
  extension: string;
}
