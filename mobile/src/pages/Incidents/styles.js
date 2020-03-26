import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight + 20}px 24px 0;
`;

export const Image = styled.Image``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalIncidents = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const Welcome = styled.Text`
  font-size: 30px;
  margin: 48px 0 16px;
  font-weight: bold;
  color: #13131a;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;

export const IncidentList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 32px;
`;
