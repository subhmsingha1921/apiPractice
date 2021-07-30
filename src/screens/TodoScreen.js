import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import database from '@react-native-firebase/database';

const reference = database().ref().child('/todos');


const TodoScreen = (props) => {
	const [todoList, setTodoList] = useState([]);
	const [refresh, setRefresh] = useState(true);

	useEffect(() => {
		reference.on('value', snapshot => {
			let oldList = [];
			snapshot.forEach(data => {
				const dataVal = data.val();
				oldList.push({
					id: data.key,
					task: dataVal.task,
					status: dataVal.status,
				});
				setTodoList(oldList);
			})
		});
		console.log("todo", todoList);
	}, []);

	const TodoItem = (props) => {
		return (
			<View style={styles.todo}>
				<TouchableOpacity onPress={() => {
					database()
					.ref(`/todos/${props.item.id}`)
					.remove()
					.then(() => alert(`${props.item.task} has been deleted.`))
				}}>
					<Text style={[styles.todoText, {textDecorationLine: props.item.status ? 'line-through': null}]}>{props.item.task}</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {
					database()
					.ref(`/todos/${props.item.id}`)
					.update({
						status: !props.item.status,
					})
					.then(() => {
						if (props.item.status === true) {
							alert(`${props.item.task} not completed`);
						} else {
							alert(`${props.item.task} completed`);
						}
						setRefresh(!refresh);
					})
				}}>
					<View style={{
						width: 20,
						height: 20,
						backgroundColor: props.item.status ? 'green': 'red',
						borderRadius: 10,
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 5,
					}}>
						<Text>{props.item.status}</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor="teal" />
			<View style={styles.headerContainer}>
				<View style={styles.dateContainer}>
					<Text style={styles.date}>29</Text>
					<View style={styles.innerContainer}>
						<Text style={styles.month}>July</Text>
						<Text style={styles.year}>2021</Text>
					</View>
				</View>
				<Text style={styles.day}>Thursday</Text>
			</View>
			<View style={styles.todoContainer}>
				<FlatList 
					data={todoList}
					renderItem={TodoItem}
					keyExtractor={(item) => item.id.toString()}
					extraData={refresh}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={() => {props.navigation.navigate('Add Todo')}}>
					<View style={styles.todoButton}>
						<Text style={styles.todoButtonText}>Add todo</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '98%',
		paddingTop: 50,
		paddingHorizontal: 50,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	dateContainer: {
		flexDirection: 'row',
	},
	date: {
		fontSize: 44,
		fontWeight: 'bold',
	},
	innerContainer: {
		paddingLeft: 10,
		paddingTop: 10,
	},
	month: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	year: {
		fontSize: 16,
	},
	day: {
		paddingTop: 18,
		fontSize: 20,
		fontWeight: 'bold',
	},
	todoContainer: {
		marginTop: 25,
	},
	todo: {
		marginVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	todoText: {
		fontSize: 18,
		color: 'grey',
	},
	buttonContainer: {
		position: 'absolute',
		right: 20,
		bottom: 20,
	},
	todoButton: {
		width: 120,
		height: 55,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'teal',
		borderRadius: 30,
	},
	todoButtonText: {
		fontSize: 16,
		color: 'white',
	},
	done: {
		width: 20,
		height: 20,
		backgroundColor: 'green',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	undone: {
		width: 20,
		height: 20,
		backgroundColor: 'red',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cross: {
		color: 'white',
	}
});

export default TodoScreen;