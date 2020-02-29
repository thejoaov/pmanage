import styled from 'styled-components/native';
import colors from '~/util/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    colors(props.backgroundColor || false).backgroundColor};
  width: 100%;
`;
