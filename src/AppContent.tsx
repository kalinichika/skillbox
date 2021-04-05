import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { IconSprite } from './shared/Icon';
import { Post } from './shared/Post';
import { useSelector } from 'react-redux';
import { PostState, IPostData } from './redux/post/initialState';

export function AppContent() {
  const openedData = useSelector<{ post: PostState }, IPostData>((state) => {
    return state.post.opened;
  });
  const [opened, setOpenedData] = useState(openedData);

  useEffect(() => {
    setOpenedData(openedData);
  }, [openedData]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return;
  }, []);

  return mounted ? (
    <BrowserRouter>
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Redirect exact from="/" to="/posts" />
            <Redirect from="/auth" to="/posts" />
            <Route path="/posts">
              <CardsList />
              <Route path="/posts/:id">
                <Post title={opened.title} text={opened.title} />
              </Route>
            </Route>
            <Route path="*">
              <h1 style={{ textAlign: 'center' }}>404 - страница не найдена</h1>
            </Route>
          </Switch>
        </Content>
        <IconSprite />
      </Layout>
    </BrowserRouter>
  ) : null;
}
