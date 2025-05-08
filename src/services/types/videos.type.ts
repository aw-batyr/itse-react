export interface VideoTypes {
  status: string;
  category: Category;
  data: Datum[];
}

export interface Category {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface Datum {
  id: number;
  name: string;
  category_video_media_id: number;
  created_at: Date;
  updated_at: Date;
  video: Video;
  video_photo: Video;
}

export interface Video {
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
