import { BlogPost } from "@/app/_components/BlogPost";
import { RecommendedPosts } from "@/app/_components/RecommendedPosts";
import { RelatedOffers } from "@/app/_components/RelatedOffers";
import { SubscribeForm } from "@/app/_components/SubscribeForm";
import { getBlogData } from "@/app/_lib/api/getBlogData"

export default async function Page( { params }: { params: { slug: string } } ) {
    const data = await getBlogData( params.slug );
    const { recommended, offers, ...postData } = data;
    const paragraphs = data.sections[0].content;
    const singlePost = { ...postData, paragraphs }

    return (
        <div className="grid grid-cols-1 justify-items-center laptop:grid-cols-12 laptop:justify-items-stretch py-48">
            <main className="flex-wrap laptop:col-start-3 laptop:col-end-8 max-w-[85ch] text-sm px-8 laptop:px-0">
                <BlogPost postData={singlePost} />
                <p className="mb-8 text-xl pb-4 border-b border-solid border-concrete-gray-200">You may also like:</p>
                <RecommendedPosts posts={recommended} />
            </main>
            <aside className="laptop:col-start-9 laptop:col-end-12">
                <section className="sticky laptop:top-48 laptop:max-w-[24rem]">
                    <div className="mb-16">
                        <h3 className="mt-16 laptop:mt-0 mb-8 text-xl pb-4 border-b border-solid border-concrete-gray-200">Subscribe:</h3>
                        <SubscribeForm />
                    </div>

                    <h3 className="mb-8 text-xl pb-4 border-b border-solid border-concrete-gray-200">Related offers:</h3>
                    <RelatedOffers offers={offers} />
                </section>
            </aside>
        </div>
    )

}

//https://api.europa.jobs/blog?pageNumber=3
