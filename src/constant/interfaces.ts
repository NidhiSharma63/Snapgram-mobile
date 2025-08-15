export interface ErrorResponse {
  status: number;
  error: string;
}

export interface IPost {
  caption: string[];
  createdAt: Date;
  file: string;
  location: string[];
  tags: string[];
  userId: string;
  __v: number;
  _id: string;
  userAvatar: string;
  likes: string[];
}
