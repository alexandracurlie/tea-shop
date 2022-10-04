import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
}

export const ContentContainer = ({ children }: Props) => {
  return (
    <Container>
      <Content> { children } </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 20px 0;
  //background-color: rebeccapurple;
`
const Content = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  //background-color: yellowgreen;
`;
