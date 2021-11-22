import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;

  > span {
    position: absolute;
    top: 50%;
    color: #fff;
    word-break: break-all;
  }
`;

export const NumberMinutes = styled.span`
  left: 50%;
  transform: translate(-40%, -50%);
  font-size: 2rem;
  font-weight: 700;
`;

export const CustomText = styled.span`
  left: 42%;
  transform: translate(-40%, -50%);
  font-size: 1.2rem;
  font-weight: 500;
`;
