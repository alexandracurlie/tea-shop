import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { setFilter, setSortBy } from '../../redux/slices/catalogSlice';
import { Button } from '../Button/Button';
import { Filter } from '../../types';

const filters: Filter[] = ['All', 'Black', 'Green']

export const Bar = () => {
  const dispatch = useAppDispatch();

  const onChangeFilter = (item: Filter) => {
    dispatch(setFilter(item));
  }
  const onChangeSortBy = (item: string) => {
    dispatch(setSortBy(item));
  };

  return (
    <StyledBar className={'bar'}>
      <Row>
        { filters.map((item: Filter) =>
          <Button key={item} name={item} onClick={() => onChangeFilter(item)} />) }
      </Row>
      <Row>
        { <Button name={"Sort"} disabled onClick={() => onChangeSortBy('popular')}>Sort</Button> }
      </Row>
    </StyledBar>
  )
}

const StyledBar = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  
  &:first-child {
    flex: 3;
  }
  
  &:last-child {
    flex: 1;
  }
`;
