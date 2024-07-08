'use client'

import { useState } from "react";

import type { ArticleItem } from "@/app/_types";

import { ArticleCard } from "./ArticleCard";
import { formatDate } from "../_lib/utils/formatDate";


export function ArticleList( { articles }: { readonly articles: ArticleItem[] } ) {
    const DISPLAY_ELEMENT_COUNT = 6;
    const [showAll, setShowAll] = useState( false );

    const itemsToDisplay = showAll ? articles : articles.slice( 0, DISPLAY_ELEMENT_COUNT );

    return (
        <div>
            <ul className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 tablet:gap-6 laptop:gap-8">
                {itemsToDisplay.map( ( item: ArticleItem ) => (
                    <li key={item.id}>
                        <ArticleCard
                            title={item.title}
                            href={item.key}
                            mediaUrl={item.mediaUrl}
                            date={formatDate( item.addedAt )}
                        />
                    </li>
                ) )}
            </ul>
            <div className="w-full text-center py-4">
                <button
                    type="button"
                    className="bg-white mt-8 px-8 py-4 text-base rounded-xl hover:bg-congress-blue-600 hover:text-concrete-gray-50 text-concrete-gray-900 font-semibold"
                    onClick={() => setShowAll( prev => !prev )}
                >
                    {showAll ? 'See less' : 'See more'}
                </button>
            </div>
        </div>
    )
}
