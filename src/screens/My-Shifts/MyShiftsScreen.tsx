import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Shift} from '../../types';
import Slots from '../../component/Slots';

const MyShiftsScreen = () => {
  const shiftsData: {
    date: string;
    shifts: Shift[];
  }[] = [
    {
      date: 'Today',
      shifts: [
        {
          time: '14:00-16:00',
          location: 'Helsinki',
          hours: 2,
          button: 'Cancel',
          overlap: false,
        },
        {
          time: '14:00-16:00',
          location: 'Helsinki',
          hours: 2,
          button: 'Cancel',
          overlap: true,
        },
      ],
    },
    {
      date: 'Tomorrow',
      shifts: [
        {
          time: '12:00-16:00',
          location: 'Tampere',
          hours: 4,
          button: 'Cancel',
          overlap: false,
        },
      ],
    },
    {
      date: 'September 22',
      shifts: [
        {
          time: '9:00-11:00',
          location: 'Turku',
          hours: 2,
          button: 'Book',
          overlap: false,
        },
        {
          time: '13:30-15:00',
          location: 'Turku',
          hours: 1.5,
          button: 'Book',
          overlap: true,
        },
      ],
    },
  ];

  return (
    <ScrollView>
      {shiftsData.map((shiftData, index) => (
        <Slots key={index} date={shiftData.date} shifts={shiftData.shifts} />
      ))}
    </ScrollView>
  );
};

export default MyShiftsScreen;
