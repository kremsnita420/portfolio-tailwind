import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Road+Rage&display=swap" rel="stylesheet" />
                </Head>
                <body className="bg-gray-200 dark:bg-gray-800 ">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument