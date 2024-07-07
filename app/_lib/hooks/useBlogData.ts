import { useFetch } from "./useFetch";
import { ENDPOINT_ADDRESS } from "../constants/endpointAddress";

export function useBlogData( slug?: string ) {
    const url = new URL( ENDPOINT_ADDRESS );

    slug ?
        url.pathname += `/article/${slug}` :
        url.searchParams.append( 'Type', 'candidate' );

    return useFetch( url.toString() );
}
