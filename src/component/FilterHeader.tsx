import React from 'react';
import {ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../constants/color';

interface FilterHeaderProps {
  cities: {name: string; shifts: number}[];
  selectedCity: string;
  onSelectCity: (city: string) => void;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({
  cities,
  selectedCity,
  onSelectCity,
}) => {
  return (
    <ScrollView horizontal style={styles.scrollContainer}>
      {cities.map((city, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.cityButton,
            selectedCity === city.name && styles.selectedCityButton,
          ]}
          onPress={() => onSelectCity(city.name)}>
          <Text
            style={[
              styles.cityText,
              selectedCity === city.name && styles.selectedCityText,
            ]}>
            {city.name} ({city.shifts})
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    height: 50,
  },
  cityButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  selectedCityButton: {
    borderWidth: 0,
  },
  cityText: {
    fontSize: 16,
    color: COLORS.primary_gray,
  },
  selectedCityText: {
    color: COLORS.primary_blue,
    fontWeight: 'bold',
  },
});

export default FilterHeader;
