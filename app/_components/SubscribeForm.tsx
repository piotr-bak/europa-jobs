'use client'

import { FormEvent, useState } from "react";

export function SubscribeForm() {
    const [alreadySubscribed, setAlreadySubscribed] = useState( false );

    const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.info( `You've successfully subscribed to our newsletter!` );
        setAlreadySubscribed( true );
    };

    return (
        <div className="bg-gradient-to-tr from-white to-swiss-coffee-50 rounded-xl p-8 laptop:max-w-[24rem] mx-20 laptop:mx-0">
            {alreadySubscribed ?
                <p>You&apos;ve successfully subscribed to our newsletter!</p> :
                <>
                    <p>Subscribe to our newsletter and receive a selection of articles and career advices every week.</p>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label htmlFor="email" className="mt-4 mb-2 text-sm">Your email:</label>
                        <input type='email' id='email' placeholder="Enter your email" className="text-sm p-2 border border-solid border-concrete-gray-200 rounded" />
                        <div className="flex flex-row-reverse">
                            <label htmlFor="tos" className="ml-4 py-4 text-xs text-concrete-gray-500">By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
                            </label>
                            <input type='checkbox' id='tos' required />
                        </div>
                        <button className="w-full bg-concrete-gray-800 rounded-xl text-white uppercase p-3 hover:bg-congress-blue-600">subscribe</button>
                    </form>
                </>
            }
        </div>
    )
}
