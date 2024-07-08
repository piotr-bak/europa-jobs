'use client'

import { FormEvent, useState, useRef } from "react"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function SearchBar() {
    const [isExpanded, setIsExpanded] = useState( false );
    const formRef = useRef<HTMLFormElement>( null );
    const inputRef = useRef<HTMLInputElement>( null );

    const searchIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-concrete-gray-600 hover:fill-congress-blue-600"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
    )

    useGSAP( () => {
        if ( isExpanded && inputRef.current ) {
            gsap.to( inputRef.current, {
                width: "24rem",
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => inputRef.current?.focus()
            } );
        }
    }, { dependencies: [isExpanded] } );

    const handleOpen = () => {
        setIsExpanded( true );
    }

    const handleClose = () => {
        if ( inputRef.current ) {
            gsap.to( inputRef.current, {
                width: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => setIsExpanded( false )
            } );
        }
    }

    const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.info( `Search successful` );
    };

    return (
        <div className="relative">
            {isExpanded ? (
                <form ref={formRef} onSubmit={handleSubmit} className="absolute right-0 top-0 z-50 -mt-3">
                    <div className="flex flex-row items-center">
                        <div className="flex items-center overflow-hidden">
                            <input
                                ref={inputRef}
                                type='text'
                                id="searchBox"
                                placeholder="Enter search term"
                                className="mr-2 border-b border-solid border-black p-1 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-congress-blue-600 focus-visible:border-transparent"
                                style={{ width: 0 }}
                                onKeyDown={( event ) => {
                                    if ( event.key === 'Escape' && isExpanded ) {
                                        handleClose();
                                    }
                                }}
                            />
                        </div>
                        <button type='submit' className="w-5 h-5 mr-3">{searchIcon}</button>
                        <button onClick={handleClose} className="capitalize w-16 hover:text-congress-blue-600">close</button>
                    </div>
                </form>
            ) : (
                <button onClick={handleOpen} className="flex flex-row items-center w-24">
                    {searchIcon}
                    <span className="ml-4 capitalize text-base hover:text-congress-blue-600">search</span>
                </button>
            )}
        </div>
    )
}
