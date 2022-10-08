import React from 'react';
import styled from 'styled-components';
import { Gradients } from '../../styles/Colors';

type Props = {
  title?: string,
  subtitle?: string,
}

export const Title = React.memo(({ title, subtitle }: Props) => {
  console.log("wow")
  return (
    <StyledTitle>
      { title && <h2 className={'title'}>{ title }</h2>}
      { subtitle && <h3 className={'subtitle'}>{ subtitle }</h3>}
    </StyledTitle>
  )
})

const StyledTitle = styled.div`
  margin: 10px 0 35px;

  & .title {
    text-align: center;
    font-weight: 500;
    font-size: 45px;
    margin-bottom: 15px;
    text-transform: uppercase;
    background: ${ Gradients.green };
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & .subtitle {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    background: ${ Gradients.green };
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
