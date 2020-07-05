export interface ITypeAndIconInputPassword {
  type: 'text' | 'password'
  icon: string | any
}

export interface IChangeTypeInput {
  text: ITypeAndIconInputPassword
  password: ITypeAndIconInputPassword
}

export interface IProps {
  placeholder: string
  value: string
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
  name: string
  id: string
  minLength: number
  maxLength: number
  title: string
}
