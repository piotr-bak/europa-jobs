export interface ParsedBlogPostText {
    lead?: string;
    headings?: string[];
    paragraphs?: string[];
    headingsCount: number;
    paragraphsCount: number;
}
