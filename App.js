import React from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './styles/styles'
import LocalizedWeather from './src/components/LocalizedWeather';
import SearchField from './src/components/SearchField';
import FindWeather from './src/components/FindWeather';


export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <LocalizedWeather />
      <SearchField />
      <FindWeather />
    </SafeAreaView>
  );
}

