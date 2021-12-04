import NextLink from 'next/link'

export default function HeaderLogo() {
	return (
		<NextLink href='/'>
			<a
				className='
						text-3xl md:text-4xl my-auto font-heading1 text-transparent bg-clip-text
						bg-gradient-to-br dark:from-pink-400 dark:to-red-600 from-blue-600 to-pink-900'>
				{`<Safet Dev/>`}
			</a>
		</NextLink>
	)
}
