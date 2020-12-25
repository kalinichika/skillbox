import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { IconSprite } from './shared/Icon';
import { getToken } from './redux/common/actions';

function AppComponent() {
  const dispatch = useDispatch();
  dispatch(getToken('access_token'));

  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
        <IconSprite />
      </Layout>
    </Provider>
  );
}
export const App = hot(() => AppComponent());
