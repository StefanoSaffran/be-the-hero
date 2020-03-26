import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  color: ${colors.white};
  margin: 16px 0 0;
  font-size: 15px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.1, `${colors.primary}`)};
  }
`;
