import NextImage from 'next/image'
//components
import HeadTitle from '../components/layout/typography/HeadTitle'
import Layout from '../components/layout/Layout'
import SecondaryTitle from '../components/layout/typography/SecondaryTitle'
//data
import { skills } from '../data/data'

export default function AboutPage() {
	return (
		<Layout>
			<HeadTitle title='About Page' />
			<div className='flex flex-col md:flex-row items-center justify-center'>
				<div className='flex m-10'>
					<NextImage src='/images/portrait.png' width={600} height={600} />
				</div>

				<div className='flex flex-col items-start justify-between p-2 md:w-2/3 xl:w-1/2 '>
					<h2 className='font-heading1 font-black text-xl md:text-2xl mb-5'>
						Hello, I'm <span className=' font-normal'>Safet</span>, Web
						<span className=' font-normal'> Developer</span> living in
						Ljubljana.
					</h2>
					<p className='mb-5 text-lg'>
						In January 2021 I have quit my job to learn web development. Since
						then I spend all my time learning fundamentals of frontend and
						backend web technologies and I'm loving every second of it.
					</p>
					<p className='mb-5 text-lg'>
						I love building apps that are simple and user-friendly.
					</p>
					<p className='mb-5 text-lg'>
						I'm looking for junior web developer position.
					</p>
				</div>
			</div>

			<SecondaryTitle title='Tech Stack' />

			<div className='flex flex-wrap w-3/4 items-start justify-around relative'>
				{/* skills */}
				{skills.map((skillGroup, i) => (
					<div
						key={i}
						className='flex flex-col px-5 items-start justify-center mb-10'>
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

						<h3 className='text-gray-500 dark:text-gray-800 uppercase my-2'>
							{skillGroup.title}
						</h3>
						<ul className='flex flex-col items-start justify-start'>
							{skillGroup.skills.map((singleSkill, i) => (
								<li key={i}>{singleSkill}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<SecondaryTitle title='Courses & Certifications' />
		</Layout>
	)
}
