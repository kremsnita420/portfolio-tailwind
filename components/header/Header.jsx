import { useState } from 'react'
import SocialIcons from '../contact-form/SocialIcons.jsx'
import CtaButton from '../layout/CtaButton.jsx'
import DarkmodeButton from './DarkmodeButton.jsx.jsx'

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
		<header className='container mx-auto flex items-center px-5 z-20'>
			{/* header logo */}
			<HeaderLogo />
			<div className='flex-1'></div>
			<div className='flex items-center '>
				{/* navigation bar */}
				<NavigationBar />

				{/* darkmode button */}
				<DarkmodeButton />
			</div>

			<div className='flex items-center justify-between'>
				{/* mobile nav button */}

				<button
					className='flex md:hidden items-center justify-center p-2 h-12 w-12 my-auto ml-2
									   font-semibold rounded-md hover:ring-2 ring-gray-500 transition-all z-10'
					onClick={sidebarOpenHandler}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-10 w-10 text-gray-800 dark:text-gray-200'
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
			</div>

			{/* drawer */}
			<div
				className={
					!sidebarVisible
						? 'top-0 absolute right-[-100%]  w-full h-full bg-gray-200 dark:bg-gray-800 z-20 transition-all duration-500'
						: 'top-0  absolute  right-0 w-full h-full bg-gray-200 dark:bg-gray-800 z-20 transition-all duration-500 '
				}>
				<div className='flex justify-end ml-10 w-4/5'>
					<button
						className='p-2 h-12 w-12 text-gray-800 dark:text-gray-200 font-semibold
									   rounded-md mr-[7px] transition-all z-50'
						onClick={sidebarCloseHandler}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-10 w-12 mx-auto text-gray-800 dark:text-gray-200'
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
				</div>

				<div className='flex flex-col h-full w-full items-center justify-around '>
					<nav className='flex font-heading1 flex-col h-1/2 items-center justify-around text-gray-800 dark:text-gray-200'>
						<CtaButton link='/' title='Home' />
						<CtaButton link='/portfolio' title='Portfolio' />
						<CtaButton link='/about' title='About' />
					</nav>

					<div className='pb-5 w-full lg:w-1/3 flex flex-col items-center justify-around '>
						<SocialIcons />
						<span className='mt-5'>Email: duranovic.safet@gmail.com</span>
						<span className='mt-5'>Telephone: +386 40867888</span>
					</div>
				</div>
			</div>
		</header>
	)
}
