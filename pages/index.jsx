import { useState } from 'react'

import NextLink from 'next/link'
import NextImage from 'next/image'
//components
import Layout from '../components/layout/Layout'
import HeadTitle from '../components/layout/HeadTitle'
import ProjectCard from '../components/layout/ProjectCard'
import HeroText from '../components/hero/HeroText'
import HeroBgSvg from '../components/hero/HeroBgSvg'
//dependencies
import path from 'path'
import fs from 'fs/promises'
import ScrollToBottomButton from '../components/layout/ScrollBottomButton copy'

export default function IndexPage({ projects }) {
	const [projectCategory, setProjectCategory] = useState('')

	// get unique category items
	const uniqueItems = (x, i, array) => array.indexOf(x) === i
	const PRODUCT_CATEGORIES = projects
		.map((prod) => prod.category)
		.filter(uniqueItems)
	PRODUCT_CATEGORIES.sort()

	return (
		<Layout title='Home Page' description='First Page'>
			{/* hero section */}
			<section className='flex flex-col items-center w-full justify-start'>
				<div className=' flex items-start w-full justify-start '>
					<HeroText />
				</div>
				<ScrollToBottomButton />
			</section>

			{/* Projects section */}
			<section className='flex flex-col items-center w-full justify-start   pb-10'>
				<HeadTitle id='projects' title='Projects' />

				<p className='text-2xl mb-10'>
					Some of my selected projects that I'm working on.
				</p>
				{/* categories filter */}
				<div className='flex mb-5'>
					<button
						onClick={() => setProjectCategory('')}
						className={
							projectCategory === ''
								? 'rounded-md ring-1 m-2 px-4 py-2 bg-green-400'
								: 'rounded-md ring-1 m-2 px-4 py-2'
						}>
						All
					</button>
					{PRODUCT_CATEGORIES.map((category, i) => (
						<button
							onClick={() => {
								setProjectCategory(category)
							}}
							className={
								category === projectCategory
									? 'rounded-md ring-1 m-2 px-4 py-2 bg-red-400'
									: 'rounded-md ring-1 m-2 px-4 py-2'
							}
							key={i}>
							{category}
						</button>
					))}
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 '>
					{projects
						.filter((filterProject) =>
							filterProject.category.includes(projectCategory)
						)
						.map((project) => (
							<div key={project.id}>
								<ProjectCard
									id={project.id}
									image={project.image[0]}
									description={project.description}
									stack={project.stack}
									category={project.category}
								/>
							</div>
						))}
				</div>
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	//node.js file sistem
	//define working directory, folder and file path
	const filePath = path.join(process.cwd(), 'data', 'projects-list.json')
	//define data and parse it
	const jsonData = await fs.readFile(filePath)
	const data = JSON.parse(jsonData)

	return {
		props: {
			projects: data.projectsData,
		},
	}
}
