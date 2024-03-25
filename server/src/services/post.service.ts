import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { generateId } from "../modules/db";
import { Post } from "../models/post.model";

const prisma = new PrismaClient();

export const getAllPosts = async (req: Request, res: Response) => {

  const posts = await prisma.post.findMany();

  return {
    posts: posts.map((post) => ({
      ...post,
      title: req.body.title,
    }),
    res.status(200)),  
  }
}

export const getPostById = async (req: Request, res: Response) => {
  const { id, slug } = req.params;
  console.log(id);
  const post = await prisma.post.findUnique({
    where: {
      id: id,
      slug: slug
    },
  });
  return res.json(post?.id).status(200);
}

export const createPost = async (req: Request, res: Response) => { 
  const myPost: Post = req.body;
  const post = await prisma.post.create({
    data: {
      id: generateId(),
      slug: myPost.title.toLowerCase().replace(/ /g, '-'),
      title: myPost.title,
      content: myPost.content,
      published: myPost.published,
    },
  });

  return res.json(post).status(201);
}

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const myPost: Post = req.body;
  const post = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: myPost.title,
      content: myPost.content,
      published: myPost.published,
    },
  });

  return res.json(post).status(200);
}

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: {
      id: id,
    },
  });

  return res.json(post).status(204);
}