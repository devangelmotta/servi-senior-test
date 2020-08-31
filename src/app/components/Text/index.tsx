/**
*
* Text
*
*/
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
  readonly color? : string,
  readonly fontSize? : string,
  readonly fontFamily? : string,
  readonly fontWeight? : string|number,
  readonly textAlign? : string,
  readonly maxLines? : string,
  readonly padding? : string,
  readonly margin? : string,
  readonly zIndex?: string|number,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Text = styled.span`
    display: flex;
    color: ${(props: Props) => props.color || "#fff"};
    font-size: ${props => props.fontSize || "1rem"};
    font-family: ${props => props.fontFamily || "'Merriweather Sans', sans-serif"};
    font-weight: ${props => props.fontWeight || '100'};
    text-align: ${props => props.textAlign || "center"};
    max-lines: ${props => props.maxLines || "none"};
    padding: ${props => props.padding || "0 0 0 0"};
    margin: ${props => props.margin || "0 0 0 0"};
    z-index: ${props => props.zIndex || "auto"};


      &: focus;
      /// any sentences
  `;

export default memo(Text);
