import { StaticImageData } from "next/image";

export interface DestinationCard {
    country: string;
    glyph: string | StaticImageData;
    href: string;
}
