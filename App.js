import React from 'react';
import ButtonBox from './src/components/Button';
import { StyleSheet, View} from 'react-native';



export default function App(props) {
  return (
    <View style={styles.container}>
      <ButtonBox/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
});
