import React from 'react';
import { StyleSheet, Text, View, Image
 } from 'react-native';

import UserInfo from '../components/UserInfo';

const DetailAPIScreen = (props) => {
	const { item } = props.route.params;

	return (
		<View style={styles.container}>
			<Image 
				source={{ uri: 'https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
				style={styles.image}
			/>
			<View style={styles.propertyContainer}>
				<UserInfo label="Full Name" attribute={item.name} />
				<UserInfo label="Email Address" attribute={item.email} />
				<UserInfo label="Username" attribute={item.username} />
				<UserInfo label="Website" attribute={item.website} />
				<UserInfo label="Company Name" attribute={item.company.name} />
				<UserInfo label="Street" attribute={item.address.street} />
				<UserInfo label="City" attribute={item.address.city} />
				<UserInfo label="Zip Code" attribute={item.address.zipcode} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginVertical: 75,
	},
	image: {
		height: 190,
		width: 190,
		borderRadius: 200,
	},
	propertyContainer: {
		marginVertical: 25,
		alignItems: 'flex-start',
	}
});

export default DetailAPIScreen;