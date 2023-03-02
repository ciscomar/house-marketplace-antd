import { Layout } from "antd";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";


export const GeneralLayout = () => {
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <Header />
      <Content style={{ padding: '0 50px', height:'100%' }}>

        <div className="site-layout-content" >
         <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>House Marketplace ©2023 </Footer>
    </Layout>
  );
};
