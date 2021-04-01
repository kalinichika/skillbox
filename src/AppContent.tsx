import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { IconSprite } from './shared/Icon';
import { Post } from './shared/Post';

export function AppContent() {
  const [post, setPostData] = useState({ title: '', text: '' });
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
          <CardsList />
          <Route path="/post/:id">
            <Post
              title={'Not have to worry about money.'}
              text={
                'Not have to worry about money.\nIm tired of every decision I make revolving around money...\n"Can I afford it?"\n"What would I have to compromise?"\n"What happens is I mess up and cant afford it again?"\n"How long will it take to save?"\n"Do I have to skip food for several days again?"'
              }
            />
          </Route>
        </Content>
        <IconSprite />
      </Layout>
    </BrowserRouter>
  ) : null;
}
