import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, { useCallback, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import { useColorScheme } from 'react-native-appearance';
import { ThemeProvider } from 'styled-components';
import FlashMessage from 'react-native-flash-message';

import Context from '~/themes/context';
import light from '~/themes/light';
import dark from '~/themes/dark';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

export default function App() {
  const deviceTheme = useColorScheme();
  const [theme, setTheme] = useState(deviceTheme === 'light' ? light : dark);

  useEffect(() => {
    async function getPersistedTheme() {
      const persistedTheme = await AsyncStorage.getItem('theme');

      if (persistedTheme) {
        setTheme(persistedTheme === 'light' ? light : dark);
      }
    }

    getPersistedTheme();
  }, []);

  const persistTheme = useCallback(async (themeToPersist) => {
    setTheme(themeToPersist === 'light' ? light : dark);
    await AsyncStorage.setItem('theme', themeToPersist);
  }, []);

  useEffect(() => {
    persistTheme(deviceTheme);
  }, [deviceTheme, persistTheme]);

  const toggleTheme = useCallback(() => {
    persistTheme(theme.title === 'light' ? 'dark' : 'light');
  }, [theme.title, persistTheme]);

  return (
    <Context.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Routes />
        <FlashMessage icon="auto" duration={3000} />
      </ThemeProvider>
    </Context.Provider>
  );
}
