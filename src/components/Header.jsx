import { Layout, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const { Header } = Layout;

  const links = [
    {
      key:'1',
      label:(<Link to={'/'}>Explore</Link>),
     
    },
    {
      key:'2',
      label:'Offer',
    },
    {
      key:'3',
      label:(<Link to={'/sign-in'}>Profile</Link>),
       
    },
  ]

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={links}
      />
    </Header>
  );
};


