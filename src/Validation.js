import * as yup from 'yup';

export const bookSchema = yup.object().shape({
    name: yup
     .string()
     .required("Why not fill the name🥳"),
    author: yup
     .string()
     .required("Why not fill the author🥳"),
    price: yup
     .string()
     .min(2,"give amount above 2 digit")
     .max(7,"give amount below 7 digit")
     .required("Why not fill the price🥳"),
})