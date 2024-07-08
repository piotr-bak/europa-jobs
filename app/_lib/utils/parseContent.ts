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
    let insideEmTag = false;  // Flag to track if inside <em> tag

    const parser = new Parser(
        {
            onopentag( name ) {
                if ( name === 'h2' || name === 'p' ) {
                    currentTag = name;
                    currentContent = '';
                } else if ( name === 'em' ) {
                    insideEmTag = true; // Set flag when entering <em> tag
                }
            },
            ontext( text ) {
                if ( currentTag && !insideEmTag ) {
                    currentContent += text;
                }
            },
            onclosetag( tagname ) {
                if ( tagname === 'em' ) {
                    insideEmTag = false;  // Reset flag when exiting <em> tag
                } else if ( currentTag === tagname && !insideEmTag ) {
                    if ( tagname === 'h2' ) {
                        if ( currentContent.trim() ) {
                            result.headings.push( currentContent.trim() );
                            result.headingsCount++;
                        }
                    } else if ( tagname === 'p' ) {
                        if ( currentContent.trim() ) {
                            if ( isFirstParagraph ) {
                                result.lead = currentContent.trim();
                                isFirstParagraph = false;
                            } else {
                                result.paragraphs.push( currentContent.trim() );
                                result.paragraphsCount++;
                            }
                        }
                    }
                    currentTag = undefined;
                    currentContent = '';
                }
            },
        },
        { decodeEntities: true }
    );

    parser.write( sanitizedHtml );
    parser.end();

    return result;
}
