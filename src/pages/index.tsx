import type { NextPage } from 'next'
import HomeView from '../views/HomeView/HomeView'
import supabase from 'lib/supabase/supabase';

export const getStaticProps = async () => {

  const {data: posts, error} = await supabase.from('posts').select('*').order('id', {ascending: false});

  if (error) {
    throw new Error(error.message);
  }

  return {
    props: {
      pageData: posts,
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