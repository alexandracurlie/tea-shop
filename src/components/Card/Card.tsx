import React, { Fragment, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { addItem, decreaseCount, removeItem } from '../../redux/slices/cartSlice';
import { CatalogItem } from './CatalogItem';
import { CartItem } from './CartItem';
import { countItems } from '../../helpers/helpers';
import { ItemProps } from '../../types';

type Props = {
  item: ItemProps;
  type: 'cartItem' | 'catalogItem';
}

export const Card = ({ item, type}: Props) => {
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector(state => state.cart);
  const count = useMemo(() => countItems(cart, item.id), [cart, item.id]);

  const func = {
    increase: () => {
      dispatch(addItem(item))
    },
    decrease: () => {
      dispatch(decreaseCount(item.id))
    },
    remove: () => {
      dispatch(removeItem(item.id))
    }
  };

  return (
    <Fragment>
      {
        type === 'catalogItem' ? (
          <CatalogItem item={ item } func={ func } count={ count } />
        ) : (
          <CartItem item={ item } func={ func } count={ count } />
        )
      }
    </Fragment>
  )
}
