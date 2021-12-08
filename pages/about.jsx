import NextImage from 'next/image'
//components
import HeadTitle from '../components/layout/HeadTitle'
import Layout from '../components/layout/Layout'
import SecondaryTitle from '../components/layout/SecondaryTitle'

export default function AboutPage() {
	return (
		<Layout>
			<HeadTitle title='About Page' />
			<div className='flex flex-col md:flex-row items-center justify-center'>
				<div className='flex bg-gray-200 rounded-xl m-10'>
					<NextImage src='/images/my-gif.gif' width={600} height={600} />
				</div>

				<div className='flex w-1/2 '>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Accusantium nisi dicta consequatur voluptatum? Eveniet rem ullam
						enim dignissimos odio blanditiis quam cupiditate officiis provident,
						culpa quod nulla? Officia, fugit doloremque rem totam atque ut hic
						explicabo nam reprehenderit vitae unde a odit ducimus eos
						consectetur accusamus molestias. Sapiente, laboriosam! Quia.
					</p>
				</div>
			</div>

			<SecondaryTitle title='Tech Stack' />

			<div className='flex items-start justify-around w-full'>
				{/* frontend */}
				<div className='flex flex-col items-start justify-around'>
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
							d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
						/>
					</svg>
					<h3>Frontend</h3>
					<ul className='flex flex-col items-start justify-start'>
						<li>HTML</li>
						<li>CSS</li>
						<li>Javascript</li>
						<li>React</li>
					</ul>
				</div>

				{/* backend */}
				<div className='flex flex-col items-start justify-center'>
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
							d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
						/>
					</svg>
					<h3>Backend</h3>
					<ul className='flex flex-col items-start justify-start'>
						<li>Node</li>
						<li>Express</li>
						<li>MongoDB</li>
						<li>Heroku</li>
						<li>Vercel</li>
					</ul>
				</div>
				{/* frameworks */}
				<div className='flex flex-col items-start justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
					</svg>
					<h3>Frameworks</h3>
					<ul className='flex flex-col items-start justify-start'>
						<li>NextJS</li>
						<li>TailwindCSS</li>
						<li>Styled Components</li>
						<li>MaterialUI</li>
						<li>Vercel</li>
					</ul>
				</div>
			</div>
		</Layout>
	)
}
