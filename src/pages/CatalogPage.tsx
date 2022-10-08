import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { fetchCatalog } from '../redux/slices/catalogSlice';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import { Bar } from '../components/Bar/Bar';
import { Title } from '../components/Title/Title';
import { Card } from '../components/Card/Card';
import { filterItems } from '../helpers/helpers';

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const { catalog, filter } = useAppSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  const items = useMemo(() => filterItems(catalog, filter), [catalog, filter]);

  return (
    <ContentContainer>
      <Title title={'Catalog'} subtitle={"Exclusive Tastes"}/>
      <Bar />
      <Catalog>
        { catalog.map(item => <Card key={item.id} item={item} />) }
      </Catalog>
    </ContentContainer>
  )
}

const Catalog = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;
