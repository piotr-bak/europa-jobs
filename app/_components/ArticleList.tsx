'use client'

import type { ArticleItem } from "@/app/_types";
import { ArticleCard } from "./ArticleCard";
import { formatDate } from "../_lib/utils/formatDate";
import { useState } from "react";


export function ArticleList( { articles }: { articles: ArticleItem[] } ) {
    const DISPLAY_ELEMENT_COUNT = 6;
    const [showAll, setShowAll] = useState( false );

    const itemsToDisplay = showAll ? articles : articles.slice( 0, DISPLAY_ELEMENT_COUNT );

    return (
        <div>
            <ul className="grid grid-cols-3 gap-8">
                {itemsToDisplay.map( ( item: ArticleItem, index ) => (
                    <li key={index}>
                        <ArticleCard
                            title={item.title}
                            href={item.key}
                            mediaUrl={item.mediaUrl}
                            date={formatDate( item.addedAt )}
                        />
                    </li>
                ) )}
            </ul>
            <button onClick={() => setShowAll( prev => !prev )}>{showAll ? 'see less' : 'see more'}</button>
        </div>
    )
}
