import Link from "next/link";

export function LoginBtn( { className }: { className: string } ) {

    //moved to separate component in order to be scalable in the future - for ex. to show active user name after successful login, etc.
    return (
        <Link
            href={'/'}
            className={`${className}`}>
            log in / sign up
        </Link>
    )
}
