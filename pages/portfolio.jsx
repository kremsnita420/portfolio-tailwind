import { useState } from 'react'
import NextLink from 'next/link'
//components
import Layout from '../components/layout/Layout'
import HeadTitle from '../components/layout/typography/HeadTitle'
import ProjectCard from '../components/Projects/ProjectCard'

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
			<HeadTitle title='Portfolio' />
			<p className='text-2xl my-10'>ALl my projects.</p>
			{/* categories filter */}
			<div className='flex mb-10 mx-auto'>
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

			<div className='grid md:grid-cols-2 xl:grid-cols-4 my-20 gap-20 justify-center items-center mx-auto '>
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
