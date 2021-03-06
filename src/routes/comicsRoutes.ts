import { Request, Response } from "express";
import axios from "axios";

import Comic from "../models/comic";
import Character from "../models/character";
import * as redisdb from "../redis";
import { BASE_URL, globalParams } from "../config";
import { getCharacterId } from "./characterRoutes";

interface ComicData {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  characters: {
    items: {
      resourceURI: string;
    }[];
  };
}

async function getComics(req: Request, res: Response) {
  const key = `marvel:comics-${globalParams.limit}`;
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
          result = resp.data.data.results.map((comic: ComicData) => {
            return new Comic(comic.id, comic.title, comic.thumbnail.path);
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

async function getComicsByCharacters(req: Request, res: Response) {
  let characters: Character[];

  getCharacterId(req.params["searchString"]).then(characterResults => {
    if (characterResults.length > 0) {
      characters = characterResults;
      const key = `marvel:comicsByCharacter-${globalParams.limit}-${characters[0].id}`;
      const characterIds = characters
        .map(character => {
          return character.id;
        })
        .join(",");
      const comicsParams = {
        ...globalParams,
        sharedAppearances: characterIds,
        orderBy: "-onsaleDate"
      };

      redisdb.get(key).then(result => {
        if (result) {
          console.log(`cache hit: ${key}`);
          res.send(result);
        } else {
          axios
            .get(`${BASE_URL}/v1/public/comics`, {
              params: comicsParams
            })
            .then(resp => {
              const result = resp.data.data.results.map((comic: ComicData) => {
                return new Comic(comic.id, comic.title, comic.thumbnail.path);
              });
              redisdb.set(key, JSON.stringify(result));
              res.json(result);
            })
            .catch(error => {
              console.log(error);
              res.json(error);
            });
        }
      });
    }
  });
}

export { getComics, getComicsByCharacters };
