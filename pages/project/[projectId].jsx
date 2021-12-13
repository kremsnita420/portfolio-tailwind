import NextImage from 'next/image'
//dependencies
import path from 'path'
import fs from 'fs/promises'
//components
import HeadTitle from '../../components/layout/typography/HeadTitle'
import Layout from '../../components/layout/Layout'
import { useState } from 'react'
import ScrollToBottomButton from '../../components/layout/ScrollBottomButton'

export default function ProjectPage(props) {
	const { filteredProject } = props
	const [selectedImage, setSelectedImage] = useState(filteredProject.image[0])

	return (
		<Layout
			title={filteredProject.title}
			description={filteredProject.description}>
			<HeadTitle title={filteredProject.title} />

			{/* selected image */}
			<div className='w-full'>
				<NextImage
					src={selectedImage}
					width={1400}
					height={700}
					layout='responsive'
					alt={filteredProject.title}
					placeholder='blur'
					blurDataURL='https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
				/>
			</div>

			{/* image thumbnails */}
			<div className='flex flex-wrap mx-auto justify-center my-10'>
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

			<div className='flex flex-col items-center justify-center  lg:justify-around mb-10'>
				{/* repository and live website */}
				<div className='flex flex-col items-start'>
					<h2 className='text-2xl w-full font-heading1 md:text-3xl my-10 text-center'>
						Github & Website{' '}
					</h2>

					<div className='flex items-center justify-center w-full mb-10'>
						<button className='bg-gray-800 text-gray-200 mr-5 dark:bg-gray-200 dark:text-gray-800 px-5 my-10 sm:my-0 py-2 min-w-[6.5rem] rounded-md'>
							<a href={filteredProject.gitLink} target='_blank' rel='noopener'>
								Github
							</a>
						</button>
						<button className='bg-gray-800 text-gray-200 ml-5 dark:bg-gray-200 dark:text-gray-800 px-5 py-2 min-w-[6.5rem] rounded-md'>
							<a href={filteredProject.webLink} target='_blank' rel='noopener'>
								Website
							</a>
						</button>
					</div>
				</div>

				{/* project description */}
				<div className='flex-col md:flex-row w-full items-center text-center justify-center mx-auto mt-10'>
					<h2 className='text-2xl font-heading1 md:text-3xl mb-10'>
						Description{' '}
					</h2>
					<p className='text-lg md:text-xl'>{filteredProject.description}</p>

					<h2 className='text-2xl font-heading1 md:text-3xl mt-20 mb-10'>
						Technologies{' '}
					</h2>
					<div>
						<ul className='grid grid-cols-1 md:grid-cols-4 gap-5 pb-10 text-gray-800 dark:text-gray-200'>
							{filteredProject.features.map((feature, i) => (
								<li className='glassmorph p-2 text-left' key={i}>
									<h4 className=' font-heading1 font-black'>{feature.name}</h4>
									<p className='mt-2 mb-5'>{feature.description}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<ScrollToBottomButton />
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
