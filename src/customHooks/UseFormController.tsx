import { useState } from 'react'

export function UseFormController<T>(initialState: T) {
  const [formData, setFormData] = useState(initialState)

  function handleChangeForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return {
    formData,
    handleChangeForm
  }
}
