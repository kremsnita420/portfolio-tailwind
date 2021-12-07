import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&family=Tourney:wght@100;500;900&display=swap" rel="stylesheet" />
                </Head>
                <body className=" 
                bg-gradient-to-bl from-blue-400 via-green-300 to-blue-400 
                dark:from-yellow-900 dark:via-purple-900 dark:to-yellow-900 
                text-gray-800 dark:text-gray-200 tracking-wider">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument