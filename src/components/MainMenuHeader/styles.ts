import styled from 'styled-components';

export const Container = styled.menu`
  height: 11.5rem;
  padding: 1.6rem;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const MenuLink = styled.a`
  font-size: 1.6rem;
  line-height: 1.8rem;
  transition: 0.3s all;

  &:hover {
    color: #ab49ce;
  }
`;
