import type { FC } from "react";
import { definitions, parameters } from "types/supabase";

interface BlogPostViewProps {
    post: definitions["posts"];
}
 
export const BlogPostView: FC<BlogPostViewProps> = ({post}) => {
    return ( 
        <>
            <h1>{post.title}</h1>
            <div>
                <p>{post.content}</p>
            </div>
        </>
     );
}