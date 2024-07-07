import type { Employer } from "../Employer";
import type { Location } from "../Location";
import type { Salary } from "../Salary";

export interface Offer {
    id: number;
    slug: string;
    title: string;
    videoUrl: string | null;
    employer: Employer;
    location: Location;
    salary: Salary | null;
}
