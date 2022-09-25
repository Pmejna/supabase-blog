import type { NextPage, GetStaticPropsContext  } from 'next';
import supabase from "lib/supabase/supabase";
import { definitions, parameters } from 'types/supabase';
import { BlogPostView } from 'views/Blog/BlogPostView/BlogPostView';

const PostPage: NextPage<BlogPostProps> = ({post}) => {
  return (
      <BlogPostView post={post}/>
  )
}

export interface BlogPostParams extends GetStaticPropsContext   {
    params: {
        slug: string;
    }
}

export const getStaticPaths = async () => {
    const {data: posts} = await supabase.from('posts').select('*');
  
    const paths = posts?.map(({ slug }) => {
      return { params: { slug } };
    });
  
    return {
      paths,
      fallback: false,
    };
  };

export const getStaticProps = async ({params}: BlogPostParams) => {
  console.log(params);
    const {data: post, error} = await supabase.from('posts').select('*').eq('slug', params.slug).single();
    return {
        props: {
          post
        },
      };
};

export interface BlogPostProps {
  post: definitions['posts'];
}


export default PostPage
