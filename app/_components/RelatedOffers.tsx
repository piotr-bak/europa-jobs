import type { Offer } from "../_types";

import { OfferCard } from "./OfferCard";

export function RelatedOffers( { offers }: { readonly offers: Offer[] } ) {
    return (
        <ul>
            {offers?.map( ( item: Offer ) => (
                <li key={item.id}>
                    <OfferCard offer={item} />
                </li>
            ) )}
        </ul>
    )
}
