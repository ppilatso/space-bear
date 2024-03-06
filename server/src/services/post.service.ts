import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getPosts = async (req: Request, res: Response) => {

  const posts = await prisma.post.findMany({
    include: {
      author: true
    }
  });

  return {
    posts: posts.map((post) => ({
      ...post,
      title: post.title,
    })),
  }
}