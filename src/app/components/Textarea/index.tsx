/**
 *
 * Textarea
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  readonly width? : string,
  readonly position? : string,
  readonly height? : string,
  readonly padding? : string,
  readonly margin?: string,
  readonly border? : string,
  readonly borderRadius? : string,
  readonly borderWidth? : string,
  readonly borderColor? : string,
  readonly backgroundColor? : string,
  readonly boxSizing? : string,
  readonly outline? : string,
  readonly inputColor? : string,
  readonly fontSize? : string,
  readonly fontFamily? : string,
  readonly fontWeight? : string,
  readonly focusBorderColor: string
  readonly zIndex?: number|string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Textarea = styled.textarea`
  width: ${(props: Props) => props.width || "100%"};
  position: ${props => props.position || "relative"};
  height: ${props => props.height || "40px"};
  padding: ${props => props.padding || "10px 20px"};
  margin: ${props => props.margin || "10px 20px"};
  border: ${props => props.border || "1px solid #999"};
  border-radius: ${props => props.borderRadius || "6px"};
  background-color: ${props => props.backgroundColor || "#fff"};
  box-sizing: ${props => props.boxSizing || "border-box"};
  outline: ${props => props.outline || "none"};
  color: ${props => props.inputColor || "#000"};
  font-size: ${props => props.fontSize || "18px"};
  font-family: ${props => props.fontFamily || "sans-serif"};
  font-weight: ${props => props.fontWeight || '400'};
  z-index: ${props => props.zIndex || "auto"};
  &:focus{
    border-color: ${props => props.focusBorderColor || "#36bec1"};
    transition: all 0.3s ease-out;
  }
`;


export default Textarea;
