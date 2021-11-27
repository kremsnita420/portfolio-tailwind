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
			<main className='container mx-auto bg-red-300 dark:bg-red-800'>
				{children}
			</main>
		</>
	)
}
