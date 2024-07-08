import { DestinationCard } from "./DestinationCard";
import { destinations } from "../_configs/destinations";

export function DestinationGuides() {
    return (
        <section>
            <div className="grid grid-cols-3 laptop:grid-cols-12">
                <div className="mx-8 laptop:mx-0 col-start-1 col-end-4 laptop:col-start-3 laptop:col-end-11 ">
                    <h3 className="mt-32 text-3xl capitalize mb-2">top destinations</h3>
                    <p className="text-base pb-6">Explore guides by countries:</p>
                </div>
                <div className="col-start-1 col-end-4 laptop:col-start-3 laptop:col-end-11 ">
                    {destinations && (

                        <ul className="mb-8 flex flex-row gap-6 laptop:gap-3 flex-wrap justify-center">
                            {destinations.map( ( item, index ) => (
                                <li key={`destination-guide-${index}`} className="w-60 h-48 ">
                                    <DestinationCard
                                        country={item.destination}
                                        glyph={item.glyph}
                                        href={item.href}
                                    />
                                </li>
                            ) )}
                        </ul>

                    )}
                </div>

            </div>

        </section >
    )
}
