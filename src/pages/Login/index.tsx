import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

import { AuthActions } from '../../redux/auth/actions'

import { UseFormController } from '../../customHooks'

import {
  loginText,
  EmailText,
  passwordText,
  forgetPasswordText,
  dontHaveAnAccountYetText,
  RegisterText
} from '../../common/strings'

import {
  ContainerWithLogo,
  Input,
  InputPassword,
  Button
} from '../../components'
import { SpaceBetweenInputs } from '../../styles'

import {
  SpaceAfterInputs,
  ContainerOptionsLogin,
  ContainerButton,
  TextCenter
} from './styles'

export const Login: React.FC = () => {
  const initialState = { email: '', password: '' }
  const {
    formData,
    handleChangeForm,
    handleSubmit,
    checkIfExistVoidValues
  } = UseFormController(
    initialState,
    AuthActions.loginRequest
  )

  return (
    <ContainerWithLogo title={loginText}>

      <form onSubmit={handleSubmit}>

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

        <SpaceAfterInputs />

        <ContainerOptionsLogin>
          <Link to="/forget-password">{forgetPasswordText}</Link>
        </ContainerOptionsLogin>

        <ContainerButton>
          <Button disabled={checkIfExistVoidValues}>{loginText}</Button>
        </ContainerButton>

        <ContainerOptionsLogin>
          <TextCenter>
            <p>{dontHaveAnAccountYetText}</p>
            <Link to="/sign-up">{RegisterText}</Link>
          </TextCenter>
        </ContainerOptionsLogin>

      </form>

    </ContainerWithLogo>

  )
}
