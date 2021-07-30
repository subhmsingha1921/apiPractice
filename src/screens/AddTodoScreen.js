import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Switch, TouchableOpacity} from 'react-native';

import database from '@react-native-firebase/database';

const reference = database().ref('/todos').push();

const AddTodoScreen = (props) => {
	const [task, setTask] = useState('');
	const [status, setStatus] = useState(false);

	const toggleSwitch = () => {
		setStatus(previousState => !previousState);
	}

	const handleAddTodo = () => {
		if (task.length === 0) {
			alert("Cannot be empty");
			return;
		}
		reference
		.set({
			task: task,
			status: status,
		})
		.then(() => alert('Task successfully created.'));
		setTask('');
		props.navigation.navigate('List');
	}

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Add Todo</Text>
			<View style={styles.formContainer}>
				<TextInput
					style={styles.form}
					placeholder="Add Task"
					onChangeText={(text) => setTask(text)}
				/>
				{/* <View style={styles.switch}> */}
				{/* 	<Switch */}
				{/* 		trackColor={{ false: '#767577', true: '#81b0ff' }} */}
				{/* 		thumbColor={status ? 'teal' : '#f4f3f4'} */}
				{/* 		onValueChange={toggleSwitch} */}
				{/* 		value={status} */}
				{/* 	/> */}
				{/* </View> */}
				<TouchableOpacity onPress={handleAddTodo}>
					<View style={styles.submitButton}>
						<Text style={styles.buttonText}>Add</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		paddingVertical: 20,
	},
	formContainer: {
		height: 300,
		width: '80%',
	},
	form: {
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 20,
		paddingHorizontal: 15,
		fontSize: 17,
	},
	switch: {
		alignSelf: 'center',
		paddingTop: 25,
	},
	submitButton: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'teal',
		marginTop: 30,
		alignSelf: 'center',
		width: "80%",
		height: 50,
		borderRadius: 30,
	},
	buttonText: {
		color: 'white',
		fontSize: 17,
	}
});

export default AddTodoScreen;