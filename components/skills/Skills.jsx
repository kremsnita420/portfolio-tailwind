//icons
import { useRouter } from 'next/router'
import { AiFillHtml5, AiOutlineTablet } from 'react-icons/ai'
import {
	DiCss3,
	DiMongodb,
	DiGit,
	DiNpm,
	DiReact,
	DiResponsive,
} from 'react-icons/di'
import {
	IoLogoJavascript,
	IoLogoNodejs,
	IoIosCodeWorking,
} from 'react-icons/io'
import {
	SiExpress,
	SiVercel,
	SiFirebase,
	SiHeroku,
	SiNextdotjs,
	SiTailwindcss,
	SiStyledcomponents,
	SiBootstrap,
	SiMaterialui,
	SiGithub,
	SiVisualstudiocode,
	SiGooglechrome,
	SiSass,
	SiFigma,
	SiStrapi,
} from 'react-icons/si'

//translation
import en from '../../locales/en'
import sl from '../../locales/sl'

export default function Skills() {
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : sl

	return (
		<div className='flex flex-col text-lg md:flex-row w-full items-center md:items-start justify-around glassmorph mb-10 pt-3'>
			<div className='flex flex-col items-center justify-center'>
				{/* FRONTEND */}
				<h3 className='uppercase rotate-[-4deg] my-2 px-2 sketch-highlight p-2  inline-block  text-blue-400 dark:text-red-400'>
					{t.fronted_text}
				</h3>

				<ul className='flex flex-col items-start justify-center my-5 leading-7'>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2 text-3xl'>
							<AiFillHtml5 />{' '}
						</span>{' '}
						HTML
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<DiCss3 />
						</span>{' '}
						CSS
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<IoLogoJavascript />
						</span>
						Javascript
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<DiReact />
						</span>{' '}
						React
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<SiSass />
						</span>
						Sass
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<SiStyledcomponents />
						</span>
						Styled
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<AiOutlineTablet />
						</span>
						Responsive
					</li>
				</ul>
			</div>

			<div className='flex flex-col items-center justify-center'>
				{/* BACKEND */}
				<h3 className='uppercase rotate-3 my-2 px-2 sketch-highlight p-2  inline-block  text-blue-400 dark:text-red-400'>
					{t.backend_text}
				</h3>

				<ul className='flex flex-col items-start justify-center my-5 leading-7'>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<IoLogoNodejs />
						</span>
						Node
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<SiExpress />
						</span>{' '}
						Express
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<DiMongodb />
						</span>{' '}
						MongoDB
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<IoIosCodeWorking />
						</span>
						RestAPI
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<SiVercel />
						</span>
						Vercel
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<SiStrapi />
						</span>
						Strapi CMS
					</li>
					<li className='flex items-center justify-center'>
						<span className='pr-2  text-3xl'>
							<SiHeroku />
						</span>
						Heroku
					</li>
				</ul>
			</div>

			<div className='flex flex-col items-center justify-center'>
				{/* FRAMEWORKS */}
				<h3 className='uppercase rotate-[-4deg] my-2 px-2 sketch-highlight p-2  inline-block  text-blue-400 dark:text-red-400'>
					{t.frameworks_text}
				</h3>

				<ul className='flex flex-col items-start justify-center my-5 leading-7'>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<SiNextdotjs />
						</span>
						NextJS
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<SiTailwindcss />
						</span>
						TailwindCSS
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<SiBootstrap />
						</span>
						Bootstrap
					</li>
					<li className='flex items-center justify-center'>
						<span className='pr-2  text-3xl'>
							<SiMaterialui />
						</span>
						MaterialUI
					</li>
				</ul>
			</div>

			<div className='flex flex-col items-center justify-center'>
				{/* TOOLS */}
				<h3 className='uppercase rotate-3 my-2 px-2 sketch-highlight p-2  inline-block  text-blue-400 dark:text-red-400'>
					{t.tools_text}
				</h3>

				<ul className='flex flex-col items-start  justify-center my-5 leading-7'>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<SiGithub />
						</span>
						Github
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<DiGit />
						</span>
						Git
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<DiNpm />
						</span>
						npm
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<SiGooglechrome />
						</span>
						Chrome
					</li>
					<li className='flex items-center justify-center mb-2'>
						<span className='pr-2  text-3xl'>
							<SiVisualstudiocode />
						</span>
						VSCode
					</li>
					<li className='flex items-center justify-center'>
						<span className='pr-2  text-3xl'>
							<SiFigma />
						</span>
						Figma
					</li>
				</ul>
			</div>
		</div>
	)
}
