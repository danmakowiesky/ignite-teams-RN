import { Header } from "@components/Header";
import { Container } from "./style";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <HighLight title="Nome da turma" subTitle="Adicione a galera e separe os times" />
      <Input placeholder="Nome da pessoa" autoCorrect={false} />
      <ButtonIcon icon="add" />
    </Container>
  )
}