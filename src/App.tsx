import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
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
import { commentContext } from './shared/context/commentContext';
import { commentsListContext } from './shared/context/commentsListContext';

function AppComponent() {
  const [commentsListValue, setCommentsListValue] = useState<string>('');
  const [commentValue, setCommentValue] = useState<string>('');
  const [token] = useToken();
  const TokenProvider = tokenContext.Provider;
  const CommentProvider = commentContext.Provider;
  const CommentsListProvider = commentsListContext.Provider;
  return (
    <CommentsListProvider
      value={{ value: commentsListValue, onChange: setCommentValue }}
    >
      <CommentProvider
        value={{ value: commentValue, onChange: setCommentValue }}
      >
        <TokenProvider value={token}>
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
        </TokenProvider>
      </CommentProvider>
    </CommentsListProvider>
  );
}
export const App = hot(() => <AppComponent />);
