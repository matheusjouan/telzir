import styled, { css } from 'styled-components';

type ContainerProps = {
  size: 'small' | 'medium';
};

const containerModifiers = {
  medium: () => css`
    > img {
      width: 59px;
      height: 52px;
    }
  `,

  small: () => css`
    width: 40px;
    height: 35px;
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ size }) => css`
    display: flex;
    align-items: center;

    > span {
      margin-left: 2.1rem;
      font-size: 1.2rem;
      line-height: 1.4rem;
    }

    ${!!size && containerModifiers[size!]}
  `}
`;
