import NextImage from 'next/image'
//components
import HeadTitle from '../components/layout/typography/HeadTitle'
import Layout from '../components/layout/Layout'
import SecondaryTitle from '../components/layout/typography/SecondaryTitle'
//data
import { skills, courses } from '../data/data'
import Course from '../components/Course'

export default function AboutPage() {
	return (
		<Layout>
			<HeadTitle title='About Page' />

			<div className='flex flex-col md:flex-row items-center justify-start text-gray-800 dark:text-gray-400'>
				<div className='flex items-center  justify-center pb-10'>
					<NextImage src='/images/portrait.png' width={550} height={600} />
				</div>

				<div className='flex flex-col items-start justify-between md:pl-10 md:w-2/3 xl:w-1/2 '>
					<h2 className='font-heading1 font-black text-gray-800 dark:text-gray-200 text-xl md:text-2xl mb-5'>
						Hello, my name Is <span className=' font-normal'>Safet</span>, Web
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

			<div className='flex flex-wrap w-full items-start justify-around glassmorph mb-5 rounded-lg'>
				{/* skills */}
				{skills.map((skillGroup, i) => (
					<div
						key={i}
						className='flex flex-col px-10 pt-10 items-center sm:items-start justify-center w-full sm:w-1/2 md:w-auto mb-10'>
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

						<h3 className='text-gray-600 dark:text-gray-400 uppercase my-2'>
							{skillGroup.title}
						</h3>
						<ul className='flex flex-col items-center sm:items-start justify-start'>
							{skillGroup.skills.map((singleSkill, i) => (
								<li key={i}>{singleSkill}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<SecondaryTitle title='Courses & Certifications' />

			<p className='text-lg md:text-xl mb-10 px-20  mx-auto'>
				Here is a list of completed courses and certifications so far. If you
				wish to know more about specific course click the card and it will take
				you to course provider's website.
			</p>

			<div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20 w-full items-start justify-between'>
				{courses.map((course) => (
					<Course
						key={course.id}
						date={course.date}
						title={course.title}
						link={course.link}
						platform={course.platform}
					/>
				))}
			</div>
		</Layout>
	)
}
