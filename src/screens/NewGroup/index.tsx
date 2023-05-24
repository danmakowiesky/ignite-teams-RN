import { Header } from "@components/Header";
import { Container, Content, Icon } from "./style";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";


export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighLight title="Nova Turma" subTitle="Crie a turma para adicionar as pessoas." />
        <Input placeholder="Digite" />
        <Button title="Criar" />
      </Content>
    </Container>
  )
}