export interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}