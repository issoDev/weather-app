import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { styles } from '../../styles/styles'
import WeatherCard from './WeatherCard'

export default function FindWeather({ result }) {
  const [icon, setIcon] = useState(null);

  const date = () => {
    const currentDate = new Date();
    return (`${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`);
  }

  const weatherIcon = () => {
    return `http://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`
  }

  return (
    <View style={styles.findWeatherContainer}>
      {
        result === null 
          ? <Text style={styles.infoTextStyle}> Add a city in the search bar above </Text>
          : <WeatherCard 
              city={result.name} 
              date={date()} 
              icon={weatherIcon()} 
              temperature={parseInt(result.main.temp)} 
              condition={result.weather[0].description}
            />
      }
    </View>
  )
}

