import React from 'react'
import {  TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { styles } from '../../styles/styles'

export default function SearchField() {
  return (
    <View style={styles.searchBackground}>
      <Feather 
        style={styles.searchIconStyle}
        name="search"
      />
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => console.log("submitted")}
        style={styles.searchInputStyle}
        placeholder="chercher la météo d'une ville ..."
      />
    </View>
  )
}

