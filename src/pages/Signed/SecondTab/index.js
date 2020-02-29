import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function SecondTab() {
  const theme = useSelector(state => state.config.theme);
  return (
    <Container backgroundColor={theme}>
      <Text>Second Screen</Text>
    </Container>
  );
}
