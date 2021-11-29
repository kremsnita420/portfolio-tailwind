import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function DarkmodeButton() {
	const [mounted, setMounted] = useState(false)
	const { resolvedTheme, setTheme } = useTheme()

	// After mounting, we have access to the theme
	useEffect(() => setMounted(true), [])

	return (
		<button
			className='flex items-center justify-center p-1 h-10 w-10 my-auto bg-transparent font-semibold rounded-full hover:ring-2 ring-gray-500  transition-all'
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
			{mounted && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					className='w-6 h-6 text-gray-200 dark:text-gray-600'>
					{resolvedTheme === 'light' ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
							/>
						</svg>
					)}
				</svg>
			)}
		</button>
	)
}
