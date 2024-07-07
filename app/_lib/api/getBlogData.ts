import { ENDPOINT_ADDRESS } from "../constants/endpointAddress";

export async function getBlogData( slug?: string, page?: number ) {
    const url = new URL( ENDPOINT_ADDRESS );

    slug ?
        url.pathname += `/article/${slug}` :
        url.searchParams.append( 'Type', 'candidate' );

    console.log( 'slugged url', url.toString() );

    page ?
        url.searchParams.append( 'Page', String( page ) ) : null;


    console.log( 'Fetching from URL:', url.toString() );

    const res = await fetch( url.toString(), {
        next: { revalidate: 3600 } // Revalidate data every hour
    } );

    if ( !res.ok ) {
        throw new Error( `Failed to fetch blog data: ${res.status} ${res.statusText}` );
    }
    const jsonData = await res.json();
    console.log( 'API response', jsonData );

    return jsonData;
}
