import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';

type Props = {
  buttons: string[],
}

export const Bar = ({buttons}: Props) => {
  return (
    <StyledBar>
      <Row>
        { buttons.map(item => <Button key={item}>{item}</Button> )}
      </Row>
      <Row>
        <Button>Sort</Button>
      </Row>
    </StyledBar>
  )
}

const StyledBar = styled.div`
  //background-color: hotpink;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
