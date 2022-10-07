import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { addItem, decreaseCount, removeItem } from '../redux/slices/cartSlice';
import { countItems } from '../helpers/helpers';
import { Shadows } from '../styles/Colors';
import { CatalogItem } from '../types';

type Props = {
  item: CatalogItem;
}

export const CartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector(state => state.cart);
  const count = countItems(cart, item.id)

  const increase = () => {
    dispatch(addItem(item))
  };

  const decrease = () => {
    dispatch(decreaseCount(item.id))
  };

  const remove = () => {
    dispatch(removeItem(item.id))
  };

  return (
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
        <button onClick={decrease} className={'btn'}>
          -
        </button>
        <p className="count">{count}</p>
        <button onClick={increase} className={'btn'}>
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
        <button name={"trash"} onClick={remove}>
          trash
        </button>
      </Row>
    </Container>
  )
}

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
