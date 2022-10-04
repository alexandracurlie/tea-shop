import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  return (
    <StHeader>
      <SNav>
        <div>
          logo
        </div>
        <ul>
          <li>
            <a>Catalog</a>
          </li>
          <li>
            <a>Contacts</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
        </ul>
      </SNav>
    </StHeader>
  )
}

const StHeader = styled.header`
  display: flex;
  min-height: 60px;
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
`;

const SNav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
  }
  
  & ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 3;
  }
`;
