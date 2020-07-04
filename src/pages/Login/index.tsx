import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { LogoSvg, icClosedEyes, icOpenedEyes } from '../../assets/images'
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
  ContainerToAddIconInInput,
  SpaceBetweenInputs,
  SpaceAfterInputs,
  ContainerOptionsLogin,
  ContainerButton,
  Button,
  TextCenter,
  TransparentButton
} from './styles'

interface ITypeAndIconInputPassword {
  type: 'text' | 'password'
  icon: string | any
}
interface IChangeTypeInput {
  text: ITypeAndIconInputPassword
  password: ITypeAndIconInputPassword
}

export const Login: React.FC = () => {
  const changeTypeInput: IChangeTypeInput = {
    text: { type: 'password', icon: icClosedEyes },
    password: { type: 'text', icon: icOpenedEyes }
  }

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [typeInputPassword, setTypeInputPassword] = useState<ITypeAndIconInputPassword>(changeTypeInput.text)

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

  function hideUnhiddenPassword(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()
    const changedValues = changeTypeInput[typeInputPassword.type]
    setTypeInputPassword(changedValues)
  }

  return (
    <Container>
      <ContainerLogo>
        <Logo src={LogoSvg} alt="Logo da decision" title="Logo da decision" />
      </ContainerLogo>

      <Title>{loginText}</Title>

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

        <ContainerToAddIconInInput>
          <Input
            placeholder={passwordText}
            value={formData.password}
            onChange={handleChangeForm}
            type={typeInputPassword.type}
            name="password"
            id="password"
            minLength={5}
            maxLength={20}
            title="Digite sua senha"
          />

          <TransparentButton onClick={hideUnhiddenPassword}>
            <img
              src={typeInputPassword.icon}
              alt="icone de olho aberto ou fechado"
              title="icone de olho aberto ou fechado"
            />
          </TransparentButton>

        </ContainerToAddIconInInput>

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

    </Container >
  )
}
