import styled from 'styled-components';
import { darken, shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1180px;
  margin: 32px auto;
  padding: 0 30px;

  h1#incidentsListTitle {
    font-weight: 500;
    margin: 80px 0 24px;
    color: ${({ theme }) => theme.colors.title};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
    color: ${({ theme }) => theme.title === 'dark' && theme.colors.textStrong};
  }

  img {
    height: 64px;
  }

  span + div.toggle {
    margin-left: auto;
  }

  div.toggle.react-toggle--checked .react-toggle-track {
    background: #4d4d4d;
  }

  div.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background: ${shade(0.5, '#4d4d4d')};
  }

  button#newIncident {
    width: 260px;
    margin-top: 0;
    margin-left: 24px;
  }

  button#logout {
    width: 60px;
    height: 60px;
    margin-left: 24px;
    border: 1.5px solid #dcdce6;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;

    transition: border-color 0.2s;

    &:hover {
      border-color: ${({ theme }) =>
        theme.title === 'light' ? `${darken(0.2, '#dcdce6')}` : '#e02041'};
    }
  }
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;

  h1 {
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 25px;
  }
`;

export const IncidentsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
`;
