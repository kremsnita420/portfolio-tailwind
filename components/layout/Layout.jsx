import Head from 'next/head'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import ScrollToButton from './ScrollTopButton'

export default function Layout({ title, description, children }) {
	return (
		<>
			<Head>
				<title>{title ? `${title} - My Portfolio` : 'My Portfolio'}</title>
				{description && <meta name='description' content={description} />}
				<meta name='viewport' content='width=device-width, user-scalable=no' />
				<meta charSet='utf-8' />
				<meta property='og:image' content='/images/preview.jpg' key='ogimage' />
			</Head>
			<Header />
			<main
				className='container font-body
						   flex flex-col items-center  px-5
				 		   justify-center mx-auto relative'>
				{children}
				<ScrollToButton />
			</main>
			<Footer />
		</>
	)
}
