import React  from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';

type Props = {
  buttons: string[],
  onClick: (param: string, value: string) => void,
}

export const Bar = ({ buttons, onClick }: Props) => {
  return (
    <StyledBar>
      <Row>
        { buttons.map(item =>
          <Button key={item} onClick={() => onClick("filter", item)}>
            {item}
          </Button>) }
      </Row>
      <Row>
        <Button onClick={() => onClick("sortBy", "popular")}>Sort</Button>
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
