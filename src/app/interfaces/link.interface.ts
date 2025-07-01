export interface Link {
  id: number;
  title: string;
  url: string;
  icon?: string;
  isActive: boolean;
}

export interface Profile {
  name: string;
  bio: string;
  avatar: string;
  backgroundColor: string;
  textColor: string;
}