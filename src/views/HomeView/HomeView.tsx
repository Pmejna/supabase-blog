import type { FC } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import type { HomeProps } from "../../pages";
 
const HomeView: FC<HomeProps> = ({postsData}) => {
    return ( 
        <MainLayout>
            <h1>HomeView</h1>
            <pre>{JSON.stringify(postsData, null, 2)}</pre>
        </MainLayout>
     );
}
 
export default HomeView;