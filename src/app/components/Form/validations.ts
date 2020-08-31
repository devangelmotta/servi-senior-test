import * as yup from 'yup';


export const checkValidName = yup
    .string()
    .min(4)
    .max(20)
    .required("Name is required");

export const checkValidDescription = yup
    .string()
    .min(6)
    .required("Email required");

const checkValidChatInput = yup
    .string("Only strings")
    .min(1)
    .required(" ");

const validators = {
    groupName: checkValidName,
    description: checkValidDescription,
    name: checkValidName,
    chatInput: checkValidChatInput,
}

export default validators;
