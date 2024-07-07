import { Parser } from "htmlparser2";
import DOMPurify from "isomorphic-dompurify";

const config = {
    ALLOWED_TAGS: ['h2', 'p'],
    ALLOWED_ATTR: []
};

export async function parseContent( htmlContent: string ) {
    const sanitizedHtml = DOMPurify.sanitize( htmlContent, config );

    const result = {
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
                    console.log( "Opened tag:", name );
                    currentTag = name;
                    currentContent = '';
                } else if ( name === 'em' ) {
                    insideEmTag = true; // Set flag when entering <em> tag
                }
            },
            ontext( text ) {
                if ( currentTag && !insideEmTag ) {
                    console.log( "Text content:", text );
                    currentContent += text;
                }
            },
            onclosetag( tagname ) {
                if ( tagname === 'em' ) {
                    insideEmTag = false;  // Reset flag when exiting <em> tag
                } else if ( currentTag === tagname && !insideEmTag ) {
                    console.log( "Closed tag:", tagname );
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
                    console.log( result );
                }
            },
        },
        { decodeEntities: true }
    );

    parser.write( sanitizedHtml );
    parser.end();

    return result;
}
