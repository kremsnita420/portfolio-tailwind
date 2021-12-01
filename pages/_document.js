import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&family=Tourney:wght@100;500;900&display=swap" rel="stylesheet" />
                </Head>
                <body className=" bg-gradient-to-tr from-yellow-300 via-red-300 to-pink-300">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument