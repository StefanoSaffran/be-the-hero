import styled from 'styled-components';
import colors from '~/styles/colors';

export const TInput = styled.input`
  width: 100%;
  height: 66px;
  color: ${({ theme }) => theme.colors.textStrong};
  padding: 0 24px;
  margin-top: 32px;
  border-radius: 8px;
  border: 1px solid ${colors.border};
  background: ${({ theme }) => theme.colors.CardBackground};
`;
