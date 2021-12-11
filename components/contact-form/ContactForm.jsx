import NextImage from 'next/image'
import SecondaryTitle from '../layout/typography/SecondaryTitle'

export default function ContactForm() {
	return (
		<>
			<div className='flex flex-col lg:flex-row items-start justify-center w-full h-full mb-20  glassmorph p-5'>
				<div className='w-full lg:pr-10 my-5 flex flex-col'>
					<h2 className='font-heading1 relative text-2xl md:text-3xl xl:text-4xl font-black mb-5'>
						Contact Form
					</h2>
					<p className='text-lg mb-10'>
						If you wish to contact me just fill the form and I will reply as
						soon as possible.
					</p>
					<div className='w-full'>
						<NextImage
							src='/images/mail.png'
							width={1000}
							height={1000}
							layout='responsive'
							alt='contact emoji'
							placeholder='blur'
							blurDataURL='https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
						/>
					</div>
				</div>

				{/* FORM */}
				<div className='flex flex-col items-center justify-center w-full my-5'>
					{/* NAME */}
					<div className='mb-6 w-full'>
						<label
							htmlFor='name'
							className='text-sm md:text-base lg:text-lg font-medium text-gray-900 block mb-2 dark:text-gray-300'>
							Name
						</label>
						<input
							type='text'
							id='name'
							className='
                    bg-gray-50 border border-gray-300 text-gray-900 
                    sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
						/>
					</div>
					{/* EMAIL */}
					<div className='mb-6 w-full'>
						<label
							htmlFor='email'
							className='text-sm md:text-base lg:text-lg font-medium text-gray-900 block mb-2 dark:text-gray-300'>
							Email
						</label>
						<input
							type='email'
							id='email'
							className='
                    bg-gray-50 border border-gray-300 text-gray-900 
                    sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
						/>
					</div>

					{/* TEXT */}
					<div className='mb-6 w-full'>
						<label
							htmlFor='message'
							className='text-sm md:text-base lg:text-lg font-medium text-gray-900 block mb-2 dark:text-gray-300'>
							Your message
						</label>
						<textarea
							id='message'
							rows='10'
							className='
                bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm md:text-base lg:text-lg rounded-md 
                focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 
                dark:border-gray-600 dark:placeholder-gray-400 p-2 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Leave a comment...'
						/>
					</div>
					<button
						type='submit'
						className=' w-auto px-6 py-3 mt-10 font-heading1 tracking-wider
                           font-black text-xl rounded-md
						 bg-gray-800 dark:bg-gray-200 text-gray-200 hover:bg-gray-600 
						 dark:text-gray-800 dark:hover:bg-gray-400'>
						Submit
					</button>
				</div>
			</div>
		</>
	)
}
