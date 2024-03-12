import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getPosts = async (req: Request, res: Response) => {

  const posts = await prisma.post.findMany();

  return {
    posts: posts.map((post) => ({
      ...post,
      title: req.body.title,
    }),
    console.log(res.status(200)))    
  }
}

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