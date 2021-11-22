import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 6rem 1.6rem 2.8rem;
  background: #ffe8d3;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 5rem;
  padding-bottom: 3.4rem;
  border-bottom: 0.1rem solid #cbb7a5;

  ${media.greaterThan('small')`
    grid-template-columns: repeat(2, 1fr);
    gap: auto;
  `}

  ${media.greaterThan('large')`
    grid-template-columns: repeat(4, 1fr);
    gap: 9.6rem;
  `}
`;

export const Column = styled.nav`
  > a,
  > span {
    display: block;
  }

  > span {
    margin-bottom: 2.4rem;
    font-weight: 900;
    font-size: 1.8rem;
    line-height: 2.2rem;
  }

  > a {
    margin-top: 1.6rem;
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
`;

export const WrapperLogo = styled.div`
  margin-top: 2.9rem;
  align-self: center;
`;
