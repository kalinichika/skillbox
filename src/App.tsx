import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppContent } from './AppContent';
import { RecoilRoot } from 'recoil';
import './main.global.css';

function AppComponent() {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </RecoilRoot>
  );
}
export const App = hot(() => AppComponent());
