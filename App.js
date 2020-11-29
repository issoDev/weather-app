import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './styles/styles';
import meteo from './src/api/meteo';
import LocalizedWeather from './src/components/LocalizedWeather';
import SearchField from './src/components/SearchField';
import FindWeather from './src/components/FindWeather';

export default function App() {
  // states
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
 
  // functions
  const fetchWeatherApi = async () => {
    const response = await meteo.get('/paris');
    setResult(response.data);
  };
  useEffect(() => {
    fetchWeatherApi();
  }, []);

  console.log(result);

  return (
    <SafeAreaView style={styles.appContainer}>
      <LocalizedWeather />
      <SearchField 
        searchText={searchText} 
        setSearchText={setSearchText}
      />
      <FindWeather />
    </SafeAreaView>
  );
}

