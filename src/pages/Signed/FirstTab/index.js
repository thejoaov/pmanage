import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function FirstTab() {
  const theme = useSelector(state => state.config.theme);
  return (
    <Container backgroundColor={theme}>
      <Text>First Screen</Text>
    </Container>
  );
}
