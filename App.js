import { useState } from 'react';
import  GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StyleSheet, View, FlatList } from 'react-native';


export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  
  function addGoalHandler(enteredGoalText) {    
    // console.log(enteredGoalText);
    setCourseGoals ((currentCurseGoals) => [
      ...currentCurseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCurseGoals) => {
      return currentCurseGoals.filter((goal) => goal.id !== id);
    });
    // console.log("delete");
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  
   
  goalsContainer: {
    flex: 5
  },
  


});
