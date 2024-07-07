import Link from "next/link";
import type { ArticleCard } from "../_types"
import Image from "next/image";
import { ArticleTag } from "./ArticleTag";

const dummyText =
    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`

export function FeaturedArticle( { title, href, mediaUrl, date, tags }: ArticleCard ) {

    //the below is for the MVP purposes only, final implementation should opt for more sophisticated mechanism
    const hdImg = mediaUrl.replace( '_medium', '' );

    return (
        <article className="flex p-0.5 rounded-xl overflow-hidden bg-white flex-row min-h-[400px]">
            <div className='flex flex-col w-7/12 pt-16 pb-10 px-12'>
                <time className='text-sm text-concrete-gray-500'>{date}</time>
                <h3 className="text-concrete-gray-900 my-6 text-2xl font-bold">{title}</h3>
                <p className='text-md text-concrete-gray-500 grow'>{dummyText}</p>
                <Link className='text-md font-bold place-self-end' href={`/blog/${href}`}>Read more...</Link>
            </div>
            <div className='w-5/12'>
                <figure className="relative w-full h-full">
                    {( tags && tags.length > 0 ) && tags.map( ( tag, index ) => (
                        <ArticleTag key={index}>{tag}</ArticleTag>
                    ) )}
                    <Image
                        src={hdImg}
                        alt={`illustration for the "${title}" article`}
                        aria-hidden={true}
                        objectFit="cover"
                        quality={50}
                        fill
                        className='border-solid border-2 border-white rounded-l rounded-r-lg'
                    />
                </figure>
            </div>
        </article>
    )
}
