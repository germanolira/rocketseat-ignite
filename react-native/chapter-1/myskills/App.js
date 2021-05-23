import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function() {
  return(
    <>
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      }}>
      <Text>
        Testando
      </Text>
      <Text>
        React Native
      </Text>
      <Text style={{fontSize: 30}}>
        Oi gabriela
      </Text>
    </View>
    </>
  )
}