import { MenuItem } from "@/common/layout/sider/useMenuList";
import {
  VerifiedOutlined,
  PartitionOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

/** customer菜单的配置 */
export const customerConfig: MenuItem[] = [
  {
    text: "跳转配置",
    url: "/redirect-setting",
    icon: <PartitionOutlined />,
  },
  {
    text: "证书管理",
    url: "/ssl",
    icon: <VerifiedOutlined />,
  },
  {
    text: "个人中心",
    url: "/profile",
    icon: <UserOutlined />,
  },
];

/** admin菜单的配置 */
export const adminConfig: MenuItem[] = [
  {
    text: "客户",
    url: "/customer",
    icon: <UsergroupAddOutlined />,
  },
  {
    text: "个人中心",
    url: "/profile",
    icon: <UserOutlined />,
  },
];
