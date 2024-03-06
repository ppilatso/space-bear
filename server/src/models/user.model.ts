import { Post } from "./post.model";

export interface User {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  posts: Post[];
}