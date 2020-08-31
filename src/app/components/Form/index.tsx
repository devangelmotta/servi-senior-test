/**
 *
 * Form
 *
 */
import React, {useState} from 'react';
import Input from '../Input';
import Column from '../Column';
import Text from '../Text';
import validators from './validations';

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Form(props) {
  const [message, handleSetMessageError] = useState("");

  async function handleBlur(evt) {
      try {
        await validators[evt.target.name].validate(evt.target.value);
      } catch (error) {
        handleSetMessageError(error.errors[0]);
      }
  }

  return (
    <Column width='100%'>
      <Input
          {...props}
          onBlur={(evt)=> handleBlur(evt)}
          />
      <Text color='red' fontSize='12px'>{message.length >0 ? message : " "}</Text>
    </Column>
  )

}

export default Form;
