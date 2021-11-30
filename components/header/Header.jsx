import NextLink from 'next/link'
import { useState } from 'react'
import DarkmodeButton from './DarkmodeButton.jsx'
import HeaderLogo from './HeaderLogo.jsx'

import DrawerNavigationItem from './mobile-navigation/DrawerNavigationItem.jsx'
import NavigationBar from './navigation/NavigationBar.jsx'

export default function Header() {
	const [sidebarVisible, setSidebarVisible] = useState(false)

	//open-close sidebar
	const sidebarOpenHandler = () => {
		setSidebarVisible(true)
	}
	const sidebarCloseHandler = () => {
		setSidebarVisible(false)
	}

	return (
		<header className=' bg-gray-800 dark:bg-gray-200 flex align-center justify-center py-2 '>
			<div className='container  flex align-center justify-between px-5 sm:px-0'>
				{/* header logo */}
				<NextLink href='/'>
					<a className='text-5xl font-body text-gray-200 dark:text-gray-800'>
						Safet Dev
					</a>
				</NextLink>

				{/* navigation bar */}
				<NavigationBar />

				<div className='flex align-center justify-between'>
					{/* darkmode button */}
					<DarkmodeButton />
					{/* mobile nav button */}
					{!sidebarVisible ? (
						<button
							className='flex md:hidden items-center justify-center p-2 h-10 w-10 my-auto ml-2
									   font-semibold rounded-md transition-all z-50'
							onClick={sidebarOpenHandler}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 text-gray-200 dark:text-gray-800'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</button>
					) : (
						<button
							className='p-2 h-10 w-10 my-auto bg-gray-800 dark:bg-gray-200 font-semibold
									   rounded-md  transition-all z-50'
							onClick={sidebarCloseHandler}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6  text-gray-200 dark:text-gray-800'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					)}
				</div>
			</div>

			{/* drawer */}
			<div
				className={
					!sidebarVisible
						? 'top-0 absolute right-[100%] w-full h-full bg-gray-800 dark:bg-gray-200 '
						: 'top-0 absolute right-0 w-full h-full bg-gray-800 dark:bg-gray-200 z-10 '
				}>
				<div className='flex flex-col h-2/3 m-auto w-2/3 items-center justify-around'>
					<div>
						<nav className='flex flex-col items-center justify-start text-gray-200 dark:text-gray-800'>
							<DrawerNavigationItem
								className='inline-block'
								href='/'
								text='About'
							/>
							<DrawerNavigationItem href='/projects' text='Projects' />
							<DrawerNavigationItem href='/skills' text='Skills' />
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}
