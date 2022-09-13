import axios from "axios";
import { IMovie } from "../types/types";
import { getRandomNumber } from "../utils/getRandomNumber";

class MovieAPI {
  private readonly BASE_URL = process.env.REACT_APP_MOVIES_BASE_URL as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  private readonly wordForMovie = [
    "best",
    "dark",
    "man",
    "i",
    "day",
    "time",
    "you",
    "why",
    "friends",
    "space",
  ];

  private readonly getRandomWord = (array: string[]) => {
    return this.wordForMovie[getRandomNumber(0, this.wordForMovie.length - 1)];
  };

  public async getAll() {
    const params = {
      s: this.getRandomWord(this.wordForMovie),
    };

    const { data } = await this.API.get<IMovie[]>("", { params });

    return data;
  }
}

export const movieAPI = new MovieAPI();
