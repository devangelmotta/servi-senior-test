/**
*
* Divider
*
*/
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
  readonly display? : string,
  readonly flexDirection? : string,
  readonly justifyContent? : string,
  readonly position? : string,
  readonly alignContent? : string,
  readonly alignItems? : string,
  readonly width? : string,
  readonly height? : string,
  readonly maxHeight? : string,
  readonly minWidth? : string,
  readonly maxWidth? : string,
  readonly backgroundColor? : string,
  readonly padding? : string,
  readonly border? : string,
  readonly borderRadius? : string,
  readonly margin? : string,
  readonly hoverBgColor? : string,
  readonly hoverBorder? : string,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Divider = styled.div`
  display: ${(props: Props) => props.display || "flex"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "5px"};
  background-color: ${props => props.backgroundColor || "black" };
  border: ${props => props.border || "none"};
  border-radius: ${props => props.borderRadius || "20px"};
  margin: ${props => props.margin || "0 0 0 0"};
  `;

export default memo(Divider);
