import React from 'react';
import styled from 'styled-components';
import { Colors, Shadows } from '../../styles/Colors';

type Props = {
  name?: string;
  children?: any,
  type?: 'button' | 'submit',
  onClick?: () => void,
  disabled?: boolean;
}

export const Button = ({ ...props}: Props) => {
  return (
    <StyledButton { ...props }>
      { props.name || props.children }
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: block;
  text-align: center;
  width: 120px;
  height: 40px;
  padding: 10px;
  background-color: transparent;
  color: ${Colors.black};
  font-family: inherit;
  font-weight: 400;
  border-radius: 20px;
  box-shadow: ${Shadows.out};
  border: none;

  &:hover, &:focus {
    box-shadow: ${Shadows.in};
    color: ${Colors.pink};
  }
  
  &:disabled {
    box-shadow: ${Shadows.out};
    color: ${Colors.gray};
  }
`;
