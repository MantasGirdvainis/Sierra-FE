import { get } from "api/shared/methods";

import { MoviesResponse, MovieDetails } from "./types";

export async function getMovies(): Promise<MoviesResponse> {
    const { data } = await get<MoviesResponse>('movies?page=1');
    return data;
}

export async function getMovie(id: string): Promise<MovieDetails> {
    const { data } = await get<MovieDetails>(`movies/${id}`);
    return data;
  }