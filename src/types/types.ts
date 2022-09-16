export interface IMoviesResponse {
  Search: IMovieAPI[];
  totalResults: null | string;
  Response: null | string;
}

export interface IMovieAPI {
  Poster: string;
  Title: string;
  Type: ContentType;
  Year: string;
  imdbID: string;
}
//добавляем еще один интерфейс и нужно мапером поменять первые буквы
// export interface IMovie {
//   poster: string;
//   title: string;
//   type: ContentType;
//   year: string;
//   imdbID: string;
// }

export type ContentType = "movie" | "series" | " episode";
