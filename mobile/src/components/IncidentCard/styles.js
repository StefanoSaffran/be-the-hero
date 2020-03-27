import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.CardBackground};
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textStrong};
`;

export const Value = styled.Text`
  font-size: 15px;
  margin: 8px 0 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  font-weight: bold;
`;
