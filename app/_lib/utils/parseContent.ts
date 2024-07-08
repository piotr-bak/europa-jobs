import { Parser } from "htmlparser2";
import DOMPurify from "isomorphic-dompurify";

interface ParseResult {
    lead: string;
    headings: string[];
    paragraphs: string[];
    headingsCount: number;
    paragraphsCount: number;
}

const config = {
    ALLOWED_TAGS: ['h2', 'p'],
    ALLOWED_ATTR: []
};

export async function parseContent( htmlContent: string ): Promise<ParseResult> {
    const sanitizedHtml = DOMPurify.sanitize( htmlContent, config );

    const result: ParseResult = {
        lead: '',
        headings: [],
        paragraphs: [],
        headingsCount: 0,
        paragraphsCount: 0,
    };

    let currentTag: string | undefined = undefined;
    let isFirstParagraph = true;
    let currentContent: string = '';
    let insideEmTag = false;

    const handleHeading = ( content: string ) => {
        if ( content.trim() ) {
            result.headings.push( content.trim() );
            result.headingsCount++;
        }
    };

    const handleParagraph = ( content: string ) => {
        if ( content.trim() ) {
            if ( isFirstParagraph ) {
                result.lead = content.trim();
                isFirstParagraph = false;
            } else {
                result.paragraphs.push( content.trim() );
                result.paragraphsCount++;
            }
        }
    };

    const parser = new Parser(
        {
            onopentag( name ) {
                if ( name === 'h2' || name === 'p' ) {
                    currentTag = name;
                    currentContent = '';
                } else if ( name === 'em' ) {
                    insideEmTag = true;
                }
            },
            ontext( text ) {
                if ( currentTag && !insideEmTag ) {
                    currentContent += text;
                }
            },
            onclosetag( tagname ) {
                if ( tagname === 'em' ) {
                    insideEmTag = false;
                    return;
                }

                if ( currentTag !== tagname || insideEmTag ) {
                    return;
                }

                if ( tagname === 'h2' ) {
                    handleHeading( currentContent );
                } else if ( tagname === 'p' ) {
                    handleParagraph( currentContent );
                }

                currentTag = undefined;
                currentContent = '';
            },
        },
        { decodeEntities: true }
    );

    parser.write( sanitizedHtml );
    parser.end();

    return result;
}
