import NextLink from 'next/link'

export default function NavigationItem({ href, text }) {
	return (
		<NextLink href={href}>
			<a className='hidden md:inline-block  p-3 rounded-lg hover:text-gray-500 transition-all'>
				<span className='capsize'>{text}</span>
			</a>
		</NextLink>
	)
}
