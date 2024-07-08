import Link from "next/link";

import { routes } from "@/app/_configs/footerRoutes";


export function Footer() {
    return (
        //Icons by Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
        <footer className="w-full pb-32 laptop:pb-6 bg-congress-blue-975 text-concrete-gray-200 grid grid-cols-12">
            <div className="hidden laptop:block laptop:col-start-2 laptop:col-end-3 py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-concrete-gray-300 w-10 h-10 " viewBox="0 0 32.912 25.966">
                    <g id="Group_1" data-name="Group 1" transform="translate(-945.277 -301.864)">
                        <path id="Path_127" data-name="Path 127" d="M1386.423,624.224a2.956,2.956,0,1,0,2.956,2.956,2.956,2.956,0,0,0-2.956-2.956" transform="translate(-411.19 -302.305)" fill="#00b559" />
                        <path id="Path_128" data-name="Path 128" d="M951.176,314.9a9.086,9.086,0,0,1,.65-3.423,8.544,8.544,0,0,1,4.417-4.651,7.794,7.794,0,0,1,6.427,0,9.071,9.071,0,0,1,2.4,1.627l-13.4,9.384a8.83,8.83,0,0,1-.492-2.936m16.119,2.937q-.073.209-.157.415a8.259,8.259,0,0,1-1.8,2.73,8.9,8.9,0,0,1-2.664,1.828,8.045,8.045,0,0,1-6.435,0,8.594,8.594,0,0,1-2.355-1.563l13.39-9.375h0l3.864-2.705a13.26,13.26,0,0,0-2.4-3.447,12.818,12.818,0,0,0-9.253-3.853,12.643,12.643,0,0,0-5.12,1.037,13.017,13.017,0,0,0-6.861,6.97,12.98,12.98,0,0,0-1,5.067,12.639,12.639,0,0,0,1,5.022q.131.3.275.6l-2.5,1.751v4.96l4.829-3.382c.05.052.1.106.149.157a13.282,13.282,0,0,0,14.366,2.768,12.674,12.674,0,0,0,4.112-2.769,13.23,13.23,0,0,0,2.727-4.083,12.137,12.137,0,0,0,.683-2.125Z" transform="translate(0)" />
                    </g>
                </svg>
            </div>

            <div className="col-start-2 laptop:col-start-3 col-end-12 py-12 -mr-2 divide-x-2 divide-concrete-gray-300 text-center laptop:text-right">
                {routes && routes.map( ( route, index ) => (
                    <Link key={`route-${index}`}
                        className="px-4 hover:text-congress-blue-600 text-xl laptop:text-base leading-10 laptop:leading-normal"
                        href={route.href}
                    >
                        {route.name}
                    </Link>
                ) )}
            </div>
            <div className="col-start-2 col-end-12 text-xs">
                <div className="flex flex-col laptop:flex-row justify-between items-center text-concrete-gray-400">
                    <p>
                        © Copyright 2014-2024 europa.jobs | All Rights Reserved
                    </p>
                    <div className="flex flex-row gap-4 items-center my-8 laptop:my-0 order-first laptop:order-last">
                        <Link
                            href="/"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-concrete-gray-400 w-8 laptop:w-4 hover:fill-congress-blue-600" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                        </Link>
                        <span>|</span>
                        <Link
                            href="/"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-concrete-gray-400 w-8 laptop:w-4 h-8 laptop:h-4 hover:fill-congress-blue-600" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>

                        </Link>
                        <span>|</span>
                        <Link
                            href="/"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-concrete-gray-400 w-8 laptop:w-5 hover:fill-congress-blue-600" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </Link>
                        <span>|</span>
                        <Link
                            href="/"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-concrete-gray-400 w-8 h-8 laptop:w-4 laptop:h-4 hover:fill-congress-blue-600" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" /></svg>

                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
