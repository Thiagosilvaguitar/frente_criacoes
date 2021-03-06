import React, { useCallback } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FaPowerOff } from 'react-icons/fa';

import { useAuth } from '../../hooks/auth';

import LogoIcon from '../../assets/remoto_logo.svg';

import { HeaderContainer } from './styles';

const HeaderInterna = () => {
  const { signOut } = useAuth();

  const history = useHistory();

  const handleSignOut = useCallback(() => {
    signOut();

    history.push('/');
  }, [history, signOut]);

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={LogoIcon} alt="controle remoto" />
      </Link>

      <button type="button" onClick={handleSignOut}>
        <FaPowerOff />
      </button>
    </HeaderContainer>
  );
};

export default HeaderInterna;
