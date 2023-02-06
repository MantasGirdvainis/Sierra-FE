import { get } from '../shared/methods';

type SortOption = { code: string; name: string };

export async function getSortOptions(): Promise<SortOption[]> {
    const { data } = await get<SortOption[]>(`sort-options`);
    return data;
};
