import { Request, Response } from "express";
import axios from "axios";

import Comic from "../models/comic";
import * as redisdb from "../redis";
import { BASE_URL, globalParams } from "../config";

interface comicData {
  id: number;
  title: string;
  thumbnail: string;
}

async function getComics(req: Request, res: Response) {
  const key: string = `marvel:comics-${globalParams.limit}`;
  let result: string;

  try {
    result = await redisdb.get(key);

    if (result) {
      console.log(`cache hit: ${key}`);
      res.send(result);
    } else {
      axios
        .get(`${BASE_URL}/v1/public/comics`, {
          params: globalParams
        })
        .then(resp => {
          result = resp.data.data.results.map((comic: comicData) => {
            return new Comic(comic.id, comic.title, comic.thumbnail);
          });

          redisdb.set(key, JSON.stringify(result));
          res.json(result);
        })
        .catch(error => {
          console.log(error);
          res.json(error);
        });
    }
  } catch (error) {
    res.send(error.message);
  }
}

export { getComics };
