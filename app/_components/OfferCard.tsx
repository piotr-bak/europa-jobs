import type { Offer } from "../_types";

import Image from "next/image";
import Link from "next/link";

import placeholderIcon from '@/public/images/icons/briefcase.png'

import { JOB_BOARD_ADDRESS } from "../_lib/constants/jobBoardAddress";

export function OfferCard( { offer }: { offer: Offer } ) {
    const { location, employer, salary } = offer;
    const rateType = salary?.frequency === 'hourly' ? 'hour' : 'month';

    return (
        <div className="my-4 p-8 rounded-xl bg-white overflow-hidden bg-gradient-to-tr from-white to-swiss-coffee-50 max-w-[24rem]">
            <Link
                href={`${JOB_BOARD_ADDRESS}/${offer.slug}`}
                className="flex items-start items-center"
            >
                <div className="flex-shrink-0 w-12 h-12 border rounded-md border-solid border-concrete-gray-100 mr-6 content-center">
                    {employer.logoUrl ?
                        <Image
                            src={`https://ej-prod-2.fra1.digitaloceanspaces.com/uploads/employer/${employer.id}/${employer.logoUrl}`}
                            alt={`logo of ${employer}`}
                            width={50}
                            height={50}
                            className="rounded p-1"
                        /> :
                        <Image
                            src={placeholderIcon}
                            alt={`logo of ${employer}`}
                            width={32}
                            height={32}
                            className="w-12 h-12 p-4 rounded-md object-contain opacity-40"
                        />
                    }
                </div>
                <div className="flex-grow">
                    <h4 className="text-md">{offer.title}</h4>
                    <div className="py-2">
                        {salary && ( salary?.amount ?
                            <p className="text-md font-semibold">{salary.amount}</p> :
                            <p className="text-md font-semibold">{salary?.amountMin} - {salary?.amountMax} {salary?.currency} {salary?.type} / {rateType}</p> )
                        }
                    </div>
                    <div className="flex flex-row text-sm flex-wrap py-2">
                        <p className="">{location.countryName}</p>
                        <span className="px-4 text-concrete-gray-200">|</span>
                        <p className="">{employer.name}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

