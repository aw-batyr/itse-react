export interface PhotoTypes {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  category_photo_media_id: number;
  photo: Photo;
  category_photo_media: CategoryPhotoMedia;
}

export interface CategoryPhotoMedia {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface Photo {
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
