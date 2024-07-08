import type { DestinationCard } from "../_types"

import Image from "next/image";
import Link from "next/link";

export function DestinationCard( { country, glyph, href }: DestinationCard ) {
    return (
        <Link className={'text-md font-bold place-self-end'} href={`${href}`}>
            <section className="flex p-0.5 rounded-xl overflow-hidden bg-white flex-col">
                <div className='w-full'>
                    <figure className="relative w-full h-48">
                        <Image
                            src={glyph}
                            alt={`view of ${country}`}
                            aria-hidden={true}
                            objectFit="cover"
                            quality={50}
                            fill={true}
                            className='border-solid border-2 border-white rounded-md'
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black to-transparent opacity-75 z-10 rounded-sm"></div>
                        <div className="absolute inset-0 z-20 p-4 flex flex-col items-center justify-center">
                            <h3 className='text-concrete-gray-900 mt-0 text-white text-xl font-semibold capitalize hover:text-congress-blue-600'>{country}</h3>
                        </div>
                    </figure>
                </div>
            </section>
        </Link>
    )
}
