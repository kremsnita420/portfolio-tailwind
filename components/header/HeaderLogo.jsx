import NextLink from 'next/link'

export default function HeaderLogo() {
	return (
		<NextLink href='/'>
			<a
				className='
						text-4xl md:text-6xl my-auto font-heading1 text-transparent bg-clip-text
						bg-gradient-to-br from-pink-400 to-red-600 dark:from-purle-900 dark:to-red-900'>
				{`<Safet Dev/>`}
			</a>
		</NextLink>
	)
}
