import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import {useNavigation} from '@react-navigation/native';

const UserSingle = (props) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Image 
				style={styles.image}
				source={{ uri: 'https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
			/>
			<TouchableOpacity 
				onPress={() => {
					navigation.navigate('Detail', {
						item: props.item,
					});
				}}
			>
				<View style={styles.info}>
					<Text style={styles.name}>{props.item.name}</Text>
					<Text style={styles.text}>{props.item.address.street} {props.item.address.city}</Text>
					<Text style={styles.text}>{props.item.company.catchPhrase}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 12,
	},
	image: {
		width: 75,
		height: 75,
		borderRadius: 50,
	},
	info: {
		paddingHorizontal: 15,
	},
	name: {
		fontWeight: 'bold',
	},
	text: {
		fontSize: 12,
		color: '#ccc',
	}
});

export default UserSingle;