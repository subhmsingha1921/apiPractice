import React, {useState, useEffect} from 'react';
import { 
	ActivityIndicator, 
	StyleSheet, 
	Text, 
	View, 
	Image, 
	FlatList,
	StatusBar,
	TouchableNativeFeedback,
	TouchableOpacity,
	TextInput,
} from 'react-native';


import UserSingle from '../components/UserSingle';
import ListHeader from '../components/ListHeader';


const ListAPIScreen = props => {
	const [userList, setUserList] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [searchText, setSearchText] = useState('');
	const [filterUser, setFilterUser] = useState();
	const [refresh, setRefresh] = useState(true);

	useEffect(() => {
		fetchUsers();
	}, []);

	async function fetchUsers() {
		setLoading(true);
		try {
			let url = 'https://jsonplaceholder.typicode.com/users';
			let response = await fetch(url);
			let users = await response.json();
			setUserList(users);
			setFilterUser(users);
			setLoading(false);
			setError(false);
		} catch (e) {
			alert('Something went wrong! Please try again.');
			setLoading(false);
			setError(true);
		}
	}

	const handleSubmitEditing = () => {
		let found_user = userList.filter(user => user.name.toUpperCase().includes(searchText.toUpperCase()));
		setFilterUser(found_user);
	}

	const handleAscending = () => {
		let sorted_users = userList.sort((a, b) => a.name.localeCompare(b.name));
		console.log("**************************************", sorted_users);
		setFilterUser(sorted_users);
		setRefresh(!refresh);
	}

	const handleDescending = () => {
		let sorted_users = userList.sort((a, b) => a.name.localeCompare(b.name));
		let reversed_users = sorted_users.reverse();
		console.log("#################################################", reversed_users);
		setFilterUser(reversed_users);
		setRefresh(!refresh);
	}

	if (error) {
		return (
			<View style={styles.loader}>
				<TouchableNativeFeedback onPress={() => { fetchUsers() }}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>Reload</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		)
	}

	if (loading) {
		return (
			<View style={styles.loader}>
				 <ActivityIndicator size="large" color="#0890e5" />
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor="#0890e5" />
			
			<View style={styles.listContainer}>
				<View style={styles.headerContainer}>
					<Text style={styles.headerText}>User List</Text>
					<View>
						<TextInput 
							placeholder="Search"
							placeholderTextColor="grey"
							onChangeText={(text) => setSearchText(text)}
							onSubmitEditing={handleSubmitEditing}
							style={styles.input}
							value={searchText}
						/>
					</View>
					<View style={styles.filterContainer}>
						<TouchableOpacity onPress={handleAscending}>
							<View style={styles.filterButton}>
								<Text style={styles.filterButtonText}>A - Z</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={handleDescending}>
							<View style={styles.filterButton}>
								<Text style={styles.filterButtonText}>
									Z - A
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<FlatList 
			        data={filterUser}
			        extraData={refresh}
			        renderItem={({item}) => <UserSingle item={item} />}
			        keyExtractor={item => item.id.toString()}
			        showsVerticalScrollIndicator={false}
			        ListEmptyComponent={() => <Text style={styles.emptyText}>User with this name not found</Text>}
			     />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: 35,
	},
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	listContainer: {
		width: '96%',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 100,
		height: 60,
		borderRadius: 30,
		paddingHorizontal: 15,
		paddingVertical: 10,
		backgroundColor: '#0890e5',
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
	},
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
	},
	emptyText: {
		paddingTop: 100,
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
	}
});

export default ListAPIScreen;