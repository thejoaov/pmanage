import React from 'react';

import { useSelector } from 'react-redux';

import { Container } from './styles';

import Config from './Config';

export default function ThirdTab() {
  const theme = useSelector(state => state.config.theme);
  return (
    <Container backgroundColor={theme}>
      <Config />
    </Container>
  );
}
