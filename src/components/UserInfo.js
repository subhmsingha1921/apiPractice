import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const UserInfo = ({ label, attribute }) => {
	return (
		<View style={styles.labelContainer}>
			<Text style={styles.label}>{label}: </Text>
			<Text style={styles.property}>{attribute}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	label: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black',
	},
	labelContainer: {
		width: '100%',
		flexDirection: 'row',
		marginVertical: 10,
	},
	property: {
		fontSize: 18,
		color: 'grey',
	},
})

export default UserInfo;