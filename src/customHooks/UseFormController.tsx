import { useState, useCallback, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

export function useFormController<T>(
  initialState: T,
  actionRequest: (data: T) => void
) {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(initialState)

  function handleChangeForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    dispatch(actionRequest(formData))
  }

  const checkIfExistVoidValues = useCallback(checkIfExistVoidValuesInData, [formData])()
  function checkIfExistVoidValuesInData() {
    const values = Object.values(formData)
    for (const value of values) {
      if (!value) {
        return true
      }
    }
    return false
  }

  return {
    formData,
    handleChangeForm,
    handleSubmit,
    checkIfExistVoidValues
  }
}
