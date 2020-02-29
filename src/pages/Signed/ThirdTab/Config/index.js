import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import api from '~/services/api';

import {
  Container,
  GithubUserButton,
  GithubUserInput,
  GithubUserPhoto,
  Title,
  LogoutButton,
} from './styles';
import { signOutTest } from '~/store/modules/auth/actions';
import { changeTheme } from '~/store/modules/config/actions';

export default function Config() {
  const [value, setValue] = useState('thejoaov');
  const [user, setUser] = useState([]);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const theme = useSelector(state => state.config.theme);

  useEffect(() => {
    user.avatar_url ? setVisible(true) : setVisible(false);
  }, [user]);

  async function searchUser() {
    const { data } = await api.get(`/users/${value}`);
    setUser(data);
    setValue('');
  }

  return (
    <Container backgroundColor={theme}>
      <Title>Hello World!</Title>
      {!visible ? (
        <>
          <Text>Type a GitHub username</Text>
          <GithubUserInput
            onChangeText={text => setValue(text)}
            value={value}
            autoCapitalize="none"
          />
          <GithubUserButton onPress={() => searchUser()}>
            <Text>Search!</Text>
          </GithubUserButton>
        </>
      ) : (
        <>
          <GithubUserPhoto source={{ uri: user.avatar_url }} />
          <Text>{user.name}</Text>
          <GithubUserButton onPress={() => setVisible(false)}>
            <Text>Search Again!</Text>
          </GithubUserButton>
        </>
      )}
      <LogoutButton onPress={() => dispatch(signOutTest())}>
        <Text>Logout</Text>
      </LogoutButton>
      <GithubUserButton onPress={() => dispatch(changeTheme())}>
        <Text>Change Theme</Text>
      </GithubUserButton>
    </Container>
  );
}
