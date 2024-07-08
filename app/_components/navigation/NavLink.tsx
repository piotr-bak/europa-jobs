'use client';

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavLink } from "@/app/_types";


export function NavLink( { href, children, onClick }: Readonly<NavLink> ) {
    const pathname = usePathname();

    const isActive = () => {
        if ( href === '/' ) {
            return pathname === href;
        }
        return pathname === href || pathname.startsWith( `${href}/` );
    };

    return (
        <>
            <Link
                href={href}
                onClick={onClick}
                className={`hover:text-congress-blue-600 ${isActive() ? 'text-congress-blue-400 laptop:text-congress-blue font-semibold' : ''} text-3xl laptop:text-base`}
            >
                {children}
            </Link>
        </>
    )
}
