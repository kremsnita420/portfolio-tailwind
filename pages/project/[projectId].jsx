import NextImage from 'next/image'
//dependencies
import path from 'path'
import fs from 'fs/promises'
//components
import HeadTitle from '../../components/layout/typography/HeadTitle'
import Layout from '../../components/layout/Layout'
import { useState } from 'react'
import ScrollToBottomButton from '../../components/layout/ScrollBottomButton'
import SecondaryTitle from '../../components/layout/typography/SecondaryTitle'
import ButtonStyled from '../../components/layout/ButtonStyled'

export default function ProjectPage(props) {
	const { filteredProject } = props
	const [selectedImage, setSelectedImage] = useState(filteredProject.image[0])

	return (
		<Layout
			title={filteredProject.title}
			description={filteredProject.description}>
			<HeadTitle title={filteredProject.title} />

			{/* selected image */}
			<div className='w-full mb-5'>
				<NextImage
					objectFit='cover'
					src={selectedImage}
					width={1100}
					height={600}
					layout='responsive'
					alt={filteredProject.title}
					placeholder='blur'
					blurDataURL='https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
				/>
			</div>

			{/* image thumbnails */}
			<div className='flex flex-wrap items-center justify-center pb-10'>
				{filteredProject.image.map((img, i) => (
					<div
						key={i}
						className={
							selectedImage === img
								? ' border-4 border-gray-200 dark:border-gray-400 h-[100px] w-[100px] overflow-hidden'
								: 'border-4 border-transparent h-[100px] w-[100px] overflow-hidden'
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
					<div className='flex flex-col justify-center items-center w-full mt-10'>
						<SecondaryTitle title='Github & Website' />
						<p className='text-lg md:text-xl mb-10'>
							You can check code by visiting Github link. Or check how wiebsite
							looks in action
						</p>
					</div>

					<div className='flex items-center justify-center mx-auto w-full mb-10'>
						{filteredProject.links.map((l, i) => (
							<button
								key={i}
								className='text-gray-800 m-2 lg:m-5  dark:text-gray-400 px-5 my-10 sm:my-0 py-2 rounded-md'>
								<a href={l.link} target='_blank' rel='noopener'>
									<ButtonStyled title={l.name} />
								</a>
							</button>
						))}
					</div>
				</div>

				{/* project description */}
				<div className='flex-col items-center w-full text-center justify-center'>
					<div className='flex flex-col justify-center items-center w-full mt-10'>
						<SecondaryTitle title='Description' />
						<p className='text-lg md:text-xl'>{filteredProject.description}</p>
					</div>
					<div className='flex flex-col justify-start items-start md:flex-row w-full mt-10'>
						<div className='flex flex-col justify-center items-center w-full md:mr-10'>
							<SecondaryTitle title='Technologies' />
							<ul className=' pb-10 text-gray-800 dark:text-gray-200'>
								{filteredProject.technologies.map((tech, i) => (
									<li className=' py-2 text-left glassmorph mb-5 px-2' key={i}>
										<h4 className=' font-heading1 font-black mb-2'>
											{i + 1}. {tech.name}
										</h4>
										<p className='pb-2'>{tech.description}</p>
									</li>
								))}
							</ul>
						</div>

						<div className='flex flex-col w-full justify-center items-center md:ml-10'>
							<SecondaryTitle title='Features' />
							<ul className=' glassmorph mb-10 px-2 text-gray-800 dark:text-gray-200'>
								{filteredProject.features.map((feature, i) => (
									<li className=' py-2 border-b-[1px] text-left' key={i}>
										<h4 className=' font-heading1 font-black mb-2'>
											{i + 1}. {feature.name}
										</h4>
										<p className='pb-2'>{feature.description}</p>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className='flex flex-col justify-center items-center w-full mt-10'>
						<SecondaryTitle title='Todo List' />
					</div>

					<p className='text-lg md:text-xl mb-10'>
						Here is a list of some major functionalities that I'm planning to
						add in the future
					</p>

					<ul className=' pb-10 text-gray-800 flex flex-col md:flex-row justify-center items-start dark:text-gray-200'>
						{filteredProject.todos.map((todo, i) => (
							<li className='md:ml-5 py-2 text-left' key={i}>
								<h4 className=' font-heading1 font-black mb-2'>
									{i + 1}. {todo.name}
								</h4>
								<p className='pb-2'>{todo.description}</p>
							</li>
						))}
					</ul>
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
