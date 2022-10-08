import React from 'react';
import styled from 'styled-components';
import { Shadows } from '../../styles/Colors';
import { CardProps } from '../../types';

export const CartItem = ({ item, func, count}: CardProps) => (
  <Container>
    <Row>
      <img src={item.img}
           alt={item.title}
           width={60}
           height={60}
           className={'img'} />
    </Row>
    <Row>
      <p>{item.title}</p>
    </Row>
    <Row>
      <button onClick={func.decrease} className={'btn'}>
        -
      </button>
      <p className="count">{count}</p>
      <button onClick={func.increase} className={'btn'}>
        +
      </button>
    </Row>
    <Row>
      <p>
        <span>&#8364; </span>
        {item.price}
      </p>
    </Row>
    <Row>
      <button name={"trash"} onClick={func.remove}>
        trash
      </button>
    </Row>
  </Container>
)

const Container = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 12px;
  
  & img {
    width: 60px;
    height: 60px;
    border-radius: 50px;
  }
  
  & .btn {
    display: flex;
    justify-content: center;
    width: 18px;
    height: 18px;
    padding: 3px;
    font-weight: bold;
    font-size: 10px;
    border-radius: 50px;
    box-shadow: ${Shadows.out};

    &:hover {
      box-shadow: ${Shadows.in};
    },
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    flex: 2;
  }

  &:nth-child(2) {
    flex: 7;
  }

  &:nth-child(3) {
    flex: 3;
    justify-content: space-evenly;
  },

  &:nth-child(4) {
    flex: 2;
  }

  &:last-child {
    flex: 2;
  }
`;
