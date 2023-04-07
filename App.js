import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState(''); 

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    
  };
  function addGoalHandler() {
    console.log(enteredGoalText);
  };
  return (
    <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput 
       style={styles.textInput}
       placeholder='You course goal!'
       onChangeText={goalInputHandler}/>
      <Button title='Add Goal' onPress={addGoalHandler}/>
    </View>
     <View style={styles.goalsContainer}>
      <Text>List of goal...</Text>
     </View>     
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
   
  goalsContainer: {
    flex: 4
  }
});
