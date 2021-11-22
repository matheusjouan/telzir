import styled, { css } from 'styled-components';

type ContainerProps = {
  size?: 'medium' | 'full';
  typeOfButton?: 'primary' | 'secondary';
};

const containerModifiers = {
  medium: () => css`
    font-size: 1.6rem;
    height: 4rem;
  `,
  full: () => css`
    font-size: 1.6rem;
    height: 4rem;
    width: 100%;
  `,
  primary: () => css`
    background-color: #ab49ce;
    color: #fff;
    border: 0;
  `,
  secondary: () => css`
    background-color: transparent;
    border: 1px solid #ab49ce;
    color: #ab49ce;
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ size, typeOfButton }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    padding: 1rem 3.7rem;
    cursor: pointer;
    font-weight: bold;

    ${!!size && containerModifiers[size!]};
    ${!!typeOfButton && containerModifiers[typeOfButton!]};

    transition: 0.3s all;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;
