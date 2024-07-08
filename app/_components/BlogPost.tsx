import Image from "next/image";

import { BlogPostText } from "./BlogPostText";
import { formatDate } from "../_lib/utils/formatDate";
import { parseContent } from "../_lib/utils/parseContent";
import { BlogPostData } from "../_types";

export async function BlogPost( { postData }: { postData: BlogPostData } ) {
    const { title, addedAt, categoryName, mediaUrl, paragraphs } = postData;
    const textData = await parseContent( paragraphs )

    return (
        <>
            <h2 className="text-3xl bold mb-8">{title}</h2>
            <div className="laptop:flex laptop:flex-row gap-4 mt-4 mb-8 text-md">
                <time>{formatDate( addedAt )}</time>
                <span>|</span>
                <p>{categoryName}</p>
            </div>
            <div className="mb-24">
                <div className="rounded-md overflow-hidden h-[16rem] laptop:h-[32rem] relative">
                    <Image
                        src={mediaUrl}
                        alt={`Illustration for ${title}`}
                        aria-hidden={true}
                        fill
                        quality={50}
                        className="h-auto object-cover"
                    />
                </div>
                <BlogPostText className="mt-8 text-lg" textData={textData} />
            </div>
        </>
    )
}
