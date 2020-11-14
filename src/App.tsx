import { hot } from 'react-hot-loader/root';
import React from 'react';
import './main.global.css';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { IconSprite } from './shared/Icon';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
      <IconSprite />
    </Layout>
  );
}
export const App = hot(() => <AppComponent />);
