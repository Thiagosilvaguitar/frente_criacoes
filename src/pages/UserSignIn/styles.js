import styled, { css } from 'styled-components';

import { Form } from '@unform/web';

export const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;

  padding: 10px 20px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--font-family-primary);
    font-weight: 400;
    color: var(--color-primary);
    font-size: 14px;

    margin: 35px 0 0 0;

    text-align: center;

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const LoginTitle = styled.div`
  text-align: center;
  margin-top: 44px;

  @media (min-width: 600px) {
    margin-top: 72px;
  }
`;

export const LoginTitleText = styled.h1`
  margin: 0 auto;
  font-family: var(--font-family-primary);
  font-weight: 700;
  color: var(--color-primary);
`;

export const UForm = styled(Form)`
  margin: 21px auto 0;

  display: flex;
  flex-direction: column;

  max-width: 400px;

  label {
    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 12px;
    color: var(--color-primary);

    margin-left: 6px;

    &:nth-child(n + 2) {
      margin-top: 10px;
    }
  }

  button {
    width: 60%;

    background: var(--bg-buttonDir);

    border: 0;
    border-radius: 10px;

    padding: 10px;
    margin: 35px auto 0;

    color: var(--color-button);
    font-weight: 500;

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--font-family-primary);
    font-weight: 400;
    color: var(--color-primary);
    color: #484848;
    font-size: 14px;

    margin: 18px 0 0 0;

    text-align: center;

    transition: text-decoration 0.3s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AlertModal = styled.section`
  position: absolute;
  top: 100px;
  right: 300px;

  width: 230px;
  height: 70px;

  ${props =>
    props.modal
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  flex-direction: column;
  align-items: center;

  padding: 10px;

  background: #f4f4f4;

  border-radius: 6px;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);

  svg {
    align-self: flex-end;
    cursor: pointer;

    transition: opacity 0.3s, color 0.3s;

    &:hover {
      opacity: 0.7;
      color: var(--bg-button-recusar);
    }
  }

  p {
    font-family: var(--font-family-primary);
    font-size: 15px;
    font-weight: 700;
    color: var(--color-primary);

    justify-self: center;
    margin-top: 15px;
  }
`;
