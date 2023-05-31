import { Header } from "@components/Header";
import { Container, Content, Icon } from "./style";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()
  function handleNavigate() {
    navigation.navigate('players', { group })
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighLight title="Nova Turma" subTitle="Crie a turma para adicionar as pessoas." />
        <Input placeholder="Digite" onChangeText={setGroup} />
        <Button title="Criar" onPress={handleNavigate} />
      </Content>
    </Container>
  )
}