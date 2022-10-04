import React  from 'react';
import styled from 'styled-components';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import { Bar } from '../components/Bar/Bar';
import { Card } from '../components/Card/Card';
import { catalog } from '../helpers/helpers';

export const CatalogPage = () => {

  return (
    <ContentContainer>
      <Bar buttons={['All', 'Black', 'Green']}/>
      <Catalog>
        { catalog.map(item => <Card {...item} />)}
      </Catalog>
    </ContentContainer>
  )
}

const Catalog = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;
