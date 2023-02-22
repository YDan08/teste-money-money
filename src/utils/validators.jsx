import * as yup from 'yup';

export const validatorEmail = async (email) =>
  yup.string().email('Digite um email válido').validate(email);

export const validatorCPF = (cpf) =>
  cpf.length > 0 &&
  yup
    .string()
    .matches(
      /([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
      'Digite um CPF válido'
    )
    .validate(cpf);

export const validatorCNPJ = (cnpj) =>
  yup
    .string()
    .matches(
      /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})/,
      'Digite um CNPJ válido'
    )
    .validate(cnpj);

export const validatorCEP = (cep) =>
  cep.length > 0 &&
  yup
    .string()
    .matches(/([0-9]{5}[-]?[0-9]{3})/, 'Digite um CEP válido')
    .validate(cep);

export const validatorTelefone = (telefone) =>
  telefone.length > 0 &&
  yup
    .string()
    .matches(
      /([(]?[0-9]{2}[)]?[ ]?[0-9]{5}[-]?[0-9]{4})|([(]?[0-9]{2}[)]?[ ]?[0-9]{4}[-]?[0-9]{4})/,
      'Digite um telefone válido'
    )
    .validate(telefone);
