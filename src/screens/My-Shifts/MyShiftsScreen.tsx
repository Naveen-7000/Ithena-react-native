import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Shift} from '../../types';
import Slots from '../../component/Slots';

const MyShiftsScreen = () => {
  const shiftsData: {
    date: string;
    shifts: Shift[];
    button: string;
    overlap: boolean;
  }[] = [
    {
      date: 'Today',
      shifts: [
        {time: '14:00-16:00', location: 'Helsinki', hours: 2},
        {time: '14:00-16:00', location: 'Helsinki', hours: 2},
      ],
      button: 'Cancel',
      overlap: false,
    },
    {
      date: 'Tomorrow',
      shifts: [{time: '12:00-16:00', location: 'Tampere', hours: 4}],
      button: 'Book',
      overlap: true,
    },
    {
      date: 'September 22',
      shifts: [
        {time: '9:00-11:00', location: 'Turku', hours: 2},
        {time: '13:30-15:00', location: 'Turku', hours: 1.5},
      ],
      button: 'Book',
      overlap: false,
    },
  ];

  return (
    <ScrollView>
      {shiftsData.map((shiftData, index) => (
        <Slots
          key={index}
          date={shiftData.date}
          shifts={shiftData.shifts}
          overlap={shiftData.overlap}
          button={shiftData.button}
        />
      ))}
    </ScrollView>
  );
};

export default MyShiftsScreen;
