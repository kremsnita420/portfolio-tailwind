import NavigationItem from './NavigationItem'

export default function NavigationBar() {
	return (
		<div className='flex items-center justify-end'>
			<nav className=' text-gray-800 dark:text-gray-200 font-heading1 font-black text-2xl'>
				<NavigationItem href='/' text='Home' />
				<NavigationItem href='/portfolio' text='Portfolio' />
				<NavigationItem href='/about' text='About' />
			</nav>
		</div>
	)
}
