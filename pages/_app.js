import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import NextNprogress from 'nextjs-progressbar'



function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
      <NextNprogress height={6} color='#1E40AF' options={{ easing: 'ease', speed: 500, }, { showSpinner: false }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp