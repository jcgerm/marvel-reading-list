import { Router, Request, Response } from "express";

import { getComics, getComicsByCharacters } from "../routes/comicsRoutes";

const router: Router = Router();

router.get("/comics", (req: Request, res: Response) => {
  getComics(req, res);
});

router.get(
  "/comics/characters/:searchString",
  (req: Request, res: Response) => {
    getComicsByCharacters(req, res);
  }
);

export default router;
