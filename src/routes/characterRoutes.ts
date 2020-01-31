import axios from "axios";

import Character from "../models/character";
import { BASE_URL, globalParams } from "../config";
import * as redisdb from "../redis";

export interface CharacterData {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export async function getCharacterId(
  charactersToFind: string
): Promise<Character[]> {
  const characters = charactersToFind.split(",").map(name => name.trim());
  const output: Character[] = [];
  const promises = [];

  for (let i = 0; i < characters.length; i++) {
    promises.push(
      axios
        .get(`${BASE_URL}/v1/public/characters`, {
          params: { ...globalParams, name: characters[i] }
        })
        .then(resp => {
          if (resp.data.data.results) {
            resp.data.data.results.map((character: CharacterData) => {
              output.push(
                new Character(
                  character.id,
                  character.name,
                  character.thumbnail.path
                )
              );
            });
          }
        })
    );
  }

  return Promise.all(promises).then(() => {
    console.log("Done.");
    console.log(output);
    return output;
  });
}
