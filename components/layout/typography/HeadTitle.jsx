export default function Title({ title }) {
	return (
		<div>
			<h1 className='font-heading1 backface text-2xl md:text-3xl xl:text-4xl text-center py-1 p-2 head-title relative font-black my-20'>
				{title}
			</h1>
		</div>
	)
}
