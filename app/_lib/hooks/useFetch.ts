import useSWR from "swr";

async function fetcher( ...args: Parameters<typeof fetch> ) {
    const response = await fetch( ...args );

    if ( !response.ok ) {
        throw new Error( `${response.status}: ${response.statusText}` );
    }

    return response.json();
}

export function useFetch( url: string ) {
    const { data, error, isValidating } = useSWR( url, fetcher );

    return {
        data,
        isError: !!error,
        isValidating
    }
}
