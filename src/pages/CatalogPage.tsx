import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { fetchCatalog } from '../redux/slices/catalogSlice';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import { Bar } from '../components/Bar/Bar';
import { Card } from '../components/Card/Card';

export const CatalogPage = () => {
  const dispatch = useAppDispatch();

  const { catalog } = useAppSelector(state => state.data);
  const [params, setParams] = useState({
    filter: 'All',
    sortBy: 'popular',
  })

  const onClick = (param: string, value: string) => {
    setParams({
      ...params,
      [param]: value,
    })
  }

  useEffect(() => {
    dispatch(fetchCatalog(params));
  }, [dispatch, params]);

  return (
    <ContentContainer>
      <Bar buttons={['All', 'Black', 'Green']} onClick={onClick}/>
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
