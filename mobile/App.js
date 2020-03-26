import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import FlashMessage from 'react-native-flash-message';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

export default function App() {
  return (
    <>
      <Routes />
      <FlashMessage icon="auto" duration={3000} />
    </>
  );
}
