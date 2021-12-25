import { useState } from 'react'
import SocialIcons from '../layout/SocialIcons'
import CtaButton from '../layout/CtaButton.jsx'
import DarkmodeButton from './DarkmodeButton.jsx.jsx'

import HeaderLogo from './HeaderLogo.jsx'

import NavigationBar from './navigation/NavigationBar.jsx'

import LangSwitch from './navigation/LangSwitch'
import en from '../../locales/en'
import sl from '../../locales/sl'
import { useRouter } from 'next/router'

export default function Header() {
	const [sidebarVisible, setSidebarVisible] = useState(false)

	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : sl

	//open-close sidebar
	const sidebarOpenHandler = () => {
		setSidebarVisible(true)
	}
	const sidebarCloseHandler = () => {
		setSidebarVisible(false)
	}

	return (
		<header className='container mx-auto flex items-center w-full justify-between px-5 pt-5 z-20'>
			{/* header logo */}
			<HeaderLogo />
			<div className='flex-1'></div>
			{/* navigation bar */}
			<NavigationBar />

			{/* darkmode button and lang switch */}
			<div className='flex items-center justify-center px-2 py-1 ml-5'>
				<DarkmodeButton />
				<LangSwitch />
			</div>

			{/* mobile nav button */}
			<div className='flex items-center justify-between'>
				<button
					className='flex hover:scale-125 md:hidden items-center justify-center p-2 h-12 w-12 my-auto ml-2 font-semibold rounded-md transition-all z-10'
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
					sidebarVisible !== true
						? 'top-0 fixed right-[-100%]  w-full h-full bg-gray-400 dark:bg-gray-800 z-20 transition-all duration-1000'
						: 'top-0 fixed  right-0 w-full h-full bg-gray-400 dark:bg-gray-800 z-20 transition-all duration-1000'
				}>
				<div className='flex justify-end ml-10 w-4/5'>
					<button
						className='p-2 h-12 w-12 hover:scale-125 text-gray-800 dark:text-gray-200 font-semibold rounded-md mr-[7px] transition-all z-50'
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

				{/* darkmode button and lang switch */}
				<div className='flex w-1/4 mx-auto items-center justify-center pr-3 glassmorph'>
					<DarkmodeButton />
					<LangSwitch />
				</div>

				<div className='flex flex-col h-full w-full items-center justify-around '>
					<nav className='flex font-heading1 flex-col h-1/2 items-center justify-around text-gray-800 dark:text-gray-200'>
						<span className=' rotate-3'>
							<CtaButton link='/' title={t.home} />
						</span>
						<span className=' rotate-[-3deg]'>
							<CtaButton link='/portfolio' title={t.portfolio} />
						</span>
						<span className=' rotate-3'>
							<CtaButton link='/about' title={t.about} />
						</span>
					</nav>

					<div className='pb-5 w-full lg:w-1/3 flex flex-col items-center justify-around mb-10'>
						<SocialIcons />
						<span className='mt-5 realistic-marker-highlight rotate-3'>
							duranovic.safet@gmail.com
						</span>
						<span className='mt-5 realistic-marker-highlight rotate-[-3deg]'>
							+386 40867888
						</span>
					</div>
				</div>
			</div>
		</header>
	)
}
