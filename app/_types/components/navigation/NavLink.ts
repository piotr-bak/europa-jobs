import type { ReactNode } from "react";

export interface NavLink {
    href: string;
    children: ReactNode;
    onClick?: () => void;
}
