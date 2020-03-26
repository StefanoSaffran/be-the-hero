import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #41414d;
`;

export const Value = styled.Text`
  font-size: 15px;
  margin: 8px 0 24px;
  color: #737380;
`;

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;
