import { useState } from 'react'

export default function Drawer() {
	const [sidebarVisible, setSidebarVisible] = useState(true)
	console.log(sidebarVisible)

	//open-close sidebar
	const sidebarOpenHandler = () => {
		setSidebarVisible(true)
	}
	const sidebarCloseHandler = () => {
		setSidebarVisible(false)
	}

	return (
		<div
			className={
				sidebarVisible
					? 'top-[-100%] absolute right-0 w-1/2 h-full bg-red-200 '
					: 'top-0 absolute right-0 w-full h-full bg-red-200 z-10'
			}>
			<button onClick={sidebarCloseHandler}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					class='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>
		</div>
	)
}
