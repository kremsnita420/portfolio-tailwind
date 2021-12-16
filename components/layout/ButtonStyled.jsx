export default function ButtonStyled({ title }) {
	return (
		<div class=''>
			<div className='btn hover:scale-125 font-heading1 font-extrabold uppercase text-center btn-two'>
				<span className='text-gray-800 dark:text-gray-400 p-10'>{title}</span>
			</div>
		</div>
	)
}
