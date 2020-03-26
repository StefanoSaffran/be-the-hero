import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight + 20}px 24px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image``;

export const BackButton = styled.TouchableOpacity``;

export const DetailsContainer = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin: 48px 0 20px;
`;

export const Contact = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #41414d;
  margin-top: 24px;
`;

export const Value = styled.Text`
  font-size: 15px;
  margin-top: 8px;
  color: #737380;
`;

export const Description = styled.Text`
  font-size: 15px;
  margin-top: 16px;
  color: #737380;
  line-height: 20px;
`;

export const ButtonContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  background: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #f0f0f5;
  font-weight: 500;
  line-height: 18px;
  font-size: 15px;
`;
