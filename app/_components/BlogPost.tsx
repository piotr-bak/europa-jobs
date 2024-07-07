import Image from "next/image";
import { BlogPostData } from "../_types";
import { BlogPostText } from "./BlogPostText";
import { formatDate } from "../_lib/utils/formatDate";
import { parseContent } from "../_lib/utils/parseContent";

export async function BlogPost( { postData }: { postData: BlogPostData } ) {
    const { title, addedAt, categoryName, mediaUrl, paragraphs } = postData;
    const textData = await parseContent( paragraphs )

    return (
        <>
            <h2 className="text-3xl bold mb-4">{title}</h2>
            <div className="flex flex-row gap-4 my-4 text-md">
                <time>{formatDate( addedAt )}</time>
                <span>|</span>
                <p>{categoryName}</p>
            </div>
            <div className="mb-24">
                <div className="rounded-md overflow-hidden h-96 relative">
                    <Image
                        src={mediaUrl}
                        alt={`Illustration for ${title}`}
                        aria-hidden={true}
                        fill
                        quality={50}
                        className="h-auto object-contain"
                    />
                </div>
                <BlogPostText className="mt-8 text-lg" textData={textData} />
            </div>
        </>
    )
}
