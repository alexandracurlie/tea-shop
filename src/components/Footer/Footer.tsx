import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return(
    <StyledFooter>
        <Content></Content>
        <Content></Content>
        <Content></Content>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  min-height: 60px;
  background-color: black;
`;

const Content = styled.div`
  flex: 1;
  padding: 10px;
  border: 1px solid black;
`;
