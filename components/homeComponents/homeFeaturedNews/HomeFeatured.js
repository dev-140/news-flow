import React from "react";
import { StyleSheet, View, Text } from "react-native";

function HomeFeatured() {
	return (
		<View style={styles.mainContainer}>
			<Text style={styles.heading}>Featured News</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 6,
	},
	heading: {
		color: "#3D246C",
		fontSize: 20,
		fontWeight: "bold",
		paddingBottom: 7,
	},
});

export default HomeFeatured;
