import * as yup from 'yup';

export const validarEmail = async (email) =>
  yup.string().email('Digite um email válido').validate(email);

export const validarCpf = (cpf) =>
  yup
    .string()
    .matches(
      /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
      'Digite um CPF válido'
    )
    .validate(cpf);
