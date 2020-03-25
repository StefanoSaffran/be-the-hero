import styled from 'styled-components';

export const Container = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);

  strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }

  p + strong {
    margin-top: 32px;
  }

  p {
    color: #737380;
    font-size: 16px;
    line-height: 21px;
  }

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;

    &:hover {
      opacity: 0.8;
    }
  }
`;
