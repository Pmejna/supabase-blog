import Head from "next/head";
import type { FC, ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
}
 
const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <>
        <Head>
        <title>{"Blog Supabase Test"}</title>
        </Head>
        <main style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            {children}
        </main>
        </> 
     );
}
 
export default MainLayout;