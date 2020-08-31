/**
 *
 * Img
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
    readonly display? : string,
    readonly flexDirection? : string,
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
    readonly zIndex?: string
    readonly boxShadow?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Img = styled.img`
  display: ${(props: Props) => props.display || "flex"};
  width: ${props => props.width || "50%"};
  height: ${props => props.height || 'auto'};
  z-index: ${props => props.zIndex || null};;
  color: ${props => props.color || "#5e70c3"};
  padding: ${props => props.padding || "0 0 0 0"};
  margin: ${props => props.margin || "0 0 0 0"};
    &: focus;
    /// any sentences
  `;

export default memo(Img);
