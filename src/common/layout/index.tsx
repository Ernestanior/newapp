import { FC } from "react";
import { Layout } from "antd";
import ContentP from "./content";
import HeaderPlx from "./header";
import SideBar from "./sider";
import useAccountInfo from "@/store/account";
import { loadMenuList } from "./sider/useMenuList";
import { adminConfig } from "./sider/config";

interface IProps {
  children: any;
}
const LayoutPlx: FC<IProps> = ({ children }) => {
  const info = useAccountInfo();
  if (info) {
    loadMenuList(adminConfig);
  }
  return (
    <Layout className="height-fill">
      <HeaderPlx />
      <Layout>
        <SideBar />
        <ContentP>{children}</ContentP>
      </Layout>
    </Layout>
  );
};

export default LayoutPlx;
