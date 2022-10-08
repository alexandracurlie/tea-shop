import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Colors, Shadows } from '../../styles/Colors';
import { CardProps } from '../../types';

export const CatalogItem = ({ item, func, count }: CardProps) => (
  <Container>
    <img src={item.img}
         alt={item.title}
         width={200}
         height={200}
    />
    <div className={'card_body'}>
      <h5 className={'card_title'}>{ item.title }</h5>
      <p className={'card_description'}>{ item.description }</p>
      <p className={'card_price'}>
        <span>&#8364; </span>
        { item.price }
        <span> oz</span>
      </p>
    </div>
    <div className={'buttons_container'}>
      {!count ? (
        <button className={'add_button'} onClick={func.increase}>add</button>
      ) : (
        <Fragment>
          <button className={'count'} onClick={func.decrease}>-</button>
          <p>{count}</p>
          <button className={'count'} onClick={func.increase}>+</button>
        </Fragment>
      )}
    </div>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 190px;
  height: 380px;
  margin: 10px 3px ;
  background-color: ${Colors.white};
  border-radius: 20px;
  box-shadow: ${Shadows.card};
  overflow: hidden;
  font-family: Montserrat, sans-serif;
  
  & .card_body {
    flex: 3;
    padding: 0 10px;
    width: 100%;
  }
  
  & .card_title {
    padding: 10px 5px;
    font-size: 18px;
    color: ${Colors.green};
  }
  
  & .card_description {
    height: 50px;
    padding: 5px;
    width: 100%;
    font-size: 12px;
    color: ${Colors.gray};
  }
  
  & .card_price {
    padding-top: 10px;
    text-align: center;
    font-size: 17px;
  }
  
  & .buttons_container {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top: 2px solid ${ Colors.cloud };
    width: 100%;

    & .add_button {
      width: 100%;
      height: 100%;
      font-family: inherit;
      box-shadow: none;

      &:hover {
        box-shadow: none;
        color: ${Colors.pink};
      }
    }
    
    & .count {
      flex: 1;
      box-shadow: none;

      &:hover, &:focus {
        box-shadow: none;
      }
    }
  }
`;
