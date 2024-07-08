import type { BlogData } from "../_types";

import { ArticleList } from "./ArticleList";
import { FeaturedArticle } from "./FeaturedArticle";
import { getBlogData } from "../_lib/api/getBlogData";
import { formatDate } from "../_lib/utils/formatDate";

export async function ArticleSection() {
    const data: BlogData = await getBlogData();
    if ( !data || data.items.length === 0 ) return <div>No articles found.</div>

    //The below is MVP only. In the production code, a more sophisticated mechanism to establish the featured post(s) should be implemented
    const [featuredArticle, ...otherArticles] = data.items;

    return (
        <section className="grid grid-cols-12">
            <div className="col-start-1 col-end-13 laptop:col-start-3 laptop:col-end-11 mb-16 mx-8 laptop:mx-0">
                <FeaturedArticle
                    title={featuredArticle.title}
                    href={featuredArticle.key}
                    mediaUrl={featuredArticle.mediaUrl}
                    date={formatDate( featuredArticle.addedAt )}
                />
            </div>
            <div className="col-start-1 col-end-13 laptop:col-start-3 laptop:col-end-11 mx-8 laptop:mx-0">
                <ArticleList articles={otherArticles} />
            </div>
        </section>
    )
}
