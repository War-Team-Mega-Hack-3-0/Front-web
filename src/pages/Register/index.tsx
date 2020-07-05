import React from 'react'

import { AuthActions } from '../../redux/auth/actions'

import { useFormController } from '../../customHooks'

import {
  yourFullName,
  EmailText,
  passwordText,
  continueText,
  TextRegister
} from '../../common/strings'

import {
  ContainerWithLogo,
  Input,
  InputPassword,
  Button
} from '../../components'
import { SpaceBetweenInputs } from '../../styles'

export const Register: React.FC = () => {
  const initialState = { fullName: '', email: '', password: '' }
  const {
    formData,
    handleChangeForm,
    handleSubmit,
    checkIfExistVoidValues
  } = useFormController(
    initialState,
    AuthActions.signUp
  )

  return (
    <ContainerWithLogo title={TextRegister}>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder={yourFullName}
          value={formData.fullName}
          onChange={handleChangeForm}
          name="fullName"
          id="fullName"
          minLength={5}
          maxLength={100}
          title="Digite seu seu nome completo"
          required
        />

        <SpaceBetweenInputs />

        <Input
          placeholder={EmailText}
          value={formData.email}
          onChange={handleChangeForm}
          name="email"
          id="email"
          type="email"
          minLength={5}
          maxLength={100}
          title="Digite seu email"
          required
        />

        <SpaceBetweenInputs />

        <InputPassword
          placeholder={passwordText}
          value={formData.password}
          onChange={handleChangeForm}
          name="password"
          id="password"
          minLength={5}
          maxLength={20}
          title="Digite sua senha"
        />

        <SpaceBetweenInputs />
        <Button disabled={checkIfExistVoidValues}>
          {continueText}
        </Button>
      </form>

    </ContainerWithLogo>
  )
}
