import NextLink from 'next/link'
import { useRouter } from 'next/router'
//components
import Layout from '../components/layout/Layout'
import HeadTitle from '../components/layout/typography/HeadTitle'
import ProjectCard from '../components/Projects/ProjectCard'
import HeroText from '../components/hero/HeroText'
import HeroBgSvg from '../components/hero/HeroBgSvg'
//dependencies
import path from 'path'
import fs from 'fs/promises'
import ScrollToBottomButton from '../components/layout/ScrollBottomButton'
import SecondaryTitle from '../components/layout/typography/SecondaryTitle'
import ContactForm from '../components/contact-form/ContactForm'
//translation
import en from '../locales/en'
import sl from '../locales/sl'

export default function IndexPage({ projectsEn, projectsSl }) {
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : sl
	const projects = locale === 'en' ? projectsEn : projectsSl

	return (
		<Layout
			title={locale === 'en' ? 'Home Page' : 'Domača stran'}
			description={locale === 'en' ? 'Home Page' : 'Domača stran'}>
			{/* hero section */}
			<div className='relative flex items-start w-full justify-center'>
				<HeroText />
				<HeroBgSvg />
			</div>
			<ScrollToBottomButton />

			{/* Projects section */}
			<HeadTitle id='projects' title={t.featured1} />

			<p className='text-xl text-center mb-10'>
				{t.featured2}{' '}
				{
					<NextLink href='/portfolio'>
						<a className='relative'>
							<span className='sketch-highlight hover:text-red-300 dark:hover:text-green-300 hover:scale-110 transition-all px-2 p-1 mt-2 rotate-[3deg] inline-block'>
								{t.featured3}
							</span>
						</a>
					</NextLink>
				}
			</p>

			<div className='grid md:grid-cols-3 xl:grid-cols-4 mt-20 gap-10 mx-auto'>
				{projects
					.filter((project) => project.isFeatured == true)
					.map((project) => (
						<div className='relative' key={project.id}>
							<ProjectCard
								id={project.id}
								image={project.image[0]}
								title={project.title}
								description={project.description}
							/>
						</div>
					))}
			</div>

			<SecondaryTitle title={t.contact11} />
			<div className='flex w-full'>
				<ContactForm />
			</div>
		</Layout>
	)
}

export async function getStaticProps({ locale }) {
	//node.js file sistem
	//define working directory, folder and file path
	const filePathEn = path.join(process.cwd(), 'data', 'projects-list.json')
	const filePathSl = path.join(process.cwd(), 'data', 'projects-list-slo.json')
	//define data and parse it
	const jsonDataEn = await fs.readFile(filePathEn)
	const jsonDataSl = await fs.readFile(filePathSl)
	const dataEn = JSON.parse(jsonDataEn)
	const dataSl = JSON.parse(jsonDataSl)

	return {
		props: {
			projectsEn: dataEn.projectsData,
			projectsSl: dataSl.projectsData,
			locale,
		},
	}
}
