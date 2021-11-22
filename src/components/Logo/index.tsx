import { ReactNode } from 'react';
// import logoImg from './assets/logo.png';

import * as S from './styles';

export type LogoProps = {
  children?: ReactNode;
  logo: string;
  size?: 'small' | 'medium';
};

export const Logo = ({ children, logo, size = 'medium' }: LogoProps) => {
  return (
    <S.Container size={size}>
      {<img src={logo} alt="Logo Telzir" />}
      {!!children && <span>{children}</span>}
    </S.Container>
  );
};
