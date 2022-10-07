import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <Navigation>
        <div>
          logo
        </div>
        <Menu>
          <li>
            <NavLink to={'/'}>Catalog</NavLink>
          </li>
          <li>
            <NavLink to={'/contacts'}>Contacts</NavLink>
          </li>
          <li>
            <NavLink to={'/cart'}>Cart</NavLink>
          </li>
        </Menu>
      </Navigation>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  min-height: 60px;
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
  }
`;

const Menu = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 3;
`;
