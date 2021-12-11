import Head from 'next/head'
import Header from '../header/Header'
import ScrollToButton from './ScrollTopButton'

export default function Layout({ title, description, children }) {
	const previewImage = '/images/preview.jpg'
	return (
		<>
			<Head>
				<title>{title ? `${title} - My Portfolio` : 'My Portfolio'}</title>
				{description && <meta name='description' content={description} />}
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
				<meta property='og:image' content={previewImage} key='ogimage' />
			</Head>
			<Header />
			<main
				className='container font-body
						   flex flex-col items-center md:items-start px-5
				 		   justify-center mx-auto relative'>
				{children}
				<ScrollToButton />
			</main>
		</>
	)
}
