import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { IconSprite } from './shared/Icon';
import { UserContextProvider } from './context/userContext';
import { PostContextProvider } from './context/postContext';

function AppComponent() {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <PostContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
            <IconSprite />
          </Layout>
        </PostContextProvider>
      </UserContextProvider>
    </Provider>
  );
}
export const App = hot(() => <AppComponent />);
