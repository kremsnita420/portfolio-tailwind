
import HeroImage from '../components/HeroImage'
import Layout from '../components/Layout';


export default function IndexPage() {




  return (
    <Layout title='Home Page' description='First Page' className="bg-white dark:bg-red-700">
      <div className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-center text-gray-800 dark:text-gray-100 font-bold">
          Next Themes + Tailwind Dark Mode
        </h1>




      </div>

      <HeroImage />
    </Layout>
  )
}

