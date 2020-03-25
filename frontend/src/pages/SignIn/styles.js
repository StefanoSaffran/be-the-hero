import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

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

export const Form = styled.form`
  margin-top: 100px;
`;
