import type { BlogPostTextProps } from "../_types";

export async function BlogPostText( { className, textData }: Readonly<BlogPostTextProps> ) {
    const { paragraphsCount, headingsCount, ...parsedContent } = textData;
    const articleLength = paragraphsCount > headingsCount ? paragraphsCount : headingsCount;

    const renderContent = () => {
        const content = [];

        if ( parsedContent ) {
            for ( let i = 0; i < articleLength; ++i ) {
                if ( parsedContent.headings && i < headingsCount ) {
                    content.push(
                        <h2 key={`heading-${i}`} className="font-semibold my-2 text-base text-lg">{parsedContent?.headings[i]}</h2>
                    )
                }
                if ( parsedContent.paragraphs && i < paragraphsCount ) {
                    content.push(
                        <p key={`paragraph-${i}`} className="mt-2 mb-8 text-balance">{parsedContent?.paragraphs[i]}</p>
                    )
                }
            }
        }

        return content;
    }

    return (
        <div className={className}>
            {parsedContent && (
                <p className="mb-8 italic">{parsedContent.lead}</p>
            )}
            {renderContent()}
        </div>
    )
}
