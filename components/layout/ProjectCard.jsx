import NextImage from 'next/image'
import NextLink from 'next/link'

export default function ProjectCard({ id, image, title, description, stack }) {
	return (
		<NextLink href={`/project/${id}`}>
			<a
				className='
                flex flex-col  rounded-md hover:opacity-70
                bg-gray-800 dark:bg-gray-200
                '>
				<div className='w-full h-full'>
					<NextImage
						width={600}
						height={400}
						layout='responsive'
						placeholder='blur'
						blurDataURL='https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
						src={image}
						alt='thumbnail'
						priority='high'
						rel='preload'
						as='image'
					/>
				</div>
				<div className='p-4 flex flex-col'>
					<h5 className='text-gray-200 dark:text-gray-800 text-2xl'>{title}</h5>
					<p className=' text-gray-700 mb-3 dark:text-gray-400'>
						{description}
					</p>
					<p className=' text-gray-700 mb-3 dark:text-gray-400'>
						<strong>Stack: </strong>
						{stack}
					</p>
				</div>
			</a>
		</NextLink>
	)
}
