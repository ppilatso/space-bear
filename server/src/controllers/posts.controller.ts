import { Request, Response, Router } from "express";
import { getPosts, createPost } from "../services/post.service";

const router = Router();

router.get('/posts', async (req: Request, res: Response) => {
  try {
    const result = await getPosts(req, res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post('/posts', async (req: Request, res: Response) => {
  try {
    const post = await createPost(req.body.post);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;