import Head from 'next/head'
import Header from './header/Header'

export default function Layout({ title, description, children }) {
	return (
		<>
			<Head>
				<title>{title ? `${title} - My Portfolio` : 'My Portfolio'}</title>
				{description && <meta name='description' content={description} />}
			</Head>
			<Header />
			<main className='container h-full mx-auto bg-gray-300 dark:bg-gray-700'>
				{children}
			</main>
		</>
	)
}
