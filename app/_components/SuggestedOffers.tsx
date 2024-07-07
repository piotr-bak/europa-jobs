import type { Offer } from "../_types";
import { OfferCard } from "./OfferCard";

export function SuggestedOffers( { offers }: { offers: Offer[] } ) {
    return (
        <>
            {offers && offers.map( ( item: Offer, index: number ) => (
                <li key={`offer-${index}`}>
                    <OfferCard offer={item} />
                </li>
            ) )}
        </>
    )
}
