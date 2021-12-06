import NextImage from 'next/image'
import NextLink from 'next/link'

export default function ProjectCard({ id, image, title }) {
	return (
		<div className='card'>
			<div className='imgbox'>
				<NextImage
					className='object-cover'
					width={300}
					height={260}
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

			<NextLink passHref href={`/project/${id}`}>
				<div className='content'>
					<p className='text-xl text-center p-2'>{title}</p>
					<div className='card-description ring-1'>
						<button className='text-xl text-center p-2 cursor-pointer'>
							More
						</button>
					</div>
				</div>
			</NextLink>
		</div>
	)
}
