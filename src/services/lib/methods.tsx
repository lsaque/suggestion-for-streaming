import { Status } from "../../types/status";
import { StreamingPlatform } from "../../types/streamingPlatform";
import axiosClient from "../apiClient";

import { BASE_URL, API_KEY } from "../../utils/constants/apiConstants";
import { Movie } from "../../types/movie";
import { RecommendedMovie } from "../../types/recommendedMovie";

async function getInit(): Promise<boolean> {
  let status = false;

  await axiosClient
    .get<Status>(`${BASE_URL}/movie/init/${API_KEY}`)
    .then((response) => {
      status = response.data.status;
    });
  return status;
}

export async function getMovies(): Promise<StreamingPlatform[]> {
  let streamingPlatforms = [] as StreamingPlatform[];
  let status = false;

  await getInit().then((response) => {
    status = response;
  });

  if (status) {
    await axiosClient
      .get<StreamingPlatform[]>(`${BASE_URL}/movie/listAll`)
      .then((response) => {
        streamingPlatforms = response.data;
      });
  }
  return streamingPlatforms;
}

export async function getRecommendedMovie(
  props: RecommendedMovie
): Promise<Movie> {
  let recommendedMovie = {} as Movie;
  let status = false;

  await getInit().then((response) => {
    status = response;
  });

  if (status) {
    const genresString = props.movie.genres.map((g) => g.id).join();
    await axiosClient
      .get<Movie>(
        `${BASE_URL}/movie/recommendMovie/${props.idPlatform}/${props.movie.id}/${genresString}`
      )
      .then((response) => {
        recommendedMovie = response.data;
      });
  }
  return recommendedMovie;
}

export async function listRecommendedMovies(): Promise<Movie[]> {
  let movies = [] as Movie[];

  await axiosClient
    .get<Movie[]>(`${BASE_URL}/movie/listRecommendedMovies`)
    .then((response) => {
      movies = response.data;
    });

  return movies;
}
