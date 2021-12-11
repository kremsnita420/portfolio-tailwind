import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NextNprogress />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp