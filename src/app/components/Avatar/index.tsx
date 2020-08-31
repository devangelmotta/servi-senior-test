/**
 *
 * Avatar
 *
 */
import React, { memo } from 'react';

interface Props {
  readonly avatarUrl?: string,
  readonly display? : string,
  readonly position? : string,
  readonly width? : string,
  readonly height? : string,
  readonly maxHeight? : string,
  readonly minWidth? : string,
  readonly maxWidth? : string,
  readonly padding? : string,
  readonly border? : string,
  readonly borderRadius? : string,
  readonly margin? : string,
  readonly hoverBgColor? : string,
  readonly hoverBorder? : string,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Avatar(props: Props) {
  return <img src={props.avatarUrl}
  style={{
    width: props.width || '60px',
    height: props.height || 'auto',
    margin: props.margin || '0 0 0 0',
    padding: props.padding || '0 0 0 0'
  }}/>;
}

export default memo(Avatar);
