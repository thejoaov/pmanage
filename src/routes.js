import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import UnSigned from './routes/unsigned.routes';
import CustomDrawer from './routes/mainDrawer.routes';

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);
  console.log(signed);
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      {signed ? (
        <Stack.Screen
          name="Signed"
          component={CustomDrawer}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Unsigned"
          component={UnSigned}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
