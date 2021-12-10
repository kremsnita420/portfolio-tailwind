import Head from 'next/head'
import Header from '../header/Header'
import ScrollToButton from './ScrollTopButton'

export default function Layout({ title, description, children }) {
	return (
		<>
			<Head>
				<title>{title ? `${title} - My Portfolio` : 'My Portfolio'}</title>
				{description && <meta name='description' content={description} />}
			</Head>
			<Header />
			<main
				className='container font-body
						   flex flex-col items-center sm:items-start px-5
				 		   justify-center mx-auto relative'>
				{children}
				<ScrollToButton />
			</main>
		</>
	)
}
