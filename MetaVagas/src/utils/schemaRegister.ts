import * as yup from "yup"

export const schemaRegister = yup.object().shape({
  email: yup
      .string()  
      .email('Digite um email válido!!!')      
      .required("Campo Obrigatório!!!")
      .min(10, 'Digite no mínimo 10 caracteres!!!'),
  
  name: yup
      .string()
      .required("Campo Obrigatório!!!")
      .min(3, 'Digite no mínimo 3 caracteres!!!'),

  pass: yup
      .string()
      .required("Campo Obrigatório!!!")
      .min(8, 'Digite no mínimo 8 caracteres!!!')
      .max(16, 'Digite no máximo 16 caracteres!!!'),

  confirmPass: yup
      .string()
      .required("Campo Obrigatório!!!")
      .min(8, 'Digite no mínimo 8 caracteres!!!')
      .max(16, 'Digite no máximo 16 caracteres!!!'),
})

const submit = {
    email: '',
    name: '',
    pass: '',
    confirmPass: '',
  }

export const validateForm = () => {
    schemaRegister
      .validate(submit)
      .then(() => "Formulário OK")
      .catch((errors) => (errors) )
  }