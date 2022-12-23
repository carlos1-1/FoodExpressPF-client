import * as Yup from 'yup'

const REQUIRED_ERROR = '*This field cannot be empty';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4,'Name must be between 4 and 50 characters')
    .max(50,'Name must be between 4 and 50 characters')
    .required(REQUIRED_ERROR),

  description: Yup.string()
    .min(20,'Description must have a minimum of 20 characteres')
    .required(REQUIRED_ERROR),

  price: Yup.number()
    .min(0.5,'Price must be greater than 0')
    .required(REQUIRED_ERROR),

  image: Yup.string()
    .required(REQUIRED_ERROR),

  type: Yup.string()
    .required(REQUIRED_ERROR),

  category: Yup.string()
    .required(REQUIRED_ERROR),
});

export default validationSchema;