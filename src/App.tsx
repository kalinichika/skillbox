import { hot } from 'react-hot-loader/root';
import React from 'react';
import './main.global.css';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { IconSprite } from './shared/Icon';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext.tsx';
import { PostContextProvider } from './shared/context/postContext.tsx';

function AppComponent() {
  const [token] = useToken();
  return (
    <tokenContext.Provider value={token}>
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
    </tokenContext.Provider>
  );
}
export const App = hot(() => <AppComponent />);
