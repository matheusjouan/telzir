import { Logo } from '../Logo';
import * as S from './styles';

export type MenuGobackHeaderProps = {
  logoImage: string;
};

export const MenuGobackHeader = ({ logoImage }: MenuGobackHeaderProps) => {
  return (
    <S.Container>
      <Logo logo={logoImage} />

      <S.MenuLink href="/">Voltar para página inicial</S.MenuLink>
    </S.Container>
  );
};
