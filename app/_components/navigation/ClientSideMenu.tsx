'use client'

import { useState } from "react";

import type { Route } from "@/app/_types";

import { LoginBtn } from "./LoginBtn";
import { NavLink } from "./NavLink";
import { SearchBar } from "./SearchBar";
import { routes } from "../../_configs/navRoutes";

export function ClientSideMenu() {
    const [menuVisible, setMenuVisible] = useState( false );

    return (
        <>
            <div className={`opacity-95 laptop:opacity-100 fixed bottom-24 left-0 right-0 laptop:static flex-col-reverse mt-7 laptop:mt-0 laptop:flex-row laptop:justify-between w-full bg-gradient-to-t from-congress-blue-975 to-congress-blue-950 laptop:bg-none laptop:flex text-white laptop:text-concrete-gray-700 ${menuVisible ? 'flex' : 'hidden'}`}>
                <ul className="flex flex-col-reverse laptop:flex-row laptop:space-x-10 laptop:ml-12">
                    {( routes as Route[] ).map( ( route ) => {
                        return (
                            <li key={route.name}
                                className="p-6 laptop:p-0">
                                <NavLink
                                    href={route.href}
                                    onClick={() => setMenuVisible( false )}
                                >
                                    {route.name}
                                </NavLink>
                            </li>
                        )
                    } )}
                </ul>

                <div className="flex flex-col laptop:flex-row laptop:items-center laptop:divide-x-2 laptop:divide-concrete-gray-500 gap-4">
                    <div className="hidden laptop:flex relative">
                        <SearchBar />
                    </div>
                    <LoginBtn className="laptop:px-4 hover:text-congress-blue-600 text-3xl laptop:text-base p-6 laptop:p-0 mt-4 laptop:mt-0" />
                </div>
            </div>
            <div className="fixed bottom-0 left-0 h-24 opacity-95 bg-congress-blue-975 text-white w-full flex flex-row items-center justify-center laptop:hidden">
                <button className="laptop:hidden flex flex-row items-center gap-4"
                    onClick={() => setMenuVisible( ( prev ) => !prev )}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-white" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    <span className="capitalize text-xl">menu</span>
                </button>
            </div>
        </>
    )
}
