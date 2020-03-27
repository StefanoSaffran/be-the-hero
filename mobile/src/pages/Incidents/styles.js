import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons';

Icon.loadFont();

export const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight + 20}px 24px 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Image = styled.Image``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Right = styled.View`
  flex-direction: column;
  position: relative;
`;

export const ToggleThemeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 40px;
`;

export const ThemeIcon = styled(Icon).attrs({
  size: 30,
  color: '#feb72b',
})``;

export const TotalIncidents = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const Welcome = styled.Text`
  font-size: 30px;
  margin: 48px 0 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const IncidentList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 32px;
`;
