import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1180px;
  margin: 32px auto;
  padding: 0 30px;

  h1#incidentsListTitle {
    font-weight: 500;
    margin: 80px 0 24px;
    color: #13131a;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  button#newIncident {
    margin-left: auto;
    width: 260px;
    margin-top: 0;
  }

  button#logout {
    width: 60px;
    height: 60px;
    margin-left: 24px;
    border: 1.5px solid #dcdce6;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;
    /* transform: matrix(1, 0, 0, -1, 0, 0); */

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.2, `#dcdce6`)};
    }
  }
`;

export const IncidentsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
`;
