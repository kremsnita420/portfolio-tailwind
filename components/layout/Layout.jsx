import Head from 'next/head'
import Header from '../header/Header'

export default function Layout({ title, description, children }) {
	return (
		<>
			<Head>
				<title>{title ? `${title} - My Portfolio` : 'My Portfolio'}</title>
				{description && <meta name='description' content={description} />}
			</Head>
			<Header />
			<main
				className='container font-body min-h-[calc(100vh-56px)]
						   flex flex-col items-center
				 		   justify-start mx-auto'>
				{children}
			</main>
		</>
	)
}
