import { BlogPost } from "@/app/_components/BlogPost";
import { RecommendedPosts } from "@/app/_components/RecommendedPosts";
import { SuggestedOffers } from "@/app/_components/SuggestedOffers";
import { getBlogData } from "@/app/_lib/api/getBlogData"



export default async function Page( { params }: { params: { slug: string } } ) {
    const data = await getBlogData( params.slug );
    const { recommended, offers, ...postData } = data;
    const paragraphs = data.sections[0].content;
    const singlePost = { ...postData, paragraphs }

    return (
        <div className="grid grid-cols-12 py-48">
            <main className="col-start-3 col-end-9 max-w-prose text-sm">
                <BlogPost postData={singlePost} />
                <p className="mb-8 text-xl">You may also like:</p>
                <RecommendedPosts posts={recommended} />
            </main>
            <aside className="col-start-9 col-end-12">
                <section className="sticky top-48">
                    <h3 className="mb-8 text-xl">Related offers:</h3>
                    <SuggestedOffers offers={offers} />
                </section>
            </aside>
        </div>
    )

}

//https://api.europa.jobs/blog?pageNumber=3
