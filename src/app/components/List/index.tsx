/**
*
* List
*
*/
import React, { memo } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Row from '../Row';
import './index.css';

export interface PropsList  {
  [x: string]: any,
  arrayList: Array<any>,
  Item: React.ComponentType<{key: number, item: object}>,
  width?: string;
  height?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function List (props: PropsList ) {
  const { innerHeight: height } = window;
  const { arrayList, Item } = props;
  return(
    <Row maxHeight='100%' width={props.width || 'auto'} justifyContent='flex-start'>
      <TransitionGroup className="todo-list">
            {arrayList.map((item, index ) => (
              <CSSTransition
                key={index}
                timeout={500}
                classNames="item"
              >
                <Item key={index} item={item}/>
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Row>
  )
};

export default List;
