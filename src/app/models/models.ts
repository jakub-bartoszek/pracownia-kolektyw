export interface Review {
  id?: string;
  content: string;
  name: string;
  date: any;
  rate: number;
  userId: string;
}

export interface Artist {
  id: string;
  name: string;
  surname: string;
  category: 'piercing' | 'tattoo';
  profileImageUrl: string;
  biography: string;
}

export interface ImageData {
  id: string;
  artistId: string;
  imageUrl: string;
  category: 'piercing' | 'tattoo';
  createdAt: Date;
}
