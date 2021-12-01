import NextLink from 'next/link'

export default function DrawerNavigationItem({ href, text }) {
	return (
		<NextLink href={href}>
			<a
				className='
				      p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-800
					dark:hover:text-gray-200 transition-all text-5xl my-10'>
				<span className='capsize'>{text}</span>
			</a>
		</NextLink>
	)
}
