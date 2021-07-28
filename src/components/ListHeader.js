import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

const ListHeader = (props) => {
	const [searchText, setSearchText] = useState('');

	// const handleSubmitEditing = (searchText) => {
	// 	let found_user = item
	// }

	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerText}>User List</Text>
			<View>
				<TextInput 
					placeholder="Search"
					placeholderTextColor="grey"
					onChangeText={(text) => setSearchText(text)}
					onSubmitEditing={() => {}}
					style={styles.input}
					value={searchText}
				/>
			</View>
			<View style={styles.filterContainer}>
				<TouchableOpacity onPress={() => {}}>
					<View style={styles.filterButton}>
						<Text style={styles.filterButtonText}>A - Z</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}}>
					<View style={styles.filterButton}>
						<Text style={styles.filterButtonText}>
							Z - A
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		marginVertical: 25,
	},
	headerText: {
		fontSize: 40,
		fontWeight: 'bold',
	},
	input: {
		marginTop: 15,
		paddingHorizontal: 20,
		paddingVertical: 8,
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 20,
	},
	search: {
		width: 20,
		height: 20,
	},
	filterContainer: {
		marginTop: 12,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-around',
	},
	filterButton: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 25,
		width: 60,
		backgroundColor: '#b2b4b4',
		borderRadius: 25,
	},
	filterButtonText: {
		fontSize: 15,
		color: 'white'
	}
});

export default ListHeader;