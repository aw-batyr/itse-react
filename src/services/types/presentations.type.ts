export interface PresentationsTypes {
  status: string;
  data: Data;
}

export interface Data {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  presentations: Presentation[];
}

export interface Presentation {
  id: number;
  name: string;
  category_presentation_id: number;
  created_at: Date;
  updated_at: Date;
  files: File[];
}

export interface File {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: string;
  description: null;
  field: string;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
  path: string;
  extension: string;
  translations: unknown[];
}
