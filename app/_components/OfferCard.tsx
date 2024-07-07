import Link from "next/link";
import { JOB_BOARD_ADDRESS } from "../_lib/constants/jobBoardAddress";
import type { Offer } from "../_types";
import Image from "next/image";

export function OfferCard( { offer }: { offer: Offer } ) {
    const { location, employer, salary } = offer;
    const rateType = salary?.frequency === 'hourly' ? 'hour' : 'month';

    return (
        <div className="my-4 p-8 rounded-xl bg-white overflow-hidden bg-gradient-to-tr from-white to-swiss-coffee-50">
            <Link
                href={`${JOB_BOARD_ADDRESS}/${offer.slug}`}
            >
                <p className="text-sm align-super mb-1">{location.countryName}</p>
                <h4 className="text-md my-2">{offer.title}</h4>
                <div className="pb-4 border-b border-concrete-gray-200 border-black border-solid">
                    {salary && ( salary?.amount ?
                        <p className="text-md font-semibold">{salary.amount}</p> :
                        <p className="text-md font-semibold">{salary?.amountMin} - {salary?.amountMax} {salary?.currency} {salary?.type} / {rateType}</p> )
                    }
                </div>
                <div className="flex flex-row items-center py-2">
                    {employer.logoUrl &&
                        <Image
                            src={`https://ej-prod-2.fra1.digitaloceanspaces.com/uploads/employer/${employer.id}/${employer.logoUrl}`}
                            alt={`logo of ${employer}`}
                            width={50}
                            height={50}
                            className="border w-10 h-10 rounded-md border-solid border-concrete-gray-100 mr-2"
                        />}
                    <p className="text-sm">{employer.name}</p>
                </div>
                <div>
                </div>
            </Link>
        </div>
    )
}

