import HeroImage from '../components/HeroImage'
import Layout from '../components/Layout'

export default function IndexPage() {
	return (
		<Layout title='Home Page' description='First Page'>
			<section className='flex flex-col items-center w-full justify-start'>
				<div className=' flex items-start w-full justify-start '>
					<div className='flex pl-5 md:pl-20 flex-col items-start justify-start'>
						<h2 className=' text-xl md:text-2xl xl:text-3xl mb-2 mt-10 md:mt-24 animate-moveRight1'>
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
							className=' text-9xl md:text-[12rem] xl:text-[15rem] text-left py-5
								      text-gray-800 dark:text-gray-100 font-body animate-moveRight2'>
							Safet
							<br />
							Duranović
						</h1>
						<h2 className='text-2xl md:text-3xl xl:text-4xl my-5 text-left font-bold animate-moveRight3'>
							<span className='p-2 border-t-2 border-l-2 border-b-2 border-gray-800 dark:border-gray-200'>
								and
							</span>
							<span className='p-2 border-t-2 border-l-2 border-b-2 border-gray-800 dark:border-gray-200'>
								I'm
							</span>
							<span className='p-2 border-t-2 border-l-2 border-b-2 border-gray-800 dark:border-gray-200'>
								Web
							</span>
							<span className='p-2 border-t-2 border-l-2 border-b-2 border-r-2 border-gray-800 dark:border-gray-200'>
								Developer
							</span>
						</h2>
						<button
							className='border-2 p-4 mt-20 w-auto px-20  py-5 rounded-md animate-moveRight4
									 bg-gray-800 text-gray-200 hover:ring-2 ring-gray-500
									 dark:bg-gray-200 dark:text-gray-800'>
							My Work
						</button>
					</div>
				</div>
			</section>
		</Layout>
	)
}
