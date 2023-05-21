import { TouchableOpacityProps } from 'react-native'
import { ButtonStyledProps, Container, Title } from './style'

type props = TouchableOpacityProps & {
  title: string,
  type?: ButtonStyledProps
}
export function Button({ title, type = 'PRIMARY', ...rest }: props) {
  return (
    <Container typeButton={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}