import * as Yup from 'yup'

const REQUIRED_ERROR = '*This field cannot be empty';

const validationSchema = Yup.object().shape({

  state: Yup.string()
    .required(REQUIRED_ERROR),

  address: Yup.string()
    .required(REQUIRED_ERROR),
  
  total:Yup.number()
    .required(REQUIRED_ERROR)
});

export default validationSchema;