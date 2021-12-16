import SocialIcons from '../contact-form/SocialIcons'

export default function Footer() {
	return (
		<footer
			className='
            w-full flex flex-col items-center justify-center
            bg-gray-800 dark:bg-gray-300 text-gray-400 dark:text-gray-800 
            rounded-none min-h-[5rem]'>
			<div className='pb-5 w-full lg:w-1/3 flex flex-col items-center justify-around mb-5 '>
				<SocialIcons />
				<span className='mt-5'>Email: duranovic.safet@gmail.com</span>
				<span className='mt-5'>Telephone: +386 40867888</span>
			</div>

			<div
				className='
            w-full flex flex-col items-center justify-center p-2
            bg-gray-900 text-gray-600 
            '>
				<span>
					Copyright {new Date().getFullYear()}.{' '}
					<a
						target='-blank'
						rel='noopener'
						className='underline text-purple-900'
						href='https://www.linkedin.com/in/safet-duranovic/'>
						Safet Duranovic
					</a>
				</span>
			</div>
		</footer>
	)
}
