import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="bg-red-800 dark:bg-red-300 text-white dark:text-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument