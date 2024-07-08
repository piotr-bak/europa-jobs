import type { ArticleCard } from "../_types"

import Image from "next/image";
import Link from "next/link";

import { ArticleTag } from "./ArticleTag";

//the idea would be to display the first paragraph of the Featured Article inside the card - however it would require the API adjustment, hence the below
const dummyText =
    `Kalendarze reklamowe powinny robić dobre wrażenie na osobach, którym je wręczysz. Mimo że mogą być uznane jedynie za gadżet reklamowy – dobrze wykonany, przemyślany produkt zyskuje zupełnie nową wartość, czyli użyteczność. Dowiedz się, czym jeszcze może się wyróżniać kalendarz firmowy.`

export function FeaturedArticle( { title, href, mediaUrl, date, tags }: Readonly<ArticleCard> ) {

    //the below is for the MVP purposes only, final implementation should preferably opt for a more sophisticated mechanism - also requriring API adjustment
    const hdImg = mediaUrl.replace( '_medium', '' );

    return (
        <article className="flex p-0.5 rounded-xl overflow-hidden bg-white flex-col laptop:flex-row min-h-[400px]">
            <div className='flex flex-col laptop:w-7/12 pt-16 pb-10 px-12'>
                <time className='text-sm text-concrete-gray-500'>{date}</time>
                <h3 className="text-concrete-gray-900 my-6 text-2xl font-bold">{title}</h3>
                <p className='text-md text-concrete-gray-500 grow pb-8'>{dummyText}</p>
                <Link className='text-md font-bold place-self-end hover:text-congress-blue-600' href={`/blog/${href}`}>Read more...</Link>
            </div>
            <div className='order-first laptop:order-last laptop:w-5/12'>
                <figure className="relative w-full h-48 tablet:h-80 laptop:h-full">
                    {( tags && tags.length > 0 ) && tags.map( ( tag, index ) => (
                        <ArticleTag key={`${tag}-${index}`}>{tag}</ArticleTag>
                    ) )}
                    <Image
                        src={hdImg}
                        alt={`illustration for the "${title}" article`}
                        aria-hidden={true}
                        objectFit="cover"
                        quality={50}
                        fill
                        className='border-solid border-2 border-white rounded-lg'
                    />
                </figure>
            </div>
        </article>
    )
}
