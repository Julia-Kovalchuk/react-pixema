export interface IMovies {
  Search: IMovie[];
  totalResults: null | string;
  Response: null | string;
}

export interface IMovie {
  Poster: string;
  Title: string;
  Type: "movie" | "series" | " episode";
  Year: string;
  imdbID: string;
}
