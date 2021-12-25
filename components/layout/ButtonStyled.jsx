export default function ButtonStyled({ title }) {
	return (
		<div className=''>
			<div className='btn hover:scale-125 font-heading1 uppercase tracking-widest font-bold  text-center btn-two'>
				<span className='text-red-400 inline-block dark:text-blue-400 p-10'>
					{title}
				</span>
			</div>
		</div>
	)
}
