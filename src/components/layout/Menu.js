import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const MenuUI = () => (
  <Menu mode="horizontal" theme="p">
    <Menu.Item key="search">
      <Link to="/search">
        <Icon type="search" />
        <span>Search</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="favorites">
      <Link to="/favorites">
        <Icon type="star" />
        <span>Favorites</span>
      </Link>
    </Menu.Item>
  </Menu>
);

export default MenuUI;
