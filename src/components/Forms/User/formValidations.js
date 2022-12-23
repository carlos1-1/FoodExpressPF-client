import * as Yup from 'yup'

const REQUIRED_ERROR = '*This field cannot be empty';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4,'Name must be between 4 and 50 characters')
    .max(50,'Name must be between 4 and 50 characters')
    .required(REQUIRED_ERROR),

  number_phone: Yup.string()
    .required(REQUIRED_ERROR),

  type_user: Yup.string()
    .required(REQUIRED_ERROR),
  
  email:Yup.string().email()
  .required(REQUIRED_ERROR)
});

export default validationSchema;