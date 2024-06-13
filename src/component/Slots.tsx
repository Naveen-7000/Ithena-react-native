import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SlotsProps} from '../types';
import {COLORS} from '../constants/color';
import Button from './Button';

const Slots: React.FC<SlotsProps> = ({date, shifts, isAvailableTab}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{date}</Text>
        {!isAvailableTab && (
          <Text style={styles.headerSubText}>
            {shifts.length} {shifts.length > 1 ? 'shifts' : 'shift'},{' '}
            {shifts.reduce((total, shift) => total + shift.hours, 0)} h
          </Text>
        )}
      </View>
      <ScrollView>
        {shifts.map((shift, index) => (
          <View key={index} style={styles.shiftContainer}>
            <View style={styles.shift}>
              <Text style={styles.shiftTime}>{shift.time}</Text>
              {!isAvailableTab && (
                <Text style={styles.shiftLocation}>{shift.location}</Text>
              )}
            </View>
            <View
              style={[
                styles.buttonContainer,
                {justifyContent: isAvailableTab ? 'space-between' : 'flex-end'},
              ]}>
              {isAvailableTab && (
                <Text style={styles.shiftStatus}>{shift.button}</Text>
              )}
              <Button
                title={shift.button}
                color={
                  shift.overlap
                    ? COLORS.primary_gray
                    : shift.button === 'Cancel'
                      ? COLORS.primary_pink
                      : COLORS.primary_green
                }
                disabled={shift.overlap}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.time_slot_date,
  },
  headerSubText: {
    fontSize: 14,
    color: COLORS.time_slot_subtext,
  },
  shiftContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  shift: {
    width: '50%',
  },
  shiftTime: {
    fontSize: 16,
    color: COLORS.time_slot_date,
  },
  shiftLocation: {
    fontSize: 14,
    color: COLORS.time_slot_subtext,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shiftStatus: {
    marginRight: 10,
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primary_blue,
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
});

export default Slots;
