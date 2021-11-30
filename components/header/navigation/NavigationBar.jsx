import NavigationItem from './NavigationItem'

export default function NavigationBar() {
	return (
		<nav className='flex items-center justify-start text-gray-200 dark:text-gray-800'>
			<NavigationItem href='/' text='Home' />
			<NavigationItem href='/projects' text='Projects' />
		</nav>
	)
}
