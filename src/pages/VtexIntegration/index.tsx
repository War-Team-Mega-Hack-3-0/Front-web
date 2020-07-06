import React from 'react'

import { ContainerWithLogo, Input, Button } from '../../components'
import { SpaceBetweenInputs } from '../../styles'

import {
  continueText,
  titleIntegrationVtex,
  nameAccountVtex,
  nameStoreVtex,
  tokenText
} from '../../common/strings'

import { useFormController } from '../../customHooks'

export const VtexIntegration: React.FC = () => {
  const initialState = { nameOfAccount: '', yourStore: '', token: '' }
  const {
    formData,
    checkIfExistVoidValues,
    handleChangeForm,
    handleSubmit
  } = useFormController(
    initialState,
    () => { }
  )
  return (
    <ContainerWithLogo title={titleIntegrationVtex}>
      <form onSubmit={handleSubmit}>
        <Input
          value={formData.nameOfAccount}
          onChange={handleChangeForm}
          placeholder={nameAccountVtex}
          type='text'
          id="nameOfAccount"
          name="nameOfAccount"
          minLength={5}
          maxLength={50}
          title="Digite o nome da sua conta"
        />
        <SpaceBetweenInputs />

        <Input
          value={formData.yourStore}
          onChange={handleChangeForm}
          placeholder={nameStoreVtex}
          type='text'
          id="yourStore"
          name="yourStore"
          minLength={5}
          maxLength={50}
          title="Digite o nome da sua loja"
        />
        <SpaceBetweenInputs />

        <Input
          value={formData.token}
          onChange={handleChangeForm}
          placeholder={tokenText}
          type='text'
          id="token"
          name="token"
          minLength={5}
          title="Digite seu token da vtex"
        />
        <SpaceBetweenInputs />

        <Button disabled={checkIfExistVoidValues}>
          {continueText}
        </Button>
      </form>
    </ContainerWithLogo>
  )
}
