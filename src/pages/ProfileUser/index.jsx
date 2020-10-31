import React from 'react';
import Input from '../../components/Input';

import {
  Form,
  Form2,
  Form3,
  LoginContainer,
  LoginTitle,
  LoginTitleText,
} from './styles';

const ProfileUser = () => {
  return (
    <LoginContainer>
      <LoginTitle>
        <LoginTitleText>Perfil De Usuário</LoginTitleText>
      </LoginTitle>

      <Form>
        <label htmlFor="name">Nome Completo</label>
        <Input name="name" type="name" id="name" />

        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" id="email" />

        <label htmlFor="genero">Gênero</label>
        <Input name="genero" type="textarea" id="genero" />

        <label htmlFor="genero2">Gênero que atua</label>
        <Input name="genero2" type="text" id="genero2" />
      </Form>

      <Form2>
        <label htmlFor="Orçamento">Orçamento</label>
        <Input name="Orçamento" type="number" id="orcamento" placeholder="R$" />

        <label htmlFor="password"> </label>
        <Input
          name="password"
          type="name"
          id="password"
          placeholder="Valor mínimo"
        />

        <label htmlFor="password"> </label>
        <Input
          name="password"
          type="name"
          id="password"
          placeholder="Valor máximo"
        />
      </Form2>
      <Form3>
        <label htmlFor="Orçamento">Disponibilidade</label>
        <Input
          name="Orçamento"
          type="number"
          id="password"
          placeholder="Data Inicial"
        />

        <label htmlFor="password">Até</label>
        <Input
          name="password"
          type="name"
          id="password"
          placeholder="Data final"
        />
        <button type="submit">Continuar</button>
      </Form3>
    </LoginContainer>
  );
};

export default ProfileUser;
