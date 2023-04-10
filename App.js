import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import  GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  
  function addGoalHandler(enteredGoalText) {    
    // console.log(enteredGoalText);
    setCourseGoals ((currentCurseGoals) => [
      ...currentCurseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    // setModalIsVisible(false);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCurseGoals) => {
      return currentCurseGoals.filter((goal) => goal.id !== id);
    });
    // console.log("delete");
  }

  return (
    <>
      <StatusBar style='light'/>
        <View style={styles.appContainer}>
          <Button 
            title='Add New Goal'
            color="#5e0acc"
            onPress={startAddGoalHandler}
          />
          <GoalInput 
              visible={modalIsVisible} 
              onAddGoal={addGoalHandler} 
              onCancel={endAddGoalHandler}
          />
          
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals} 
            renderItem={(itemData) => {
              itemData.index
              return (
              <GoalItem 
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />        
              )
              
            }} 
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />          
            
        </View>     
        
        </View>
    </> 
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#1e085a'
  },
  
   
  goalsContainer: {
    flex: 5
  },
  


});
