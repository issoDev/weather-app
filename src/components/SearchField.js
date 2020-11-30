import React from 'react'
import {  TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { styles } from '../../styles/styles'

export default function SearchField({ searchText, setSearchText, fetchWeatherApi }) {
  // 
  const weatherData = () => {
    fetchWeatherApi();
    setSearchText('')
  }

  return (
    <View style={styles.searchBackground}>
      <Feather 
        style={styles.searchIconStyle}
        name="search"
      />
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={weatherData}
        style={styles.searchInputStyle}
        placeholder="search city's weather"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
    </View>
  )
}

