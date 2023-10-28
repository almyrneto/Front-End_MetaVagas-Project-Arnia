import * as yup from "yup"

export const schemaLogin = yup.object().shape({
  email: yup
      .string()  
      .email('Digite um email válido!!!')      
      .required("Campo Obrigatório!!!")
      .min(10, 'Digite no mínimo 10 caracteres!!!'),

  password: yup
      .string()
      .required("Campo Obrigatório!!!")
      .min(8, 'Digite no mínimo 8 caracteres!!!')
      .max(16, 'Digite no máximo 16 caracteres!!!'),
})

const submitLogin = {
    email: '',
    password: '',
  }

export const validateForm = () => {
    schemaLogin
      .validate(submitLogin)
      .then(() => "Formulário OK")
      .catch((errors) => (errors) )
  }