import { Request, Response } from "express";
import axios from "axios";

import { BASE_URL, globalParams } from "../config";

function getCharacters(req: Request, res: Response) {
  axios
    .get(`${BASE_URL}/v1/public/characters`, {
      params: globalParams
    })
    .then(resp => {
      res.json(resp.data.data.results);
    })
    .catch(error => {
      console.log(error);
      res.json(error);
    });
}

export { getCharacters };
