import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import { GiRotaryPhone } from 'react-icons/gi'

export default function SocialIcons() {
	return (
		<>
			<div className='flex items-center w-2/3 justify-around mt-5 text-4xl'>
				<a
					href='https://www.linkedin.com/in/safet-duranovic/'
					target='_blank'
					rel='noopener'>
					<AiFillLinkedin className='hover:scale-125 hover:bg-gradient-to-br from-pink-400 to-red-600 dark:from-blue-600 dark:to-pink-900 transition-all rounded-md' />
				</a>

				<a
					href='https://github.com/kremsnita420?tab=repositories'
					target='_blank'
					rel='noopener'>
					<AiFillGithub className='hover:scale-125 hover:bg-gradient-to-br from-pink-400 to-red-600 dark:from-blue-600 dark:to-pink-900 transition-all rounded-md' />
				</a>

				<a href='mailto:duranovic.safet@gmail.com'>
					<AiOutlineMail className='hover:scale-125 hover:bg-gradient-to-br from-pink-400 to-red-600 dark:from-blue-600 dark:to-pink-900 transition-all rounded-md' />
				</a>

				<a href='tel:0038640867888'>
					<GiRotaryPhone className='hover:scale-125 hover:bg-gradient-to-br from-pink-400 to-red-600 dark:from-blue-600 dark:to-pink-900 transition-all rounded-md' />
				</a>
			</div>
		</>
	)
}
