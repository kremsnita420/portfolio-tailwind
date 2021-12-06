import NextImage from 'next/image'
import NextLink from 'next/link'

export default function ProjectCard({ id, image, description, title }) {
	return (
		// <NextLink href={`/project/${id}`}>
		<div className='card'>
			<div className='imgbox'>
				<NextImage
					width={300}
					height={260}
					placeholder='blur'
					blurDataURL='https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
					src={image}
					alt='thumbnail'
					priority='high'
					rel='preload'
					as='image'
				/>
			</div>

			<div className='content'>
				<h2 className='text-3xl'>{title}</h2>
				<p className=''>{title}</p>
			</div>
		</div>
	)
}
