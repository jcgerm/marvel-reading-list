import { Request, Response } from "express";
import axios from "axios";

import * as redisdb from "../redis";
import { BASE_URL, globalParams } from "../config";

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
          result = resp.data.data.results;

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
