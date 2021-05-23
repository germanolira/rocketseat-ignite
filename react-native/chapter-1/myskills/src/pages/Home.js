import React, {useState} from 'react';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';
import {
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  Platform,
  TouchableOpacity
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
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

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>
          Minhas habilidades
      </Text>

      {
        mySkills.map(skill => (
          <SkillCard />
        ))
        
      }

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
      paddingHorizontal: 30
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