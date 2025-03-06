import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required('Por favor, ingresa un correo electrónico').email('Invalid email'),
  password: yup.string().required('Por favor, ingresa una contraseña'),
});
