import NextImage from 'next/image'
import NextLink from 'next/link'

export default function ProjectCard({ id, image, title }) {
	return (
		<div className='card'>
			<div className='imgbox '>
				<NextImage
					className='object-cover'
					width={250}
					height={250}
					layout='responsive'
					placeholder='blur'
					blurDataURL='https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
					src={image}
					alt='thumbnail'
					priority='high'
					rel='preload'
					as='image'
				/>
				<p className='text-xl text-gray-800 dark:text-gray-200 text-center p-2 mt-3'>
					{title}
				</p>
			</div>

			<div className='content'>
				<div className='card-description'>
					<NextLink passHref href={`/project/${id}`}>
						<a className=' mt-5'>
							<button className='text-xl text-center text-gray-800 dark:text-gray-200 p-2 px-4 ring-1 rounded-md hover:bg-gray-100 dark:hover:text-gray-400 hover:opacity-70 cursor-pointer'>
								More
							</button>
						</a>
					</NextLink>
				</div>
			</div>
		</div>
	)
}
