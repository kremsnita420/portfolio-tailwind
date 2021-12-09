import HeroBgSvg from './HeroBgSvg'

export default function HeroText() {
	return (
		<div className='flex flex-col items-start justify-start px-5 lg:px-0 my-10 min-h-[calc(100vh-64px)]'>
			<h2 className=' text-xl md:text-2xl xl:text-3xl my-10 md:mt-14 animate-moveRight1'>
				<span className='p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200'>
					Hi,
				</span>
				<span className='p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200'>
					my
				</span>
				<span className='p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200'>
					name
				</span>
				<span className='p-1 px-2 border-t-2 border-l-2 border-b-2  text-gray-800 dark:text-gray-200 border-r-2 border-gray-800 dark:border-gray-200'>
					is
				</span>
			</h2>
			<h1
				className=' text-6xl md:text-[8rem] xl:text-[10rem] text-left py-5 mb-10
								      text-gray-800 dark:text-gray-100 font-heading1 font-black animate-moveRight2'>
				Safet
				<br />
				<span className='font-extralight'> Duranović</span>
			</h1>

			<h2 className='text-1xl md:text-2xl xl:text-3xl animate-moveRight3'>
				<span className='p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200'>
					and
				</span>
				<span className='p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200'>
					I'm
				</span>
				<span className='p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200'>
					a
				</span>
				<span className='p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200'>
					Web
				</span>
				<span className='p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-r-2 border-gray-800 dark:border-gray-200'>
					Developer
				</span>
			</h2>
			<button
				className=' w-auto px-10 font-heading1 mt-20  tracking-wider
                           font-black text-xl py-5 rounded-md animate-moveRight4
						 bg-gray-800 dark:bg-gray-200 text-gray-200 hover:ring-2 
						 dark:text-gray-800'>
				Contact
			</button>

			<HeroBgSvg />
		</div>
	)
}
