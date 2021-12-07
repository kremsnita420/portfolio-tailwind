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
import ScrollToBottomButton from '../components/layout/ScrollBottomButton'

export default function IndexPage({ projects }) {
	// get featured items
	const featuredProjects = projects.filter((project) => {
		return project.isFeatured === true
	})

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
			<section className='flex flex-col items-center w-full justify-start min-h-[calc(100vh-72px)] pb-10'>
				<HeadTitle id='projects' title='Featured Projects' />

				<p className='text-2xl text-left my-5'>
					Some of my selected projects that I'm working on. For all projects
					check{' '}
					{
						<NextLink href='/portfolio'>
							<a className='underline'>portfolio</a>
						</NextLink>
					}{' '}
					page.
				</p>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20 gap-20 justify-center items-center '>
					{featuredProjects.map((project) => (
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
