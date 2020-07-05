import React, { useState } from 'react'

import { Input } from '../input'
import { icClosedEyes, icOpenedEyes } from '../../../assets/images'

import { ContainerToAddIconInInput, TransparentButton } from './styles'

import { IChangeTypeInput, ITypeAndIconInputPassword, IProps } from './types'

export const InputPassword: React.FC<IProps> = ({
  placeholder,
  value,
  onChange,
  name,
  id,
  minLength,
  maxLength,
  title
}) => {
  const changeTypeInput: IChangeTypeInput = {
    text: { type: 'password', icon: icClosedEyes },
    password: { type: 'text', icon: icOpenedEyes }
  }
  const [typeInputPassword, setTypeInputPassword] = useState<ITypeAndIconInputPassword>(changeTypeInput.text)

  function hideUnhiddenPassword(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()
    const changedValues = changeTypeInput[typeInputPassword.type]
    setTypeInputPassword(changedValues)
  }
  return (
    <ContainerToAddIconInInput>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={typeInputPassword.type}
        name={name}
        id={id}
        minLength={minLength}
        maxLength={maxLength}
        title={title}
      />

      <TransparentButton type="button" onClick={hideUnhiddenPassword}>
        <img
          src={typeInputPassword.icon}
          alt="icone de olho aberto ou fechado"
          title="icone de olho aberto ou fechado"
        />
      </TransparentButton>
    </ContainerToAddIconInInput>
  )
}
