import React from 'react'
import { Text, View } from 'react-native'

import { styles } from '../../styles/styles'

export default function FindWeather({ result }) {
  return (
    <View style={styles.findWeatherContainer}>
      <Text>{result.city}</Text>
    </View>
  )
}

