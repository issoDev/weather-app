import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './styles/styles';
import LocalizedWeather from './src/components/LocalizedWeather';
import SearchField from './src/components/SearchField';
import FindWeather from './src/components/FindWeather';

export default function App() {
  // states
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState(null);
 
  // functions
  const fetchWeatherApi = async () => {
    try {
      const response = await meteo.get(`/${searchText}`);
      const weatherData = {
        city: response.data.city_info.name,
        date: response.data.current_condition.date,
        icon: response.data.current_condition.icon_big,
        temperature: response.data.current_condition.tmp,
        condition: response.data.current_condition.condition
      }
      setResult(weatherData);
    } catch (error) {
        console.log(error);
    }
    
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <LocalizedWeather />
      <SearchField 
        searchText={searchText} 
        setSearchText={setSearchText}
        fetchWeatherApi={fetchWeatherApi}
      />
      <FindWeather result={result}/>
    </SafeAreaView>
  );
}

