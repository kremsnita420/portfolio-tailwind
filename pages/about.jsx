//components
import HeadTitle from '../components/layout/HeadTitle'
import Layout from '../components/layout/Layout'

export default function AboutPage() {
	const today = new Date()
	const christmas = new Date('2021-12-25')
	const tillChristmas = christmas - today

	const days = tillChristmas / 1000 / 60 / 60 / 24
	const onlyDays = Math.floor(days)

	const hours = (days - Math.floor(days)) * 24
	const onlyHours = Math.floor(hours)

	const minutes = (hours - Math.floor(hours)) * 60
	const onlyMinutes = Math.floor(minutes)

	const seconds = (minutes - Math.floor(minutes)) * 60
	const onlySeconds = Math.floor(seconds)

	console.log(
		`days: ${onlyDays} hours: ${onlyHours} minutes: ${onlyMinutes} seconds: ${onlySeconds}`
	)

	return (
		<Layout>
			<HeadTitle title='About Page' />

			<div>
				<span>
					<strong>d: {onlyDays} </strong>
				</span>
				<span>
					<strong>h: {onlyHours} </strong>
				</span>
				<span>
					<strong>m: {onlyMinutes} </strong>
				</span>
				<span>
					<strong>s: {onlySeconds}</strong>
				</span>
			</div>
		</Layout>
	)
}
