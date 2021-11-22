import styled from 'styled-components';
import arrowLeftIcon from './assets/arrowLeftIcon.svg';
// import { Link } from 'react-router-dom';

import * as LogoStyles from '../Logo/styles';

export const Container = styled.menu`
  position: relative;
  height: 11.5rem;
  padding: 1.6rem;
  background-color: transparent;
  border-bottom: 0.1rem solid #cbb7a5;

  display: flex;
  align-items: center;

  ${LogoStyles.Container} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #a23ddf;
  letter-spacing: 0.5;
  text-decoration: underline;
  text-underline-offset: 0.1rem;
  transition: filter 0.3s;

  &::before {
    content: '';
    margin-right: 1.6rem;
    background: url(${arrowLeftIcon}) no-repeat;
    width: 12px;
    height: 14px;
    display: inline-block;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
