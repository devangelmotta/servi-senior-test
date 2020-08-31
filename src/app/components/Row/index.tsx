/**
*
* Row
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
  readonly zIndex?: string|number,
  readonly top?: string,
  readonly bottom?: string,
  readonly left?: string,
  readonly right?: string,
  readonly shadow?: string,

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Row = styled.div`
    display: ${ (props: Props) => props.display || "flex"};
    flex-direction: ${props => props.flexDirection || "row"};
    justify-content: ${props => props.justifyContent || "space-between"};
    position: ${props => props.position || "relative"};
    align-content: ${props => props.alignContent || "center"};
    align-items: ${props => props.alignItems || "center"};
    width: ${props => props.width || "100%"};
    max-width: ${props => props.maxWidth || "none"};
    min-width: ${props => props.minWidth || "none"};
    height: ${props => props.height || "none"};
    max-height: ${props => props.maxHeight || "none"};
    background-color: ${props => props.backgroundColor || "transparent"};
    padding: ${props => props.padding || "0 0 0 0"};
    border: ${props => props.border || "0 solid transparent 0"};
    border-radius: ${props => props.borderRadius || "0"};
    margin: ${props => props.margin || "0 0 0 0"};
    z-index: ${props => props.zIndex || "auto"};
    top: ${props => props.top || ""};
    bottom: ${props => props.bottom || ""};
    left: ${props => props.left || ""};
    right: ${props => props.right || ""};
    -webkit-box-shadow: ${props => props.shadow || "0px 0px 0px 0px rgba(0,0,0,0)"}; 
    -moz-box-shadow: ${props => props.shadow || "0px 0px 0px 0px rgba(0,0,0,0)"}; 
    box-shadow: ${props => props.shadow || "0px 0px 0px 0px rgba(0,0,0,0)"}; 
  `;

export default memo(Row);
