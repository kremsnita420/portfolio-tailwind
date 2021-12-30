import NextImage from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function ProjectCard({ id, image, title }) {
	const router = useRouter()
	const { locale } = router

	return (
		<NextLink
			passHref
			href={`/project/${id}`}
			locale={locale === 'en' ? 'en' : 'sl'}>
			<div className='card mb-10 glassmorph cursor-pointer hover:scale-105 transition-transform hover:bg-green-300 dark:hover:bg-red-300'>
				<div className='imgbox'>
					<NextImage
						className='object-cover'
						width={100}
						height={100}
						layout='responsive'
						placeholder='blur'
						blurDataURL='https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
						src={image}
						alt='thumbnail'
						s
					/>
					<p className='text-xl font-semibold font-heading1 text-gray-800 dark:text-gray-200 text-center pt-5'>
						{title}
					</p>
				</div>
			</div>
		</NextLink>
	)
}
