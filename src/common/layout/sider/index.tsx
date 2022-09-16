import { FC } from "react";
import { Layout } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import "./index.less";
import MenuCustomize from "@/common/layout/sider/menu";
import { useMenuList } from "@/common/layout/sider/useMenuList";
import useCurrentUrl from "@/common/layout/sider/useCurrentUrl";
import accountService from "@/store/account/service";

const AntSide = Layout.Sider;

const Side: FC = () => {
  const menuList = useMenuList();
  const currentUrl = useCurrentUrl();
  console.log(menuList);

  return (
    <AntSide width={200} className="cdn-ly-side cdn-scroll">
      <div>
        <div>
          {menuList.map((item, idx) => {
            if (item.child) {
              return null;
            }
            return (
              <MenuCustomize {...item} key={idx} currentUrl={currentUrl} />
            );
          })}
        </div>
      </div>
      <div className="logout" onClick={accountService.logout}>
        <LogoutOutlined />
        退出
      </div>
    </AntSide>
  );
};

export default Side;
