import supabase from "lib/supabase/supabase";



export const getServerSideProps = async ({params}) => {
    const {data: post, error} = await supabase.from('posts').select('*').eq('slug', params.slug).single();

    if (error) {
        throw new Error(error.message);
    }

    return {
        props: {
            post,
        },
    };
};

const PostPage = ({post}) => {
    return (
        <BlogPostView post={post}/>
    )
}
