import { Router, Request, Response } from "express";

import { getCharacters } from "../routes/characterRoutes";
import { getComics } from "../routes/comicsRoutes";

const router: Router = Router();

router.get("/characters", (req: Request, res: Response) => {
  getCharacters(req, res);
});

router.get("/comics", (req: Request, res: Response) => {
  getComics(req, res);
});

export default router;
