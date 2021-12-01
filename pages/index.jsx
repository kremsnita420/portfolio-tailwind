//components
import Layout from '../components/layout/Layout'
import HeadTitle from '../components/layout/HeadTitle'
import ProjectCard from '../components/layout/ProjectCard'
import HeroText from '../components/hero/HeroText'

import path from 'path'
import fs from 'fs/promises'

export default function IndexPage({ projects }) {
	console.log(projects)
	return (
		<Layout title='Home Page' description='First Page'>
			{/* hero section */}
			<section className='flex flex-col items-center w-full  p-5 pb-10 justify-start'>
				<div className=' flex items-start w-full justify-start '>
					<HeroText />
				</div>
			</section>

			{/* Projects section */}
			<section className='flex flex-col items-center w-full justify-start  p-5 pb-10'>
				<HeadTitle title='Projects' />
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-5'>
					{projects.map((project) => (
						<div key={project.id}>
							<ProjectCard
								id={project.id}
								image={project.image[0]}
								description={project.description}
								stack={project.stack}
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

	//extract categories
	const categories = data.projectsData.map((project) => project.category)
	const extractedCategories = categories.filter((value, index, array) => {
		return array.indexOf(value) === index
	})

	return {
		props: {
			projects: data.projectsData,
			categories: extractedCategories,
		},
	}
}
