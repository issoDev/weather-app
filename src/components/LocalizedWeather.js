import React from 'react'
import { Text, View } from 'react-native'

import { styles } from '../../styles/styles'

export default function LocalizedWeather() {
  return (
    <View style={styles.localizedWeatherContainer}>
      <Text style={{ color: "#fff" }}>Localized Weather</Text>
    </View>
  )
}
