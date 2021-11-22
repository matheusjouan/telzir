import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'medium' | 'full';
  typeOfButton: 'primary' | 'secondary';
}

export const Button = ({
  size = 'medium',
  typeOfButton = 'primary',
  children,
}: ButtonProps) => {
  return (
    <S.Container size={size} typeOfButton={typeOfButton}>
      {children}
    </S.Container>
  );
};
