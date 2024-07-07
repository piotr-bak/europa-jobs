import Link from "next/link";

export function LoginBtn() {
    return (
        <Link
            href={'/'}
            className={'hover:text-chateau-green-900'}>
            log in / sign up
        </Link>
    )
}
