import React from  'react';
import { createStackNavigator } from '@react-navigation/stack';

import TodoScreen from '../screens/TodoScreen';
import AddTodoScreen from '../screens/AddTodoScreen';


const MainStack = createStackNavigator();

const TodoNavigator = () => {
	return (
		<MainStack.Navigator>
			<MainStack.Screen 
				name="List" 
				component={TodoScreen}
				options={{
					headerStyle: {
						backgroundColor: 'teal',
						elevation: 5,
					},
					headerTitle: 'Todo App',
					headerTitleStyle: {
						color: 'white',
					},
					headerTitleAlign: 'center',
				}}
			/>
			<MainStack.Screen 
				name="Add Todo" 
				component={AddTodoScreen}
				options={{
					headerStyle: {
						backgroundColor: 'teal',
						elevation: 5,
					},
					headerTitle: 'Todo App',
					headerTitleStyle: {
						color: 'white',
					},
					headerTitleAlign: 'center',
					headerTintColor: 'white',
				}}
			/>
		</MainStack.Navigator>
	)
}

export default TodoNavigator;