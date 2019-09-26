import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Layout } from 'antd';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="header">
      <Row>
        <Col className="header-brand" span={8}>
          <Link to="/">Music Store</Link>
        </Col>
      </Row>
    </AntHeader>
  );
};

export default Header;
