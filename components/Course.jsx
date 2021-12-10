export default function Course({ date, link, title, platform, description }) {
	return (
		<a href={link} target='_blank' rel='noopener'>
			<div
				className='
				flex flex-col items-start glassmorph min-h-[19rem] rounded-lg mb-5 p-5
			    hover:opacity-90'>
				<p className='my-2 text-md'>{date}</p>
				<h3 className='text-gray-500 dark:text-gray-800 uppercase my-2'>
					{title}
				</h3>
				<h4 className='text-gray-500 dark:text-gray-800 my-2'>{platform}</h4>
				<p className='mb-5 text-md'>{description}</p>
			</div>
		</a>
	)
}
