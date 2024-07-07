import type { ArticleItem } from "./ArticleItem";

export interface BlogData {
    categoryName: string | null;
    countryEnum: string | null;
    isNews: boolean;
    isGeneralWorkingAbroadInformations: boolean;
    items: ArticleItem[];
    itemsCount: number,
    currentPage: number,
    totalPages: number
}
