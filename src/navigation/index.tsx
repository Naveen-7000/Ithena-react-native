import react from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MyShifts from '../screens/My-Shifts/MyShiftsScreen';
import AvailableShifts from '../screens/Available-Shifts/AvailableShiftsScreen';

import {SCREENS} from '../constants/screens';
import {COLORS} from '../constants/color';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: COLORS.active_tab,
          tabBarInactiveTintColor: COLORS.primary_gray,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            borderTopWidth: 2,
            borderTopColor: COLORS.primary_gray,
            width: '100%',
            height: 50,
          },
          headerShown: false,
          tabBarIcon: () => {
            return <View></View>;
          },
          tabBarLabel: ({focused}) => {
            let label;
            if (route.name === SCREENS.MY_SHIFTS) {
              label = SCREENS.MY_SHIFTS;
            } else if (route.name === SCREENS.AVAILABLE) {
              label = SCREENS.AVAILABLE;
            }
            return (
              <Text
                style={{
                  color: `${focused ? COLORS.active_tab : COLORS.inactive_tab}`,
                  textAlign: 'center',
                  padding: 15,
                }}>
                {label}
              </Text>
            );
          },
        })}>
        <Tab.Screen name={SCREENS.MY_SHIFTS} component={MyShifts} />
        <Tab.Screen name={SCREENS.AVAILABLE} component={AvailableShifts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
