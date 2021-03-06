import NextImage from 'next/image'
import { useRouter } from 'next/router'
//components
import HeadTitle from '../components/layout/typography/HeadTitle'
import Layout from '../components/layout/Layout'
import SecondaryTitle from '../components/layout/typography/SecondaryTitle'
import Course from '../components/course/Course'
import Skills from '../components/skills/Skills'
//data
import { courses } from '../data/data'
//translation
import en from '../locales/en'
import sl from '../locales/sl'

import CtaButton from '../components/layout/CtaButton'

export default function AboutPage() {
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : sl

	return (
		<Layout
			title={locale === 'en' ? 'About Me' : 'O meni'}
			description={locale === 'en' ? 'About Me' : 'O meni'}>
			{/* About Me */}
			<HeadTitle
				title={locale === 'en' ? 'About Me' : 'O meni'}
				description={locale === 'en' ? 'About Me' : 'O meni'}
			/>

			<div className='flex flex-col lg:flex-row items-center justify-start text-gray-400 dark:text-gray-800'>
				<div className='flex items-center  justify-center pb-10'>
					<NextImage
						placeholder='blur'
						blurDataURL='https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
						alt='profile photo'
						priority='high'
						rel='preload'
						as='image'
						src='/images/portrait.png'
						width={550}
						height={600}
					/>
				</div>

				<div className='flex text-left flex-col items-center justify-between md:pl-10 lg:w-2/3 xl:w-1/2'>
					<h2 className='font-heading1 w-full font-black text-gray-800 dark:text-gray-200 text-2xl md:text-3xl mb-5 relative'>
						{/* Hello, my name Is */}
						{t.about_text1}
						<span className='text-5xl font-black span-safet block mt-1'>
							Safet Duranović
						</span>

						<br />
						<span className='text-5xl font-black span-safet block'>
							{/* Web Developer */}
							{t.about_text2}
						</span>
						<br />
						{/* living in Ljubljana */}
						{t.about_text3}
					</h2>

					<p className='mb-5 text-xl relative'>
						{/* In January 2021 I have quit my job to learn */}
						{t.about_text4}{' '}
						<span className='realistic-marker-highlight rotate-[3deg] inline-block'>
							<span className=' animate-moveRight2'>
								{/* Web development. */}
								{t.about_text5}
							</span>
						</span>
						{/* Since then I spend */}
						{t.about_text6}{' '}
						<span className='realistic-marker-highlight inline-block rotate-[-3deg]'>
							<span className=' animate-moveRight3'>
								{/* all my time */}
								{t.about_text7}
							</span>
						</span>{' '}
						{/* learning fundamentals of */}
						{t.about_text8}{' '}
						<span className='realistic-marker-highlight rotate-[3deg] inline-block '>
							<span className=' animate-moveRight4'>
								{/* frontend */}
								{t.about_text9}
							</span>
						</span>{' '}
						{/* and */}
						{t.about_text10}{' '}
						<span className='realistic-marker-highlight rotate-[3deg] inline-block'>
							<span className=' animate-moveRight5'>
								{/* backend */}
								{t.about_text11}
							</span>
						</span>{' '}
						{/* of web technologies and I'm loving every second of it. */}
						{t.about_text12}
					</p>

					<p className='mb-5  text-xl'>
						{/* I love building apps that are */}
						{t.about_text13}{' '}
						<span className='realistic-marker-highlight inline-block rotate-[3deg]'>
							<span className=' animate-moveRight6'>
								{/* simple */}
								{t.about_text14}
							</span>
						</span>{' '}
						{/* and */}
						{t.about_text15}{' '}
						<span className='realistic-marker-highlight inline-block rotate-[3deg]'>
							<span className=' animate-moveRight7'>
								{/* user-friendly. */}
								{t.about_text16}
							</span>
						</span>
					</p>

					<div className='my-10'>
						<a target='_blank' download href='Safet-Duranovic-CV.pdf'>
							<CtaButton
								title={locale === 'en' ? 'Resume' : 'Življenjepis'}></CtaButton>
						</a>
					</div>
				</div>
			</div>

			<h2 className='font-heading1 relative text-xl xl:text-3xl font-black my-5'>
				{/* I'm looking for a position: */}
				{t.about_text17}
			</h2>

			<div className='marquee-wrapper rotate-6 my-10'>
				<div className='marquee text-3xl'>
					<p className='py-2 bg-yellow-300 border-black enveloppe border-dashed'>
						☠️ {t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{' '}
						{t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{' '}
						{t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{' '}
						{t.banner_text} ☠️ {t.banner_text} ☠️{' '}
					</p>
					<p className='py-2 bg-yellow-300 border-black enveloppe border-dashed'>
						{t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{' '}
						{t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{' '}
						{t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{' '}
						{t.banner_text} ☠️ {t.banner_text} ☠️{' '}
					</p>
					<p className='py-2 bg-yellow-300 border-black enveloppe border-dashed'>
						{t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{' '}
						{t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{' '}
						{t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{' '}
						{t.banner_text} ☠️ {t.banner_text} ☠️{' '}
					</p>
				</div>
			</div>

			{/* Tech Stack */}
			<SecondaryTitle title={t.about_title2} />
			{/* skills */}
			<Skills />
			{/* Courses & Certifications */}
			<SecondaryTitle title={t.about_title3} />
			<div className='flex flex-col md:flex-row items-center justify-start text-gray-800 dark:text-gray-400'>
				<p className='text-xl mb-10 p-5 w-full text-left sketch-highlight inline-block'>
					{/* Here is a list of completed courses and certifications so fa
        If you wish to know more about a specific course click the card 
        and it will take you to the course provider's website */}
					{t.about_text18}
				</p>
				<div className='flex items-center w-full justify-center my-10'>
					<NextImage
						className='rounded-[5rem]'
						src='/images/thinking.png'
						width={350}
						height={350}
					/>
				</div>
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-20 items-center justify-between'>
				{courses.map((course) => (
					<Course
						key={course.id}
						date={course.date}
						title={course.title}
						link={course.link}
						platform={course.platform}
						bootcamp={course.bootcamp}
					/>
				))}
			</div>
		</Layout>
	)
}
