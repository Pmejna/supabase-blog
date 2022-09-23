import type { NextPage } from 'next'
import HomeView from '../views/HomeView/HomeView'

export const getStaticProps = async () => {
  return {
    props: {
      pageData: [],
    }
  }
}

export interface HomeProps {
  pageData: any[];
}

const Home: NextPage<HomeProps> = ({pageData}) => {
  return (
    <HomeView pageData={pageData}/>
  )
}
export default Home