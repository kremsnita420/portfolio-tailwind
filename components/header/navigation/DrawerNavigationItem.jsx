import { useRouter } from 'next/router'
import NextLink from 'next/link'

export default function DrawerNavigationItem({ href, text }) {
	const router = useRouter()
	const isActive = router.asPath === href

	return (
		<NextLink href={href}>
			<a
				className={
					(isActive
						? 'font-semibold text-gray-800 dark:text-gray-200'
						: 'font-normal text-gray-800 dark:text-gray-200',
					'p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-200 transition-all')
				}>
				<span className='capsize'>{text}</span>
			</a>
		</NextLink>
	)
}
