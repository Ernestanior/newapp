import { Layout } from "antd";
import { FC, ReactNode } from "react";
import "./index.less";

interface IProps {
  children: ReactNode;
}

const ContentP: FC<IProps> = ({ children }) => {
  return (
    <Layout.Content className="comp-layout-content">
      <section className="cdn-scroll">{children}</section>
    </Layout.Content>
  );
};

export default ContentP;
