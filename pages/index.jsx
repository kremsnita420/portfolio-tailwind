import HeroImage from '../components/HeroImage'
import Layout from '../components/Layout'

export default function IndexPage() {
	return (
		<Layout title='Home Page' description='First Page'>
			<section className='py-20 px-10 flex relative '>
				<div className='flex flex-col mx-auto items-left justify-start'>
					<h2 className=' text-xl mb-5'>Hi, my name is</h2>
					<h1 className='ml-[-0.5rem] text-6xl md:text-8xl text-left text-gray-800 dark:text-gray-100 font-bold'>
						Safet <br /> Duranovic
					</h1>
					<h2 className='text-2xl my-10 text-left  font-bold'>
						Web Developer <br /> Fullstack
					</h2>
					<button className='border-2 w-1/2 p-4 rounded-md'>Contact Me</button>
				</div>
			</section>
		</Layout>
	)
}
