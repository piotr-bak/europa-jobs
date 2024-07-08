import type { ArticleCard } from "../_types"

import Image from "next/image";
import Link from "next/link";

import { ArticleTag } from "./ArticleTag";

export function ArticleCard( { title, href, mediaUrl, date, tags }: ArticleCard ) {
    return (
        <Link className={'text-base font-bold place-self-end'} href={`/blog/${href}`}>
            <section className="flex p-0.5 rounded-xl overflow-hidden bg-white flex-col">
                <div className='w-full'>
                    <figure className="relative w-full h-64">
                        <Image
                            src={mediaUrl}
                            alt={`illustration for the "${title}" article`}
                            aria-hidden={true}
                            objectFit="cover"
                            quality={85}
                            fill={true}
                            className='border-solid border-2 border-white rounded-t-lg rounded-b'
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black z-10 rounded-t-lg rounded-b"></div>
                        <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between">
                            <div>
                                {( tags && tags.length > 0 ) && tags.map( ( tag, index ) => (
                                    <ArticleTag key={index}>{tag}</ArticleTag>
                                ) )}
                            </div>
                            <h3 className='text-concrete-gray-900 mt-0 text-white text-xl'>{title}</h3>
                        </div>
                    </figure>
                </div>
                <div className='flex flex-row w-full px-4 pt-6 pb-4 items-center justify-between'>
                    <time className='text-md text-concrete-gray-500'>{date}</time>
                    <p className="hover:text-congress-blue-600">Read more...</p>
                </div>
            </section>
        </Link>
    )
}
