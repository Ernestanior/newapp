import { FC } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Space, Row, Col } from "antd";
import "./index.less";

const HeaderPlx: FC = () => {
  return (
    <nav className="comp-header">
      <Row align="middle">
        <Col flex={1}>
          <span>ERN</span>
        </Col>
        <Col span={6}>
          <Space>
            <UserOutlined />
          </Space>
        </Col>
      </Row>
    </nav>
  );
};

export default HeaderPlx;
