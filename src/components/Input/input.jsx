import { useField } from '@unform/core'
import { useEffect, useRef } from 'react'

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({ name: fieldName, ref: inputRef.current, path: 'value' })
  }, [fieldName, registerField])

  return (
    <div className='input-container'>
      <input ref={inputRef} {...rest} />
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