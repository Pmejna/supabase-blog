import type { FC } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import type { HomeProps } from "../../pages";
 
const HomeView: FC<HomeProps> = ({pageData}) => {
    return ( 
        <MainLayout>
            <h1>HomeView</h1>
            <pre>{JSON.stringify(pageData, null, 2)}</pre>
        </MainLayout>
     );
}
 
export default HomeView;