import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { LogoSvg } from '../../assets/images'
import {
  loginText,
  EmailText,
  passwordText,
  forgetPasswordText,
  dontHaveAnAccountYetText,
  RegisterText
} from '../../common/strings'

import {
  Container,
  ContainerLogo,
  Logo,
  Title,
  Input,
  SpaceBetweenInputs,
  SpaceAfterInputs,
  ContainerOptionsLogin,
  ContainerButton,
  Button,
  TextCenter
} from './styles'

export const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
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
    <Container>
      <ContainerLogo>
        <Logo src={LogoSvg} alt="Logo da decision" />
      </ContainerLogo>

      <Title>{loginText}</Title>

      <form onSubmit={handleSubmit}>

        <Input
          placeholder={EmailText}
          value={formData.email}
          onChange={handleChangeForm}
          name="email"
          id="email"
        />

        <SpaceBetweenInputs />

        <Input
          placeholder={passwordText}
          value={formData.password}
          onChange={handleChangeForm}
          type="password"
          name="password"
          id="password"
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
            <Link to="/">{RegisterText}</Link>
          </TextCenter>
        </ContainerOptionsLogin>

      </form>

    </Container >
  )
}
