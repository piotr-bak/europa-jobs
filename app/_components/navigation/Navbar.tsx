import type { Route } from "@/app/_types";
import { routes } from "./routes";
import { NavLink } from "./NavLink";
import logo from '@/app/_assets/europa-logo-full.svg';
import Image from "next/image";
import { LoginBtn } from "./LoginBtn";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex flex-row justify-center text-concrete-gray-700 fixed w-full h-24 z-50 bg-gradient-to-t from-concrete-gray to-congress-blue-100">
            <section className={'flex flex-row items-center justify-between pt-10 pb-6 w-screen laptop:w-4/5 border-b border-concrete-gray-300 capitalize'}>
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
                <ul className="flex flex-row space-x-10">
                    {( routes as Route[] ).map( ( route ) => {
                        return (
                            <li key={route.name}>
                                <NavLink href={route.href}>
                                    {route.name}
                                </NavLink>
                            </li>
                        )
                    } )}
                </ul>
                <LoginBtn />
            </section>
        </nav>
    )
}
