import React from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, GithubUserButton, LogoutButton } from './styles';
import { signOutTest } from '~/store/modules/auth/actions';
import { changeTheme } from '~/store/modules/config/actions';

export default function Config() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.config.theme);

  return (
    <Container backgroundColor={theme}>
      <LogoutButton onPress={() => dispatch(signOutTest())}>
        <Text>Logout</Text>
      </LogoutButton>
      <GithubUserButton onPress={() => dispatch(changeTheme())}>
        <Text>Change Theme</Text>
      </GithubUserButton>
    </Container>
  );
}
