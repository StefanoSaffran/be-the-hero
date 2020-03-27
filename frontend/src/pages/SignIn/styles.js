import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  section.form {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
  }
`;

export const Unform = styled(Form)`
  margin-top: 100px;

  h1 {
    color: ${({ theme }) => theme.colors.title ?? 'black'};
  }
`;
