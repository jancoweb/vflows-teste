import { useField } from '@unform/core'
import { useEffect, useRef } from 'react'
import CInput from 'react-currency-masked-input'

export default function CurrencyInput({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

  useEffect(() => {
    registerField({ name: fieldName, ref: inputRef.current, path: 'value' })
  }, [fieldName, registerField])

  return (
    <div className='input-container'>
      <CInput ref={inputRef} onFocus={clearError} {...rest} />
      <br />
      {
        error &&
        <>
          <span style={{ color: 'red', textAlign: 'center' }}>{error}</span>
          <br />
        </>
      }
    </div>
  )
}