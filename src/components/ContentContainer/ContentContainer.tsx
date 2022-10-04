import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
}

export const ContentContainer = ({ children }: Props) => {
  return (
    <Container>
      <div> { children } </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  color: #f0f0f7;
  
  & div {
    height: 100%;
    width: 80%;
    margin: 0 auto;
  }
`
