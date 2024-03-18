import { Request, Response, Router } from "express";
import { createPost, deletePost, getAllPosts, getPostById, updatePost } from "../services/post.service";

const router = Router();

router.get('/posts', async (req: Request, res: Response) => {
  try {
    const result = await getAllPosts(req, res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get('/posts/?id', async (req: Request, res: Response) => {
  try {
    await getPostById(req, res);
    res.status(200);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post('/posts', async (req: Request, res: Response) => {
  try {
    const result = await createPost(req, res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.put('/posts/:id', async (req: Request, res: Response) => {
  try {
    const result = await updatePost(req, res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete('/posts/:id', async (req: Request, res: Response) => {
  try {
    const result = await deletePost(req, res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;