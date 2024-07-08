'use client'

import Image from "next/image";
import Link from "next/link";

import logo from '@/public/images/europa-logo-full.svg';

import { ClientSideMenu } from './ClientSideMenu';

export function Navbar() {
    return (
        <nav className="grid grid-cols-12 justify-center fixed w-full h-24 z-40 bg-gradient-to-t from-concrete-gray to-congress-blue-100">
            <section className='col-start-1 col-end-13 laptop:col-start-2 laptop:col-end-12 flex flex-col laptop:flex-row items-center pt-10 pb-6 border-b border-concrete-gray-300 capitalize'>
                <Link
                    href="/blog"
                >
                    <Image
                        src={logo}
                        alt='europa.jobs logo'
                        aria-hidden='true'
                        className=""
                    />
                </Link>
                <ClientSideMenu />
            </section>
        </nav>
    )
}
