import axios from "axios";
import {
  IMovieDetailsAPI,
  IMoviesAPIResponse,
  ISearchParams,
} from "types/types";
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

    const { data } = await this.API.get<IMoviesAPIResponse>("", { params });

    return data;
  }

  public async getDetailsById(id: string) {
    const params = {
      i: id,
    };

    const { data } = await this.API.get<IMovieDetailsAPI>("", { params });

    return data;
  }

  public async getNewMovies() {
    const currentYear = new Date().getFullYear();

    const params = {
      s: this.getRandomWord(this.wordForMovie),
      y: currentYear,
    };

    const { data } = await this.API.get<IMoviesAPIResponse>("", { params });

    return data;
  }

  public async getMoviesRecommendations(
    name: string,
    type: string,
    year: string,
  ) {
    const params = {
      s: name,
      type: type,
      y: year,
    };

    const { data } = await this.API.get<IMoviesAPIResponse>("", { params });

    return data;
  }

  public async getMovieBySearchParams(
    searchParams: ISearchParams,
  ): Promise<IMoviesAPIResponse> {
    const params = {
      s: searchParams.title,
      type: searchParams.type,
      y: searchParams.year,
      page: searchParams.page,
    };

    const { data } = await this.API.get<IMoviesAPIResponse>("", {
      params,
    });

    return data;
  }
}

export const movieAPI = new MovieAPI();
