import NextImage from 'next/image'
//dependencies
import path from 'path'
import fs from 'fs/promises'
//components
import HeadTitle from '../../components/layout/HeadTitle'
import Layout from '../../components/layout/Layout'
import { useState } from 'react'
import ScrollToBottomButton from '../../components/layout/ScrollBottomButton'

export default function ProjectPage(props) {
	const { filteredProject } = props
	const [selectedImage, setSelectedImage] = useState(filteredProject.image[2])

	console.log(filteredProject.builtWith)

	return (
		<Layout
			title={filteredProject.title}
			description={filteredProject.description}>
			<HeadTitle title={filteredProject.title} />

			{/* selected image */}
			<div className='container'>
				<NextImage
					src={selectedImage}
					width={1600}
					height={800}
					layout='responsive'
					alt={filteredProject.title}
					placeholder='blur'
					blurDataURL='https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
				/>
			</div>

			<ScrollToBottomButton />

			{/* image thumbnails */}
			<div className='flex flex-wrap my-10'>
				{filteredProject.image.map((img, i) => (
					<div
						key={i}
						className={
							selectedImage === img
								? ' border-4 border-gray-200 dark:border-gray-400 h-[100px] w-[100px]'
								: 'border-4 border-transparent h-[100px] w-[100px]'
						}>
						<NextImage
							onClick={() => setSelectedImage(img)}
							key={i}
							placeholder='blur'
							blurDataURL='https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
							onClick={() => setSelectedImage(img)}
							src={img}
							alt='thumbnail'
							width={'100px'}
							height={'100px'}
						/>
					</div>
				))}
			</div>

			<div className='flex flex-col items-center justify-around '>
				{/* built with */}
				<div className='flex flex-col'>
					<h2 className='text-2xl m-auto mb-5'>Built with </h2>
					<div className='flex md:flex-col items-center justify-center'>
						<ul className='flex flex-col md:flex-row mb-5'>
							{filteredProject.builtWith.map((tech, i) => (
								<li
									className='flex items-center justify-start cursor-pointer mr-5'
									key={i}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 ml-5 mr-2'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
										/>
									</svg>
									<a
										href={tech.link}
										target='_blank'
										rel='noopener'
										className='underline'>
										{tech.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					<h2 className='text-2xl m-auto mb-0 mt-5 sm:mb-5 '>
						Github repository & Live Website{' '}
					</h2>

					<div className='flex flex-col sm:flex-row items-center justify-around'>
						<button className='bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800 px-5 my-10 sm:my-0 py-2 min-w-[6.5rem] rounded-md'>
							Github
						</button>
						<button className='bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800 px-5 py-2 min-w-[6.5rem] rounded-md'>
							Website
						</button>
					</div>
				</div>

				{/* project description */}
				<p className='text-xl md:text-2xl my-10 md:p-0'>
					{filteredProject.description}
				</p>
			</div>
		</Layout>
	)
}

async function getData() {
	//node.js file sistem
	//define working directory, folder and file path
	const filePath = path.join(process.cwd(), 'data', 'projects-list.json')
	//define data and parse it
	const jsonData = await fs.readFile(filePath)
	const data = JSON.parse(jsonData)
	return data
}

export async function getStaticProps(context) {
	const { params } = context
	const projectIdSingle = params.projectId

	const data = await getData()

	//filter results and return only one that matches with id
	const project =
		data.projectsData.find((project) => project.id === projectIdSingle) || null

	//define fallback if data are not found
	if (!project) {
		return { notFound: true }
	}

	return {
		props: {
			filteredProject: project,
		},
	}
}

export async function getStaticPaths() {
	const data = await getData()

	//extract id for every project
	const ids = data.projectsData.map((project) => project.id)
	const pathsWithParams = ids.map((id) => ({ params: { projectId: id } }))

	return {
		paths: pathsWithParams,
		fallback: false,
	}
}
