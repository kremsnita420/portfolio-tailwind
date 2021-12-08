import { useState } from 'react'

import NextLink from 'next/link'
import NextImage from 'next/image'
//components
import Layout from '../components/layout/Layout'
import HeadTitle from '../components/layout/HeadTitle'
import ProjectCard from '../components/Projects/ProjectCard'
import HeroText from '../components/hero/HeroText'
import HeroBgSvg from '../components/hero/HeroBgSvg'
//dependencies
import path from 'path'
import fs from 'fs/promises'

export default function IndexPage({ projects, href }) {
	const [projectCategory, setProjectCategory] = useState('')

	// get unique category items
	const uniqueItems = (x, i, array) => array.indexOf(x) === i
	const PRODUCT_CATEGORIES = projects
		.map((prod) => prod.category)
		.filter(uniqueItems)
	PRODUCT_CATEGORIES.sort()

	return (
		<Layout title='Portfolio Page' description='First Page'>
			{/* Projects section */}
			<section className='flex flex-col items-center w-fulljustify-start min-h-[calc(100vh-72px)] pb-10'>
				<HeadTitle title='Portfolio' />

				{/* categories filter */}
				<div className='flex mb-10'>
					<button
						onClick={() => setProjectCategory('')}
						className={
							projectCategory === ''
								? 'rounded-md ring-1 m-2 px-2 py-1 bg-blue-400'
								: 'rounded-md ring-1 m-2 px-2 py-1'
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
									? 'rounded-md ring-1 m-2 px-2 py-1 hover:opacity-70 bg-red-400'
									: 'rounded-md ring-1 m-2 px-2 py-1 hover:opacity-70 '
							}
							key={i}>
							{category}
						</button>
					))}
				</div>

				<div className='grid md:grid-cols-2 xl:grid-cols-4 my-20 gap-10 justify-center items-center '>
					{projects
						.filter((filterProject) =>
							filterProject.category.includes(projectCategory)
						)
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
