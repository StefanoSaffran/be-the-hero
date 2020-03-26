import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import light from '~/styles/themes/light';
import dark from '~/styles/themes/dark';
import Context from '~/styles/themes/context';
import usePersistedState from '~/utils/usePersistedState';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Context.Provider value={{ toggleTheme }}>
          <ThemeProvider theme={theme}>
            <Router history={history}>
              <Routes />
              <GlobalStyle />
              <ToastContainer autoClose={3500} />
            </Router>
          </ThemeProvider>
        </Context.Provider>
      </PersistGate>
    </Provider>
  );
}

export default App;
