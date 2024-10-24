export interface Review {
  id?: string;
  content: string;
  name: string;
  date: any;
  rate: number;
  userId: string;
}

export interface Artist {
  id?: string;
  name: string;
  surname: string;
  profileImageUrl: string;
  biography: string;
}

export interface ImageData {
  id: string;
  artistId: string;
  imageUrl: string;
  createdAt: Date;
}
