import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppContent } from './AppContent';
import './main.global.css';

function AppComponent() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
export const App = hot(() => AppComponent());
