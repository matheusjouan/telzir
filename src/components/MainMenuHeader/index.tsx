import { Button } from '../Button';
import { Logo } from '../Logo';
import * as S from './styles';

export type MainMenuHeaderProps = {
  logoImage: string;
  buttonText: string;
};

export const MainMenuHeader = ({
  logoImage,
  buttonText,
}: MainMenuHeaderProps) => {
  return (
    <S.Container>
      <Logo logo={logoImage} />

      <S.MenuGroup>
        <S.MenuLink href="#benefits">Vantagens</S.MenuLink>
        <S.MenuLink href="#calculation">Cálculo</S.MenuLink>
        <Button typeOfButton="primary">{buttonText}</Button>
      </S.MenuGroup>
    </S.Container>
  );
};
