import type { ArticleItem } from "../ArticleItem";
import type { Offer } from "./Offer";
import type { Section } from "./Section";

export interface SinglePost {
    categoryId: number;
    categoryName: string;
    language: string;
    type: string;
    sections: Section[];
    lastEditedAt: string;
    recommended: ArticleItem[];
    offers: Offer[];
    metaDescription: string;
    slug: string;
    id: number;
    title: string;
    key: string;
    mediaUrl: string;
    addedAt: string;
}
