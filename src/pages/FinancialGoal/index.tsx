import React from 'react'

import { UseFormController } from '../../customHooks'

import {
  continueText,
  titleFinancialGOal,
  presentationFinancialGoal
} from '../../common/strings'

import {
  ContainerWithLogo,
  Input,
  Button
} from '../../components'

import {
  PresentationFinancialGoal,
  Form,
  ContainerInput
} from './styles'

export const FinancialGoal: React.FC = () => {
  const initialState = { financialGoal: '' }
  const {
    formData,
    handleChangeForm,
    handleSubmit,
    checkIfExistVoidValues
  } = UseFormController(
    initialState,
    () => { }
  )
  return (
    <ContainerWithLogo title={titleFinancialGOal}>
      <PresentationFinancialGoal dangerouslySetInnerHTML={{ __html: presentationFinancialGoal }} />

      <Form onSubmit={handleSubmit}>
        <ContainerInput>
          <Input
            placeholder="R$"
            value={formData.financialGoal.replace(/\D/gi, '')}
            onChange={handleChangeForm}
            name="financialGoal"
            id="financialGoal"
            minLength={5}
            maxLength={15}
            title="Digite a sua meta de faturamento"
            autoComplete="off"
            required
          />
        </ContainerInput>

        <Button disabled={checkIfExistVoidValues}>
          {continueText}
        </Button>
      </Form>

    </ContainerWithLogo>
  )
}
