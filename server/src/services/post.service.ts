// import { PrismaClient } from "@prisma/client";
// import { Request, Response } from "express";
// import { Post } from "../models/post.model";

// const prisma = new PrismaClient();

// export const getPosts = async (req: Request, res: Response) => {

//   const posts = await prisma.post.findMany();

//   return {
//     posts: posts.map((post) => ({
//       ...post,
//       title: post.title,
//     })),
//   }
// }

// export const createPost = async (_post: Post) => {
//   const post = await prisma.post.create({
//     data: {
//       title: _post.title,
//       content: _post.content,
//       published: false,
//     }
//   });

//   return {
//     ...createPost,
//     title: post.title,
//     content: post.content,
//     published: post.published,
//   }
// };