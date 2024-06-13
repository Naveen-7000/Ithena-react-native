import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Shift} from '../../types';
import FilterHeader from '../../component/FilterHeader';
import Slots from '../../component/Slots';

const cities = [
  {name: 'Helsinki', shifts: 5},
  {name: 'Tampere', shifts: 8},
  {name: 'Turku', shifts: 5},
  {name: 'hsajhd', shifts: 9},
  {name: 'shjd', shifts: 10},
  {name: 'iuwe', shifts: 11},
];

const shiftsData: Shift[] = [
  // Sample shift data
  {
    time: '12:00-14:00',
    location: 'Helsinki',
    hours: 2,
    button: 'Booked',
    overlap: false,
  },
  {
    time: '13:00-15:00',
    location: 'Helsinki',
    hours: 2,
    button: 'Book',
    overlap: true,
  },
  {
    time: '14:00-16:00',
    location: 'Helsinki',
    hours: 2,
    button: 'Cancel',
    overlap: false,
  },
  {
    time: '16:00-18:00',
    location: 'Helsinki',
    hours: 2,
    button: 'Book',
    overlap: false,
  },
];

const AvailableShiftsScreen: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0].name);

  const handleSelectCity = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <View style={styles.container}>
      <FilterHeader
        cities={cities}
        selectedCity={selectedCity}
        onSelectCity={handleSelectCity}
      />
      <Slots date="Today" shifts={shiftsData} isAvailableTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
  },
});

export default AvailableShiftsScreen;
