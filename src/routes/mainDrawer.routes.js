/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Text } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

import FirstTab from '~/pages/Signed/FirstTab';
import SecondTab from '~/pages/Signed/SecondTab';
import ThirdTab from '~/pages/Signed/ThirdTab';
import colors from '~/util/colors';

const Drawer = createDrawerNavigator();

export default function CustomDrawer() {
  const theme = useSelector(state => state.config.theme);

  return (
    <>
      <Drawer.Navigator
        drawerContent={props => (
          <DrawerContentScrollView {...props}>
            <Text>iai</Text>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        )}
        drawerContentOptions={{
          backgroundColor: colors(theme).backgroundColor,
          inactiveBackgroundColor: colors(theme).inactiveBackgroundColor,
          activeBackgroundColor: colors(theme).activeBackgroundColor,
          activeTintColor: colors(theme).activeTintColor,
          inactiveTintColor: colors(theme).inactiveTintColor,
          itemStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 29,
            margin: 0,
            padding: 0,
          },
          labelStyle: {
            flex: 1,
            minWidth: '100%',
          },
        }}
      >
        <Drawer.Screen name="First Screen" component={FirstTab} />
        <Drawer.Screen name="Second Screen" component={SecondTab} />
        <Drawer.Screen name="Configuration" component={ThirdTab} />
      </Drawer.Navigator>
    </>
  );
}
