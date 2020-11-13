import styled from 'styled-components';
import { Form } from '@unform/web';

export const SearchContainer = styled.main`
  width: 100%;

  max-width: 800px;

  padding: 10px;
  margin: 0 auto;
  h1 {
    text-align: center;
    margin: 40px auto 40px;
  }
`;

export const FilterBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 50;

  label {
    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 12px;
    color: var(--color-primary);
    margin-left: 6px;
  }

  main {
    margin-top: 11px;
    select {
      min-width: 130px;
      font-size: 12px;
    }
  }
  @media (min-width: 330px) {
    width: 190px;
  }

  @media (min-width: 381px) and (max-width: 430px) {
    width: 200px;
  }
  @media (min-width: 431px) and (max-width: 470px) {
    width: 220px;
  }
  @media (min-width: 471px) and (max-width: 500px) {
    width: 240px;
  }
  @media (min-width: 501px) and (max-width: 580px) {
    width: 275px;
  }
  @media (min-width: 581px) and (max-width: 640px) {
    width: 300px;
  }
`;

export const UForm = styled(Form)`
  margin: 0 auto;
  .container-button-search {
    display: flex;
    align-items: baseline;
    margin-top: 20px;
  }
  .buttonSearch {
    width: 170px;
    padding: 15px 15px;
    border: none;
    background: var(--bg-button);
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 20px;
    color: #e9eff9;
    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 15px;
    transition: opacity 0.3s;
  }
`;

export const FormContainer = styled.section`
  max-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
  flex-wrap: wrap;

  section {
    flex-direction: column;
    max-width: 800px;
  }
  div {
    flex-direction: column;

    label {
      font-family: var(--font-family-primary);
      font-weight: 400;
      font-size: 12px;
      color: var(--color-primary);
      margin-left: 6px;
    }
  }

  .container-casting {
    width: 96px;
    input {
      font-size: 12px;
    }
  }

  .container-budget {
    min-width: 130px;
    width: 160px;
    input {
      font-size: 12px;
    }
  }

  .container-date {
    width: 145px;
    input {
      font-size: 12px;
    }
  }

  @media (min-width: 330px) {
    .container-casting {
      width: 110px;
    }
    .container-budget {
      width: 160px;
    }
    .container-date {
      width: 140px;
    }
  }

  @media (min-width: 370px) and (max-width: 380px) {
    .container-casting {
      width: 140px;
    }
    .container-budget {
      width: 190px;
    }
  }

  @media (min-width: 381px) and (max-width: 430px) {
    .container-casting {
      width: 160px;
    }
    .container-budget {
      width: 200px;
    }
    .container-date {
      width: 160px;
    }
  }

  @media (min-width: 431px) and (max-width: 470px) {
    .container-casting {
      width: 180px;
    }
    .container-budget {
      width: 220px;
    }
    .container-date {
      width: 180px;
    }
  }

  @media (min-width: 471px) and (max-width: 500px) {
    .container-casting {
      width: 200px;
    }
    .container-date {
      width: 200px;
    }
    .container-budget {
      width: 240px;
    }
  }
  @media (min-width: 501px) and (max-width: 580px) {
    .container-casting {
      width: 195px;
    }
    .container-date {
      width: 195px;
    }
    .container-budget {
      width: 275px;
    }
  }

  @media (min-width: 581px) and (max-width: 640px) {
    .container-casting {
      width: 250px;
    }
    .container-date {
      width: 250px;
    }
    .container-budget {
      width: 300px;
    }
  }
`;
export const ReservationsBox = styled.section`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 30px 10px 0;
  border: 1px solid #1a842f;
  border-radius: 6px;

  .profile {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }

  @media (min-width: 600px) {
    padding: 15px 12px;
  }
`;

export const ReservationInformations = styled.section`
  margin-left: 15px;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
  }


    h3 {
      font-family: var(--font-family-primary);
      font-size: 18px;
      font-weight: 500;
      color: var(--primary-color);
    }

    p {
      font-family: var(--font-family-primary);
      font-size: 13px;
      font-weight: 500;
      color: var(--color-secondary-cards);
    }

    .bt-offers {
      background: var(--bg-button-aceitar);
      padding: 10px 15px;
      border: none;
      border-radius: 7px;
      font-family: var(--font-family-primary);
      font-size: 10px;
      font-weight: 500;
      color: white;
      margin-right: 5px;
      align-items: center;
    }
  }
`;
