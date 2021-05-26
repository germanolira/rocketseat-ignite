import React, {useState} from 'react';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';
import {
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  Platform,
  FlatList
} from 'react-native';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data]);
    // setMySkills([...mySkills, newSkill]);
  }

  return(
    <>
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>
        Bem vindo, Elon Musk
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nova habilidade"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button 
        title="Add"
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, {marginVertical: 50}]}>
          Minhas habilidades
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard skill={item.name} />
        )}
      />

    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121015',
      paddingHorizontal: 20,
      paddingVertical: 70,
    },
    title: {
      color: '#FFF',
      fontSize: 24,
      fontWeight: 'bold'
    },
    input: {
      backgroundColor: '#1f1e25',
      color: '#fff',
      fontSize: 18,
      padding: Platform.OS == 'ios' ? 15 : 10,
      marginTop: 30,
      borderRadius: 7,
    },
});