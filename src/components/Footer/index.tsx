import { Logo } from '../Logo';
import * as S from './styles';

export type FooterProps = {
  logoImage: string;
};

export const Footer = ({ logoImage }: FooterProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.Column>
          <span>Combo</span>
          <a href="#">Planos</a>
          <a href="#">Atendimentos</a>
          <a href="#">Serviços adicionais</a>
        </S.Column>

        <S.Column>
          <span>Combo</span>
          <a href="#">Planos</a>
          <a href="#">Atendimentos</a>
          <a href="#">Serviços adicionais</a>
        </S.Column>

        <S.Column>
          <span>Combo</span>
          <a href="#">Planos</a>
          <a href="#">Atendimentos</a>
          <a href="#">Serviços adicionais</a>
        </S.Column>

        <S.Column>
          <span>Combo</span>
          <a href="#">Planos</a>
          <a href="#">Atendimentos</a>
          <a href="#">Serviços adicionais</a>
        </S.Column>
      </S.Content>

      <S.WrapperLogo>
        <Logo logo={logoImage} size="small">
          2021
        </Logo>
      </S.WrapperLogo>
    </S.Container>
  );
};
