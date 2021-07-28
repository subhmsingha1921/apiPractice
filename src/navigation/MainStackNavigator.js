import React from  'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListAPIScreen from '../screens/ListAPIScreen';
import DetailAPIScreen from '../screens/DetailAPIScreen';


const MainStack = createStackNavigator();

const MainStackNavigator = () => {
	return (
		<MainStack.Navigator>
			<MainStack.Screen 
				name="List" 
				component={ListAPIScreen}
				options={{
					headerStyle: {
						backgroundColor: '#0890e5',
						borderBottomLeftRadius: 35,
						borderBottomRightRadius: 35,
						elevation: 7,
					},
					headerTitle: 'User List',
					headerTitleStyle: {
						color: 'white',
					},
					headerTitleAlign: 'center',
				}}
			/>
			<MainStack.Screen 
				name="Detail" 
				component={DetailAPIScreen}
				options={{
					headerStyle: {
						backgroundColor: '#0890e5',
						borderBottomLeftRadius: 35,
						borderBottomRightRadius: 35,
						elevation: 7,
					},
					headerTitle: 'User Detail',
					headerTitleStyle: {
						color: 'white',
					},
					headerTitleAlign: 'center',
				}}
			/>
		</MainStack.Navigator>
	)
}

export default MainStackNavigator;