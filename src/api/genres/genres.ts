import { get } from '../shared/methods'
import { Genre } from '../movies/types'


export async function getGenres(): Promise<Genre[]> {
    const { data } = await get<Genre[]>(`genres`);
    return data;
};
