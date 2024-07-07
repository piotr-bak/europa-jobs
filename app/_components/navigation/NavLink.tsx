'use client';

import type { NavLink } from "@/app/_types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function NavLink( { href, children }: NavLink ) {
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
                className={`hover:text-congress-blue-600 ${isActive() ? 'text-congress-blue font-semibold' : ''}`}
            >
                {children}
            </Link>
        </>
    )
}
