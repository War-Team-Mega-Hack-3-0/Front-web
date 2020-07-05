import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { AuthActions } from '../../redux/auth/actions'

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

import {
  SpaceBetweenInputs,
  SpaceAfterInputs,
  ContainerOptionsLogin,
  ContainerButton,
  TextCenter
} from './styles'

export const Login: React.FC = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({ email: '', password: '' })

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    dispatch(AuthActions.loginRequest(formData))
  }

  function handleChangeForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const checkIfEnableButton = useCallback(enableSubmitLogin, [formData])()
  function enableSubmitLogin() {
    return !(formData.email && formData.password)
  }

  return (
    <ContainerWithLogo title={loginText}>

      <form onSubmit={handleSubmit}>

        <Input
          placeholder={EmailText}
          value={formData.email}
          onChange={handleChangeForm}
          name="email"
          id="email"
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
          <Button disabled={checkIfEnableButton}>{loginText}</Button>
        </ContainerButton>

        <ContainerOptionsLogin>
          <TextCenter>
            <p>{dontHaveAnAccountYetText}</p>
            <Link to="/register">{RegisterText}</Link>
          </TextCenter>
        </ContainerOptionsLogin>

      </form>

    </ContainerWithLogo>

  )
}
