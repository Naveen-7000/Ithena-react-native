import React from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import {SlotsProps} from '../types';
import {COLORS} from '../constants/color';
import Button from './Button';

const Slots: React.FC<SlotsProps> = ({date, shifts, button, overlap}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{date}</Text>
        <Text style={styles.headerSubText}>
          {shifts.length} shifts,{' '}
          {shifts.reduce((total, shift) => total + shift.hours, 0)} h
        </Text>
      </View>
      <ScrollView style={styles.body}>
        {shifts.map((shift, index) => (
          <View key={index} style={styles.shiftContainer}>
            <View>
              <Text style={styles.shiftTime}>{shift.time}</Text>
              <Text style={styles.shiftLocation}>{shift.location}</Text>
            </View>
            {/* <Button title={shift} /> */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
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
  body: {
    padding: 10,
  },
  shiftContainer: {
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shiftTime: {
    fontSize: 16,
    color: COLORS.time_slot_date,
  },
  shiftLocation: {
    fontSize: 14,
    color: COLORS.time_slot_subtext,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: COLORS.primary_pink,
    paddingVertical: 10,
    paddingHorizontal: 30,
    textAlign: 'center',
    borderRadius: 50,
  },
  bookButton: {
    borderWidth: 1,
    borderColor: COLORS.primary_green,
    paddingVertical: 10,
    paddingHorizontal: 30,
    textAlign: 'center',
    borderRadius: 50,
  },
  inactiveButton: {
    borderWidth: 1,
    borderColor: COLORS.primary_gray,
    paddingVertical: 10,
    paddingHorizontal: 30,
    textAlign: 'center',
    borderRadius: 50,
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primary_pink,
  },
  bookButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primary_green,
  },
  inactiveButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primary_gray,
  },
});

export default Slots;
