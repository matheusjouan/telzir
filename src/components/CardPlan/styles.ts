import styled from 'styled-components';

import * as StyledButton from '../Button/styles';
import verifyIcon from './assets/verifyIcon.svg';

export const Container = styled.div`
  width: 100%;
  height: 45.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3.4rem;
  background-color: #fff;
  border: 0.1rem solid #e5e5e5;
  border-radius: 0.8rem;

  ${StyledButton.Container} {
    margin-top: 3rem;
  }
`;

export const Plan = styled.h3`
  margin-top: 1rem;
  font-size: 1.4rem;
  line-height: 1.6rem;
`;

export const WrapperPrice = styled.div`
  margin-top: 1.6rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;

  > div {
    margin-left: 0.4rem;
  }
`;

export const Price = styled.span`
  font-size: 4rem;
  line-height: 4.6rem;
`;

export const DecimalPrice = styled.span`
  display: block;
  font-size: 1.6rem;
`;

export const AddiotionalTextPrice = styled.span`
  font-size: 1.6rem;
`;

export const Describe = styled.span`
  margin-top: 1.6rem;
  max-width: 18rem;
  font-size: 1.4rem;
  line-height: 1.6rem;
  text-align: center;
`;

export const Additional = styled.h4`
  margin-top: 0.8rem;
  font-size: 1.4rem;
  line-height: 1.6rem;
`;

export const AdditionalList = styled.ul``;

export const AdditionalItem = styled.li`
  margin-top: 0.8rem;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: #666666;

  &:before {
    content: '';
    background: url(${verifyIcon});
    display: inline-block;
    margin-right: 1rem;
    width: 1.1rem;
    height: 1.1rem;
  }
`;
