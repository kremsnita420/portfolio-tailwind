import NavigationItem from './NavigationItem'

export default function NavigationBar() {
	return (
		<nav className='flex items-center justify-start text-gray-200 dark:text-gray-800 font-heading1 font-black text-2xl'>
			<NavigationItem href='/' text='Home' />
			<NavigationItem href='/skills' text='Skills' />
			<NavigationItem href='/about' text='About' />
		</nav>
	)
}
