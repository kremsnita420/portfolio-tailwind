import { useEffect, useState } from 'react'

export default function ScrollToBottomButton() {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		// trigger this so that the initial state
		// is updated as soon as the component is mounted
		handleScroll()

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<button
			onClick={() => window.scrollBy(0, window.innerHeight)}
			className={
				scrollY === 0
					? 'rounded-full p-3 bg-gradient-to-br from-pink-400 to-red-600 dark:from-blue-600 dark:to-pink-900 text-gray-800 dark:text-gray-200 animate-bounceSlow fixed bottom-5 right-5'
					: 'hidden'
			}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6 rotate-180'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='M5 11l7-7 7 7M5 19l7-7 7 7'
				/>
			</svg>
		</button>
	)
}
