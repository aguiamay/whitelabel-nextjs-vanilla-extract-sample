import { Html, Head, Main, NextScript } from 'next/document';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);

        // Adiciona o atributo media="all" às tags <link> de CSS
        initialProps.head = initialProps.head?.map((element) => {
            if (element?.type === 'link' && element.props.rel === 'stylesheet') {
                return {
                    ...element,
                    props: {
                        ...element.props,
                        media: 'all',
                    },
                };
            }
            return element;
        });

        return initialProps;
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;