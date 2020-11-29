import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles/styles'
import LocalizedWeather from './src/components/LocalizedWeather';
import SearchField from './src/components/SearchField';


export default function App() {
  return (
    <View style={styles.appContainer}>
      <LocalizedWeather />
      <SearchField />
    </View>
  );
}

