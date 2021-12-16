import NextLink from 'next/link'

export default function HeaderLogo() {
	return (
		<NextLink href='/'>
			<a
				className='
						text-3xl md:text-4xl my-auto font-heading1 font-black text-transparent bg-clip-text
						bg-gradient-to-br from-pink-400 to-red-600 dark:from-blue-600 dark:to-pink-900'>
				{`<Safet Dev/>`}
			</a>
		</NextLink>
	)
}
