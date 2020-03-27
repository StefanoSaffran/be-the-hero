import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;

  background: ${({ theme }) =>
    theme.title === 'dark' && theme.colors.CardBackground};

  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
      color: ${({ theme }) => theme.colors.title};
    }

    p {
      font-size: 18px;
      line-height: 32px;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const Unform = styled(Form)`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
  }
`;
