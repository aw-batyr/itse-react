export interface VideoTypes {
  status: string;
  data: Data;
}

export interface Data {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  videos: VideoElement[];
}

export interface VideoElement {
  id: number;
  name: string;
  category_video_media_id: number;
  created_at: Date;
  updated_at: Date;
  video: VideoPhotoClass;
  video_photo: VideoPhotoClass;
}

export interface VideoPhotoClass {
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
