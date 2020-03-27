import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span.error {
    margin: 15px 0 5px;
    align-self: flex-start;
    font-weight: bold;
    color: ${colors.primary};
    animation: 300ms ease-out 0s 1 slideInFromLeft;
    word-wrap: break-word;
  }
`;

export const UnformTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  color: ${({ theme }) => theme.colors.textStrong};
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
  margin-top: 8px;
  resize: vertical;
  background: ${({ theme }) => theme.colors.CardBackground};
`;
