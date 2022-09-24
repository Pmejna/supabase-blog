import type { NextPage } from 'next'
import HomeView from '../views/HomeView/HomeView'
import supabase from 'lib/supabase/supabase';
import { parameters } from 'types/supabase';

export const getStaticProps = async () => {

  const {data: posts, error} = await supabase.from('posts').select('*').order('id', {ascending: false});

  if (error) {
    throw new Error(error.message);
  }

  return {
    props: {
      postsData: posts,
    }
  }
}

export interface HomeProps {
  postsData: parameters;
}

const Home: NextPage<HomeProps> = ({postsData}) => {
  return (
    <HomeView postsData={postsData}/>
  )
}
export default Home