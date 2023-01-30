export default function validateForm(data, formRef) {
  const nfNumber = data.nfNumber;
  const emissionDate = data.emissionDate;
  const dueDate = data.dueDate;
  const nfValue = data.nfValue;

  const issqn = data.issqn;
  const irff = data.irff;
  const csll = data.csll;
  const cofins = data.cofins;
  const inss = data.inss;
  const pis = data.pis;

  let checkTaxes = [{ value: issqn, name: 'issqn' }, { value: irff, name: 'irff' }, { value: csll, name: 'csll' }, { value: cofins, name: 'cofins' }, { value: inss, name: 'inss' }, { value: pis, name: 'pis' }]

  let error = false

  if (emissionDate == '') {
    formRef.current.setFieldError('emissionDate', 'Data de emissão obrigatória')
    error = true
  }
  if (emissionDate == '') {
    formRef.current.setFieldError('dueDate', 'Data de vencimento obrigatória')
    error = true
  }

  const d1 = new Date(emissionDate)
  const d2 = new Date(dueDate)
  if (d2 < d1) {
    formRef.current.setFieldError('emissionDate', 'Data de emissão tem que ser válida')
    error = true
  }

  if (nfNumber.length <= 0) {
    formRef.current.setFieldError('nfNumber', 'Número da Nota Obrigatório')
    error = true
  }
  if (nfValue.length <= 0) {
    formRef.current.setFieldError('nfValue', 'Valor Obrigatório')
    error = true
  }

  function checkTax(taxes) {
    for (let i = 0; i < taxes.length; i++) {
      if (taxes[i].value == '0.00') {
        formRef.current.setFieldError(`${taxes[i].name}`, `${taxes[i].name.toUpperCase()} Precisa ser maior que 0!`)
      }
    }
  }
  checkTax(checkTaxes)
  return error
}