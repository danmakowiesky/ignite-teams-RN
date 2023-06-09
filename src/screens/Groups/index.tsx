import { HighLight } from '@components/HighLight';
import { Container } from './style'
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function Groups() {
  const [groups, setGroups] = useState([])

  const navigation = useNavigation()
  function handleNewGroup() {
    navigation.navigate('new')
  }
  return (
    <Container>
      <Header />
      <HighLight title='Turmas' subTitle='Jogue com a sua turma' />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={(<ListEmpty message='Sem turmas cadastradas' />)}
      />
      <Button title='Cadastrar' onPress={handleNewGroup} />
    </Container>
  );
}

