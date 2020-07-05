import React from 'react'

import { UseFormController } from '../../customHooks'

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
  const { formData, handleChangeForm } = UseFormController({
    fullName: '',
    email: '',
    password: ''
  })

  return (
    <ContainerWithLogo title={TextRegister}>
      <form action="">
        <Input
          placeholder={yourFullName}
          value={formData.fullName}
          onChange={handleChangeForm}
          name="email"
          id="email"
          minLength={5}
          maxLength={100}
          title="Digite seu seu nome completo"
        />

        <SpaceBetweenInputs />

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

        <SpaceBetweenInputs />
        <Button>
          {continueText}
        </Button>
      </form>

    </ContainerWithLogo>
  )
}
