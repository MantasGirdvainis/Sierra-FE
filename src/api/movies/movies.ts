import { get } from "api/shared/methods";

import { MoviesResponse } from "./types";

export async function getMovies(): Promise<MoviesResponse> {
    const { data } = await get<MoviesResponse>('movies?page=1');
    return data;
}