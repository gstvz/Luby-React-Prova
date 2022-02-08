import React from 'react';
import * as S from './styles';
import { Header, Footer, RegisterForm } from '@components';

export const AccountPage = () => {
  return (
    <>
      <Header isAccount />
        <S.Main>
          <RegisterForm isAccount />
        </S.Main>
      <Footer />
    </>
  );
};
