import React from 'react';
import { Layout } from 'antd';

import Header from './components/layout/Header';
import MenuUI from './components/layout/Menu';
import Router from './Router';

const App = () => (
  <div className="App">
    <Layout>
      <Header />
      <MenuUI />
      <Layout className="layout-height">
        <Layout.Content>
          <Router />
        </Layout.Content>
      </Layout>
    </Layout>
  </div>
);

export default App;
