import { AiFillLinkedin, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai'
import { GiRotaryPhone } from 'react-icons/gi'

export default function SocialIcons() {
	return (
		<>
			<div className='flex items-center w-1/2 justify-around mt-5 text-4xl'>
				<a
					href='https://www.linkedin.com/in/safet-duranovic/'
					target='_blank'
					rel='noopener'>
					<AiFillLinkedin />
				</a>

				<a href='mailto:duranovic.safet@gmail.com'>
					<AiOutlineMail />
				</a>

				<a href='tel:0038640867888'>
					<GiRotaryPhone />
				</a>
			</div>
		</>
	)
}
