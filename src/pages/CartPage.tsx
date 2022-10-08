import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../redux/hooks/hooks';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import { Card } from '../components/Card/Card';
import { Title } from '../components/Title/Title';
import { Button } from '../components/Button/Button';
import { getTotalPrice } from '../helpers/helpers';
import { Shadows } from '../styles/Colors';

const CartSubtitle = {
  empty: "oh, no! the cart is empty!",
  full: "what an awesome choice!",
};

export const CartPage = () => {
  const { cart } = useAppSelector(state => state.cart);
  const uniqueItems = Array.from(new Set(cart));

  const isEmpty = cart.length === 0;

  const subtitle = useMemo(() => isEmpty ? CartSubtitle.empty : CartSubtitle.full, [cart, isEmpty])
  const total = useMemo(() => getTotalPrice(cart), [cart]);

  return (
    <ContentContainer>
      <Title title={'Welcome to your Cart'} subtitle={subtitle}/>
      <Cart>
        <Wrapper>
          { uniqueItems && uniqueItems.map(item =>
            (<Card key={item.id} item={item} type={'cartItem'} />))
          }
        </Wrapper>
      </Cart>

      <Total>
        <p className={'total'}>
          Total<span>&#8364;</span>
          { total }
        </p>
        <Button
          name={'Continue'}
          disabled={isEmpty}
          onClick={() => console.log('Continue')}
        />
      </Total>
    </ContentContainer>
  )
}

const Cart = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 600px;
`;

const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  
  & .total {
    display: flex;
    justify-content: space-evenly;
    width: 300px;
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: ${Shadows.in};
    border-radius: 30px;
    font-size: 17px;
    text-transform: uppercase;
  }
`;
