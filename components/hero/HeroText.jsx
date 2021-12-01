export default function HeroText() {
	return (
		<div className='flex pl-5 md:px-5 flex-col items-start justify-center'>
			<h2 className=' text-xl md:text-2xl xl:text-3xl mb-10 mt-20 md:mt-24 animate-moveRight1'>
				<span className='p-2 border-t-2 border-l-2 border-b-2 border-gray-800 dark:border-gray-200'>
					Hi,
				</span>
				<span className='p-2 border-t-2 border-l-2 border-b-2 border-gray-800 dark:border-gray-200'>
					my
				</span>
				<span className='p-2 border-t-2 border-l-2 border-b-2 border-gray-800 dark:border-gray-200'>
					name
				</span>
				<span className='p-2 border-t-2 border-l-2 border-b-2 border-r-2 border-gray-800 dark:border-gray-200'>
					is
				</span>
			</h2>
			<h1
				className=' text-6xl md:text-[8rem] xl:text-[12rem] text-left py-5 mb-10
								      text-gray-800 dark:text-gray-100 font-heading1 font-black animate-moveRight2'>
				Safet
				<br />
				<span className='font-extralight'> Duranović</span>
			</h1>

			<h2 className='text-1xl md:text-2xl xl:text-3xl text-left animate-moveRight3'>
				<span className='p-2 border-t-2 border-l-2 border-b-2 border-gray-800 dark:border-gray-200'>
					and
				</span>
				<span className='p-2 border-t-2 border-l-2 border-b-2 border-gray-800 dark:border-gray-200'>
					I'm
				</span>
				<span className='p-2 border-t-2 border-l-2 border-b-2 border-gray-800 dark:border-gray-200'>
					a
				</span>
				<span className='p-2 border-t-2 border-l-2 border-b-2 border-gray-800 dark:border-gray-200'>
					Web
				</span>
				<span className='p-2 border-t-2 border-l-2 border-b-2 border-r-2 border-gray-800 dark:border-gray-200'>
					Developer
				</span>
			</h2>
			<button
				className=' w-auto px-10 font-heading1 my-20
                           font-black text-xl py-5 rounded-md animate-moveRight4
						 bg-gray-800 text-gray-200 hover:ring-2 
						 dark:bg-gray-200 dark:text-gray-800'>
				My Work
			</button>
		</div>
	)
}
